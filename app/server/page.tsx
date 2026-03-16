import React from 'react';
import Link from 'next/link';

export default function ServerPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Ubuntu Server Setup</h1>
          <p className="text-slate-600 mb-8">
            The server must be hosted on a Linux (Debian/Ubuntu preferred) machine.
          </p>

          <a href="/pkg-cache.sh" download className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download pkg-cache.sh
          </a>

          <div className="space-y-8">
            <div className="border-b border-slate-100 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Make executable</h3>
              <p className="text-sm text-slate-500 mb-3">Grant the script execution permissions.</p>
              <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-inner">
                $ chmod +x pkg-cache.sh
              </div>
            </div>
            <div className="border-b border-slate-100 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Install the Server</h3>
              <p className="text-sm text-slate-500 mb-3">This installs Docker and starts the cache containers.</p>
              <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-inner">
                $ ./pkg-cache.sh server install
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-600 mb-2">Uninstall / Reset</h3>
              <p className="text-sm text-slate-500 mb-3">Stops containers and removes persistent data volumes.</p>
              <div className="bg-slate-900 text-red-400 p-4 rounded-lg font-mono text-sm overflow-x-auto shadow-inner">
                $ ./pkg-cache.sh server reset
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}