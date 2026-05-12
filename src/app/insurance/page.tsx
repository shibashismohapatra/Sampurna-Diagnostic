"use client";

import React from "react";
import Link from "next/link";

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-2xl border border-slate-100">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white mx-auto shadow-lg shadow-cyan-500/30">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h1 className="text-3xl font-black text-slate-800 mb-4">Health Insurance</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          We are currently integrating with all major insurance providers. 
          Soon you will be able to claim your diagnostics directly through our platform.
        </p>
        <Link 
          href="/"
          className="inline-block bg-slate-800 text-white px-8 py-3 rounded-xl font-bold transition-all hover:bg-black hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
