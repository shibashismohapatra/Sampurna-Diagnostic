"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Home, Info, MessageCircle, Pill, Calendar } from "lucide-react";
import { siteConfig } from "../../data/site";

// Updated navigation for Diagnostic Center
const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/Diagnostics", label: "Diagnostics", icon: MessageCircle },
  { href: "/pharmacy", label: "Pharmacy", icon: Pill },
  { href: "/appointment", label: "Appointment", icon: Calendar },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_-8px_rgba(6,182,212,0.12)] border-b border-cyan-100/30"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo Section */}
          <Link href="/" className="group relative flex items-center gap-3">
            {/* Logo Container */}
            {/* <div className="relative">
              {siteConfig.Logo && !logoError ? (
                <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 group-hover:scale-105 lg:h-12 lg:w-12">

                  <Image
                    src={siteConfig.Logo}
                    alt={siteConfig.brandName}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1024px) 40px, 48px"
                    onError={() => setLogoError(true)}
                  />

                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md transition-all duration-300 group-hover:scale-105 lg:h-12 lg:w-12">
                  <span className="text-lg font-bold text-white">
                    {siteConfig.brandName?.[0] || "M"}
                  </span>
                </div>
              )}
            </div> */}
          </Link>

          {/* Desktop Navigation - Minimal Premium Style */}
          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-0.5 rounded-full bg-white/40 p-1 backdrop-blur-sm border border-cyan-100/30 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative rounded-full px-5 py-2 text-sm font-medium text-zinc-600 transition-all duration-300 hover:text-cyan-600"
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Hover Background */}
                  <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-cyan-500/0 to-blue-500/0 opacity-0 transition-all duration-300 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 group-hover:opacity-100" />
                  {/* Active Indicator Line */}
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-3/4" />
                </Link>
              ))}
            </div>
          </nav>

          {/* Desktop CTA Buttons - Refined Premium Style */}
          <div className="hidden items-center gap-2.5 lg:flex">
            {/* Phone Button */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-cyan-200/50 bg-white/40 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300 hover:bg-white/60 hover:shadow-lg"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-500/5 via-cyan-500/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Phone className="relative h-4 w-4 text-cyan-600 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative text-sm font-semibold text-cyan-700">
                {siteConfig.phone}
              </span>
            </a>

            {/* WhatsApp Button - Premium Gradient */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello! I have an inquiry about Diagnostic services.")}`}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/20 via-transparent to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative text-base">💬</span>
              <span className="relative">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button - Refined */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative rounded-xl p-2.5 text-zinc-600 transition-all duration-300 hover:bg-cyan-50/80 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative h-5 w-5">
              <Menu
                className={`absolute inset-0 transition-all duration-300 ${isOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                  }`}
              />
              <X
                className={`absolute inset-0 transition-all duration-300 ${isOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Premium Glass Drawer */}
      <div
        className={`fixed inset-x-0 top-20 z-40 transition-all duration-500 ease-out lg:hidden ${isOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-6"
          }`}
      >
        <div className="mx-4 overflow-hidden rounded-3xl border border-cyan-100/40 bg-white/95 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
          <nav className="max-h-[calc(100vh-6rem)] overflow-y-auto py-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group relative flex items-center gap-4 border-b border-zinc-100/50 px-5 py-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-50/80 hover:to-transparent"
                style={{
                  animation: isOpen ? `slideIn 0.4s ease-out ${index * 50}ms both` : "none",
                }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 text-cyan-600 transition-all duration-300 group-hover:from-cyan-100 group-hover:to-blue-100 group-hover:scale-110">
                  <link.icon className="h-4 w-4" />
                </div>
                <span className="flex-1 text-base font-medium text-zinc-700 transition-colors group-hover:text-cyan-700">
                  {link.label}
                </span>
                <span className="text-zinc-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-500">
                  →
                </span>
              </Link>
            ))}

            {/* Mobile Action Buttons - Premium Style */}
            <div className="space-y-2.5 bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/50 p-5">
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-center gap-3 rounded-2xl border border-cyan-200/50 bg-white/80 p-3.5 text-sm font-semibold text-cyan-700 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>Call {siteConfig.phone}</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello! I have an inquiry about Diagnostic services.")}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 p-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-[1.01]"
              >
                <span className="text-lg">💬</span>
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-gradient-to-b from-black/20 to-black/5 backdrop-blur-[2px] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}