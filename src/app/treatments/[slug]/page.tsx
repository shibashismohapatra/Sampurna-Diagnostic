import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { treatments } from "@/data/treatments";
import { siteConfig } from "@/data/site";
import FAQAccordion from "@/components/shared/FAQAccordion";
import BookingCTA from "@/components/home/BookingCTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) return {};

  return {
    title: `${treatment.title} in Sambalpur — ${siteConfig.brandName}`,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) notFound();

  return (
    <main className="pt-24 lg:pt-32">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center lg:gap-16">
            <div>
              <Link
                href="/treatments"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-700"
              >
                &larr; All Treatments
              </Link>
              <h1 className="mt-4 text-4xl font-bold text-zinc-900 md:text-5xl">
                {treatment.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                {treatment.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/appointment"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40"
                >
                  Book This Treatment
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hi, I'd like to know more about ${treatment.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cyan-200 px-6 py-3 font-semibold text-cyan-700 transition hover:bg-cyan-50"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-zinc-100 shadow-xl">
              <Image
                src={treatment.image}
                alt={treatment.title}
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                When You Need This
              </span>
              <h2 className="mt-3 text-3xl font-bold text-zinc-900">
                Signs &amp; Symptoms
              </h2>
              <ul className="mt-6 space-y-3">
                {treatment.symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700">
                      ✓
                    </span>
                    <span className="text-zinc-600">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Why Choose This
              </span>
              <h2 className="mt-3 text-3xl font-bold text-zinc-900">
                Benefits
              </h2>
              <ul className="mt-6 space-y-3">
                {treatment.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                      ★
                    </span>
                    <span className="text-zinc-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="bg-zinc-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Treatment Process
            </span>
            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              How It Works — Step by Step
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {treatment.process.map((step, index) => (
              <div
                key={step.step}
                className="flex gap-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-lg font-bold text-white shadow-lg shadow-cyan-500/20">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">
                    {step.step}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Video */}
      {treatment.relatedVideo && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Watch
            </span>
            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              See This Treatment in Action
            </h2>
            <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200 shadow-xl">
              <div className="aspect-[9/16] max-h-[500px]">
                <iframe
                  src={`https://www.youtube.com/embed/${treatment.relatedVideo.split("/").pop()}?rel=0`}
                  title={`${treatment.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {treatment.faqs.length > 0 && (
        <section className="bg-zinc-50 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                FAQ
              </span>
              <h2 className="mt-3 text-3xl font-bold text-zinc-900">
                Common Questions About {treatment.title}
              </h2>
            </div>
            <div className="mt-10">
              <FAQAccordion items={treatment.faqs} />
            </div>
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: treatment.faqs.map((faq) => ({
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
        </section>
      )}

      <BookingCTA />
    </main>
  );
}
