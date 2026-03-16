<#
What it does on Windows:
  - NPM: points registry to Verdaccio (http://SERVER:4873/)
  - PIP: points index-url to devpi (http://SERVER:3141/root/pypi/+simple/) and sets trusted-host

Notes:
  - APT caching (apt-cacher-ng :3142) is Linux-only. If you use Ubuntu/Debian in WSL2,
    run the original Linux client command inside WSL: ./pkg-cache.sh client install <SERVER>

Usage examples (PowerShell):
  .\pkg-cache-client.ps1 -Action install -ServerHost 192.168.1.50
  .\pkg-cache-client.ps1 -Action status  -ServerHost 192.168.1.50
  .\pkg-cache-client.ps1 -Action reset
#>

[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [ValidateSet('install','reset','status')]
  [string]$Action,

  [Parameter(Mandatory = $false)]
  [string]$ServerHost
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$StateDir  = Join-Path $env:USERPROFILE '.pkg-cache-state'
$StateFile = Join-Path $StateDir 'client.json'

function Write-Log($msg)  { Write-Host "[pkg-cache-client] $msg" }
function Write-Warn($msg) { Write-Warning "[pkg-cache-client] $msg" }
function Die($msg)        { throw "[pkg-cache-client] ERROR: $msg" }

function Ensure-StateDir {
  if (-not (Test-Path -LiteralPath $StateDir)) {
    New-Item -ItemType Directory -Path $StateDir | Out-Null
  }
}

function Test-ServerHost([string]$h) {
  if ([string]::IsNullOrWhiteSpace($h)) {
    Die "-ServerHost is required for Action=install/status. Example: -ServerHost 192.168.1.50"
  }
  if ($h.Contains(',')) {
    Die "Invalid ServerHost '$h' (comma found). Use dots for IPs, e.g. 192.168.1.50"
  }

  # Allow IPv4 or a reasonable hostname.
  $ipv4 = '^(?:\d{1,3}\.){3}\d{1,3}$'
  $hostPattern = '^[A-Za-z0-9.-]+$'

  if ($h -match $ipv4) {
    $parts = $h.Split('.')
    foreach ($p in $parts) {
      $n = [int]$p
      if ($n -lt 0 -or $n -gt 255) { Die "Invalid IPv4 address: $h" }
    }
    return
  }

  if (-not ($h -match $hostPattern)) {
    Die "Invalid ServerHost '$h'. Use an IPv4 (192.168.x.x) or a hostname (cache.local)."
  }
}

function Find-PythonCmd {
  # Prefer the Python launcher if available.
  if (Get-Command py -ErrorAction SilentlyContinue) { return @('py','-3') }
  if (Get-Command python -ErrorAction SilentlyContinue) { return @('python') }
  if (Get-Command python3 -ErrorAction SilentlyContinue) { return @('python3') }
  return $null
}

function Pip-Run([string[]]$args) {
  $py = Find-PythonCmd
  if ($null -eq $py) { Die "Python not found (py/python). Install Python to configure pip." }

  $exe = $py[0]
  $exeArgs = @()
  if ($py.Count -gt 1) {
    $exeArgs += $py[1..($py.Count-1)]
  }
  $exeArgs += @('-m','pip')
  $exeArgs += $args

  & $exe @exeArgs
}

function Tool-Exists([string]$name) {
  return [bool](Get-Command $name -ErrorAction SilentlyContinue)
}

function Save-State($obj) {
  Ensure-StateDir
  ($obj | ConvertTo-Json -Depth 5) | Set-Content -LiteralPath $StateFile -Encoding UTF8
}

function Load-State {
  if (-not (Test-Path -LiteralPath $StateFile)) { return $null }
  $raw = Get-Content -LiteralPath $StateFile -Raw -Encoding UTF8
  if ([string]::IsNullOrWhiteSpace($raw)) { return $null }
  return ($raw | ConvertFrom-Json)
}

function Npm-GetRegistry {
  if (-not (Tool-Exists 'npm')) { return $null }
  try {
    $v = (npm config get registry 2>$null)
    if ($null -eq $v) { return $null }
    $v = $v.Trim()
    if ($v -eq 'undefined') { return $null }
    return $v
  } catch { return $null }
}

function Npm-SetRegistry([string]$url) {
  if (-not (Tool-Exists 'npm')) {
    Write-Warn "npm not found; skipping npm config."
    return
  }
  Write-Log "Setting npm registry to $url"
  npm config set registry $url | Out-Null
}

function Npm-RestoreRegistry([string]$prev) {
  if (-not (Tool-Exists 'npm')) { return }
  if ([string]::IsNullOrWhiteSpace($prev)) {
    # Default npm registry
    $prev = 'https://registry.npmjs.org/'
  }
  Write-Log "Restoring npm registry to $prev"
  npm config set registry $prev | Out-Null
}

function Pip-GetConfig([string]$key) {
  try {
    $out = Pip-Run @('config','get',$key) 2>$null
    if ($null -eq $out) { return $null }
    $v = ($out | Out-String).Trim()
    if ([string]::IsNullOrWhiteSpace($v)) { return $null }
    return $v
  } catch { return $null }
}

function Pip-SetConfig([string]$key, [string]$value) {
  Write-Log "pip config set $key = $value"
  Pip-Run @('config','set',$key,$value) | Out-Null
}

function Pip-UnsetConfig([string]$key) {
  try {
    Pip-Run @('config','unset',$key) | Out-Null
  } catch { }
}

function Check-Ports([string]$h) {
  $ports = @(
    @{ Name='apt-cacher-ng'; Port=3142 },
    @{ Name='verdaccio';    Port=4873 },
    @{ Name='devpi';        Port=3141 }
  )

  foreach ($p in $ports) {
    $ok = $false
    try {
      $r = Test-NetConnection -ComputerName $h -Port $p.Port -WarningAction SilentlyContinue
      $ok = [bool]$r.TcpTestSucceeded
    } catch { $ok = $false }

    if ($ok) {
      Write-Log "OK   TCP reachable: $($p.Name) on ${h}:$($p.Port)"
    } else {
      Write-Warn "FAIL TCP not reachable: $($p.Name) on ${h}:$($p.Port) (firewall/network?)"
    }
  }
}

function Install-Client([string]$h) {
  Test-ServerHost $h

  $state = [ordered]@{
    serverHost = $h
    npm = [ordered]@{ prevRegistry = $null }
    pip = [ordered]@{ prevIndexUrl = $null; prevTrustedHost = $null }
    savedAt = (Get-Date).ToString('o')
  }

  # --- npm ---
  if (Tool-Exists 'npm') {
    $state.npm.prevRegistry = Npm-GetRegistry
    Npm-SetRegistry "http://${h}:4873/"
  } else {
    Write-Warn "npm not found; skipping npm config."
  }

  # --- pip ---
  $py = Find-PythonCmd
  if ($null -ne $py) {
    try {
      Pip-Run @('--version') | Out-Null
      $state.pip.prevIndexUrl     = Pip-GetConfig 'global.index-url'
      $state.pip.prevTrustedHost  = Pip-GetConfig 'global.trusted-host'

      Pip-SetConfig 'global.index-url' "http://${h}:3141/root/pypi/+simple/"
      Pip-SetConfig 'global.trusted-host' $h
    } catch {
      Write-Warn "Python found but pip not available. Install pip (or reinstall Python with pip)."
    }
  } else {
    Write-Warn "Python not found; skipping pip config."
  }

  Save-State $state

  Write-Log "Client configured to use cache server: $h"
  Write-Log "Quick tests:"
  Write-Host "  npm:  npm cache clean --force; npm i lodash"
  Write-Host "  pip:  python -m pip cache purge; python -m pip install requests"
  Write-Host "  note: APT caching is Linux-only; use WSL2 Ubuntu for APT."

  Check-Ports $h
}

function Reset-Client {
  $state = Load-State
  if ($null -eq $state) {
    Write-Warn "No state file found ($StateFile). Nothing to reset."
    return
  }

  if (Tool-Exists 'npm') {
    Npm-RestoreRegistry $state.npm.prevRegistry
  }

  $py = Find-PythonCmd
  if ($null -ne $py) {
    try {
      Pip-Run @('--version') | Out-Null

      # Always clear current, then restore best-effort.
      Pip-UnsetConfig 'global.index-url'
      Pip-UnsetConfig 'global.trusted-host'

      if (-not [string]::IsNullOrWhiteSpace($state.pip.prevIndexUrl)) {
        Pip-SetConfig 'global.index-url' $state.pip.prevIndexUrl
      }
      if (-not [string]::IsNullOrWhiteSpace($state.pip.prevTrustedHost)) {
        Pip-SetConfig 'global.trusted-host' $state.pip.prevTrustedHost
      }
    } catch {
      Write-Warn "Could not reset pip config (pip missing)."
    }
  }

  try { Remove-Item -LiteralPath $StateFile -Force } catch { }
  Write-Log "Client reset done."
}

function Status-Client([string]$h) {
  Test-ServerHost $h

  Write-Log "Current client configuration"

  if (Tool-Exists 'npm') {
    $reg = Npm-GetRegistry
    Write-Host "  npm registry: $reg"
  } else {
    Write-Host "  npm registry: (npm not installed)"
  }

  $py = Find-PythonCmd
  if ($null -ne $py) {
    try {
      Pip-Run @('--version') | Out-Null
      $idx = Pip-GetConfig 'global.index-url'
      $thr = Pip-GetConfig 'global.trusted-host'
      Write-Host "  pip index-url: $idx"
      Write-Host "  pip trusted-host: $thr"
    } catch {
      Write-Host "  pip: (pip not available)"
    }
  } else {
    Write-Host "  pip: (python not installed)"
  }

  Write-Log "Server reachability checks"
  Check-Ports $h
  Write-Host "  verdaccio url: http://${h}:4873/"
  Write-Host "  devpi url:     http://${h}:3141/"
  Write-Host "  apt url:       http://${h}:3142/acng-report.html (Linux/WSL only)"
}

switch ($Action) {
  'install' { Install-Client $ServerHost }
  'reset'   { Reset-Client }
  'status'  { Status-Client $ServerHost }
}
