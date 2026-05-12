"use client";

import { useState } from "react";
import { Bot, X, Send, Minimize2, Maximize2, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! I'm your healthcare assistant. How can I help you today?", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "📅 Book Appointment",
    "💊 Health Packages",
    "📋 Test Reports",
    "🏠 Home Collection",
    "👨‍⚕️ Contact Doctor",
    "⏰ Working Hours",
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    const cleanReply = reply.replace(/[^\w\s]/g, '').trim();
    setMessages([...messages, { text: cleanReply, isBot: false }]);
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponse = getBotResponse(cleanReply);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("appointment") || lowerQuery.includes("book")) {
      return `You can book an appointment online through our website or call us at ${siteConfig.phone}. OPD consultation is available on ${siteConfig.consultationDay} from ${siteConfig.consultationTime}. Would you like me to help you schedule one?`;
    } else if (lowerQuery.includes("package") || lowerQuery.includes("health")) {
      return "We offer various health packages starting from ₹899. Our popular packages include Basic Health Check-up (₹1,099), Diabetes Care (₹899), and Women Wellness (₹1,499). Would you like to know more about any specific package?";
    } else if (lowerQuery.includes("report") || lowerQuery.includes("test")) {
      return "Test reports are usually available within 24 hours. You can collect them from our center or receive them via WhatsApp/Email. We also have a patient portal where you can download your reports online.";
    } else if (lowerQuery.includes("home") || lowerQuery.includes("collection")) {
      return "Yes, we offer free home collection services! Our trained phlebotomists will visit your home for sample collection. Please share your address and preferred time slot, and we'll schedule it for you.";
    } else if (lowerQuery.includes("doctor") || lowerQuery.includes("contact")) {
      return `You can reach our doctors at ${siteConfig.phone} or visit us at ${siteConfig.address}. Our experienced medical team is available to assist you with all your healthcare needs.`;
    } else if (lowerQuery.includes("hour") || lowerQuery.includes("timing") || lowerQuery.includes("open")) {
      return `Our diagnostic center is open Monday to Saturday from 8:00 AM to 8:00 PM. Sunday is closed. OPD consultation is available on ${siteConfig.consultationDay} from ${siteConfig.consultationTime}.`;
    } else if (lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("charges")) {
      return "Our diagnostic tests are competitively priced. Basic blood tests start from ₹200, and comprehensive health packages from ₹899. You can view our complete price list on the packages page or contact us for specific test prices.";
    } else if (lowerQuery.includes("location") || lowerQuery.includes("address") || lowerQuery.includes("where")) {
      return `We are located at ${siteConfig.address}. We're easily accessible and have ample parking space. Would you like directions?`;
    } else if (lowerQuery.includes("thank")) {
      return "You're welcome! 😊 Is there anything else I can help you with? We're here to assist you 24/7.";
    } else if (lowerQuery.includes("hello") || lowerQuery.includes("hi")) {
      return "Hello! 👋 How can I assist you today? You can ask me about appointments, health packages, test reports, home collection, or any other queries you may have.";
    } else {
      return "Thank you for reaching out! For specific queries, please call us at ${siteConfig.phone} or visit our website. You can also ask me about appointments, packages, test reports, or home collection services.";
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed z-50 bg-white shadow-2xl border border-zinc-200 transition-all duration-300 flex flex-col
        ${isMinimized 
          ? "bottom-20 right-4 w-72 h-14 rounded-2xl md:bottom-24 md:right-6" 
          : "inset-0 m-0 rounded-none md:inset-auto md:bottom-24 md:right-6 md:w-96 md:h-[550px] md:rounded-3xl"
        }`}
    >
      {/* Header */}
      <div className={`flex items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-white
        ${!isMinimized && "md:rounded-t-3xl"}`}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Bot className="h-5 w-5" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-cyan-500 bg-green-400" />
          </div>
          <div>
            <h3 className="font-semibold flex items-center gap-1.5">
              Health Assistant
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
            </h3>
            <p className="text-xs text-cyan-100">
              {isTyping ? "Typing..." : "Online • Replies instantly"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="rounded-full p-1.5 transition-colors hover:bg-white/20"
            aria-label={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 transition-colors hover:bg-white/20"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-50 to-white p-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-3 flex ${msg.isBot ? "justify-start" : "justify-end"} animate-fade-in`}
              >
                {msg.isBot && (
                  <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                    msg.isBot
                      ? "bg-white text-zinc-700 border border-zinc-100"
                      : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="mb-3 flex justify-start">
                <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 shadow-sm border border-zinc-100">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div className="border-t border-zinc-100 bg-white p-3">
            <p className="mb-2 text-xs font-medium text-zinc-500">Quick replies:</p>
            <div className="flex flex-wrap gap-1.5">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="rounded-full border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 px-3 py-1.5 text-xs font-medium text-cyan-700 transition-all hover:from-cyan-100 hover:to-blue-100 hover:border-cyan-300 hover:shadow-sm"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-zinc-100 bg-white p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}