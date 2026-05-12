"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

type TreatmentCardProps = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
};

export default function TreatmentCard({
  slug,
  title,
  shortDescription,
  image,
}: TreatmentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600 line-clamp-2">
          {shortDescription}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <Link
            href={`/treatments/${slug}`}
            className="text-sm font-semibold text-cyan-700 transition hover:text-cyan-800"
          >
            Learn More &rarr;
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hi, I'd like to know more about ${title} treatment.`)}`}
            target="_blank"
            rel="noreferrer"
            className="ml-auto rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 transition hover:bg-green-100"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
