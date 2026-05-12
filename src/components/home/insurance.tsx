"use client";

import Link from "next/link";

export default function InsuranceCard() {
  return (
    <Link href="/insurance" className="block group">
      <div className="relative w-56 overflow-hidden rounded-2xl bg-white/85 p-4 backdrop-blur-lg shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98]">


        {/* Content */}
        <div className="relative z-10">
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent transition-all duration-300">Health Insurance</h4>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors duration-300">We accept all major health insurance plans</p>
          
          {/* Subtle indicator */}
          <div className="mt-2 flex items-center gap-1 text-[10px] font-bold bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Explore Plans <span className="text-xs">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
