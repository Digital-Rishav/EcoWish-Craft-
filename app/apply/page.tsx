import type { Metadata } from "next";
import { GraduationCap, MessageCircle, Phone, Award, ShieldCheck } from "lucide-react";
import TrainingApplicationForm from "@/components/forms/TrainingApplicationForm";
import { COMPANY_INFO } from "@/lib/constants/company";

export const metadata: Metadata = {
  title: "Apply for Training & Design Exam Mentorship | EcoWish Craft India",
  description:
    "Register for hands-on craft workshops, upcycling masterclasses, and NIFT / NID / UCEED design entrance coaching in Patna and West Champaran.",
};

interface Props {
  searchParams?: {
    course?: string;
    category?: string;
    examPrep?: string;
    batch?: string;
    coupon?: string;
  };
}

export default function ApplyPage({ searchParams }: Props) {
  const initialCourse = searchParams?.course || searchParams?.batch || "";
  const initialCategory = searchParams?.category || "";
  const isExamPrepDefault = searchParams?.examPrep === "true";
  const initialCoupon = searchParams?.coupon || "DUSSEHRA50";

  return (
    <div className="py-14 sm:py-20 bg-warm-canvas min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecowish-sand text-xs font-semibold text-ecowish-primary mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-ecowish-secondary" />
            <span>Admissions Desk</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ecowish-primary tracking-tight">
            Apply for Creative Training
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ecowish-charcoal-muted leading-relaxed">
            Fill in your details below to register for upcoming batches or request one-on-one design entrance examination mentoring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Application Form Column (8 cols) */}
          <div className="lg:col-span-8">
            <TrainingApplicationForm
              initialCourse={initialCourse}
              initialCategory={initialCategory}
              isExamPrepDefault={isExamPrepDefault}
              initialCoupon={initialCoupon}
            />
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Admissions Assistance */}
            <div className="bg-white rounded-2xl p-6 border border-ecowish-border shadow-soft">
              <h3 className="font-serif font-bold text-base text-ecowish-primary mb-2">
                Questions About Batches or Fees?
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted leading-relaxed mb-4">
                Chat directly with our academic coordinator on WhatsApp for syllabus details, center locations, and fee guidelines.
              </p>

              <div className="space-y-3">
                <a
                  href={COMPANY_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Admissions WhatsApp Desk</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-ecowish-border text-ecowish-charcoal text-xs font-semibold hover:bg-ecowish-sand transition-colors"
                >
                  <Phone className="w-4 h-4 text-ecowish-primary" />
                  <span>Call Admissions: {COMPANY_INFO.contact.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Scholarships & Aid */}
            <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200/80 text-amber-900">
              <div className="flex items-center gap-2 mb-2 font-serif font-bold text-base">
                <Award className="w-5 h-5 text-amber-700" />
                <span>Scholarships & Aid</span>
              </div>
              <p className="text-xs leading-relaxed">
                Special financial aid, fee waivers, and subsidized materials are reserved for women creators, candidates from rural artisan clusters, and differently-abled individuals. Please mention your background in the application form.
              </p>
            </div>

            {/* Student Journey */}
            <div className="bg-white rounded-2xl p-6 border border-ecowish-border shadow-xs text-xs text-ecowish-charcoal-muted space-y-3">
              <h4 className="font-serif font-bold text-sm text-ecowish-primary">
                Admissions Process
              </h4>
              <div className="space-y-2">
                <div>1. <strong>Submit Form:</strong> You receive an instant application confirmation ID.</div>
                <div>2. <strong>Counseling Call:</strong> We discuss your creative goals, schedule, and fees.</div>
                <div>3. <strong>Studio Orientation:</strong> Visit our Patna or Champaran studios and begin your hands-on journey.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
