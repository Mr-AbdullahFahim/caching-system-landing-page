"use client";
import React, { useState } from 'react';

export default function TerminalBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    // Reset the copy icon back after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0a0a0a] my-4 shadow-sm">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-slate-800">
        <div className="flex items-center text-slate-400 text-sm font-mono">
          <span className="mr-2 font-bold">&gt;_</span> Terminal
        </div>
        
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-slate-200 transition-colors"
          aria-label="Copy to clipboard"
          title="Copy command"
        >
          {copied ? (
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Command Body */}
      <div className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-green-400 whitespace-pre">{command}</code>
      </div>
    </div>
  );
}