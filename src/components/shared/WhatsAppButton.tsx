import { siteConfig } from "@/data/site";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function WhatsAppButton({
  message = "Hello, I'd like to book an appointment at Smiles by Dr Annu.",
  label = "WhatsApp Us",
  className = "",
  size = "md",
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const iconSize = { sm: 16, md: 18, lg: 22 };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded-full bg-green-500 font-semibold text-white shadow-lg shadow-green-500/25 transition hover:bg-green-600 hover:shadow-green-500/40 ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle size={iconSize[size]} />
      {label}
    </a>
  );
}
