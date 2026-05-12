"use client";

import { useState } from "react";
import { Phone, MessageCircle, CalendarCheck, Bot, Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import ChatBot from "./ChatBot";

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const floatingButtons = [
    {
      id: "chat",
      icon: Bot,
      label: "AI Chat",
      color: "from-violet-500 to-purple-600",
      shadowColor: "shadow-violet-500/30",
      tooltip: "Chat with AI Assistant",
      hasBadge: true,
      onClick: () => setIsChatOpen(!isChatOpen),
      isActive: isChatOpen,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      color: "from-green-500 to-green-600",
      shadowColor: "shadow-green-500/30",
      tooltip: "Chat on WhatsApp",
      href: `https://wa.me/${siteConfig.whatsappNumber}`,
      isExternal: true,
    },
  
    {
      id: "book",
      icon: CalendarCheck,
      label: "Book",
      color: "from-amber-500 to-orange-500",
      shadowColor: "shadow-amber-500/30",
      tooltip: "Book Appointment",
      href: "/appointment",
    },
  ];

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex">
        {floatingButtons.map((btn) => {
          const isActive = 'isActive' in btn ? btn.isActive : false;
          
          const buttonContent = (
            <button
              onClick={'onClick' in btn ? btn.onClick : undefined}
              onMouseEnter={() => setShowTooltip(btn.id)}
              onMouseLeave={() => setShowTooltip(null)}
              className={`group relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/30"
                  : `bg-gradient-to-br ${btn.color} text-white ${btn.shadowColor}`
              }`}
              aria-label={btn.label}
            >
              {isActive ? (
                <span className="text-xl font-bold">✕</span>
              ) : (
                <>
                  <btn.icon className="h-6 w-6" />
                  {btn.hasBadge && (
                    <>
                      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400">
                        <Sparkles className="h-2.5 w-2.5 text-purple-900" />
                      </span>
                      <span className="absolute inset-0 animate-ping rounded-full bg-violet-400/30" />
                    </>
                  )}
                  {!btn.hasBadge && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
                  )}
                </>
              )}
            </button>
          );

          return (
            <div key={btn.id} className="relative">
              {showTooltip === btn.id && (
                <div className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-zinc-800 px-3 py-2 text-xs text-white shadow-lg">
                  {btn.id === "chat" && (
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-yellow-300" />
                      {btn.tooltip}
                    </span>
                  )}
                  {btn.id !== "chat" && btn.tooltip}
                  <div className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-zinc-800" />
                </div>
              )}
              
              {'href' in btn ? (
                <Link
                  href={btn.href}
                  {...(btn.isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {buttonContent}
                </Link>
              ) : (
                buttonContent
              )}
            </div>
          );
        })}
      </div>

      {/* ChatBot Component */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200/50 bg-white/95 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-4">
          {/* AI Chat Mobile */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="relative flex flex-col items-center gap-1 py-3 text-purple-600 transition active:bg-purple-50"
          >
            <div className="relative">
              <Bot className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-yellow-400" />
            </div>
            <span className="text-xs font-semibold">AI Chat</span>
          </button>

          {/* Call Mobile */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex flex-col items-center gap-1 border-l border-zinc-200/50 py-3 text-cyan-600 transition active:bg-cyan-50"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs font-semibold">Call</span>
          </a>

          {/* WhatsApp Mobile */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 border-l border-zinc-200/50 py-3 text-green-600 transition active:bg-green-50"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>

          {/* Book Mobile */}
          <Link
            href="/appointment"
            className="flex flex-col items-center gap-1 border-l border-zinc-200/50 py-3 text-amber-600 transition active:bg-amber-50"
          >
            <CalendarCheck className="h-5 w-5" />
            <span className="text-xs font-semibold">Book</span>
          </Link>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isChatOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsChatOpen(false)}
        />
      )}
    </>
  );
}