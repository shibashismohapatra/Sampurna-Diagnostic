"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";
import Image from "next/image";

// Health packages data
const healthPackages = [
  {
    slug: "basic-health-checkup",
    title: "Basic Health Check-up",
    price: "₹1,099",
    originalPrice: "₹2,000",
    discount: "45% OFF",
    shortDescription: "Complete basic health screening including TSH, CBC, FBS, Kidney Profile, Liver Profile, and Lipid Profile.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=250&fit=crop", // general lab tests
    tests: ["TSH", "CBC", "FBS", "Kidney Profile", "Liver Profile", "Lipid Profile"],
    badge: "🏆 Best Value",
    badgeColor: "from-amber-500 to-orange-500",
    popular: true,
  },
  {
    slug: "vasant-wellness-package",
    title: "Vasant Wellness Package",
    price: "₹1,299",
    originalPrice: "₹2,299",
    discount: "43% OFF",
    shortDescription: "Comprehensive wellness package including Thyroid Profile, Iron Studies, Kidney Profile, HbA1c, CBC, Liver, and Lipid tests.",
    image: "https://images.unsplash.com/photo-1580281658629-3d0fbd8d6a7c?w=400&h=250&fit=crop", // full health screening
    tests: ["Thyroid Profile", "Iron Studies", "Kidney Profile", "HbA1c", "CBC", "Liver Profile", "Lipid Profile"],
    badge: "✨ Most Popular",
    badgeColor: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    slug: "diabetes-care-package",
    title: "Diabetes Care Package",
    price: "₹899",
    originalPrice: "₹1,599",
    discount: "44% OFF",
    shortDescription: "Comprehensive diabetes screening with HbA1c, FBS, PPBS, Kidney Profile, and Lipid Profile.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=250&fit=crop", // glucose / diabetes testing
    tests: ["HbA1c", "FBS", "PPBS", "Kidney Profile", "Lipid Profile", "Urine Routine"],
    badge: "🩸 Diabetes Focus",
    badgeColor: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    slug: "women-wellness-package",
    title: "Women Wellness Package",
    price: "₹1,499",
    originalPrice: "₹2,799",
    discount: "46% OFF",
    shortDescription: "Complete health checkup for women including Thyroid, Iron, Calcium, Vitamin D, and more.",
    image: "https://eurowomen.org/wp-content/uploads/2023/03/swedish5.jpg", // women healthcare
    tests: ["Thyroid Profile", "Iron Studies", "Calcium", "Vitamin D", "CBC", "Lipid Profile"],
    badge: "🌸 Women's Health",
    badgeColor: "from-pink-500 to-rose-500",
    popular: false,
  },
];

export default function TreatmentsOverview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-cyan-50/30 py-20 lg:py-28">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Enhanced Section Heading */}
        <div className="relative">
          <SectionHeading
            label="🎯 Curated Health Packages"
            title={
              <>
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Affordable Health
                </span>{" "}
                Checkups
              </>
            }
            description="Comprehensive health screening packages at discounted rates. Book your appointment today for accurate diagnosis and expert consultation."
            centered
          />
          
          {/* Decorative Line */}
          <div className="absolute -bottom-4 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100" />
        </div>

        {/* Packages Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {healthPackages.map((pkg, index) => (
            <div
              key={pkg.slug}
              className="group relative"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Popular Badge - Absolute positioned */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2">
                  <div className={`rounded-full bg-gradient-to-r ${pkg.badgeColor} px-4 py-1.5 text-xs font-bold text-white shadow-lg`}>
                    {pkg.badge}
                  </div>
                </div>
              )}

              {/* Main Card */}
              <div className="relative h-full overflow-hidden rounded-3xl border border-zinc-200/60 bg-white/80 backdrop-blur-sm shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-cyan-200">
                {/* Discount Ribbon */}
                <div className="absolute -right-12 top-6 z-10 rotate-45 bg-gradient-to-r from-red-500 to-rose-500 px-12 py-1.5 text-xs font-bold text-white shadow-lg">
                  {pkg.discount}
                </div>

                {/* Image Section */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Gradient Overlay for Aesthetics */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none" />

                  {/* Price Tag Floating */}
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/95 px-4 py-2 backdrop-blur-md shadow-lg">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold text-cyan-700">{pkg.price}</span>
                      <span className="text-xs text-zinc-500 line-through">{pkg.originalPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-900 line-clamp-2">
                    {pkg.title}
                  </h3>

                  {/* Savings Indicator */}
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Save {parseInt(pkg.discount)}%
                    </div>
                    <span className="text-xs text-zinc-400">•</span>
                    <span className="text-xs font-medium text-zinc-500">
                      {pkg.tests.length} Tests
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-zinc-600 line-clamp-2">
                    {pkg.shortDescription}
                  </p>

                  {/* Tests Included - Enhanced */}
                  <div className="mt-4">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                        Key Tests Included:
                      </p>
                    </div>
                    
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {pkg.tests.slice(0, 4).map((test) => (
                        <span
                          key={test}
                          className="rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-3 py-1.5 text-xs font-medium text-cyan-700 shadow-sm transition-all hover:shadow-md hover:scale-105"
                        >
                          {test}
                        </span>
                      ))}
                      {pkg.tests.length > 4 && (
                        <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600">
                          +{pkg.tests.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex gap-2">
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="flex-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white text-center shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-[1.02]"
                    >
                      Book Now
                    </Link>
                    <Link
                      href={`/packages/${pkg.slug}#details`}
                      className="group rounded-full border border-cyan-200 bg-white/80 px-4 py-2.5 text-sm font-medium text-cyan-700 backdrop-blur-sm transition-all duration-300 hover:bg-cyan-50 hover:border-cyan-300"
                    >
                      <span className="flex items-center gap-1">
                        Details
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Home Collection Banner */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 p-0.5 shadow-xl">
          <div className="relative rounded-3xl bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 px-6 py-5 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-zinc-800">Free Home Collection Service</p>
                  <p className="text-sm text-zinc-600">Convenient & hygienic sample collection from your doorstep</p>
                </div>
              </div>
              <Link
                href="/home-collection"
                className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-cyan-700 shadow-md transition-all hover:shadow-lg hover:scale-105"
              >
                Schedule Pickup →
              </Link>
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-teal-400/20 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-blue-400/20 blur-2xl" />
          </div>
        </div>

      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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