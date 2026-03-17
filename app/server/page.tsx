import React from 'react';
import Link from 'next/link';
import TerminalBlock from '@/components/TerminalBlock';

export default function ServerPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 scroll-smooth pb-24">
      {/* Navbar */}
      <nav className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-orange-600 flex items-center transition-colors group">
            <div className="bg-slate-100 group-hover:bg-orange-100 p-1.5 rounded-md mr-2.5 transition-colors">
              <svg className="w-4 h-4 text-slate-500 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </div>
            Back to Dashboard
          </Link>
          <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Server Setup
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-start gap-10 relative pt-12">
        
        {/* Modern Sidebar (Left) */}
        <aside className="sticky top-28 hidden lg:flex flex-col w-52 shrink-0">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Quick Navigation</h4>
          <nav className="flex flex-col space-y-1 relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-200 -z-10"></div>
            
            <a href="#download" className="text-sm font-medium text-slate-600 hover:text-orange-600 hover:bg-white px-3 py-2 rounded-lg transition-all border border-transparent hover:border-slate-200 hover:shadow-sm">
              Script Download
            </a>
            <a href="#installation" className="text-sm font-medium text-slate-600 hover:text-orange-600 hover:bg-white px-3 py-2 rounded-lg transition-all border border-transparent hover:border-slate-200 hover:shadow-sm">
              Installation Steps
            </a>
            <a href="#reset" className="text-sm font-medium text-slate-600 hover:text-orange-600 hover:bg-white px-3 py-2 rounded-lg transition-all border border-transparent hover:border-slate-200 hover:shadow-sm">
              Server Reset
            </a>
            <a href="#logs" className="text-sm font-medium text-slate-600 hover:text-orange-600 hover:bg-white px-3 py-2 rounded-lg transition-all border border-transparent hover:border-slate-200 hover:shadow-sm">
              Monitor Logs
            </a>
            <a href="#next" className="text-sm font-medium text-slate-600 hover:text-orange-600 hover:bg-white px-3 py-2 rounded-lg transition-all border border-transparent hover:border-slate-200 hover:shadow-sm">
              Next Steps
            </a>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="w-full max-w-3xl shrink-0">
          
          {/* Hero Header - Authentic Ubuntu Orange to Aubergine gradient */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#77216F] mb-4 tracking-tight">
              Ubuntu Server Setup
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Deploy your dedicated package caching server in minutes. Designed for Debian and Ubuntu environments to supercharge your network's download speeds.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Download Card */}
            <div id="download" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow scroll-mt-28">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">Get the Deployment Script</h2>
                  <p className="text-sm text-slate-500">Download the core bash script to your target server.</p>
                </div>
                <a href="/pkg-cache.sh" download className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-xl text-white bg-orange-600 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-200 transition-all flex-shrink-0">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  pkg-cache.sh
                </a>
              </div>
            </div>

            {/* Installation Steps Container */}
            <div id="installation" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl font-bold text-slate-900 ml-1">Deployment Steps</h2>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 font-extrabold text-sm ring-4 ring-white shadow-sm">1</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Make Executable</h3>
                    <p className="text-sm text-slate-500 mb-4">Grant the script execution permissions so it can run on your system.</p>
                    <TerminalBlock command="chmod +x pkg-cache.sh" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 font-extrabold text-sm ring-4 ring-white shadow-sm">2</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Install & Spin Up</h3>
                    <p className="text-sm text-slate-500 mb-4">This command safely installs Docker (if missing) and spins up the caching containers. It handles permissions automatically.</p>
                    <TerminalBlock command="./pkg-cache.sh server install" />
                    <div className=" p-4 px-6 rounded-2xl flex flex-col bg-orange-50 font-medium text-slate-700">
                        <h2 className="text-lg ">🎉 Server Successfully Deployed!</h2>
                        <p className="">
                          Your containers are actively caching packages. It's time to connect your clients.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Banner moved to a distinct block directly after installation */}

            {/* Reset Card - Kept Red for destructive action */}
            <div id="reset" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-red-200 hover:shadow-md transition-all scroll-mt-28 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-red-400 group-hover:bg-red-500 transition-colors"></div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 font-bold text-lg ring-4 ring-white shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Uninstall / Reset</h3>
                  <p className="text-sm text-slate-500 mb-4">Wipe the server clean. This gracefully stops all containers and removes persistent data volumes.</p>
                  <TerminalBlock command="./pkg-cache.sh server reset" />
                </div>
              </div>
            </div>

            {/* Logs Section - Stacked Row Wise */}
            <div id="logs" className="pt-8 scroll-mt-28">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-1">Container Logs</h2>
              <div className="flex flex-col gap-6">
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse"></div>
                    <h3 className="text-md font-bold text-slate-800">APT-Cacher-NG Logs</h3>
                  </div>
                  <TerminalBlock command="sudo docker exec -it apt-cacher-ng tail -f /var/log/apt-cacher-ng/apt-cacher.log" />
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 animate-pulse"></div>
                    <h3 className="text-md font-bold text-slate-800">DevPI (Python) Logs</h3>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Standard View</p>
                      <TerminalBlock command="docker logs devpi" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Live Follow</p>
                      <TerminalBlock command="docker logs devpi -f" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-3 animate-pulse"></div>
                    <h3 className="text-md font-bold text-slate-800">Verdaccio (NPM) Logs</h3>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Standard View</p>
                      <TerminalBlock command="docker logs verdaccio" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Live Follow</p>
                      <TerminalBlock command="docker logs verdaccio -f" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Next Steps / Link to Client Page - Deep Canonical Aubergine Gradient */}
            <div className="bg-gradient-to-br from-[#77216F] via-[#5E2750] to-[#2C001E] rounded-3xl p-1 relative overflow-hidden shadow-xl shadow-orange-900/20 my-12">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <div className="bg-white/95 backdrop-blur-3xl rounded-[22px] p-8 text-center relative z-10 flex flex-col items-center">
                <div className="inline-block text-left bg-slate-50 border border-slate-100 rounded-xl p-6 w-full max-w-md">
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-4 block">Next Steps</p>
                  <ul className="text-sm text-slate-700 space-y-3 font-medium mb-6">
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3 flex-shrink-0 text-xs">1</div>
                      Share the server IP with your team
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3 flex-shrink-0 text-xs">2</div>
                      Navigate to the Client Setup docs
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3 flex-shrink-0 text-xs">3</div>
                      Watch your download times plummet
                    </li>
                  </ul>
                  
                  {/* Link Button to Client Page */}
                  <Link href="/client" id="next" className="flex items-center justify-center w-full px-4 py-3 text-sm font-bold rounded-lg text-white bg-orange-600 hover:bg-orange-700 shadow-md transition-all group">
                    Go to Client Setup
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </main>

        {/* Dummy Sidebar (Right) - This balances the flexbox and ensures the <main> is perfectly centered! */}
        <div className="hidden lg:block w-52 shrink-0"></div>

      </div>
    </div>
  );
}