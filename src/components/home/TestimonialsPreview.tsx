"use client";


// Local proxy data for testimonials
const testimonialsProxy = [
  {
    name: "Bijayalaxmi Patra",
    content: "I took the Basic Health Check-up package. The process was smooth, staff was courteous, and I received my reports within 24 hours. Very affordable and reliable service.",
    location: "Puri",
  },
  {
    name: "Sitansu Sekhar Dash",
    content: "The Vasant Wellness Package is excellent value for money. All tests were conducted professionally. Highly recommend this diagnostic center in Puri.",
    location: "Matiapada",
  },
  {
    name: "Rashmirekha Mohapatra",
    content: "Great experience with their health checkup packages. The staff explained each test and the reports were detailed and easy to understand.",
    location: "Puri",
  },
  {
    name: "Prasant Kumar Sahoo",
    content: "Got my blood tests done here. Quick service, clean facility, and very reasonable prices. The reports were accurate and delivered on time.",
    location: "Konark Road",
  },
  {
    name: "Lopamudra Swain",
    content: "Very professional blood sample collection. The technician was gentle and hygienic. Received digital reports promptly.",
    location: "Puri",
  },
  {
    name: "Saroj Kumar Rout",
    content: "Excellent home collection service. No need to travel to the lab. Reports were sent via WhatsApp. Very convenient!",
    location: "Near Sea Beach",
  },
];
import TestimonialCard from "@/components/shared/TestimonialCard";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";
import { Quote, Star } from "lucide-react";
import React from "react";

interface TestimonialProxy {
  name: string;
  content: string;
  location: string;
}

// Enhanced Testimonial Card Component
function PremiumTestimonialCard({ testimonial, index }: { testimonial: TestimonialProxy; index: number }) {
  return (
    <div
      className="group relative"
      style={{
        animation: `floatIn 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Floating Shadow/Glow Effect */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-cyan-400/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
      
      {/* Main Card */}
      <div className="relative h-full rounded-3xl border border-zinc-200/50 bg-white/80 p-6 backdrop-blur-sm shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-cyan-200/50">
        {/* Quote Icon */}
        <div className="absolute -right-2 -top-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 transition-transform duration-300 group-hover:scale-110">
            <Quote className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Rating Stars */}
        <div className="mb-4 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-amber-400 text-amber-400 transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>

        {/* Testimonial Content */}
        <p className="text-sm leading-relaxed text-zinc-600 line-clamp-5">
          &quot;{testimonial.content}&quot;
        </p>

        {/* Author Info */}
        <div className="mt-5 flex items-center gap-4 border-t border-zinc-100 pt-4">
          {/* Avatar */}
          <div className="relative">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-lg font-semibold text-cyan-600">
                {testimonial.name.charAt(0)}
              </div>
            </div>
            {/* Verified Badge */}
            <div className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 ring-2 ring-white">
              <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-zinc-800">{testimonial.name}</h4>
            <p className="text-xs text-zinc-500">{testimonial.location || "Patient"}</p>
          </div>
        </div>

        {/* Hover Overlay Gradient */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5 pointer-events-none" />
      </div>
    </div>
  );
}

export default function TestimonialsPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-cyan-50/30 py-20 lg:py-28">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl animate-float-slower" />
        <div className="absolute -bottom-20 left-1/4 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl animate-float" />
        
        {/* Decorative Dots Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="testimonial-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#06b6d4" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#testimonial-dots)" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Enhanced Section Heading */}
        <div className="relative">
          <SectionHeading
            label="💬 Patient Stories"
            title={
              <>
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  What Our Patients
                </span>{" "}
                Say About Us
              </>
            }
            description="Real experiences from patients who trusted us for their diagnostic care and health checkups."
            centered
          />
          
          {/* Decorative Underline */}
          <div className="absolute -bottom-4 left-1/2 h-0.5 w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
        </div>

   

        {/* Testimonials Grid - Floating Cards */}
        <div className="relative mt-14">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
            {testimonialsProxy.map((testimonial, index) => (
              <PremiumTestimonialCard 
                key={testimonial.name} 
                testimonial={testimonial} 
                index={index} 
              />
            ))}
          </div>

          {/* Mobile Horizontal Scroll with Floating Effect */}
          <div className="lg:hidden">
            <div className="flex gap-5 overflow-x-auto pb-8 px-2 -mx-2 hide-scrollbar">
              {testimonialsProxy.map((testimonial, index) => (
                <div key={testimonial.name} className="w-[300px] flex-shrink-0">
                  <PremiumTestimonialCard 
                    testimonial={testimonial} 
                    index={index} 
                  />
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="mt-4 flex justify-center gap-1.5">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all ${
                    i === 1 ? "w-6 opacity-100" : "w-1.5 opacity-40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

     
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}