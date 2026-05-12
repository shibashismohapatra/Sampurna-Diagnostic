"use client";

import Link from "next/link";

export default function MembershipCard() {
  return (
    <Link href="/membership" className="block group">
      <div className="relative w-60 overflow-hidden rounded-2xl bg-white/85 p-4 backdrop-blur-lg shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98]">


        {/* Content */}
        <div className="relative z-10">
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/30 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h4 className="font-bold bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 bg-clip-text text-transparent transition-all duration-300">Premium Membership</h4>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors duration-300">Get 10% discount on all diagnostic services</p>
          
          {/* Subtle indicator */}
          <div className="mt-2 flex items-center gap-1 text-[10px] font-bold bg-gradient-to-r from-violet-500 to-rose-500 bg-clip-text text-transparent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Join<span className="text-xs">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
