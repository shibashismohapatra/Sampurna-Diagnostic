"use client";

import React from "react";
import Link from "next/link";

export default function HealthRecordsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-start py-12 px-6">
      {/* Hero Section */}
      <div className="max-w-4xl w-full text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-semibold text-sm mb-6 animate-fade-in">
        
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          Your Health Records, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Now 100% Digital
          </span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Access all your diagnostic tests and reports seamlessly. We&apos;ve modernized 
          our delivery system to bring your results directly to your phone.
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Lab Results Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-1">
          <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-.815 1.177l-1.903 1.27a2 2 0 01-2.446 0l-1.903-1.27a2 2 0 01-.815-1.177l-.727-2.903a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547l-1.94 1.94c-.78.781-2.047.781-2.827 0l-.707-.707a2 2 0 010-2.828l1.94-1.94a2 2 0 00.547-1.022l.477-2.387a2 2 0 00-1.414-1.96L4.11 7.095a2 2 0 01-1.177-.815L1.663 4.377a2 2 0 010-2.446l1.27-1.903a2 2 0 011.177-.815l2.903-.727a2 2 0 001.414-1.96L8.905.13a2 2 0 011.022-.547l2.387.477a2 2 0 001.96-1.414l.727-2.903a2 2 0 01.815-1.177l1.903-1.27a2 2 0 012.446 0l1.903 1.27a2 2 0 01.815 1.177l.727 2.903a2 2 0 001.96 1.414l2.387-.477a2 2 0 001.022-.547l1.94-1.94c.78-.781 2.047-.781 2.827 0l.707.707a2 2 0 010 2.828l-1.94 1.94a2 2 0 00-.547 1.022l-.477 2.387a2 2 0 001.414 1.96l2.903.727a2 2 0 011.177.815l1.27 1.903a2 2 0 010 2.446l-1.27 1.903a2 2 0 01-1.177.815l-2.903.727a2 2 0 00-1.414 1.96l-.727 2.903a2 2 0 01-.815 1.177l-1.903 1.27z" />
              {/* Fallback simple beaker icon if complex one is too much */}
              <circle cx="9" cy="9" r="2" />
              <path d="M12 12l8 8M20 12l-8 8" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Lab Results</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            All your comprehensive blood tests, diagnostics, and pathological 
            lab results are securely processed and ready for viewing.
          </p>
          <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-xl w-fit">
            <svg className="w-5 h-5 text-whatsapp" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.342-4.375 9.805-9.884 9.805m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.415-8.411z" />
            </svg>
            Delivered via WhatsApp
          </div>
        </div>

        {/* OPD Reports Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-1">
          <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 shadow-sm">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">OPD Reports</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Quickly check your doctor consultations and outpatient records 
            without waiting for physical copies at the center.
          </p>
          <div className="flex items-center gap-2 text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-xl w-fit">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            E-PDF Provided
          </div>
        </div>
      </div>

      {/* WhatsApp Delivery Notice */}
      <div className="max-w-4xl w-full bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="bg-white/10 p-6 rounded-[2rem] border border-white/20 backdrop-blur-md">
            <svg className="w-16 h-16 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.342-4.375 9.805-9.884 9.805m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.415-8.411z" />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-black mb-4">Visit Our Center</h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              To ensure data accuracy and privacy, please visit our diagnostic 
              center. Once your check-up is complete, both 
              <span className="text-white font-bold"> OPD and Lab Results </span> 
              will be sent directly to your <span className="text-green-400 font-bold underline">WhatsApp</span> in high-quality 
              <span className="text-white font-bold"> e-PDF format</span> for your records.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link 
                href="/"
                className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                Back to Home
              </Link>
              <a 
                href="https://wa.me/your-number-here" 
                target="_blank" 
                rel="noreferrer"
                className="bg-green-600/20 border border-green-500 text-green-400 px-8 py-4 rounded-2xl font-bold transition-all hover:bg-green-600 hover:text-white"
              >
                Chat with Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
