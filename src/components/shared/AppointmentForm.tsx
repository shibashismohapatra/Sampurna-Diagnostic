"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/data/site";
import { CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(15, "Phone number too long")
    .regex(/^[0-9+\-\s]+$/, "Invalid phone number"),
  age: z.string().min(1, "Enter age").regex(/^\d+$/, "Enter a valid age"),
  gender: z.string().min(1, "Select gender"),
  doctorId: z.string().min(1, "Please select a doctor"),
  preferredDate: z.string().min(1, "Select a preferred date"),
  timeSlot: z.string().min(1, "Select a time slot"),
  reason: z.string().min(3, "Please briefly describe the reason for visit"),
  message: z.string().max(500, "Message too long").optional(),
});

type FormValues = z.infer<typeof schema>;

/** Convert "9:00 AM - 2:00 PM" → ["9:00 AM", "9:30 AM", … "1:30 PM"] in 30-min steps */
function generateSlots(availabilityStr: string): string[] {
  // Extract time range like "Monday - Saturday, 9:00 AM - 2:00 PM"
  const match = availabilityStr.match(/(\d+:\d+\s*[AP]M)\s*-\s*(\d+:\d+\s*[AP]M)/i);
  if (!match) return [];

  const toMinutes = (t: string) => {
    const [time, period] = t.trim().split(/\s+/);
    let [h, m] = time.split(":").map(Number);
    if (period?.toUpperCase() === "PM" && h !== 12) h += 12;
    if (period?.toUpperCase() === "AM" && h === 12) h = 0;
    return h * 60 + m;
  };

  const fmt = (mins: number) => {
    const h24 = Math.floor(mins / 60);
    const m = mins % 60;
    const period = h24 >= 12 ? "PM" : "AM";
    const h12 = h24 % 12 || 12;
    return `${h12}:${m.toString().padStart(2, "0")} ${period}`;
  };

  const start = toMinutes(match[1]);
  // Last slot = end - 30 mins so last slot starts before closing
  const end = toMinutes(match[2]) - 30;
  const slots: string[] = [];
  for (let t = start; t <= end; t += 30) {
    slots.push(fmt(t));
  }
  return slots;
}

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const doctors = siteConfig.doctors;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { gender: "" },
  });

  const selectedDoctorId = watch("doctorId");
  const selectedDoctor = useMemo(
    () => doctors.find((d) => d.id === selectedDoctorId) ?? null,
    [selectedDoctorId, doctors]
  );
  const slots = useMemo(
    () => (selectedDoctor ? generateSlots(selectedDoctor.availability) : []),
    [selectedDoctor]
  );

  const onSubmit = (data: FormValues) => {
    const doctor = doctors.find((d) => d.id === data.doctorId);
    const doctorName = doctor?.name ?? data.doctorId;
    const specialization = doctor?.specialization ?? "";
    const fee = doctor?.consultationFee ?? "";

    const msg = `🏥 *CrossMed Diagnostic & Healthcare*
📋 *OPD Appointment Request*

👤 *Patient Details:*
• Name: ${data.name}
• Age: ${data.age} yrs | Gender: ${data.gender}
• Phone: ${data.phone}

🩺 *Doctor:* ${doctorName}
🔬 *Specialization:* ${specialization}
💵 *Consultation Fee:* ${fee}

📅 *Date:* ${data.preferredDate}
⏰ *Time Slot:* ${data.timeSlot}

🗒️ *Reason for Visit:* ${data.reason}${data.message ? `\n📝 *Notes:* ${data.message}` : ""}

_Please confirm my appointment. Thank you!_`;

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);
    window.open(url, "_blank");
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-10 text-center shadow-xl">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-zinc-900">
          Booking Request Sent!
        </h3>
        <p className="mt-2 text-sm text-zinc-600 max-w-xs">
          Your appointment request has been sent via WhatsApp. Our team will confirm your slot shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-cyan-500/30"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 rounded-3xl border border-zinc-100 bg-white p-6 shadow-2xl shadow-zinc-200/60 sm:p-8"
    >
      {/* Section: Patient Info */}
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-violet-500">
          Step 1 — Patient Info
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Name */}
          <div className="sm:col-span-2">
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-700">
              Full Name *
            </label>
            <input
              id="name"
              {...register("name")}
              placeholder="e.g. Ramesh Kumar Patra"
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-400/20"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-700">
              Phone Number *
            </label>
            <input
              id="phone"
              {...register("phone")}
              placeholder="10-digit mobile number"
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-400/20"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="mb-1.5 block text-sm font-medium text-zinc-700">
              Age *
            </label>
            <input
              id="age"
              {...register("age")}
              placeholder="e.g. 35"
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-400/20"
            />
            {errors.age && <p className="mt-1 text-xs text-red-500">{errors.age.message}</p>}
          </div>

          {/* Gender */}
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-zinc-700">Gender *</label>
            <div className="grid grid-cols-3 gap-3">
              {["Male", "Female", "Other"].map((g) => (
                <label
                  key={g}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-600 transition has-[:checked]:border-violet-500 has-[:checked]:bg-violet-50 has-[:checked]:text-violet-700 has-[:checked]:font-semibold"
                >
                  <input type="radio" value={g} {...register("gender")} className="hidden" />
                  {g === "Male" ? "👨" : g === "Female" ? "👩" : "🧑"} {g}
                </label>
              ))}
            </div>
            {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender.message}</p>}
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Section: Doctor Selection */}
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-violet-500">
          Step 2 — Select Doctor
        </p>
        <div className="grid gap-3">
          {doctors.map((doc) => (
            <label
              key={doc.id}
              className="flex cursor-pointer items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition has-[:checked]:border-violet-500 has-[:checked]:bg-violet-50"
            >
              <input type="radio" value={doc.id} {...register("doctorId")} className="mt-1 accent-violet-600" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-zinc-900">{doc.name}</p>
                <p className="text-xs text-violet-600 font-medium">{doc.specialization}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{doc.degree} · {doc.tagline}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white border border-zinc-200 px-2.5 py-0.5 text-[11px] text-zinc-600 font-medium">
                    🕐 {doc.availability.split(",").pop()?.trim()}
                  </span>
                  <span className="rounded-full bg-green-50 border border-green-200 px-2.5 py-0.5 text-[11px] text-green-700 font-bold">
                    Fee: {doc.consultationFee}
                  </span>
                </div>
              </div>
            </label>
          ))}
        </div>
        {errors.doctorId && <p className="mt-1 text-xs text-red-500">{errors.doctorId.message}</p>}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Section: Date & Time Slot */}
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-violet-500">
          Step 3 — Choose Date & Slot
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Date */}
          <div>
            <label htmlFor="preferredDate" className="mb-1.5 block text-sm font-medium text-zinc-700">
              Preferred Date *
            </label>
            <input
              id="preferredDate"
              type="date"
              {...register("preferredDate")}
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-400/20"
            />
            {errors.preferredDate && (
              <p className="mt-1 text-xs text-red-500">{errors.preferredDate.message}</p>
            )}
          </div>

          {/* Time Slot */}
          <div>
            <label htmlFor="timeSlot" className="mb-1.5 block text-sm font-medium text-zinc-700">
              Time Slot *
            </label>
            <select
              id="timeSlot"
              {...register("timeSlot")}
              disabled={!selectedDoctor}
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">
                {selectedDoctor ? "Select a slot" : "Select a doctor first"}
              </option>
              {slots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            {errors.timeSlot && (
              <p className="mt-1 text-xs text-red-500">{errors.timeSlot.message}</p>
            )}
          </div>
        </div>

        {/* Doctor availability note */}
        {selectedDoctor && (
          <div className="mt-3 rounded-xl bg-violet-50 border border-violet-100 px-4 py-2.5 text-xs text-violet-700">
            📅 <strong>{selectedDoctor.name}</strong> is available{" "}
            <strong>{selectedDoctor.availability.split(",")[0]?.trim()}</strong>
            {selectedDoctor.availability.includes(",") && (
              <> · <strong>{selectedDoctor.availability.split(",")[1]?.trim()}</strong></>
            )}
          </div>
        )}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Section: Reason & Notes */}
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-violet-500">
          Step 4 — Visit Details
        </p>

        {/* Reason */}
        <div className="mb-4">
          <label htmlFor="reason" className="mb-1.5 block text-sm font-medium text-zinc-700">
            Reason for Visit *
          </label>
          <input
            id="reason"
            {...register("reason")}
            placeholder="e.g. Fever, Diabetes checkup, Routine consultation"
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-400/20"
          />
          {errors.reason && <p className="mt-1 text-xs text-red-500">{errors.reason.message}</p>}
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-700">
            Additional Notes <span className="text-zinc-400">(optional)</span>
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Any symptoms, past medical history, or special instructions"
            rows={3}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-400/20"
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
        </div>
      </div>

      {/* Info Box */}
      <div className="rounded-2xl bg-gradient-to-r from-cyan-50 to-violet-50 border border-cyan-100 p-4 text-xs text-zinc-600 leading-relaxed">
        📍 OPD is held at{" "}
        <strong className="text-zinc-800">{siteConfig.fullAddress}</strong>.{" "}
        Consultation hours: <strong className="text-zinc-800">{siteConfig.timings.opd}</strong>.
        Please arrive 10 minutes before your slot.
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-violet-500 via-blue-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-xl shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:scale-[1.01] active:scale-[0.98]"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Book via WhatsApp
        </span>
      </button>

      <p className="text-center text-xs text-zinc-400">
        Your appointment request will be sent on WhatsApp for instant confirmation.
      </p>
    </form>
  );
}