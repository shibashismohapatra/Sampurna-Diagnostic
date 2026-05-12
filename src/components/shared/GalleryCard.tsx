"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type GalleryCardProps = {
  src: string;
  alt: string;
  category: string;
};

export default function GalleryCard({ src, alt, category }: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl bg-zinc-100"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-zinc-900/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
        <span className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-zinc-900 backdrop-blur">
          {category}
        </span>
      </div>
    </motion.div>
  );
}
