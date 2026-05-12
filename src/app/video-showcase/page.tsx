import type { Metadata } from "next";
import { youtubeVideos } from "@/data/videos";
import VideoCard from "@/components/shared/VideoCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import SectionHeading from "@/components/shared/SectionHeading";
import BookingCTA from "@/components/home/BookingCTA";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Dental Procedure Videos — Real Treatment Clips & Patient Education",
  description:
    "Watch real dental procedure videos, treatment highlights, and educational clips from Smiles by Dr. Annu in Sambalpur. Build confidence before your visit.",
};

export default function VideoShowcasePage() {
  const videoFaqs = [
    {
      question: "Are these real dental procedures?",
      answer:
        "Yes, all videos showcase real clinical procedures performed at our clinic. They are presented professionally to help patients understand treatments better.",
    },
    {
      question: "Can I watch these before my appointment?",
      answer:
        "Absolutely! We encourage patients to watch relevant videos to understand their upcoming procedures and feel more confident.",
    },
    {
      question: "Do you have videos for specific treatments?",
      answer:
        "Yes, we have procedure-specific videos covering implants, root canals, and other treatments. Check our YouTube channel for the full collection.",
    },
  ];

  return (
    <main className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            label="Video Showcase"
            title="Watch Real Dental Procedure Videos"
            description="Explore real dental procedure highlights, treatment clips, and educational videos from Smiles by Dr. Annu. These videos help patients understand treatments better and feel more confident before visiting the clinic."
            centered
          />
        </div>
      </section>

      {/* Video Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.slice(0, 3).map((video) => (
              <VideoCard key={video.url} {...video} />
            ))}
          </div>

          {/* Mid CTA */}
          <div className="my-12 rounded-3xl bg-gradient-to-r from-cyan-50 to-teal-50 p-8 text-center">
            <h3 className="text-xl font-bold text-zinc-900">
              Want to discuss a procedure?
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Our team is happy to answer your questions and help you understand
              any treatment.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi, I watched your treatment videos and would like to learn more.")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-green-600"
            >
              WhatsApp Consultation
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.slice(3).map((video) => (
              <VideoCard key={video.url} {...video} />
            ))}
          </div>
        </div>
      </section>

      {/* Video FAQ */}
      <section className="bg-zinc-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Questions About Our Videos"
            centered
          />
          <div className="mt-10">
            <FAQAccordion items={videoFaqs} />
          </div>
        </div>
      </section>

      {/* Video Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            youtubeVideos.map((video) => ({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: video.title,
              description: video.description,
              thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
              uploadDate: "2025-01-01",
              contentUrl: video.url,
            }))
          ),
        }}
      />

      <BookingCTA />
    </main>
  );
}
