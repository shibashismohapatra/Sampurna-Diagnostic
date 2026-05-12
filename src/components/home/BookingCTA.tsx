"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Calendar, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-700 py-20 lg:py-28">
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
        {/* Glassmorphism Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 mb-8 shadow-lg">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm font-medium text-white tracking-wide">Limited Slots Available</span>
          <Sparkles className="h-4 w-4 text-yellow-300" />
        </div>

        {/* Heading */}
        <div className="space-y-4">
       
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
            Book Your{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                Appointment
              </span>
            </span>{" "}
            Today
          </h2>
        </div>

        {/* Glassmorphism CTA Container */}
        <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-3 shadow-2xl">
          {/* Primary CTA - Glass Style */}
          <Link
            href="/appointment"
            className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm px-8 py-4 font-semibold text-cyan-700 shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Calendar className="h-5 w-5 transition-transform group-hover:rotate-12" />
              <span className="text-base">Book Appointment</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Divider */}
          <span className="hidden sm:block h-8 w-px bg-white/20" />

          {/* Secondary CTA - Glass Style */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="text-base">WhatsApp Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Glassmorphism Bottom Note */}
        <p className="mt-6 text-sm text-cyan-100/80 backdrop-blur-sm inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
          ✨ Same-day appointments available
        </p>
      </div>
    </section>
  );
}