import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${siteConfig.brandName} — read before using our website and services.`,
};

export default function TermsPage() {
  return (
    <section className="px-4 pb-20 pt-32 sm:pt-36">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-700">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing and using the {siteConfig.brandName} website, you
              accept and agree to be bound by these Terms and Conditions. If you
              do not agree, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              2. Services
            </h2>
            <p className="mt-2">
              This website provides information about dental services offered by{" "}
              {siteConfig.brandName} located in {siteConfig.address}. The
              content on this website is for informational purposes only and
              should not be considered as medical advice.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              3. Appointment Booking
            </h2>
            <p className="mt-2">
              Appointment requests submitted through this website are forwarded
              to our clinic via WhatsApp. Submitting a form does not guarantee an
              appointment. Our team will confirm your appointment based on
              availability.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              4. Medical Disclaimer
            </h2>
            <p className="mt-2">
              The information provided on this website, including treatment
              descriptions, images, and videos, is for general informational
              purposes. It is not intended to replace professional dental
              consultation. Always consult with a qualified dental professional
              for diagnosis and treatment.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              5. Intellectual Property
            </h2>
            <p className="mt-2">
              All content on this website, including text, images, logos, and
              videos, is the property of {siteConfig.brandName} or its content
              creators. You may not reproduce, distribute, or use any content
              without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              6. User Content
            </h2>
            <p className="mt-2">
              Testimonials displayed on this website are from real patients who
              have consented to share their experiences. Results may vary from
              person to person.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              7. External Links
            </h2>
            <p className="mt-2">
              This website may contain links to external websites (e.g.,
              YouTube, Instagram, WhatsApp). We are not responsible for the
              content or privacy practices of these external sites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              8. Limitation of Liability
            </h2>
            <p className="mt-2">
              {siteConfig.brandName} shall not be liable for any direct,
              indirect, or consequential damages arising from your use of this
              website or reliance on the information provided herein.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              9. Changes to Terms
            </h2>
            <p className="mt-2">
              We reserve the right to update these Terms and Conditions at any
              time. Changes will be posted on this page with an updated
              effective date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              10. Contact
            </h2>
            <p className="mt-2">
              For questions about these terms, please contact us:
            </p>
            <ul className="ml-4 mt-2 space-y-1 text-zinc-600">
              <li>
                <strong>Email:</strong> {siteConfig.email}
              </li>
              <li>
                <strong>Phone:</strong> {siteConfig.phone}
              </li>
              <li>
                <strong>Address:</strong> {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
