import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.brandName} — learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="px-4 pb-20 pt-32 sm:pt-36">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-700">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              1. Information We Collect
            </h2>
            <p className="mt-2">
              When you use our appointment booking form or contact us, we may
              collect the following information:
            </p>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-zinc-600">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Age</li>
              <li>Treatment preference</li>
              <li>Any additional message you provide</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              2. How We Use Your Information
            </h2>
            <p className="mt-2">We use the information you provide to:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-zinc-600">
              <li>Confirm and manage your dental appointments</li>
              <li>Communicate with you about your treatment</li>
              <li>Respond to your inquiries</li>
              <li>Improve our services and patient experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              3. WhatsApp Communication
            </h2>
            <p className="mt-2">
              Our appointment booking form sends your details to our clinic via
              WhatsApp. By submitting the form, you consent to receiving
              appointment-related messages via WhatsApp. WhatsApp messages are
              end-to-end encrypted by WhatsApp Inc.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              4. Data Security
            </h2>
            <p className="mt-2">
              We take reasonable measures to protect your personal information.
              However, no method of electronic storage or transmission is 100%
              secure. We do not store your personal data on our website servers;
              your information is transmitted directly to our WhatsApp business
              account.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              5. Third-Party Services
            </h2>
            <p className="mt-2">
              Our website may contain embedded content from third-party services
              such as YouTube and Google Maps. These services may collect data
              about you according to their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              6. Cookies
            </h2>
            <p className="mt-2">
              This website does not use cookies for tracking purposes. Third-party
              embeds (YouTube, Google Maps) may set their own cookies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              7. Your Rights
            </h2>
            <p className="mt-2">You have the right to:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-zinc-600">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Withdraw consent for WhatsApp communication</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              8. Contact Us
            </h2>
            <p className="mt-2">
              If you have questions about this privacy policy or your personal
              data, please contact us:
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
