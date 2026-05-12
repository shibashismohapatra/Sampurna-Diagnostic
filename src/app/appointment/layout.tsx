import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: `Book your appointment at ${siteConfig.brandName}. Fill in your details and we'll confirm via WhatsApp.`,
};

export default function AppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
