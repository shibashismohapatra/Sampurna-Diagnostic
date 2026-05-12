import { galleryImages } from "@/data/gallery";
import GalleryCard from "@/components/shared/GalleryCard";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function GalleryPreview() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Gallery"
          title="Gallery"
          description={`Take a look at our clinical facilities and advanced diagnostic equipment at ${siteConfig.brandName}.`}
          centered
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.slice(0, 6).map((img) => (
            <GalleryCard key={img.src} {...img} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex rounded-full border border-cyan-200 bg-white px-6 py-3 text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-50"
          >
            View Full Gallery &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
