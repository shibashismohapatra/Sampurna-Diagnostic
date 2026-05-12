"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight, Heart, Shield, Award } from "lucide-react";
import { siteConfig } from "@/data/site";

// Quick links for Diagnostic Center
const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/packages", label: "Health Packages" },
  { href: "/services", label: "Diagnostic Services" },
  { href: "/doctors", label: "Our Doctors" },
  { href: "/contact", label: "Contact Us" },
  { href: "/appointment", label: "Book Appointment" },
];


export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="relative bg-gradient-to-br from-white via-slate-50 to-cyan-50/30 text-zinc-700">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/5 blur-3xl" />
      </div>

    

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            {/* Logo & Brand */}
            {/* <Link href="/" className="group flex items-center gap-3">
              <div className="relative">
                {siteConfig.Logo && !logoError ? (
                  <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 group-hover:scale-105 lg:h-12 lg:w-12">
                    <Image
                      src={siteConfig.Logo}
                      alt={siteConfig.brandName}
                      fill
                      className="object-contain p-1"
                      priority
                      onError={() => setLogoError(true)}
                    />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md transition-all duration-300 group-hover:scale-105 lg:h-12 lg:w-12">
                   
                  </div>
                )}
              </div>
             
            </Link> */}
            
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Accurate diagnostic services, blood tests, ECG, and health checkup 
              packages in Puri, Odisha. Home collection available with expert doctors.
            </p>
            
            {/* Social Links - Premium Light Design */}
            <div className="mt-6 flex gap-3">
              {siteConfig.instagramUrl && (
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-100 to-white text-zinc-500 shadow-sm border border-zinc-200 transition-all duration-300 hover:from-pink-500 hover:to-purple-500 hover:text-white hover:shadow-lg hover:shadow-pink-500/25 hover:-translate-y-0.5 hover:border-transparent"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                  </svg>
                </a>
              )}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-100 to-white text-zinc-500 shadow-sm border border-zinc-200 transition-all duration-300 hover:from-green-500 hover:to-emerald-500 hover:text-white hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 hover:border-transparent"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links - Enhanced Light */}
          <div>
            <h3 className="relative inline-block text-sm font-semibold uppercase tracking-wider text-zinc-800">
              Quick Links
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            </h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-zinc-500 transition-all hover:text-cyan-600"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-cyan-500 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Health Packages - Enhanced Light */}
          <div>
            <h3 className="relative inline-block text-sm font-semibold uppercase tracking-wider text-zinc-800">
              Health Packages
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            </h3>
            <ul className="mt-5 space-y-2.5">
              {siteConfig.healthPackages?.map((pkg) => (
                <li key={pkg.slug}>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="group flex items-center justify-between text-sm transition-all"
                  >
                    <span className="text-zinc-500 group-hover:text-cyan-600">{pkg.name}</span>
                    <span className="rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-2.5 py-1 text-xs font-semibold text-cyan-600 border border-cyan-200">
                      ₹{pkg.price}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-1.5 text-sm font-medium text-cyan-600 border border-cyan-200 transition-all hover:bg-cyan-500/20 hover:border-cyan-300"
                >
                  View All Packages
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Premium Light Cards */}
          <div>
            <h3 className="relative inline-block text-sm font-semibold uppercase tracking-wider text-zinc-800">
              Contact Info
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-200 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all">
                  <MapPin className="h-4 w-4 text-cyan-600" />
                </div>
                <span className="text-sm text-zinc-500 leading-relaxed">
                  {siteConfig.fullAddress || siteConfig.address}
                </span>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-200 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all">
                  <Phone className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex flex-col">
                  <a href={`tel:${siteConfig.phone}`} className="text-sm font-medium text-zinc-600 hover:text-cyan-600 transition">
                    {siteConfig.phone}
                  </a>
                  {siteConfig.phoneSecondary && (
                    <a href={`tel:${siteConfig.phoneSecondary}`} className="text-sm font-medium text-zinc-600 hover:text-cyan-600 transition">
                      {siteConfig.phoneSecondary}
                    </a>
                  )}
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-zinc-500 hover:text-cyan-600 transition">
                  {siteConfig.email}
                </a>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-200 group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all">
                  <Clock className="h-4 w-4 text-amber-600" />
                </div>
                <div className="text-sm text-zinc-500">
                  {typeof siteConfig.timings === 'string' ? (
                    <p>{siteConfig.timings}</p>
                  ) : (
                    <div className="space-y-1">
                      <p className="font-medium text-zinc-600">{siteConfig.timings?.opd}</p>
                      <p className="text-xs text-zinc-400">{siteConfig.timings?.diagnostic}</p>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Premium Light Glassmorphism */}
      <div className="relative border-t border-cyan-100/50 bg-gradient-to-r from-white/80 via-slate-50/80 to-cyan-50/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs md:flex-row md:px-6 lg:px-8">
          <p className="text-zinc-500">
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              {siteConfig.brandName}
            </span>
            . All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy-policy" 
              className="text-zinc-500 transition-all hover:text-cyan-600 hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <Link 
              href="/terms-and-conditions" 
              className="text-zinc-500 transition-all hover:text-cyan-600 hover:underline underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}