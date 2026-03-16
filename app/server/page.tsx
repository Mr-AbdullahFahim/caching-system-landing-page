import React from 'react';
import Link from 'next/link';

export default function ServerPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b border-slate-200 px-4 py-4">
        <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">&larr; Back to Home</Link>
      </nav>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold mb-6">Ubuntu Server Setup</h1>
          <p className="text-slate-600 mb-8">The server must be hosted on a Linux (Debian/Ubuntu preferred) machine.</p>

          <a href="/pkg-cache.sh" download className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold mb-8">
            Download pkg-cache.sh
          </a>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">1. Make executable</h3>
              <div className="bg-slate-900 text-green-400 p-3 rounded font-mono text-sm">$ chmod +x pkg-cache.sh</div>
            </div>
            <div>
              <h3 className="font-bold mb-2">2. Install the Server</h3>
              <p className="text-sm text-slate-500 mb-2">This installs Docker and starts the cache containers.</p>
              <div className="bg-slate-900 text-green-400 p-3 rounded font-mono text-sm">$ ./pkg-cache.sh server install</div>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-red-600">Uninstall / Reset</h3>
              <p className="text-sm text-slate-500 mb-2">Stops containers and removes persistent data volumes.</p>
              <div className="bg-slate-900 text-red-400 p-3 rounded font-mono text-sm">$ ./pkg-cache.sh server reset</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}