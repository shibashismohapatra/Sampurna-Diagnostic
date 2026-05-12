import type { Metadata } from "next";
import { technologies } from "@/data/technology";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "Advanced Dental Technology — Digital X-Ray, Laser, 3D Scanner",
  description:
    "Explore the advanced dental technology at Smiles by Dr. Annu — digital X-rays, laser dentistry, rotary endodontics, 3D dental scanners, and painless injection systems.",
};

export default function TechnologyPage() {
  return (
    <main className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            label="Our Technology"
            title="Advanced Dental Technology"
            description="We invest in the latest dental technology to provide precise, comfortable, and efficient treatments. Every visit benefits from modern diagnostic and treatment tools."
            centered
          />
        </div>
      </section>

      {/* Technology Cards */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="space-y-16">
            {technologies.map((tech, index) => (
              <div
                key={tech.title}
                className={`grid items-center gap-10 md:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <div className="overflow-hidden rounded-3xl bg-zinc-100 shadow-xl">
                    <Image
                      src={tech.image}
                      alt={tech.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <span className="inline-flex rounded-full bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-700">
                    {tech.benefit}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-zinc-900">
                    {tech.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-zinc-600">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </main>
  );
}
