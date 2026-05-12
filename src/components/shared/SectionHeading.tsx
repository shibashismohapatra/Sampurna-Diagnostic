import React from "react";

type SectionHeadingProps = {
  label?: string;
  title: string | React.ReactNode;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  label,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {label && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
          {label}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold text-zinc-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-8 text-zinc-600">{description}</p>
      )}
    </div>
  );
}
