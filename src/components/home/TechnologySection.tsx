"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

// Diagnostic Services Data
const diagnosticServices = [
  {
    title: "Blood Tests",
    description: "CBC, blood sugar, thyroid & more",
    benefit: "Fast & accurate results",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop", // lab blood test
    icon: "🩸",
    gradient: "from-rose-500 to-red-500",
    bgLight: "from-rose-50 to-red-50",
    price: "₹199 onwards",
  },
  {
    title: "ECG",
    description: "Heart electrical activity recording",
    benefit: "Painless, quick assessment",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=250&fit=crop", // ECG monitor
    icon: "❤️",
    gradient: "from-red-500 to-pink-500",
    bgLight: "from-red-50 to-pink-50",
    price: "₹299 onwards",
  },
  {
    title: "Thyroid Profile",
    description: "T3, T4 & TSH levels",
    benefit: "Early detection",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop", // hormone testing
    icon: "💚",
    gradient: "from-purple-500 to-violet-500",
    bgLight: "from-purple-50 to-violet-50",
    price: "₹399 onwards",
  },
  {
    title: "Kidney Function",
    description: "Creatinine, urea, uric acid",
    benefit: "Monitor kidney health",
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=400&h=250&fit=crop", // kidney/medical lab
    icon: "🫘",
    gradient: "from-amber-500 to-orange-500",
    bgLight: "from-amber-50 to-orange-50",
    price: "₹449 onwards",
  },
  {
    title: "Liver Function",
    description: "Enzyme & protein levels",
    benefit: "Detect liver disorders",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop", // liver test / lab
    icon: "🧬",
    gradient: "from-lime-500 to-green-500",
    bgLight: "from-lime-50 to-green-50",
    price: "₹499 onwards",
  },
  {
    title: "Lipid Profile",
    description: "HDL, LDL, triglycerides",
    benefit: "Heart risk assessment",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop", // cholesterol / health
    icon: "💚",
    gradient: "from-emerald-500 to-teal-500",
    bgLight: "from-emerald-50 to-teal-50",
    price: "₹399 onwards",
  },
  {
    title: "HbA1c Test",
    description: "3-month blood sugar average",
    benefit: "Diabetes monitoring",
    image: "https://images.unsplash.com/photo-1580281658629-3d0fbd8d6a7c?w=400&h=250&fit=crop", // glucose testing
    icon: "🔬",
    gradient: "from-sky-500 to-blue-500",
    bgLight: "from-sky-50 to-blue-50",
    price: "₹349 onwards",
  },
  {
    title: "Urine Analysis",
    description: "Infection & disease detection",
    benefit: "Non-invasive diagnostic",
    image: "https://images.unsplash.com/photo-1582719478170-9a8bdf1b1f92?w=400&h=250&fit=crop", // urine sample
    icon: "🔬",
    gradient: "from-indigo-500 to-blue-500",
    bgLight: "from-indigo-50 to-blue-50",
    price: "₹149 onwards",
  },
  {
    title: "Home Collection",
    description: "Sample collection at your home",
    benefit: "Free & convenient",
    image: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?w=400&h=250&fit=crop", // home healthcare
    icon: "🏠",
    gradient: "from-cyan-500 to-blue-500",
    bgLight: "from-cyan-50 to-blue-50",
    price: "FREE",
  },
];

// Premium Compact Service Card
function ServiceCard({ service, index }: { service: typeof diagnosticServices[0]; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group"
      style={{
        animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`,
      }}
    >
      <div className={`relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-zinc-100`}>
        {/* Image Section - Compact */}
        <div className={`relative h-36 w-full overflow-hidden bg-gradient-to-br ${service.gradient}`}>
          {!imageError ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-5xl">{service.icon}</span>
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* Icon Badge - Top Left */}
          <div className="absolute left-3 top-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md shadow-lg border border-white/30`}>
              <span className="text-lg">{service.icon}</span>
            </div>
          </div>

          {/* Price Tag - Top Right */}
          <div className="absolute right-3 top-3">
            <span className={`rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-bold shadow-md ${
              service.price === "FREE" 
                ? "text-green-600" 
                : "bg-gradient-to-r " + service.gradient + " text-white bg-clip-text"
            }`}>
              {service.price}
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-base font-bold text-white drop-shadow-md">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Section - Compact */}
        <div className="p-4">
          {/* Description */}
          <p className="text-xs text-zinc-500 line-clamp-2">
            {service.description}
          </p>

          {/* Benefit - Compact */}
          <div className={`mt-3 flex items-center gap-2 rounded-lg bg-gradient-to-r ${service.bgLight} p-2`}>
            <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
            <p className="text-xs font-medium text-zinc-700 truncate">
              {service.benefit}
            </p>
          </div>

          {/* Action Link */}
          <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-3">
            <span className={`text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
              View Details
            </span>
            <ArrowRight className={`h-3.5 w-3.5 text-zinc-400 transition-all group-hover:translate-x-1 group-hover:text-cyan-500`} />
          </div>
        </div>

        {/* Hover Shine */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full pointer-events-none" />
      </div>
    </div>
  );
}

// Stats Component
function StatsBar() {
  const stats = [
    { value: "50K+", label: "Tests Done", icon: "🔬" },
    { value: "15+", label: "Years Experience", icon: "⭐" },
    { value: "4.9", label: "Patient Rating", icon: "💯" },
    { value: "24h", label: "Report Time", icon: "⚡" },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="group flex items-center gap-3 rounded-2xl bg-white/80 backdrop-blur-sm p-4 shadow-md border border-zinc-100 transition-all hover:shadow-lg hover:-translate-y-0.5"
          style={{
            animation: `fadeInUp 0.4s ease-out ${i * 0.1}s both`,
          }}
        >
          <span className="text-2xl">{stat.icon}</span>
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-xs text-zinc-500">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TechnologySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-cyan-50/20 py-16 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Premium Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-1.5 border border-cyan-200">
            <TrendingUp className="h-3.5 w-3.5 text-cyan-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
              Our Expertise
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <SectionHeading
          label="✨ Comprehensive Care"
          title={
            <span className="bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-700 bg-clip-text text-transparent">
              Diagnostic Services
            </span>
          }
          description="Advanced equipment and experienced professionals delivering accurate results with timely reports."
          centered
        />

        {/* Services Grid - Compact 3 Columns */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diagnosticServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>



   
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}