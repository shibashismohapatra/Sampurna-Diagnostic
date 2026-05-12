import { youtubeVideos } from "@/data/videos";
import VideoCard from "@/components/shared/VideoCard";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";

export default function VideoShowcase() {
  return (
    <section className="bg-zinc-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Video Showcase"
          title="Watch Real Dental Procedure Videos"
          description="Explore real treatment clips and educational procedure videos from Smiles by Dr. Annu. These help patients understand treatments more clearly and feel more confident before visiting."
          centered
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {youtubeVideos.slice(0, 3).map((video) => (
            <VideoCard key={video.url} {...video} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/video-showcase"
            className="inline-flex rounded-full border border-cyan-200 bg-white px-6 py-3 text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-50"
          >
            View All Videos &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
