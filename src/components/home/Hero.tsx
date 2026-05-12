"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import InsuranceCard from "./insurance";
import MembershipCard from "./membership";
import HealthRecordCard from "./healthrecord";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-slate-50 to-cyan-50/30">
      {/* DNA-Inspired Abstract Wave Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary wave - cyan */}
        <div className="absolute -top-40 -right-40 h-[800px] w-[800px] animate-float-slow">
          <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-30">
            <path
              d="M100,400 C200,200 300,600 400,400 C500,200 600,600 700,400"
              stroke="url(#gradient1)"
              strokeWidth="3"
              strokeDasharray="8 8"
              fill="none"
            />
            <path
              d="M100,420 C200,620 300,220 400,420 C500,620 600,220 700,420"
              stroke="url(#gradient2)"
              strokeWidth="2"
              strokeDasharray="4 6"
              fill="none"
            />
            <path
              d="M100,380 C200,180 300,580 400,380 C500,180 600,580 700,380"
              stroke="url(#gradient3)"
              strokeWidth="1.5"
              strokeDasharray="6 10"
              fill="none"
            />
       
          </svg>
        </div>

        {/* Secondary wave - blue */}
        <div className="absolute -bottom-60 -left-60 h-[900px] w-[900px] animate-float-slower">
          <svg viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full opacity-20">
            <path
              d="M150,450 C300,200 500,700 650,450 C800,200 850,500 750,600"
              stroke="url(#gradient4)"
              strokeWidth="4"
              strokeDasharray="10 12"
              fill="none"
            />
            <path
              d="M150,430 C300,680 500,230 650,430 C800,630 850,380 750,580"
              stroke="url(#gradient5)"
              strokeWidth="2.5"
              strokeDasharray="5 8"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

     
        
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8">

            {/* Main Headline */}
            <h1 className="max-w-2xl text-5xl font-black tracking-tight bg-gradient-to-r from-pink-500 via-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent lg:text-6xl lg:leading-[1.1] drop-shadow-[0_2px_24px_rgba(139,92,246,0.18)]">
              Cross Med{" "}
              <span className="relative">

            
              </span>
              <br />
            </h1>

            {/* Subtext */}
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
              Accurate, fast, and affordable diagnostic services powered by modern technology.
              Experience healthcare that intelligent, precise, and always accessible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ai-diagnostics"
                className="group relative overflow-hidden rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/35 hover:scale-[1.02]"
              >
                <span className="relative z-10">Book Diagnostics</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-600 to-blue-700 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-cyan-200/60 bg-white/80 px-8 py-4 font-semibold text-cyan-700 backdrop-blur-md transition-all duration-300 hover:bg-white hover:border-cyan-300 hover:shadow-lg"
              >
                <span className="flex items-center gap-2">
                  Schedule Consultation
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>

         
          {/* Premium Consultation Banner */}
<div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFF5E6] via-[#FFEBB7] to-[#FFE0A3] border border-orange-100/60 p-5 md:p-6 shadow-xl shadow-orange-200/30 group animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    
    {/* Left Content */}
    <div className="relative z-10 space-y-3 text-center md:text-left flex-1">
      <h2 className="text-xl md:text-2xl font-bold text-zinc-800 leading-tight">
        Talk to a Doctor for{" "}
        <span className="text-amber-700">Instant Advice</span>
      </h2>
      
      <div className="flex items-center justify-center md:justify-start gap-2">
        <p className="text-xs font-medium text-amber-800/80 bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/50">
          Get 5% Off • Use Code{" "}
          <span className="rounded-md bg-white/70 px-2 py-0.5 font-bold text-amber-900 border border-amber-200">
            CC50
          </span>
        </p>
      </div>
      
      <button className="mt-2 rounded-xl bg-gradient-to-r from-[#1C1C1C] to-[#2D2D2D] px-7 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:from-black hover:to-[#1C1C1C] hover:scale-[1.02] active:scale-95 shadow-lg shadow-black/15 hover:shadow-xl">
        Consult Now →
      </button>
    </div>

    {/* Illustration Area - Optimized */}
    <div className="relative h-36 w-full md:w-64 flex items-center justify-center md:justify-end">
      {/* Doctor Illustration */}
      <div className="relative w-48 h-36">
        <svg viewBox="0 0 200 140" className="absolute -bottom-1 left-0 w-full h-full drop-shadow-xl">
          {/* Doctor Body */}
          <rect x="55" y="70" width="90" height="55" rx="6" fill="#4A90D9" />
          <rect x="60" y="75" width="80" height="45" rx="4" fill="#5BA3EC" />
          
          {/* White Coat */}
          <path d="M70 70 L90 90 L110 70" fill="white" />
          <rect x="65" y="90" width="25" height="35" rx="3" fill="white" />
          <rect x="110" y="90" width="25" height="35" rx="3" fill="white" />
          
          {/* Stethoscope */}
          <path d="M95 70 Q95 55 100 55 Q105 55 105 70" stroke="#333" strokeWidth="2.5" fill="none" />
          <circle cx="100" cy="55" r="5" fill="#E74C3C" />
          <circle cx="100" cy="55" r="2.5" fill="#C0392B" />
          
          {/* Head */}
          <circle cx="100" cy="45" r="18" fill="#FFD5B8" />
          
          {/* Hair */}
          <path d="M82 40 Q85 25 100 25 Q115 25 118 40" fill="#4A3728" />
          <path d="M82 40 Q80 35 82 28" stroke="#4A3728" strokeWidth="4" fill="none" />
          
          {/* Eyes */}
          <circle cx="93" cy="46" r="2.5" fill="#333" />
          <circle cx="107" cy="46" r="2.5" fill="#333" />
          
          {/* Smile */}
          <path d="M95 52 Q100 56 105 52" stroke="#333" strokeWidth="1.5" fill="none" />
          
          {/* Glasses */}
          <rect x="87" y="43" width="12" height="8" rx="2" fill="none" stroke="#666" strokeWidth="1.5" />
          <rect x="101" y="43" width="12" height="8" rx="2" fill="none" stroke="#666" strokeWidth="1.5" />
          <line x1="99" y1="47" x2="101" y2="47" stroke="#666" strokeWidth="1.5" />
        </svg>

        {/* Patient Illustration */}
        <svg viewBox="0 0 200 140" className="absolute -bottom-1 -right-4 w-40 h-32 drop-shadow-lg">
          {/* Patient Body */}
          <rect x="90" y="70" width="70" height="50" rx="5" fill="#E67E22" />
          <rect x="95" y="75" width="60" height="40" rx="3" fill="#F39C12" />
          
          {/* Head */}
          <circle cx="125" cy="50" r="16" fill="#D4A574" />
          
          {/* Hair */}
          <path d="M109 45 Q110 30 125 30 Q140 30 141 45" fill="#2C1810" />
          
          {/* Eyes */}
          <circle cx="119" cy="51" r="2" fill="#333" />
          <circle cx="131" cy="51" r="2" fill="#333" />
          
          {/* Concerned Expression */}
          <path d="M120 57 Q125 55 130 57" stroke="#333" strokeWidth="1.5" fill="none" />
          
          {/* Arm pointing to doctor */}
          <path d="M90 85 L70 85" stroke="#D4A574" strokeWidth="6" strokeLinecap="round" />
        </svg>

        {/* Floating Medical Icons */}
        <div className="absolute top-0 left-8 animate-float">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg">
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-red-500 to-rose-500 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-white/30" />
            </div>
          </div>
        </div>
        
        <div className="absolute top-6 right-0 animate-float-delayed">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md">
            <span className="text-sm">💊</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative Background Elements */}
  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/25 blur-3xl group-hover:bg-white/35 transition-colors duration-500" />
  <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-amber-200/30 blur-3xl" />
  
  {/* Subtle Grid Pattern */}
  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <pattern id="banner-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.5" fill="#000" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#banner-grid)" />
    </svg>
  </div>
</div>

{/* CSS Animations */}
<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 3.5s ease-in-out infinite 0.5s;
  }
`}</style>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative">
              {/* Abstract Medical Wave Graphic */}
              <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-cyan-100/40 via-blue-50/30 to-transparent blur-3xl" />

              <div className="relative rounded-[2.5rem] bg-gradient-to-br from-white/80 via-white/60 to-cyan-50/50 p-8 backdrop-blur-xl shadow-2xl border border-white/50">
                {/* Wave Pattern Background */}
                <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
                  <svg className="h-full w-full opacity-40" viewBox="0 0 400 400">
                    <path d="M0,200 C100,100 150,300 250,200 C350,100 400,250 400,200" stroke="url(#waveGrad)" strokeWidth="2" fill="none" />
                    <path d="M0,220 C100,320 150,120 250,220 C350,320 400,170 400,220" stroke="url(#waveGrad2)" strokeWidth="1.5" fill="none" />
                    <defs>
                      <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                      </linearGradient>
                      <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0891b2" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Doctor Profile Card */}
                <div className="relative mb-6 flex justify-end">

                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-violet-400/30 via-blue-400/20 to-cyan-400/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-pink-400 via-violet-500 via-blue-500 to-cyan-400 shadow-2xl shadow-violet-500/20">
                    <div className="group w-72 rounded-3xl bg-white/80 backdrop-blur-2xl p-5 transition-all duration-500 hover:shadow-violet-400/20 hover:scale-[1.025] hover:bg-white/90">

                      {/* Top row: avatar + info */}
                      <div className="flex items-center gap-4">
                        {/* Avatar with gradient ring */}
                        <div className="relative flex-shrink-0">
                          <div className="p-[2px] rounded-full bg-gradient-to-br from-pink-400 via-violet-500 to-cyan-400">
                            <div className="h-14 w-14 overflow-hidden rounded-full bg-white">
                              <Image
                                src="https://static.vecteezy.com/system/resources/previews/028/287/384/non_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg"
                                alt="Doctor Profile"
                                fill
                                sizes="56px"
                                className="object-cover"
                              />
                            </div>
                          </div>

                        </div>

                        {/* Name & title */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-bold text-zinc-900 text-sm tracking-tight">Dr.Amit Padhy</h3>
                            {/* Verified badge */}
                            <svg className="h-4 w-4 flex-shrink-0 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.723 3.066 3.745 3.745 0 01-3.066.723 3.745 3.745 0 01-3.068 1.593 3.745 3.745 0 01-3.068-1.593 3.745 3.745 0 01-3.066-.723 3.745 3.745 0 01-.723-3.066A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.723-3.066 3.745 3.745 0 013.066-.723A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.066.723 3.745 3.745 0 01.723 3.066A3.745 3.745 0 0121 12z" />
                            </svg>
                          </div>
                          <p className="text-xs font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent mt-0.5">Chief of Diagnostics</p>
                          <p className="text-[11px] text-zinc-400 mt-0.5 font-medium">MD, PhD — 14 yrs experience</p>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

                {/* Feature Cards Grid */}
                <div className="relative grid gap-6">

                  {/* Insurance Card */}
                  <div className="flex justify-start animate-card-float-1">
                    <div className="group relative">
                      {/* Ambient glow */}
                      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-400/25 via-blue-400/15 to-violet-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      {/* Gradient border */}
                      <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-br from-cyan-400/60 via-blue-400/40 to-violet-400/50 shadow-xl shadow-cyan-500/10 group-hover:shadow-cyan-500/25 transition-shadow duration-500">
                        <div className="rounded-2xl bg-white/85 backdrop-blur-xl overflow-hidden group-hover:bg-white/95 transition-colors duration-300">
                          <InsuranceCard />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Premium Membership Card */}
                  <div className="flex justify-end animate-card-float-2">
                    <div className="group relative">
                      {/* Ambient glow */}
                      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-400/25 via-pink-400/15 to-rose-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      {/* Gradient border */}
                      <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-br from-violet-400/60 via-pink-400/40 to-rose-400/50 shadow-xl shadow-violet-500/10 group-hover:shadow-violet-500/25 transition-shadow duration-500">
                        <div className="rounded-2xl bg-white/85 backdrop-blur-xl overflow-hidden group-hover:bg-white/95 transition-colors duration-300">
                          <MembershipCard />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Digital Health Records Card */}
                  <div className="flex justify-start animate-card-float-3">
                    <div className="group relative">
                      {/* Ambient glow */}
                      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-emerald-400/25 via-cyan-400/15 to-blue-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      {/* Gradient border */}
                      <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-br from-emerald-400/60 via-cyan-400/40 to-blue-400/50 shadow-xl shadow-emerald-500/10 group-hover:shadow-emerald-500/25 transition-shadow duration-500">
                        <div className="rounded-2xl bg-white/85 backdrop-blur-xl overflow-hidden group-hover:bg-white/95 transition-colors duration-300">
                          <HealthRecordCard />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-2deg); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }

        @keyframes card-float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-8px) translateX(3px); }
          66% { transform: translateY(-4px) translateX(-2px); }
        }
        @keyframes card-float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-6px) translateX(-4px); }
          66% { transform: translateY(-10px) translateX(2px); }
        }
        @keyframes card-float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(2px); }
          66% { transform: translateY(-5px) translateX(-3px); }
        }
        .animate-card-float-1 { animation: card-float-1 7s ease-in-out infinite; }
        .animate-card-float-2 { animation: card-float-2 9s ease-in-out infinite 1s; }
        .animate-card-float-3 { animation: card-float-3 8s ease-in-out infinite 0.5s; }
      `}</style>
    </section>
  );
}