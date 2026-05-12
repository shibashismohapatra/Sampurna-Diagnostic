"use client";

import { siteConfig } from "@/data/site";
import AppointmentForm from "@/components/shared/AppointmentForm";
import SectionHeading from "@/components/shared/SectionHeading";
import { 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Calendar,
  Users,
  Award,
  Heart,
  ChevronRight,
  Star,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import React from "react";





const features = [
  {
    title: "State-of-the-art Equipment",
    description: "Latest digital imaging and diagnostic tools",
    icon: "🦷",
  },
  {
    title: "Painless Procedures",
    description: "Modern anesthesia techniques for comfort",
    icon: "✨",
  },
  {
    title: "Personalized Care",
    description: "Treatment plans tailored to your needs",
    icon: "🎯",
  },
  {
    title: "Affordable Pricing",
    description: "Quality care at competitive rates",
    icon: "💎",
  },
];

export default function BookAppointmentPage() {
  return (
    <>
      {/* Premium Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-teal-600 to-cyan-700 px-4 pb-20 pt-32 sm:pt-40">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Orbs */}
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float-slow" />
          <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl animate-float-slower" />
          <div className="absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-teal-400/15 blur-3xl animate-float" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-sm font-medium">Easy Online Booking</span>
          </div>

          <SectionHeading
            label="Book Your Visit"
            title={
              <span className="text-white">
                Schedule Your{" "}
                <span className="relative">
                  Appointment
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,4 Q50,0 100,4 Q150,8 200,4" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </span>
            }
            description="Fill in your details and we'll confirm your appointment instantly via WhatsApp."
            centered
          />

        
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="h-16 w-full" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path 
              d="M0,32 C360,64 720,0 1440,32 L1440,64 L0,64 Z" 
              fill="#fafafa" 
              fillOpacity="1"
            />
          </svg>
        </div>
      </section>

  

      {/* Form Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
          {/* Left Info Panel - Premium Design */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              {/* Main Info Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl border border-cyan-100">
                {/* Decorative Gradient */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl" />
                
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
                  Why Choose {siteConfig.brandName}?
                </h2>
                
                {/* Feature Grid */}
                <div className="mt-6 grid gap-3">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="group flex items-start gap-4 rounded-xl p-3 transition-all hover:bg-gradient-to-r hover:from-cyan-50 hover:to-transparent"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-2xl group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-800">{feature.title}</h3>
                        <p className="text-sm text-zinc-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rating Badge */}
                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 p-4 border border-amber-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg">
                    <Star className="h-6 w-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-bold text-amber-600">4.9</span>
                      <span className="text-sm text-amber-500">★★★★★</span>
                    </div>
                    <p className="text-xs text-zinc-500">Rated by 1000+ happy patients</p>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 shadow-xl border border-cyan-100">
                <h3 className="flex items-center gap-2 font-semibold text-zinc-800">
                  <Clock className="h-5 w-5 text-cyan-600" />
                  Clinic Hours
                </h3>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between rounded-lg p-2 hover:bg-white/50 transition-colors">
                    <span className="text-sm font-medium text-zinc-600">OPD Consultation</span>
                    <span className="text-sm font-semibold text-cyan-700">{siteConfig.timings.opd}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg p-2 hover:bg-white/50 transition-colors">
                    <span className="text-sm font-medium text-zinc-600">Diagnostic Services</span>
                    <span className="text-sm font-semibold text-cyan-700">{siteConfig.timings.diagnostic}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg p-2 hover:bg-white/50 transition-colors">
                    <span className="text-sm font-medium text-zinc-600">Sunday</span>
                    <span className="text-sm font-semibold text-rose-600">{siteConfig.timings.sunday}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-md">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Call for Appointment</p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-lg font-bold text-cyan-700 hover:underline"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Visit Us</p>
                      <p className="text-sm font-medium text-zinc-700">{siteConfig.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-2 backdrop-blur-sm border border-cyan-200/30">
                <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                <span className="text-xs font-medium text-zinc-600">100% Safe & Confidential</span>
              </div>
            </div>
          </div>

          {/* Right Form - Premium Card */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-cyan-400/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-cyan-100">
                {/* Form Header */}
                <div className="border-b border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-800">Appointment Form</h3>
                      <p className="text-sm text-zinc-500">Fill your details for instant confirmation</p>
                    </div>
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-8">
                  <AppointmentForm />
                </div>

                {/* Form Footer */}
                <div className="border-t border-cyan-100 bg-gradient-to-r from-cyan-50/50 to-blue-50/50 px-8 py-4">
                  <p className="text-xs text-center text-zinc-500">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy" className="text-cyan-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-3deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}