import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `About ${siteConfig.brandName} — ${siteConfig.seo.title}`,
  description: siteConfig.seo.description,
};

export default function AboutPage() {
  return (
    <main className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-6 lg:gap-16 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-100 via-transparent to-teal-100 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <Image
                src="/images/diagnostic-center/maa-mangala-diagnostic.png"
                alt={`${siteConfig.brandName} Diagnostic Center`}
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Welcome to
            </span>
            <h1 className="mt-3 text-4xl font-bold text-zinc-900 md:text-5xl">
              {siteConfig.brandName} Diagnostic Center
            </h1>
            <p className="mt-3 text-xl font-medium text-cyan-700">
              Accurate Diagnostics &bull; Trusted Healthcare
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              {siteConfig.brandName} is a trusted diagnostic facility in {siteConfig.city}, {siteConfig.state}, 
              offering a wide range of pathology services including blood tests, urine tests, 
              ECG, and comprehensive health checkup packages. With experienced visiting doctors 
              and home collection facilities, we make quality healthcare accessible to everyone.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <p className="flex items-center gap-2 text-base text-zinc-500">
                <span className="text-xl">📍</span> {siteConfig.address}
              </p>
              <p className="flex items-center gap-2 text-base text-zinc-500">
                <span className="text-xl">📧</span> {siteConfig.email}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {siteConfig.services.slice(0, 5).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm transition-all hover:bg-cyan-50"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40"
              >
                Book Health Package
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="rounded-full border border-cyan-200 px-6 py-3 font-semibold text-cyan-700 transition-all hover:bg-cyan-50 hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-zinc-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            label="Our Doctors"
            title="Visiting Specialists"
            description="Experienced doctors available for OPD consultations at our center."
            centered
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {siteConfig.doctors.map((doctor) => (
              <div key={doctor.id} className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 opacity-0 transition group-hover:from-cyan-500/10 group-hover:to-blue-500/10 group-hover:opacity-100" />
                <div className="relative flex items-center gap-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-4 ring-cyan-50 ring-offset-2">
                    {doctor.image ? (
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-cyan-100 text-3xl">
                        👨‍⚕️
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">{doctor.name}</h3>
                    <p className="font-medium text-cyan-700">{doctor.title}</p>
                    <p className="text-sm text-zinc-500">{doctor.specialization}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-zinc-600">
                  {doctor.bio}
                </p>
                <div className="relative mt-4 flex items-center gap-4 text-xs font-semibold text-zinc-500">
                  <span className="flex items-center gap-1.5 transition-colors group-hover:text-cyan-600">
                     🕒 {doctor.availability}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
    </main>
  );
}