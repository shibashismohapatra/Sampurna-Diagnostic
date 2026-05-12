"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play} from "lucide-react";

// Banner Data
const banners = [
  {
    id: 1,
    title: "Full Body Health Checkup",
    subtitle: "Comprehensive screening at",
    price: "₹999",
    originalPrice: "₹2,499",
    discount: "60% OFF",
    description: "Includes 80+ tests with free doctor consultation",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=400&fit=crop",
    gradient: "from-cyan-600 via-blue-700 to-indigo-800",
    accentColor: "#06b6d4",
    link: "/packages/full-body",
  },
  {
    id: 2,
    title: "Diabetes Care Package",
    subtitle: "Complete diabetes screening at",
    price: "₹699",
    originalPrice: "₹1,799",
    discount: "61% OFF",
    description: "HbA1c, FBS, PPBS, Kidney Profile & more",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=400&fit=crop",
    gradient: "from-purple-600 via-violet-700 to-fuchsia-800",
    accentColor: "#a855f7",
    link: "/packages/diabetes",
  },
  {
    id: 3,
    title: "Women Wellness Package",
    subtitle: "Specialized care starting at",
    price: "₹1,299",
    originalPrice: "₹2,999",
    discount: "57% OFF",
    description: "Thyroid, Iron, Calcium, Vitamin D & more",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=400&fit=crop",
    gradient: "from-pink-600 via-rose-700 to-red-800",
    accentColor: "#ec4899",
    link: "/packages/women",
  },
  {
    id: 4,
    title: "Heart Health Checkup",
    subtitle: "Cardiac screening at",
    price: "₹1,499",
    originalPrice: "₹3,499",
    discount: "57% OFF",
    description: "Lipid Profile, ECG, BP Monitoring & consultation",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1200&h=400&fit=crop",
    gradient: "from-red-600 via-orange-700 to-amber-800",
    accentColor: "#ef4444",
    link: "/packages/heart",
  },
  {
    id: 5,
    title: "Senior Citizen Package",
    subtitle: "Complete elderly care at",
    price: "₹1,799",
    originalPrice: "₹3,999",
    discount: "55% OFF",
    description: "Full body checkup with bone & heart health",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&h=400&fit=crop",
    gradient: "from-teal-600 via-emerald-700 to-green-800",
    accentColor: "#14b8a6",
    link: "/packages/senior",
  },
  {
    id: 6,
    title: "Free Home Collection",
    subtitle: "Lab tests at your doorstep",
    price: "FREE",
    originalPrice: "",
    discount: "",
    description: "Trained phlebotomists • Hygienic • Convenient",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&h=400&fit=crop",
    gradient: "from-green-600 via-emerald-700 to-teal-800",
    accentColor: "#22c55e",
    link: "/home-collection",

  },
];

export default function PromoBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 5000;
  const PROGRESS_INTERVAL = 30;

  const changeSlide = useCallback((newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
    setProgress(0);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [currentIndex, isTransitioning]);

  const nextSlide = useCallback(() => {
    changeSlide((currentIndex + 1) % banners.length);
  }, [currentIndex, changeSlide]);

  const prevSlide = useCallback(() => {
    changeSlide((currentIndex - 1 + banners.length) % banners.length);
  }, [currentIndex, changeSlide]);

  const goToSlide = useCallback((index: number) => {
    if (index !== currentIndex) {
      changeSlide(index);
    }
  }, [currentIndex, changeSlide]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, SLIDE_DURATION);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isHovered, nextSlide]);

  // Progress bar
  useEffect(() => {
    if (isPlaying && !isHovered) {
      setProgress(0);
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 100;
          return prev + (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;
        });
      }, PROGRESS_INTERVAL);
    } else {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    }

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [isPlaying, isHovered, currentIndex]);

  const currentBanner = banners[currentIndex];

  return (
    <section className="relative overflow-hidden py-4 md:py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Main Carousel Container */}
        <div
          className="group relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Banner Card */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl" style={{ minHeight: '280px' }}>
            
            {/* Stacked Background Images for Crossfade */}
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  zIndex: index === currentIndex ? 1 : 0,
                }}
              >
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover transition-all duration-700 ease-out"
                  style={{
                    opacity: isHovered ? 0.85 : 0.7,
                    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                  }}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
                {/* Gradient Overlay - lighter on hover for better visibility */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} transition-opacity duration-500`}
                  style={{ opacity: isHovered ? 0.35 : 0.55 }}
                />
                {/* Bottom vignette for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              </div>
            ))}

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 md:p-8 lg:p-10" style={{ minHeight: '280px' }}>
              {/* Left Content */}
              <div
                key={currentIndex}
                className="flex-1 space-y-4 text-center lg:text-left banner-content-enter"
              >
             

                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                  {currentBanner.title}
                </h2>

                {/* Price Section */}
                <div className="flex items-center gap-3 justify-center lg:justify-start flex-wrap">
                  <p className="text-base md:text-lg text-white/90 font-medium">
                    {currentBanner.subtitle}
                  </p>
                  <span
                    className="text-2xl md:text-3xl font-black drop-shadow-md"
                    style={{ color: '#fbbf24' }}
                  >
                    {currentBanner.price}
                  </span>
                  {currentBanner.originalPrice && (
                    <span className="text-base text-white/50 line-through font-medium">
                      {currentBanner.originalPrice}
                    </span>
                  )}
                </div>

                {/* Discount Badge */}
                {currentBanner.discount && (
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-500 to-rose-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-red-500/30">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    {currentBanner.discount}
                  </div>
                )}

                {/* Description */}
                <p className="text-white/80 max-w-lg text-base md:text-lg leading-relaxed">
                  {currentBanner.description}
                </p>

         
              </div>

              {/* Right - Floating Decorative Card */}
              <div className="hidden lg:flex flex-1 items-center justify-center">
                <div className="relative">
                  {/* Decorative rings */}
                  <div
                    className="absolute -inset-8 rounded-full border-2 border-white/10 animate-pulse"
                    style={{ animationDuration: '3s' }}
                  />
                  <div
                    className="absolute -inset-16 rounded-full border border-white/5 animate-pulse"
                    style={{ animationDuration: '4s', animationDelay: '1s' }}
                  />
                  {/* Floating Price Card */}
                  <div className="relative w-40 h-40 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col items-center justify-center gap-1 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                    <span className="text-xs font-medium text-white/70 uppercase tracking-widest">Starting at</span>
                    <span
                      className="text-3xl font-black drop-shadow-lg"
                      style={{ color: '#fbbf24' }}
                    >
                      {currentBanner.price}
                    </span>
                    {currentBanner.originalPrice && (
                      <span className="text-white/40 line-through text-base">{currentBanner.originalPrice}</span>
                    )}
                    {currentBanner.discount && (
                      <span className="mt-1 rounded-full bg-red-500/90 px-3 py-0.5 text-[10px] font-bold text-white shadow-md">
                        {currentBanner.discount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

     
          </div>

          {/* Navigation Arrows - Appear on hover with smooth animation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md text-gray-800 shadow-xl transition-all duration-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-white hover:scale-110 hover:shadow-2xl"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md text-gray-800 shadow-xl transition-all duration-300 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-white hover:scale-110 hover:shadow-2xl"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Controls */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-3">
            {/* Dots Indicator */}
            <div className="flex items-center gap-2 rounded-2xl bg-black/30 backdrop-blur-md px-5 py-2.5 border border-white/10">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "h-2.5 w-10 bg-white shadow-md shadow-white/30"
                      : "h-2.5 w-2.5 bg-white/40 hover:bg-white/60 hover:scale-125"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/30 backdrop-blur-md text-white border border-white/10 transition-all duration-300 hover:bg-white/20 hover:scale-110"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes bannerContentEnter {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .banner-content-enter {
          animation: bannerContentEnter 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes badgeShimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .banner-badge-shimmer {
          background-size: 200% auto;
          background-image: linear-gradient(
            90deg,
            rgba(255,255,255,0.15) 0%,
            rgba(255,255,255,0.25) 25%,
            rgba(255,255,255,0.15) 50%,
            rgba(255,255,255,0.25) 75%,
            rgba(255,255,255,0.15) 100%
          );
          animation: badgeShimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
}