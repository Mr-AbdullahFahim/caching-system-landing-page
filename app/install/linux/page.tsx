import React from 'react';
import Link from 'next/link';

export default function LinuxInstallPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center space-x-4">
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center">
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Linux Server & Client Setup</h1>
          </div>

          <p className="text-lg text-slate-600 mb-8">
            The Linux script acts as both the installer for the main caching server and the configuration tool for Linux client machines. It handles APT, NPM, and PyPI caching.
          </p>

          <a href="/pkg-cache.sh" download className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all w-full md:w-auto mb-12">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download pkg-cache.sh
          </a>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Step 1: Make the script executable</h2>
              <p className="text-slate-600 mb-3">After downloading the script to your machine, open your terminal and grant it execution permissions.</p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                $ chmod +x pkg-cache.sh
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Step 2: Install the Server (Host Machine Only)</h2>
              <p className="text-slate-600 mb-3">Run this command on the machine that will act as your centralized cache. It will automatically install Docker and configure the caching services (apt-cacher-ng, verdaccio, and devpi).</p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                $ ./pkg-cache.sh server install
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Step 3: Connect a Linux Client</h2>
              <p className="text-slate-600 mb-3">Run this command on any other Linux machine on your network that needs to pull packages from the cache. Replace `192.168.X.X` with the IP address of the server you set up in Step 2.</p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                $ ./pkg-cache.sh client install 192.168.X.X
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">How to Disconnect / Reset</h2>
              <p className="text-slate-600 mb-3">If you need to revert your client machine to its original state, run the reset command.</p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-red-400 overflow-x-auto">
                $ ./pkg-cache.sh client reset
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}