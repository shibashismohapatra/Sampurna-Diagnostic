"use client";

import { useState, useEffect } from "react";
import { galleryImages, galleryCategories } from "@/data/gallery";
import GalleryCard from "@/components/shared/GalleryCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/data/site";
import { 
  Image as ImageIcon, 
  Sparkles, 
  Grid3x3, 
  LayoutGrid,
  ZoomIn,
  Heart,
  Share2,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Image from "next/image";

// Lightbox Component
function Lightbox({ 
  images, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev 
}: { 
  images: typeof galleryImages;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Image Counter */}
      <div className="absolute top-6 left-6 z-10 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
        <span className="font-semibold">{currentIndex + 1}</span>
        <span className="text-white/60"> / {images.length}</span>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Main Image */}
      <div className="relative h-[80vh] w-[90vw] max-w-6xl">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-contain"
          sizes="(max-width: 1280px) 90vw, 1200px"
          priority
        />
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex gap-2 rounded-full bg-white/10 p-2 backdrop-blur-sm">
          {images.slice(Math.max(0, currentIndex - 3), Math.min(images.length, currentIndex + 4)).map((img, idx) => {
            const actualIndex = images.indexOf(img);
            return (
              <button
                key={img.src}
                onClick={() => {
                  if (actualIndex > currentIndex) {
                    for (let i = 0; i < actualIndex - currentIndex; i++) onNext();
                  } else {
                    for (let i = 0; i < currentIndex - actualIndex; i++) onPrev();
                  }
                }}
                className={`relative h-12 w-12 overflow-hidden rounded-lg transition-all ${
                  actualIndex === currentIndex
                    ? "ring-2 ring-cyan-400 scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Stats Component
function GalleryStats({ totalImages, categories }: { totalImages: number; categories: number }) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
      <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm border border-cyan-100">
        <ImageIcon className="h-4 w-4 text-cyan-600" />
        <span className="text-sm font-medium text-zinc-700">
          <span className="font-bold text-cyan-600">{totalImages}</span> Images
        </span>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm border border-cyan-100">
        <LayoutGrid className="h-4 w-4 text-cyan-600" />
        <span className="text-sm font-medium text-zinc-700">
          <span className="font-bold text-cyan-600">{categories}</span> Categories
        </span>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 shadow-sm border border-cyan-100">
        <Sparkles className="h-4 w-4 text-cyan-600" />
        <span className="text-sm font-medium text-zinc-700">
          Updated Weekly
        </span>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  const categoryCounts = galleryCategories.reduce((acc, cat) => {
    acc[cat] = cat === "All" 
      ? galleryImages.length 
      : galleryImages.filter(img => img.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <main className="pt-20 lg:pt-28">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl animate-float-slower" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/5 blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="gallery-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#06b6d4" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#gallery-grid)" />
            </svg>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
          {/* Premium Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-cyan-200 px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              <span className="text-sm font-medium text-cyan-700">Our Facilities</span>
              <Sparkles className="h-4 w-4 text-cyan-500" />
            </div>
          </div>

          <SectionHeading
            label="Visual Journey"
            title={
              <span className="bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-700 bg-clip-text text-transparent">
                Explore Our Gallery
              </span>
            }
            description={`Take a virtual tour of ${siteConfig.brandName}. View our state-of-the-art diagnostic facilities, modern equipment, and laboratory setup.`}
            centered
          />

          <GalleryStats 
            totalImages={galleryImages.length} 
            categories={galleryCategories.length - 1} 
          />
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="h-12 w-full" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path 
              d="M0,32 C360,0 720,48 1440,32 L1440,48 L0,48 Z" 
              fill="white" 
            />
          </svg>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Filter Bar - Premium Design */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  onMouseEnter={() => setHoveredCategory(cat)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`group relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    active === cat
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                      : "border border-zinc-200 bg-white text-zinc-600 hover:border-cyan-200 hover:bg-cyan-50/50"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {cat}
                    {cat !== "All" && (
                      <span className={`text-xs ${
                        active === cat 
                          ? "text-white/80" 
                          : "text-zinc-400 group-hover:text-cyan-500"
                      }`}>
                        ({categoryCounts[cat]})
                      </span>
                    )}
                  </span>
                  {active !== cat && (
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transition-transform duration-300 group-hover:translate-x-0" />
                  )}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 hidden sm:inline">View:</span>
              <div className="flex rounded-full border border-zinc-200 bg-white p-1 shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-full p-2 transition-all ${
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                      : "text-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  <Grid3x3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`rounded-full p-2 transition-all ${
                    viewMode === "masonry"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                      : "text-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-zinc-500">
              Showing <span className="font-semibold text-cyan-600">{filtered.length}</span> images
              {active !== "All" && (
                <span> in <span className="font-medium text-zinc-700">{active}</span></span>
              )}
            </p>
            {active !== "All" && (
              <button
                onClick={() => setActive("All")}
                className="text-xs text-cyan-600 hover:underline"
              >
                View All Categories
              </button>
            )}
          </div>

          {/* Gallery Grid */}
          {filtered.length > 0 ? (
            <div className={
              viewMode === "grid"
                ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                : "columns-1 gap-5 sm:columns-2 lg:columns-3"
            }>
              {filtered.map((img, idx) => (
                <div
                  key={`${img.src}-${idx}`}
                  className={viewMode === "masonry" ? "mb-5 break-inside-avoid" : ""}
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${idx * 0.05}s both`,
                  }}
                >
                  <div
                    onClick={() => handleImageClick(idx)}
                    className="cursor-pointer group relative"
                  >
                    <GalleryCard {...img} />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    {/* Action Buttons */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                      <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white">
                        {img.category}
                      </span>
                      <div className="flex gap-1">
                        <button className="rounded-full bg-white/20 p-2 backdrop-blur-sm text-white transition-all hover:bg-white/30 hover:scale-110">
                          <Heart className="h-4 w-4" />
                        </button>
                        <button className="rounded-full bg-white/20 p-2 backdrop-blur-sm text-white transition-all hover:bg-white/30 hover:scale-110">
                          <Share2 className="h-4 w-4" />
                        </button>
                        <button className="rounded-full bg-white/20 p-2 backdrop-blur-sm text-white transition-all hover:bg-white/30 hover:scale-110">
                          <ZoomIn className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-50">
                <ImageIcon className="h-10 w-10 text-cyan-400" />
              </div>
              <p className="text-lg font-medium text-zinc-600">No images found</p>
              <p className="mt-1 text-sm text-zinc-400">Try selecting a different category</p>
            </div>
          )}

          {/* Load More Button */}
          {filtered.length > 6 && (
            <div className="mt-12 text-center">
              <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-cyan-200 bg-white px-8 py-3.5 text-sm font-semibold text-cyan-700 shadow-lg transition-all hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:shadow-xl">
                <span>Load More Images</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((prev) => 
            prev !== null && prev < filtered.length - 1 ? prev + 1 : 0
          )}
          onPrev={() => setLightboxIndex((prev) => 
            prev !== null && prev > 0 ? prev - 1 : filtered.length - 1
          )}
        />
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-3deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}