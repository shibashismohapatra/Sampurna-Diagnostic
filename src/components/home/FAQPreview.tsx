import { faqs } from "@/data/faqs";
import FAQAccordion from "@/components/shared/FAQAccordion";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";

export default function FAQPreview() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about dental treatments, technology, and visiting our clinic."
          centered
        />

        <div className="mt-12">
          <FAQAccordion items={faqs.slice(0, 5)} />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex rounded-full border border-cyan-200 bg-white px-6 py-3 text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-50"
          >
            View All FAQs &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
