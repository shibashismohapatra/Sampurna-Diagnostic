"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

type VideoCardProps = {
  title: string;
  url: string;
  videoId: string;
  badge: string;
  description: string;
};

export default function VideoCard({
  title,
  url,
  videoId,
  badge,
  description,
}: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="overflow-hidden rounded-3xl border border-cyan-100 bg-white shadow-lg"
    >
      {/* Video / Thumbnail */}
      <div className="relative aspect-[9/16] bg-zinc-100">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group relative block h-full w-full"
            aria-label={`Play ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-zinc-900/20 transition group-hover:bg-zinc-900/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform group-hover:scale-110">
                <Play className="h-7 w-7 text-cyan-600 ml-1" />
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            badge === "Live Procedure"
              ? "bg-red-50 text-red-700"
              : badge === "Patient Education"
                ? "bg-blue-50 text-blue-700"
                : "bg-cyan-50 text-cyan-700"
          }`}
        >
          {badge}
        </span>
        <h3 className="mt-3 text-lg font-bold text-zinc-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
        <Link
          href={url}
          target="_blank"
          className="mt-4 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800"
        >
          Watch on YouTube &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
