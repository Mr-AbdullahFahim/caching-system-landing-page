"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TerminalBlock from '@/components/TerminalBlock';

export default function UbuntuClientPage() {
  const [activeTab, setActiveTab] = useState('script');

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 pb-24">
      {/* Navbar */}
      <nav className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/client" className="text-sm font-semibold text-slate-600 hover:text-orange-600 flex items-center">
            <div className="bg-slate-100 p-1.5 rounded-md mr-2.5">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </div>
            Back to OS Selection
          </Link>
          <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Ubuntu Client
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Hero Header */}
        <div className="mb-12">
          {/* Authentic Ubuntu Orange to Aubergine gradient */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#77216F] mb-4 tracking-tight">
            Ubuntu Client Setup
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Choose your preferred method to configure this machine to route its package traffic through your local caching server.
          </p>
        </div>

        {/* Download Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">Get the Client Assets</h2>
              <p className="text-sm text-slate-500">Download the shell script or the automated GUI installer.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href="/pkg-cache.sh" download className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 w-full sm:w-auto">
                Script (.sh)
              </a>
              <a href="/pkg-cache-installer" download className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-xl text-white bg-orange-600 hover:bg-orange-700 shadow-md shadow-orange-200 w-full sm:w-auto">
                GUI Installer
              </a>
            </div>
          </div>
        </div>

        {/* Modern Segmented Control Tabs */}
        <div className="bg-slate-200/50 p-1.5 rounded-xl flex space-x-1 mb-8">
          <button 
            onClick={() => setActiveTab('script')}
            className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-sm ${activeTab === 'script' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
          >
            Terminal Script Setup
          </button>
          <button 
            onClick={() => setActiveTab('installer')}
            className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-sm ${activeTab === 'installer' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
          >
            GUI Installer Setup
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[250px]">
          {activeTab === 'script' ? (
            <div className="space-y-6">
              
              {/* Info Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400"></div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600 font-extrabold text-lg ring-4 ring-white shadow-sm">!</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Get Server IP Address</h3>
                    <p className="text-sm text-slate-500 mb-0">Determine the IP address of your caching server. You can find it by running <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-slate-700 border border-slate-200">ip addr show</code> on the server machine or checking your network router's admin panel.</p>
                  </div>
                </div>
              </div>

              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 font-extrabold text-sm ring-4 ring-white shadow-sm">1</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Make Executable</h3>
                    <p className="text-sm text-slate-500 mb-4">Grant the script execution permissions.</p>
                    <TerminalBlock command="chmod +x pkg-cache.sh" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 font-extrabold text-sm ring-4 ring-white shadow-sm">2</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Connect to the Server</h3>
                    <p className="text-sm text-slate-500 mb-4">Replace <code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-orange-600 font-bold">192.168.X.X</code> with your server's IP address.</p>
                    <TerminalBlock command="./pkg-cache.sh client install 192.168.X.X" />
                            <div className=" p-4 px-6 rounded-2xl flex flex-col bg-orange-50 font-medium text-slate-700">
                        <h2 className="text-lg ">🚀 Setup Complete!</h2>
                        <p className="">
                          Excellent work! Your Ubuntu machine is now connected to the caching server. All APT, NPM, and Pip packages will now be served from the local cache, dramatically speeding up installations and reducing bandwidth usage.
                        </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reset Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-400"></div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 font-extrabold text-lg ring-4 ring-white shadow-sm">↻</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Reset Client</h3>
                    <p className="text-sm text-slate-500 mb-4">Reverts configurations to their previous states.</p>
                    <TerminalBlock command="./pkg-cache.sh client reset" />
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Info Card */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400"></div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600 font-extrabold text-lg ring-4 ring-white shadow-sm">!</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Get Server IP Address</h3>
                    <p className="text-sm text-slate-500 mb-0">First, determine the IP address of your caching server. You can find it by running <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-slate-700 border border-slate-200">ip addr show</code> on the server machine or checking your network router's admin panel.</p>
                  </div>
                </div>
              </div>

              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 font-extrabold text-sm ring-4 ring-white shadow-sm">1</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Run the Installer</h3>
                    <p className="text-sm text-slate-500">Double click the downloaded GUI Installer to open the configuration wizard.</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 font-extrabold text-sm ring-4 ring-white shadow-sm">2</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Enter Server IP</h3>
                    <p className="text-sm text-slate-500 mb-6">When prompted by the software, simply type in the IP address of your caching server (e.g., 192.168.1.50) and click Connect.</p>
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                      <p className="text-sm text-orange-900 font-medium">
                        The software will automatically handle all APT, NPM, and Pip configurations in the background.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Universal Next Steps Section - Deep Canonical Aubergine Gradient */}
        <div className="mt-12 bg-gradient-to-br from-[#77216F] via-[#5E2750] to-[#2C001E] rounded-3xl p-1 relative overflow-hidden shadow-xl shadow-orange-900/20">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="bg-white/95 backdrop-blur-3xl rounded-[22px] p-8 text-center relative z-10 flex flex-col items-center">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 mb-2 text-left w-full max-w-md">
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-4 block">What to Do Now</p>
              <ul className="text-sm text-slate-700 space-y-3 font-medium">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                  Try installing a package to test the cache
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                  Check server logs to see your client connecting
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                  Share this setup with other team members
                </li>
              </ul>
            </div>
            <p className="text-sm text-slate-600 italic mt-4 font-medium">Happy caching! Your downloads just got a whole lot faster! ⚡</p>
          </div>
        </div>

      </main>
    </div>
  );
}