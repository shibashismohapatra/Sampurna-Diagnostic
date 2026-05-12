"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Building2,
  Users,
  Award,
} from "lucide-react";

// ── Contact Form ─────────────────────────────────────────────────────────────
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const emailAddress = "contact@maamangaladiagnostic.com";
    const subject = `Contact Form: ${formData.subject} - ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Maa Mangala Diagnostic Center Contact Form`.trim();

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 500);
  };

  const subjectOptions = [
    "General Inquiry",
    "Book Appointment",
    "Home Collection",
    "Test Results",
    "Feedback",
    "Other",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm transition-all focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-50"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm transition-all focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-50"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+91 XXXXX XXXXX"
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm transition-all focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-50"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-1.5">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm transition-all focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-50"
        >
          <option value="">Select a subject</option>
          {subjectOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Please describe your query or request..."
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm transition-all focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-50 resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/35 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Opening Email...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message via Email
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>

      {/* Status */}
      {submitStatus === "success" && (
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700 border border-green-200">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>Email client opened! Please send the email from your mail app.</span>
        </div>
      )}
      {submitStatus === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 border border-red-200">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>Something went wrong. Please try again or contact us directly.</span>
        </div>
      )}

      <p className="text-xs text-zinc-400 text-center">
        By submitting, your default email client will open with a pre-filled message.
      </p>
    </form>
  );
}

// ── Trust Stats ───────────────────────────────────────────────────────────────
export function TrustStats() {
  const stats = [
    { icon: Building2, value: "15+", label: "Years of Service" },
    { icon: Users, value: "50K+", label: "Happy Patients" },
    { icon: Award, value: "NABL", label: "Certified Lab" },
  ];

  return (
    <div className="mt-8 grid grid-cols-3 gap-3">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="text-center p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100"
        >
          <stat.icon className="h-5 w-5 text-cyan-600 mx-auto mb-1" />
          <p className="text-lg font-bold text-cyan-700">{stat.value}</p>
          <p className="text-[10px] text-zinc-500 uppercase tracking-wide">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
