import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xl">
              📦
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">pkg-cache</span>
          </div>
          <div className="text-sm font-medium text-slate-500">
            v1.0.0 Release
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
              Lightning Fast Package Caching for <span className="text-indigo-600">Your Entire Team</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              A production-ready, automated system to set up a centralized caching server for APT (Debian/Ubuntu), NPM (Node.js), and PyPI (Python). Reduce bandwidth usage and drastically speed up your environment setups.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <a href="/pkg-cache.sh" download className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download Server & Linux Client
                <span className="ml-2 text-indigo-200 text-sm font-normal">(.sh)</span>
              </a>
              
              <a href="/pkg-cache-client.ps1" download className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 shadow-sm transition-all">
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download Windows Client
                <span className="ml-2 text-slate-400 text-sm font-normal">(.ps1)</span>
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Note: The caching server must be hosted on an Ubuntu/Debian machine.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-white py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Unified Multi-Protocol Support
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Our architecture leverages best-in-class open-source tools packaged into a single Docker Compose environment, making installation seamless.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* APT Cache */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">APT Caching (Linux)</h3>
                <p className="text-slate-600 flex-grow">
                  Powered by <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">apt-cacher-ng</code> on Port 3142. Automatically caches Debian and Ubuntu packages. The client script automatically configures your proxy and handles security repo exceptions perfectly.
                </p>
              </div>

              {/* NPM Cache */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">NPM Caching</h3>
                <p className="text-slate-600 flex-grow">
                  Powered by <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">verdaccio</code> on Port 4873. Drastically reduces the time it takes to run <code className="text-sm">npm install</code> by serving node modules instantly over your local network.
                </p>
              </div>

              {/* PyPI Cache */}
              <div className="flex flex-col">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">PyPI Caching</h3>
                <p className="text-slate-600 flex-grow">
                  Powered by <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">devpi</code> on Port 3141. Say goodbye to downloading the same heavy Python data science libraries multiple times.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Setup Instructions */}
        <div className="bg-slate-50 py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Incredibly Simple Setup</h2>
            
            <div className="space-y-12">
              {/* Server Setup */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Deploy the Server (Ubuntu)</h3>
                <p className="text-slate-600 mb-4">Run this on your designated caching machine. It will automatically install Docker and configure all services.</p>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                  $ chmod +x pkg-cache.sh<br/>
                  $ ./pkg-cache.sh server install
                </div>
              </div>

              {/* Linux Client Setup */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">2a. Connect a Linux Client</h3>
                <p className="text-slate-600 mb-4">Run this on any Linux machine on your network to configure APT, NPM, and Pip.</p>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                  $ ./pkg-cache.sh client install &lt;SERVER_IP&gt;
                </div>
              </div>

              {/* Windows Client Setup */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">2b. Connect a Windows Client</h3>
                <p className="text-slate-600 mb-4">Run this from your PowerShell terminal to configure NPM and Pip globally.</p>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-blue-400 overflow-x-auto">
                  PS&gt; .\pkg-cache-client.ps1 -Action install -ServerHost &lt;SERVER_IP&gt;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rollback & Reset Instructions */}
        <div className="bg-white py-24 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Safe & Easy Rollbacks</h2>
              <p className="mt-4 text-lg text-slate-600">
                Our tools automatically backup your previous configuration. Disconnecting from the cache or tearing down the server is just one command away.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Client Reset */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Reset Client Configuration</h3>
                <p className="text-sm text-slate-600 mb-4">Reverts your package manager registries to their previous original states.</p>
                
                <div className="mb-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Linux / macOS</span>
                  <div className="bg-slate-900 rounded p-3 font-mono text-xs text-green-400 overflow-x-auto">
                    $ ./pkg-cache.sh client reset
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Windows (PowerShell)</span>
                  <div className="bg-slate-900 rounded p-3 font-mono text-xs text-blue-400 overflow-x-auto">
                    PS&gt; .\pkg-cache-client.ps1 -Action reset
                  </div>
                </div>
              </div>

              {/* Server Reset */}
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="font-bold text-red-900 mb-2">Tear Down the Server</h3>
                <p className="text-sm text-red-700 mb-4">Stops all containers, removes the data volumes, and deletes the server directory permanently.</p>
                
                <div>
                  <span className="text-xs font-semibold text-red-500 uppercase tracking-wider block mb-1">Ubuntu Server</span>
                  <div className="bg-slate-900 rounded p-3 font-mono text-xs text-red-400 overflow-x-auto">
                    $ ./pkg-cache.sh server reset
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-300 font-medium">
            Unified Package Caching System is a group project built with ❤️ by a dedicated team of 5 members.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Built for efficiency. Designed for developers.
          </p>
        </div>
      </footer>
    </div>
  );
}