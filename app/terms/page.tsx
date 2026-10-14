import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | EcoWish Craft India Pvt. Ltd.",
  description: "Terms and conditions of service for EcoWish Craft India Pvt. Ltd.",
};

export default function TermsPage() {
  return (
    <div className="py-14 sm:py-20 bg-warm-canvas min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-ecowish-border shadow-soft">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ecowish-primary mb-2">
          Terms & Conditions
        </h1>
        <p className="text-xs text-ecowish-charcoal-muted mb-8">
          Effective Date: September 2024 • EcoWish Craft India Pvt. Ltd.
        </p>

        <div className="space-y-6 text-sm text-ecowish-charcoal-muted leading-relaxed">
          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website (ecowishcraft.com) or engaging EcoWish Craft India Pvt. Ltd. for bespoke design commissions, handicraft orders, or educational programs, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              2. Nature of Handcrafted & Upcycled Products
            </h2>
            <p>
              Due to the artisanal, handmade nature of our products and the use of upcycled/reclaimed materials (including discarded textiles, woods, paper, and metals), subtle variations in shade, texture, grain, and dimensions are inherent characteristics of authentic craftsmanship and not defects.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              3. Quotations, Inquiries & Orders
            </h2>
            <p>
              Quotations provided through our &ldquo;Request a Quote&rdquo; forms are initial estimates based on client specifications. Formal project contracts, milestones, advance payment percentages, and delivery schedules will be defined in mutual written proposals before artisan fabrication begins.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              4. Training & Workshop Guidelines
            </h2>
            <p>
              Enrollment in EcoWish training programs (Upcycling, Home Decor, Master Artisan, and Design Entrance Coaching) is subject to cohort availability. EcoWish provides skill enhancement and artistic mentorship; we do not guarantee exam results, government appointments, or third-party institutional admissions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All proprietary logos, branding, curriculum material, project photographs, and designs showcased on this website are the intellectual property of EcoWish Craft India Pvt. Ltd. and may not be reproduced without written authorization.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-lg font-bold text-ecowish-primary mb-2">
              6. Jurisdiction
            </h2>
            <p>
              These terms are governed in accordance with the laws of the Republic of India. Any legal proceedings arising out of or in connection with EcoWish services shall be subject to the jurisdiction of the competent courts in West Champaran / Patna, Bihar, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
