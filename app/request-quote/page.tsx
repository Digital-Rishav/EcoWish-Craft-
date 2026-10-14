import type { Metadata } from "next";
import { Sparkles, Phone, MessageCircle, Mail, Clock, ShieldCheck } from "lucide-react";
import RequestQuoteForm from "@/components/forms/RequestQuoteForm";
import { COMPANY_INFO } from "@/lib/constants/company";

export const metadata: Metadata = {
  title: "Request a Quote & Start a Project | EcoWish Craft India",
  description:
    "Request a bespoke proposal for eco-friendly home decor, upcycled handicrafts, portrait commissions, interior design, wedding decor, or corporate ESG projects.",
};

interface Props {
  searchParams?: {
    service?: string;
    coupon?: string;
  };
}

export default function RequestQuotePage({ searchParams }: Props) {
  const initialService = searchParams?.service || "";
  const initialCoupon = searchParams?.coupon || "DUSSEHRA50";

  return (
    <div className="py-14 sm:py-20 bg-warm-canvas min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecowish-sand text-xs font-semibold text-ecowish-primary mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ecowish-accent" />
            <span>Business & Bespoke Inquiries</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ecowish-primary tracking-tight">
            Start Your Custom Project
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ecowish-charcoal-muted leading-relaxed">
            Tell us about your space, dimensions, corporate gifting volume, or celebration theme. We will prepare an artisan material proposal and transparent quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Form Column (8 cols) */}
          <div className="lg:col-span-8">
            <RequestQuoteForm initialService={initialService} initialCoupon={initialCoupon} />
          </div>

          {/* Sidebar / Fast Touchpoints (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Urgent Assistance Box */}
            <div className="bg-white rounded-2xl p-6 border border-ecowish-border shadow-soft">
              <h3 className="font-serif font-bold text-base text-ecowish-primary mb-3">
                Need Immediate Assistance?
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted leading-relaxed mb-4">
                Have an urgent event date, tight corporate delivery deadline, or wish to share immediate architectural sketches?
              </p>

              <div className="space-y-3">
                <a
                  href={COMPANY_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-ecowish-border text-ecowish-charcoal text-xs font-semibold hover:bg-ecowish-sand transition-colors"
                >
                  <Phone className="w-4 h-4 text-ecowish-primary" />
                  <span>Call {COMPANY_INFO.contact.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="bg-ecowish-sand/50 rounded-2xl p-6 border border-ecowish-border">
              <h3 className="font-serif font-bold text-base text-ecowish-primary mb-3">
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-xs text-ecowish-charcoal-muted">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-ecowish-primary text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span>A unique Lead Reference ID is generated for your project.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-ecowish-primary text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span>You receive an instant confirmation email detailing your submission.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-ecowish-primary text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span>Our designer reviews the materials and contacts you via your preferred channel within 24–48 hours.</span>
                </li>
              </ol>
            </div>

            {/* Privacy Promise */}
            <div className="p-4 rounded-2xl bg-white border border-ecowish-border text-[11px] text-ecowish-charcoal-muted leading-relaxed flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>We never spam or sell your details. Your information is strictly used to evaluate and fulfill your creative inquiry.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
