import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import FAQAccordion from "@/components/shared/FAQAccordion";
import SectionHeading from "@/components/shared/SectionHeading";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions About Dental Treatments",
  description:
    "Find answers to common questions about dental treatments, technology, appointments, and visiting Smiles by Dr. Annu in Sambalpur, Odisha.",
};

export default function FAQPage() {
  const categories = [...new Set(faqs.map((f) => f.category).filter(Boolean))];

  return (
    <main className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Answers to common questions about dental treatments, technology, and visiting our clinic."
            centered
          />
        </div>
      </section>

      {/* FAQ by Category */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-12 last:mb-0">
              <h2 className="mb-6 text-xl font-bold text-zinc-900">
                {category}
              </h2>
              <FAQAccordion
                items={faqs.filter((f) => f.category === category)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <BookingCTA />
    </main>
  );
}
