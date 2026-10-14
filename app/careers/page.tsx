import type { Metadata } from "next";
import { Briefcase, Sparkles, MapPin, CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { CAREER_OPENINGS } from "@/lib/constants/careers";
import { COMPANY_INFO } from "@/lib/constants/company";
import CareerApplicationForm from "@/components/forms/CareerApplicationForm";

export const metadata: Metadata = {
  title: "Careers & Artisan Opportunities | EcoWish Craft India",
  description:
    "Join the EcoWish Craft India team in Bihar. Explore roles in artisan training, product design, marketing, B2B sales, logistics, and field coordination.",
};

export default function CareersPage() {
  return (
    <div className="py-14 sm:py-20 bg-warm-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecowish-sand text-xs font-semibold text-ecowish-primary mb-3">
            <Briefcase className="w-3.5 h-3.5 text-ecowish-accent" />
            <span>Join Our Mission</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ecowish-primary tracking-tight">
            Work With Meaning & Purpose
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ecowish-charcoal-muted leading-relaxed">
            Be part of an eco-conscious team combining industrial design, traditional Indian handicraft heritage, and tangible grassroots impact in Bihar.
          </p>
        </div>

        {/* Culture / Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-ecowish-border shadow-xs">
            <h3 className="font-serif font-bold text-base text-ecowish-primary mb-2">
              Artisan First
            </h3>
            <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
              We work shoulder-to-shoulder with master craftspeople in West Champaran and Patna, fostering mutual respect, fair compensation, and shared artistic pride.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-ecowish-border shadow-xs">
            <h3 className="font-serif font-bold text-base text-ecowish-primary mb-2">
              Design Innovation
            </h3>
            <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
              Experiment with discarded textiles, natural clays, and reclaimed timber to create functional prototypes that challenge consumer perceptions of waste.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-ecowish-border shadow-xs">
            <h3 className="font-serif font-bold text-base text-ecowish-primary mb-2">
              Empowering Bihar
            </h3>
            <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
              Building sustainable creative infrastructure and enterprise opportunities directly in our home state of Bihar.
            </p>
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              Open Positions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary mt-1">
              Current Areas of Interest & Vacancies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_OPENINGS.map((op) => (
              <div
                key={op.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-ecowish-border shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                      {op.department}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-ecowish-sand text-[11px] font-semibold text-ecowish-primary">
                      {op.type}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ecowish-primary mb-2">
                    {op.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-ecowish-charcoal-muted mb-4">
                    <MapPin className="w-3.5 h-3.5 text-ecowish-secondary" />
                    <span>{op.location}</span>
                    <span className="text-ecowish-sand">•</span>
                    <span>{op.experience}</span>
                  </div>

                  <p className="text-xs text-ecowish-charcoal-muted mb-4 leading-relaxed">
                    {op.shortDescription}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-ecowish-sand">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-ecowish-charcoal mb-1">
                        Key Responsibilities:
                      </div>
                      <ul className="space-y-1 text-xs text-ecowish-charcoal-muted">
                        {op.responsibilities.slice(0, 2).map((r) => (
                          <li key={r} className="flex items-start gap-1.5">
                            <span className="text-ecowish-accent font-bold">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-ecowish-sand">
                  <a
                    href="#apply-form"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ecowish-primary hover:text-ecowish-secondary"
                  >
                    <span>Apply for this role</span>
                    <ArrowRight className="w-3.5 h-3.5 text-ecowish-accent" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-ecowish-border shadow-soft max-w-4xl mx-auto" id="apply-form">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              Candidate Submission
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary mt-1">
              Submit Your Career Application
            </h2>
            <p className="text-xs sm:text-sm text-ecowish-charcoal-muted mt-2">
              Share your details and portfolio link below. You can also email your CV directly to{" "}
              <a href={`mailto:${COMPANY_INFO.contact.careersEmail}`} className="underline font-bold text-ecowish-primary">
                {COMPANY_INFO.contact.careersEmail}
              </a>
              .
            </p>
          </div>

          <CareerApplicationForm />
        </div>
      </div>
    </div>
  );
}
