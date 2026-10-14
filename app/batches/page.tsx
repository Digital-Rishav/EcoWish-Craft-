import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, Sparkles, CheckCircle2, ShieldAlert } from "lucide-react";
import { UPCOMING_BATCHES } from "@/lib/constants/training";

export const metadata: Metadata = {
  title: "Upcoming Training Batches | EcoWish Craft India",
  description:
    "Check upcoming training batches for Upcycling Workshops, Home Decor, and Master Artisan programs in Patna and West Champaran, Bihar.",
};

export default function BatchesPage() {
  return (
    <div className="py-14 sm:py-20 bg-warm-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecowish-sand text-xs font-semibold text-ecowish-primary mb-3">
            <Calendar className="w-3.5 h-3.5 text-ecowish-accent" />
            <span>Admissions & Schedules</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ecowish-primary tracking-tight">
            Upcoming Training Batches
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ecowish-charcoal-muted leading-relaxed">
            Reserve your seat in our hands-on craft studios in Patna and West Champaran. Small cohort sizes ensure individual attention and material mentorship.
          </p>
        </div>

        {/* Scholarship / Fee Policy Callout */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/90 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base text-amber-950">
                🏹 Dussehra Mahotsav 50% Concession
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-extrabold">
                Code: DUSSEHRA50
              </span>
            </div>
            <p className="text-xs text-amber-900/85 max-w-xl">
              Get a flat 50% festive discount on all batch admissions and studio starter kits during this festive window. Special scholarships also open for women and rural artisans.
            </p>
          </div>
          <Link
            href="/apply?coupon=DUSSEHRA50"
            className="px-5 py-2.5 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors flex-shrink-0 shadow-sm"
          >
            Claim 50% Concession
          </Link>
        </div>

        {/* Batches Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {UPCOMING_BATCHES.map((batch) => (
            <div
              key={batch.id}
              className="bg-white rounded-3xl p-8 border border-ecowish-border shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      batch.status === "Open"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        batch.status === "Open" ? "bg-emerald-600 animate-pulse" : "bg-amber-600"
                      }`}
                    />
                    <span>{batch.status} for Registration</span>
                  </span>
                  <span className="font-serif font-bold text-base text-ecowish-accent-dark">
                    {batch.duration}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-ecowish-primary mb-3">
                  {batch.programTitle}
                </h2>

                <div className="space-y-3 pt-3 border-t border-ecowish-sand text-xs text-ecowish-charcoal-muted">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-ecowish-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Centers:</strong> {batch.locations.join(" & ")} (Bihar)
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-ecowish-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Timeline:</strong> {batch.startDateDescription}
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-ecowish-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Format:</strong> {batch.scheduleDescription}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3.5 rounded-xl bg-ecowish-bg border border-ecowish-border text-xs text-ecowish-charcoal">
                  <div><strong>Course Fee:</strong> <span className="italic text-ecowish-charcoal-muted">Contact us for current fees</span></div>
                  {batch.scholarshipAvailable && (
                    <div className="text-[11px] text-emerald-700 font-medium mt-1">
                      ✓ Women & Rural Artisan Scholarships Open
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-8 space-y-2">
                <Link
                  href={`/apply?batch=${encodeURIComponent(batch.programTitle)}&coupon=DUSSEHRA50`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-ecowish-primary text-white text-xs font-semibold hover:bg-ecowish-primary-hover transition-colors shadow-sm"
                >
                  <span>Apply with 50% Dussehra Off</span>
                  <ArrowRight className="w-3.5 h-3.5 text-ecowish-accent" />
                </Link>

                <Link
                  href={`/training/${batch.programSlug}`}
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-medium text-ecowish-charcoal hover:bg-ecowish-sand transition-colors"
                >
                  View Full Course Syllabus
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Questions callout */}
        <div className="p-8 rounded-2xl bg-white border border-ecowish-border text-center max-w-2xl mx-auto">
          <h3 className="font-serif font-bold text-lg text-ecowish-primary mb-2">
            Have Questions Regarding Accommodation or Center Access?
          </h3>
          <p className="text-xs text-ecowish-charcoal-muted mb-4 leading-relaxed">
            Our admissions coordinators can assist outstation students with studio travel guidelines and local lodging recommendations in Patna and West Champaran.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-xs font-semibold text-ecowish-primary hover:underline"
          >
            <span>Contact Studio Admissions</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
