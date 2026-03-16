"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function UbuntuClientPage() {
  const [activeTab, setActiveTab] = useState('script');

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b border-slate-200 px-4 py-4">
        <Link href="/client" className="text-indigo-600 hover:text-indigo-800 font-medium">&larr; Back to OS Selection</Link>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold mb-6">Ubuntu Client Setup</h1>
          <p className="text-slate-600 mb-8">Choose your preferred method to configure this machine to use the caching server.</p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="/pkg-cache.sh" download className="px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold text-center hover:bg-slate-700">
              Download Script (.sh)
            </a>
            <a href="/pkg-cache-installer" download className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold text-center hover:bg-indigo-700">
              Download GUI Installer
            </a>
          </div>

          {/* Setup Tabs */}
          <div className="border-b border-slate-200 mb-6 flex space-x-6">
            <button 
              onClick={() => setActiveTab('script')}
              className={`pb-3 font-semibold text-lg transition-colors ${activeTab === 'script' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Terminal Script Setup
            </button>
            <button 
              onClick={() => setActiveTab('installer')}
              className={`pb-3 font-semibold text-lg transition-colors ${activeTab === 'installer' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              GUI Installer Setup
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[250px]">
            {activeTab === 'script' ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="font-bold mb-2">1. Make the script executable</h3>
                  <div className="bg-slate-900 text-green-400 p-3 rounded font-mono text-sm">$ chmod +x pkg-cache.sh</div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">2. Connect to the Server</h3>
                  <p className="text-sm text-slate-500 mb-2">Replace 192.168.X.X with your server's IP address.</p>
                  <div className="bg-slate-900 text-green-400 p-3 rounded font-mono text-sm">$ ./pkg-cache.sh client install 192.168.X.X</div>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-red-600">Reset Client</h3>
                  <p className="text-sm text-slate-500 mb-2">Reverts configurations to their previous states.</p>
                  <div className="bg-slate-900 text-red-400 p-3 rounded font-mono text-sm">$ ./pkg-cache.sh client reset</div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="font-bold mb-2">1. Run the Installer</h3>
                  <p className="text-slate-600">Double click the downloaded GUI Installer to open the configuration wizard.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">2. Enter Server IP</h3>
                  <p className="text-slate-600">When prompted by the software, simply type in the IP address of your caching server (e.g., 192.168.1.50) and click Connect.</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                  <p className="text-sm text-blue-800">The software will automatically handle all APT, NPM, and Pip configurations in the background.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}