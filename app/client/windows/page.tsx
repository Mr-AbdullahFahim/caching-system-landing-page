"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function WindowsClientPage() {
  const [activeTab, setActiveTab] = useState('script');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link href="/client" className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to OS Selection
          </Link>
        </div>
      </nav>
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Windows Client Setup</h1>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-lg">
            <p className="text-sm text-amber-900">
              <strong className="font-semibold">Note:</strong> APT caching is Linux-only. If using WSL2, use the Ubuntu script inside WSL.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="/pkg-cache-client.ps1" download className="px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold text-center hover:bg-slate-700 transition-colors">
              Download Script (.ps1)
            </a>
            <a href="/windows_client_intaller.zip" download className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors">
              Download GUI Installer
            </a>
          </div>

          <div className="border-b border-slate-200 mb-6 flex space-x-6">
            <button 
              onClick={() => setActiveTab('script')}
              className={`pb-3 font-semibold text-lg transition-colors ${activeTab === 'script' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              PowerShell Setup
            </button>
            <button 
              onClick={() => setActiveTab('installer')}
              className={`pb-3 font-semibold text-lg transition-colors ${activeTab === 'installer' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              GUI Installer Setup
            </button>
          </div>

          <div className="min-h-[250px] mt-8">
            {activeTab === 'script' ? (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. Connect to the Server</h3>
                  <p className="text-sm text-slate-500 mb-3">Run this in PowerShell to set NPM and Pip registries.</p>
                  <div className="bg-slate-900 text-blue-400 p-4 rounded-lg font-mono text-sm shadow-inner overflow-x-auto">
                    PS&gt; .\pkg-cache-client.ps1 -Action install -ServerHost 192.168.X.X
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. Check Status</h3>
                  <p className="text-sm text-slate-500 mb-3">Verify your registries are correctly pointed to the cache server.</p>
                  <div className="bg-slate-900 text-blue-400 p-4 rounded-lg font-mono text-sm shadow-inner overflow-x-auto">
                    PS&gt; .\pkg-cache-client.ps1 -Action status -ServerHost 192.168.X.X
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-600 mb-2">Reset Client</h3>
                  <p className="text-sm text-slate-500 mb-3">Revert NPM and Pip configurations to their defaults.</p>
                  <div className="bg-slate-900 text-red-400 p-4 rounded-lg font-mono text-sm shadow-inner overflow-x-auto">
                    PS&gt; .\pkg-cache-client.ps1 -Action reset
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. Run the Installer</h3>
                  <p className="text-slate-600">Double-click the downloaded <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-sm">.exe</code> file to launch the setup wizard.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. Enter Server IP</h3>
                  <p className="text-slate-600">When prompted, type the IP address of your Ubuntu caching server and click "Connect".</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded-r-lg">
                  <p className="text-sm text-blue-900">
                    The installer will automatically configure your global NPM and Pip settings in the background.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}