import React from 'react';
import Link from 'next/link';

export default function ClientSelectionPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Choose Client OS</h1>
        <p className="text-lg text-slate-600 mb-12">Select the operating system of the machine you want to connect to the cache.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Ubuntu Card */}
          <Link href="/client/ubuntu" className="bg-white border border-slate-200 p-10 rounded-2xl hover:border-orange-500 hover:shadow-lg transition-all group flex flex-col items-center text-center">
            <div className="mb-6 group-hover:scale-110 transition-transform h-[40px] flex items-center justify-center">
              {/* Pointing to your uploaded SVG in the public folder */}
              <img src="/ubuntu-icon.svg" alt="Ubuntu Logo" className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ubuntu / Linux</h2>
            <p className="text-slate-500">Connect via Terminal Script or GUI Installer.</p>
          </Link>

          {/* Windows Card */}
          <Link href="/client/windows" className="bg-white border border-slate-200 p-10 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all group flex flex-col items-center text-center">
            <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform h-[40px] flex items-center justify-center">
              {/* Official Microsoft Windows SVG Logo */}
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12.402l35.687-4.86.016 34.423-35.703.206v-29.77zm35.67 33.53l-.015 33.911-35.655-4.993v-29.141l35.67.223zm4.566-38.9l47.764-6.845v40.364l-47.764.384v-33.903zm0 37.79l47.764.364v40.38l-47.764-6.756v-33.988z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Windows</h2>
            <p className="text-slate-500">Connect via PowerShell Script or GUI Installer.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}