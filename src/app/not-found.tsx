import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <span className="text-[10rem] font-extrabold leading-none text-zinc-100 sm:text-[14rem]">
          404
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-2 max-w-md text-sm text-zinc-500">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            may have been moved or doesn&apos;t exist.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40"
        >
          Go Home
        </Link>
        <Link
          href="/treatments"
          className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-600"
        >
          Browse Treatments
        </Link>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello, I need help finding a page on your website.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition hover:bg-green-600"
        >
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}
