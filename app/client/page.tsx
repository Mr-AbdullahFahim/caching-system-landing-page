import React from 'react';
import Link from 'next/link';

export default function ClientSelectionPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b border-slate-200 px-4 py-4">
        <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">&larr; Back to Home</Link>
      </nav>
      <main className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Choose Client OS</h1>
        <p className="text-lg text-slate-600 mb-12">Select the operating system of the machine you want to connect to the cache.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/client/ubuntu" className="bg-white border border-slate-200 p-10 rounded-2xl hover:border-indigo-500 hover:shadow-md transition-all">
            <div className="text-2xl font-bold text-slate-900 mb-2">Ubuntu / Linux</div>
            <p className="text-slate-500">Connect via Terminal Script or GUI Installer.</p>
          </Link>
          <Link href="/client/windows" className="bg-white border border-slate-200 p-10 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all">
            <div className="text-2xl font-bold text-slate-900 mb-2">Windows</div>
            <p className="text-slate-500">Connect via PowerShell Script.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}