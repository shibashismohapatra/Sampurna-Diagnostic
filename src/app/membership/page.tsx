"use client";

import React from "react";
import Link from "next/link";

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-2xl border border-slate-100">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500 text-white mx-auto shadow-lg shadow-indigo-500/30">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h1 className="text-3xl font-black text-slate-800 mb-4">Premium Membership</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Unlock exclusive benefits, 10% discounts on all tests, and priority report delivery 
          with our premium membership program. Coming soon!
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
