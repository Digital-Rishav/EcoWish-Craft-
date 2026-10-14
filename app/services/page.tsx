import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import ServiceGrid from "@/components/services/ServiceGrid";

export const metadata: Metadata = {
  title: "Client Services | EcoWish Craft India Pvt. Ltd.",
  description:
    "Explore our eco-conscious design and craft services: home decor, upcycled handicrafts, fine art portrait commissions, interior design, event decor, and corporate ESG projects.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecowish-sand text-xs font-semibold text-ecowish-primary mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ecowish-accent" />
            <span>Creative Client Services</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ecowish-primary tracking-tight">
            Tailored Sustainable Solutions for Every Space & Occasion
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ecowish-charcoal-muted leading-relaxed">
            From heirloom residential decor to corporate gifting and full-scale eco-friendly event styling, we turn sustainable materials into bespoke design statements.
          </p>
        </div>

        {/* Services Grid */}
        <ServiceGrid />

        {/* Bottom Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-ecowish-sand/70 border border-ecowish-border text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-ecowish-primary mb-2">
            Have a Bespoke Requirement or Institutional RFP?
          </h2>
          <p className="text-sm text-ecowish-charcoal-muted max-w-2xl mx-auto mb-6">
            We work closely with architects, procurement heads, and event curators to develop custom prototypes, material samples, and transparent project estimates.
          </p>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-ecowish-primary text-white text-sm font-semibold hover:bg-ecowish-primary-hover transition-colors shadow-md"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4 text-ecowish-accent" />
          </Link>
        </div>
      </div>
    </div>
  );
}
