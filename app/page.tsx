import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xl">📦</div>
            <span className="text-xl font-bold tracking-tight">pkg-cache</span>
          </div>
          <div className="text-sm font-medium text-slate-500">v1.0.0 Release</div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
              Lightning Fast Package Caching
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              A centralized caching system for APT (Debian/Ubuntu), NPM (Node.js), and PyPI (Python). Reduce bandwidth usage and drastically speed up your environment setups.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <Link href="/server" className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all text-center">
                Configure Server
              </Link>
              <Link href="/client" className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 shadow-sm transition-all text-center">
                Connect Client Machine
              </Link>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-white py-24 sm:py-32 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-3">APT Caching</h3>
                <p className="text-slate-600">Uses apt-cacher-ng (Port 3142) for Debian/Ubuntu packages.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">NPM Caching</h3>
                <p className="text-slate-600">Uses verdaccio (Port 4873) for Node.js packages.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">PyPI Caching</h3>
                <p className="text-slate-600">Uses devpi (Port 3141) for Python packages.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}