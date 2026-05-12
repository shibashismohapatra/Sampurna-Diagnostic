import Hero from "@/components/home/Hero";
import TreatmentsOverview from "@/components/home/TreatmentsOverview";
import DoctorSection from "@/components/home/DoctorSection";
import TechnologySection from "@/components/home/TechnologySection";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import FAQPreview from "@/components/home/FAQPreview";
import BookingCTA from "@/components/home/BookingCTA";
import PromoBannerCarousel from "@/components/home/banner";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-[1px] bg-zinc-200">
      <Hero />
      <PromoBannerCarousel />
      <DoctorSection />
      <TreatmentsOverview />
      <TechnologySection />
      <GalleryPreview />
      <TestimonialsPreview />
      <FAQPreview />
      <BookingCTA />
    </main>
  );
}
