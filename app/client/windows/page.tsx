"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function WindowsClientPage() {
  const [activeTab, setActiveTab] = useState('script');

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b border-slate-200 px-4 py-4">
        <Link href="/client" className="text-indigo-600 hover:text-indigo-800 font-medium">&larr; Back to OS Selection</Link>
      </nav>
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold mb-6">Windows Client Setup</h1>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-sm text-yellow-800">
              APT caching is Linux-only. If using WSL2, use the Ubuntu script inside WSL.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="/pkg-cache-client.ps1" download className="px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold text-center hover:bg-slate-700">
              Download Script (.ps1)
            </a>
            <a href="/pkg-cache-windows-installer.exe" download className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-center hover:bg-blue-700">
              Download GUI Installer
            </a>
          </div>

          {/* Setup Tabs */}
          <div className="border-b border-slate-200 mb-6 flex space-x-6">
            <button 
              onClick={() => setActiveTab('script')}
              className={`pb-3 font-semibold text-lg transition-colors ${activeTab === 'script' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              PowerShell Setup
            </button>
            <button 
              onClick={() => setActiveTab('installer')}
              className={`pb-3 font-semibold text-lg transition-colors ${activeTab === 'installer' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              GUI Installer Setup
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[250px]">
            {activeTab === 'script' ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="font-bold mb-2">1. Connect to the Server</h3>
                  <p className="text-sm text-slate-500 mb-2">Run this in PowerShell to set NPM and Pip registries.</p>
                  <div className="bg-slate-900 text-blue-400 p-3 rounded font-mono text-sm">
                    PS&gt; .\pkg-cache-client.ps1 -Action install -ServerHost 192.168.X.X
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">2. Check Status</h3>
                  <div className="bg-slate-900 text-blue-400 p-3 rounded font-mono text-sm">
                    PS&gt; .\pkg-cache-client.ps1 -Action status -ServerHost 192.168.X.X
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-red-600">Reset Client</h3>
                  <div className="bg-slate-900 text-red-400 p-3 rounded font-mono text-sm">
                    PS&gt; .\pkg-cache-client.ps1 -Action reset
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="font-bold mb-2">1. Run the Installer</h3>
                  <p className="text-slate-600">Double-click the downloaded <code className="bg-slate-100 px-1 rounded text-sm">.exe</code> file to launch the setup wizard.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">2. Enter Server IP</h3>
                  <p className="text-slate-600">When prompted, type the IP address of your Ubuntu caching server and click "Connect".</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                  <p className="text-sm text-blue-800">The installer will automatically configure your global NPM and Pip settings in the background.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}