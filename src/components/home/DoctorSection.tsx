import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

// Doctors data
const doctors = [
  {
    name: "Dr. Sisir Kumar Das",
    title: "MD & Diabetic Consultant",
    tagline: "Retired Senior Consultant",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop",
    location: "Maa Mangala Diagnostic Center, Puri",
    bio: "Dr. Sisir Kumar Das is a highly experienced physician with expertise in diabetes management and general medical consultation. As a retired senior consultant, he brings decades of clinical experience to provide compassionate and comprehensive care for patients with diabetes, hypertension, and other chronic conditions.",
    highlights: [
      "MD in Medicine",
      "Diabetic Consultant",
      "Retired Senior Consultant",
      "Chronic Disease Management",
    ],
    specialization: "Diabetes & General Medicine",
  },
  {
    name: "Dr. Priyanka Das",
    title: "MBBS, MD Pediatrics",
    tagline: "Child Specialist",
    image: "https://as1.ftcdn.net/v2/jpg/06/59/35/12/1000_F_659351223_69kRn9mMX1FNW6krWRIOCUW8K0vHwaPw.jpg",
    location: "Maa Mangala Diagnostic Center, Puri",
    bio: "Dr. Sadasiba Padhy is a dedicated pediatrician committed to providing expert medical care for children from infancy through adolescence. With an MBBS and MD in Pediatrics, he specializes in newborn care, childhood vaccinations, growth monitoring, and management of pediatric illnesses.",
    highlights: [
      "MBBS, MD Pediatrics",
      "Newborn & Infant Care",
      "Childhood Vaccination",
      "Growth & Development",
    ],
    specialization: "Pediatrics",
  },
];

export default function DoctorSection() {
  return (
    <section className="bg-zinc-50 py-8 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5 border border-cyan-100 mb-4">
             <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700">Expert Care</span>
          </div>
          <h2 className="text-3xl font-black text-zinc-900 md:text-4xl">
            Our Specialists
          </h2>
          <p className="mt-2 text-sm text-zinc-500 max-w-xl mx-auto">
            Experienced medical professionals dedicated to your health
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl border border-zinc-100"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Doctor Image - Compact */}
                <div className="relative h-48 sm:h-auto sm:w-40 lg:w-48 shrink-0 overflow-hidden bg-slate-100">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 200px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-2 left-2">
                    <span className="rounded-md bg-white/20 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-white border border-white/20 uppercase">
                      {doctor.specialization}
                    </span>
                  </div>
                </div>

                {/* Doctor Info - Compact */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-zinc-900 leading-tight">{doctor.name}</h3>
                    <p className="text-sm font-semibold text-cyan-600 mt-0.5">{doctor.title}</p>
                    <p className="text-[10px] text-zinc-400 font-medium">{doctor.tagline}</p>
                    
                    <p className="mt-3 text-xs leading-5 text-zinc-500 line-clamp-3 italic">
                      &quot;{doctor.bio}&quot;
                    </p>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between border-t border-zinc-50 pt-3">
                    <div className="flex flex-col">
                      <p className="text-[10px] font-bold text-zinc-400">LOCATION</p>
                      <p className="text-[10px] font-medium text-zinc-600">📍 Puri, Odisha</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/${siteConfig.whatsappNumber}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-100 text-cyan-600 transition hover:bg-cyan-50"
                      >
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.875 1.215 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </a>
                      <Link
                        href="/appointment"
                        className="rounded-lg bg-cyan-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-cyan-700 shadow-sm"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about availability - More compact */}
        <div className="mt-8 rounded-xl bg-amber-50/50 border border-amber-100 p-3 max-w-2xl mx-auto text-center">
          <p className="text-xs text-amber-800 leading-relaxed">
            <span className="font-bold">Consultation Hours:</span> Every Wednesday, 10:00 AM – 1:00 PM. <span className="opacity-70">Other days by appointment.</span>
          </p>
        </div>
      </div>
    </section>
  );
}