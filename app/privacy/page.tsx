import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants/company";

export const metadata: Metadata = {
  title: "Privacy Policy | EcoWish Craft India Pvt. Ltd.",
  description: "Privacy Policy for EcoWish Craft India Pvt. Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-14 sm:py-20 bg-warm-canvas min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-ecowish-border shadow-soft">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ecowish-primary mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs text-ecowish-charcoal-muted mb-8">
          Last Updated: September 2024 • EcoWish Craft India Pvt. Ltd.
        </p>

        <div className="space-y-6 text-sm text-ecowish-charcoal-muted leading-relaxed">
          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              1. Overview
            </h2>
            <p>
              EcoWish Craft India Pvt. Ltd. (&ldquo;EcoWish&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This policy outlines how we collect, handle, and protect your information when you interact with our website, request project quotations, apply for training workshops, or purchase handcrafted goods.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              2. Information We Collect
            </h2>
            <p>We may collect the following categories of information:</p>
            <ul className="list-disc list-inside mt-2 space-y-1.5 pl-2">
              <li><strong>Personal Details:</strong> Name, email address, phone number, city/location, and educational background submitted through our forms.</li>
              <li><strong>Project & Inquiry Data:</strong> Descriptions of bespoke decor requirements, target design entrance exams, and design preferences.</li>
              <li><strong>Payment Information:</strong> Handled securely through verified third-party payment gateways; we do not store full payment card details on our servers.</li>
              <li><strong>Usage & Device Data:</strong> Standard technical information such as browser type, IP address, and anonymized page interaction logs to improve website usability.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              3. Purpose of Data Processing
            </h2>
            <p>We use your information exclusively to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1.5 pl-2">
              <li>Process and respond to your bespoke project quotations and service inquiries.</li>
              <li>Coordinate training admissions, batch schedules, and student support.</li>
              <li>Facilitate customer service and communication via Phone, WhatsApp, and Email.</li>
              <li>Maintain accurate records of client commissions and workshop enrollments.</li>
              <li>Enhance the functionality and security of our digital platforms.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              4. Data Sharing & Third Parties
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third-party marketers. We may share relevant details with trusted service providers strictly necessary to perform operations (such as email delivery via Resend, courier and dispatch logistics for handcrafted products, and banking/payment processors).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              5. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard technical measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% impenetrable, and we encourage users to contact us if they suspect any unauthorized activity.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              6. Contact & Inquiries
            </h2>
            <p>
              For privacy-related questions, data updates, or deletion requests, please contact our administrative desk:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-ecowish-bg border border-ecowish-border text-xs text-ecowish-charcoal">
              <strong>EcoWish Craft India Pvt. Ltd.</strong><br />
              {COMPANY_INFO.address.full}<br />
              Email: {COMPANY_INFO.contact.primaryEmail} | Phone: {COMPANY_INFO.contact.primaryPhone}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
