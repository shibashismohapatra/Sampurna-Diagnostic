"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TechnologyCardProps = {
  title: string;
  description: string;
  benefit: string;
  image: string;
};

export default function TechnologyCard({
  title,
  description,
  benefit,
  image,
}: TechnologyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
        <div className="mt-3 inline-flex rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700">
          {benefit}
        </div>
      </div>
    </motion.div>
  );
}
