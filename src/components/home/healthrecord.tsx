"use client";

import Link from "next/link";

export default function HealthRecordCard() {
  return (
    <Link href="/health-records" className="block group">
      <div className="relative w-64 overflow-hidden rounded-2xl bg-white/85 p-4 backdrop-blur-lg shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98]">


        {/* Content */}
        <div className="relative z-10">
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="font-bold bg-gradient-to-r from-emerald-500 via-cyan-600 to-blue-600 bg-clip-text text-transparent transition-all duration-300">Digital Health Records</h4>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors duration-300">Receive & Organize your Health information</p>
          
          {/* Subtle indicator */}
          <div className="mt-2 flex items-center gap-1 text-[10px] font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            View Full Details <span className="text-xs">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
