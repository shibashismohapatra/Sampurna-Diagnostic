import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight, Building2 } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/shared/SectionHeading";
import { ContactForm, TrustStats } from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Maa Mangala Diagnostic Center, Puri",
  description:
    "Contact Maa Mangala Diagnostic Center in Matiapada, Puri, Odisha. Call us at 7064821268 or 8280600348, email us, or book a home collection for diagnostic tests.",
};


export default function ContactPage() {
  return (
    <main className="pt-20 lg:pt-28">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-cyan-200 px-4 py-1.5 shadow-sm">
              <MapPin className="h-3.5 w-3.5 text-cyan-600" />
              <span className="text-xs font-medium text-cyan-700">Matiapada, Puri, Odisha</span>
            </div>
          </div>

          <SectionHeading
            label="📞 Get in Touch"
            title={
              <span className="bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-700 bg-clip-text text-transparent">
                Contact Us
              </span>
            }
            description="We're here to help with all your diagnostic needs. Reach out via phone, WhatsApp, email, or visit our center."
            centered
          />
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Left Column - Contact Details */}
          <div>
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-cyan-600" />
                Center Information
              </h2>
              
              {/* Contact Cards */}
              <div className="mt-6 space-y-3">
                {/* Address Card */}
                <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-cyan-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/20">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-800">Visit Us</p>
                    <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                      Maa Mangala Diagnostic Center<br />
                      Matiapada Chhaka, Konark Road<br />
                      Puri, Odisha – 752002
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-cyan-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-md shadow-green-500/20">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-zinc-800">Call Us</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <a
                        href="tel:+917064821268"
                        className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-700 hover:bg-cyan-100 transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        7064821268
                      </a>
                      <a
                        href="tel:+918280600348"
                        className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-700 hover:bg-cyan-100 transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        8280600348
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-green-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-md shadow-green-500/20">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-800">WhatsApp</p>
                    <a
                      href="https://wa.me/917064821268"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm text-green-600 hover:text-green-700 font-medium"
                    >
                      Chat with us
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-blue-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md shadow-blue-500/20">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-800">Email Us</p>
                    <a
                      href="mailto:contact@maamangaladiagnostic.com"
                      className="mt-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      contact@maamangaladiagnostic.com
                    </a>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-amber-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-md shadow-amber-500/20">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-800">Working Hours</p>
                    <div className="mt-1 space-y-1 text-sm text-zinc-600">
                      <p><span className="font-medium">OPD:</span> Wed, 10 AM – 1 PM</p>
                      <p><span className="font-medium">Diagnostic:</span> Mon-Sat, 8 AM – 6 PM</p>
                      <p className="text-rose-500">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Home Collection Banner */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-5 border border-green-200">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-md">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <p className="font-bold text-green-800">Free Home Collection</p>
                    <p className="text-sm text-green-700">
                      Convenient sample collection at your doorstep. Call to schedule!
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Stats */}
              <TrustStats />

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=Matiapada+Chhaka+Konark+Road+Puri+Odisha&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maa Mangala Diagnostic Center Location"
                  className="block"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="sticky top-24">
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-zinc-100">
                {/* Form Header */}
                <div className="border-b border-zinc-100 bg-gradient-to-r from-cyan-50 to-blue-50 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                      <Send className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-zinc-800">Send us a Message</h2>
                      <p className="text-sm text-zinc-500">
                        We'll get back to you within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-6">
                  <ContactForm />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 flex gap-3">
                <a
                  href="tel:+917064821268"
                  className="group flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/35 hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/917064821268"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 py-3.5 font-semibold text-green-700 transition-all hover:bg-green-100 hover:border-green-300 hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}