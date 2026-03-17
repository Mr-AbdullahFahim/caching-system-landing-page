"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function UbuntuClientPage() {
  const [activeTab, setActiveTab] = useState('script');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link href="/client" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to OS Selection
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Ubuntu Client Setup</h1>
          <p className="text-slate-600 mb-8">Choose your preferred method to configure this machine to use the caching server.</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="/pkg-cache.sh" download className="px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold text-center hover:bg-slate-700 transition-colors">
              Download Script (.sh)
            </a>
            <a href="/fetchlink-ubuntu-client-installer" download className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold text-center hover:bg-indigo-700 transition-colors">
              Download GUI Installer
            </a>
          </div>

          <div className="border-b border-slate-200 mb-6 flex space-x-6">
            <button 
              onClick={() => setActiveTab('script')}
              className={`pb-3 font-semibold text-lg transition-colors ${activeTab === 'script' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Terminal Script Setup
            </button>
            <button 
              onClick={() => setActiveTab('installer')}
              className={`pb-3 font-semibold text-lg transition-colors ${activeTab === 'installer' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              GUI Installer Setup
            </button>
          </div>

          <div className="min-h-[250px] mt-8">
            {activeTab === 'script' ? (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. Make the script executable</h3>
                  <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm shadow-inner">
                    $ chmod +x pkg-cache.sh
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. Connect to the Server</h3>
                  <p className="text-sm text-slate-500 mb-3">Replace 192.168.X.X with your server's IP address.</p>
                  <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm shadow-inner">
                    $ ./pkg-cache.sh client install 192.168.X.X
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-600 mb-2">Reset Client</h3>
                  <p className="text-sm text-slate-500 mb-3">Reverts configurations to their previous states.</p>
                  <div className="bg-slate-900 text-red-400 p-4 rounded-lg font-mono text-sm shadow-inner">
                    $ ./pkg-cache.sh client reset
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. Run the Installer</h3>
                  <p className="text-slate-600">Double click the downloaded GUI Installer to open the configuration wizard.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. Enter Server IP</h3>
                  <p className="text-slate-600">When prompted by the software, simply type in the IP address of your caching server (e.g., 192.168.1.50) and click Connect.</p>
                </div>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mt-6 rounded-r-lg">
                  <p className="text-sm text-indigo-900">
                    The software will automatically handle all APT, NPM, and Pip configurations in the background.
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