import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/shared/TestimonialCard";
import SectionHeading from "@/components/shared/SectionHeading";
import BookingCTA from "@/components/home/BookingCTA";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Patient Testimonials — What Our Patients Say",
  description:
    "Read real patient reviews and testimonials about diagnostic services and health checkups at Maa Mangala Diagnostic Center in Puri, Odisha.",
};

export default function TestimonialsPage() {
  return (
    <main className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-linear-to-br from-cyan-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="What Our Patients Say"
            description="Real experiences from patients who trusted Maa Mangala Diagnostic Center for their healthcare. Every review reflects our commitment to accuracy and care."
            centered
          />
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: siteConfig.brandName,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: String(testimonials.length),
            },
            review: testimonials.map((t) => ({
              "@type": "Review",
              author: { "@type": "Person", name: t.name },
              reviewRating: {
                "@type": "Rating",
                ratingValue: String(t.rating),
              },
              reviewBody: t.review,
            })),
          }),
        }}
      />

      <BookingCTA />
    </main>
  );
}
