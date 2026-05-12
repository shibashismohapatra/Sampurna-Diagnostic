import type { Metadata } from "next";
import { treatments } from "@/data/treatments";
import TreatmentCard from "@/components/shared/TreatmentCard";
import SectionHeading from "@/components/shared/SectionHeading";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "Dental Treatments — Root Canal, Implants, Whitening, Braces & More",
  description:
    "Explore our comprehensive dental treatments including root canal treatment, dental implants, teeth whitening, braces & aligners, smile design, pediatric dentistry, and more at Smiles by Dr. Annu in Sambalpur.",
};

export default function TreatmentsPage() {
  return (
    <main className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Our Dental Treatments"
            description="Comprehensive dental care from routine checkups to advanced implant and laser procedures. Each treatment is performed with precision, modern technology, and a patient-first approach."
            centered
          />
        </div>
      </section>

      {/* Treatment Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((t) => (
              <TreatmentCard
                key={t.slug}
                slug={t.slug}
                title={t.title}
                shortDescription={t.shortDescription}
                image={t.image}
              />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
