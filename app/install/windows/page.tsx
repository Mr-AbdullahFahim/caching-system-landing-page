import React from 'react';
import Link from 'next/link';

export default function WindowsInstallPage() {
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
             <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Windows Client Setup</h1>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> The server must be hosted on a Linux machine. This Windows script is only for configuring client machines to connect to that server. Also, APT caching is Linux-only. If you use Ubuntu/Debian in WSL2, run the original Linux client command inside WSL instead.
            </p>
          </div>

          <p className="text-lg text-slate-600 mb-8">
            The Windows script configures your local environment to use the caching server. It points NPM to Verdaccio (Port 4873) and PIP to devpi (Port 3141).
          </p>

          <a href="/pkg-cache-client.ps1" download className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all w-full md:w-auto mb-12">
             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download pkg-cache-client.ps1
          </a>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Step 1: Open PowerShell</h2>
              <p className="text-slate-600 mb-3">Ensure you have downloaded the script. Open Windows PowerShell and navigate to the folder where you downloaded the file.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Step 2: Connect to the Server</h2>
              <p className="text-slate-600 mb-3">Run the install action and provide the IP address of your Linux caching server.</p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-blue-400 overflow-x-auto">
                PS&gt; .\pkg-cache-client.ps1 -Action install -ServerHost 192.168.X.X
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Step 3: Verify the Connection (Optional)</h2>
              <p className="text-slate-600 mb-3">You can check your current configuration and run reachability tests to ensure your Windows machine can see the cache on ports 4873 and 3141.</p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-blue-400 overflow-x-auto">
                 PS&gt; .\pkg-cache-client.ps1 -Action status -ServerHost 192.168.X.X
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">How to Disconnect / Reset</h2>
              <p className="text-slate-600 mb-3">To revert NPM and Pip to their default public registries, run the reset action.</p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-red-400 overflow-x-auto">
                 PS&gt; .\pkg-cache-client.ps1 -Action reset
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}