import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  rating: number;
  review: string;
  service: string;
};

export default function TestimonialCard({
  name,
  rating,
  review,
  service,
}: TestimonialCardProps) {
  return (
    <div className="flex min-w-[320px] flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm lg:min-w-0">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-zinc-200"}`}
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">
        &ldquo;{review}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">
        <div>
          <p className="text-sm font-semibold text-zinc-900">{name}</p>
          <p className="text-xs text-zinc-500">{service}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-cyan-50 text-sm font-bold text-cyan-700">
          {name.charAt(0)}
        </div>
      </div>
    </div>
  );
}
