import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import { siteConfig } from "@/data/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Get the primary doctor name safely
const doctorName = siteConfig.doctors?.[0]?.name || siteConfig.doctor?.name || "Medical Specialist";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brandName} — Diagnostic & Healthcare Center, Puri`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Maa Mangala Diagnostic Center in Matiapada, Puri offers blood tests, ECG, health packages, and OPD services with experienced doctors. Home collection available.",
  keywords: [
    "diagnostic center puri",
    "blood test puri",
    "health checkup puri",
    "pathology lab puri",
    "ECG test puri",
    "diabetic consultant puri",
    "pediatrician puri",
    "Maa Mangala Diagnostic",
    "diagnostic center Matiapada",
    "home collection puri",
  ],
  authors: [{ name: doctorName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} — Diagnostic & Healthcare Center, Puri`,
    description:
      "Affordable health checkups, diagnostic tests, and expert doctors at Maa Mangala Diagnostic Center, Matiapada, Puri. Home collection available.",
    url: siteConfig.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: siteConfig.brandName,
              description:
                "Diagnostic center offering blood tests, ECG, health packages, and OPD services in Puri, Odisha",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Matiapada Chhaka, Konark Road",
                addressLocality: siteConfig.city,
                addressRegion: siteConfig.state,
                postalCode: "752002",
                addressCountry: siteConfig.country,
              },
              telephone: siteConfig.phone,
              url: siteConfig.siteUrl || "https://maamangaladiagnostic.com",
              openingHours: ["Mo-Sa 08:00-18:00", "We 10:00-13:00"],
              priceRange: "₹",
              availableService: [
                {
                  "@type": "MedicalTest",
                  name: "Blood Tests",
                },
                {
                  "@type": "MedicalTest",
                  name: "ECG",
                },
                {
                  "@type": "MedicalTest",
                  name: "Health Checkup Packages",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Health Packages",
                itemListElement: siteConfig.healthPackages?.map((pkg, index) => ({
                  "@type": "Offer",
                  position: index + 1,
                  name: pkg.name,
                  price: pkg.price,
                  priceCurrency: "INR",
                })),
              },
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-white text-graphite`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}