import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Layers,
  HelpCircle,
} from "lucide-react";
import { DESIGN_EXAM_PREP } from "@/lib/constants/training";
import TrainingApplicationForm from "@/components/forms/TrainingApplicationForm";

export const metadata: Metadata = {
  title: "Design Entrance Exam Preparation (NIFT, NID, UCEED) | EcoWish Craft India",
  description:
    "Comprehensive mentorship for Indian design entrance examinations (NIFT, NID, UCEED, CEED) led by NIFT alumnus Sudhanshu Pandey in Bihar.",
};

export default function DesignExamsPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-ecowish-primary text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-ecowish-accent">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Design Entrance Mentorship</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/50 text-xs font-bold text-amber-300">
              <span>🏹 Dussehra 50% Coaching Scholarship (Code: DUSSEHRA50)</span>
            </div>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Design Entrance Examination Preparation
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Personalized, studio-based mentoring guided by NIFT Textile Design graduate Sudhanshu Pandey. We help aspiring designers master freehand sketching, spatial visualization, 3D material manipulation, and portfolio presentation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#exam-apply"
              className="px-6 py-3.5 rounded-xl bg-ecowish-accent text-ecowish-primary text-xs sm:text-sm font-bold hover:bg-ecowish-accent-light transition-colors shadow-md"
            >
              Apply for Coaching Batch
            </a>
            <a
              href="#exam-categories"
              className="px-6 py-3.5 rounded-xl border border-white/30 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              View Exam Categories
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimers & Methodology */}
      <section className="py-12 bg-white border-b border-ecowish-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-2xl bg-ecowish-sand/60 border border-ecowish-border text-xs text-ecowish-charcoal-muted leading-relaxed">
            <strong>Transparency Notice:</strong> EcoWish Craft India Pvt. Ltd. provides independent artistic and design aptitude coaching. We do not claim official affiliation, endorsement, or accreditation with NIFT, NID, IIT (UCEED/CEED), or any examination authority. We strictly focus on authentic skill building, drawing fundamentals, and creative problem solving.
          </div>
        </div>
      </section>

      {/* Mentorship Methodology Pillars */}
      <section className="py-16 bg-warm-canvas border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              Pedagogy
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary mt-1">
              Our Design Mentoring Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-ecowish-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-ecowish-sand flex items-center justify-center text-ecowish-primary mb-3">
                <BookOpen className="w-5 h-5 text-ecowish-secondary" />
              </div>
              <h3 className="font-serif font-bold text-base text-ecowish-primary mb-2">
                1. Creative & Visual Fundamentals
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
                Linear perspective (1, 2, 3 point), human figures in motion, light, shadow, texture rendering, and contextual everyday observation drills.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-ecowish-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-ecowish-sand flex items-center justify-center text-ecowish-primary mb-3">
                <Layers className="w-5 h-5 text-ecowish-accent-dark" />
              </div>
              <h3 className="font-serif font-bold text-base text-ecowish-primary mb-2">
                2. 3D Situation Test / Studio Round
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
                Hands-on material manipulation using paper, wire, clay, foam, and discarded scrap. Learning structural stability, scale, and compelling write-ups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-ecowish-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-ecowish-sand flex items-center justify-center text-ecowish-primary mb-3">
                <GraduationCap className="w-5 h-5 text-ecowish-primary" />
              </div>
              <h3 className="font-serif font-bold text-base text-ecowish-primary mb-2">
                3. Portfolio & Interview Critiques
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
                Curating diverse sketches, craft prototypes, and personal artwork into cohesive design portfolios with mock personal interview simulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Categories (Extensible Architecture) */}
      <section className="py-20 bg-white border-b border-ecowish-border" id="exam-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              Examinations Covered
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ecowish-primary mt-1">
              Targeted Examination Tracks
            </h2>
            <p className="text-sm text-ecowish-charcoal-muted mt-2">
              Our curriculum is structured to address both general aesthetic aptitude and the specific testing patterns of premier institutions.
            </p>
          </div>

          <div className="space-y-8">
            {DESIGN_EXAM_PREP.map((exam) => (
              <div
                key={exam.id}
                className="bg-ecowish-bg rounded-3xl p-6 sm:p-8 border border-ecowish-border hover:border-ecowish-primary/40 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-ecowish-border">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-ecowish-primary text-white font-mono font-bold text-xs">
                        {exam.code}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-ecowish-primary">
                        {exam.name}
                      </h3>
                    </div>
                    <div className="text-xs text-ecowish-secondary font-medium mt-1">
                      Institutions: {exam.targetInstitutions}
                    </div>
                  </div>

                  <a
                    href="#exam-apply"
                    className="self-start lg:self-center px-4 py-2 rounded-xl bg-white border border-ecowish-border text-xs font-semibold text-ecowish-primary hover:bg-ecowish-primary hover:text-white transition-colors"
                  >
                    Enroll for {exam.code} Prep
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ecowish-charcoal mb-3">
                      Syllabus & Training Highlights:
                    </h4>
                    <ul className="space-y-2 text-xs text-ecowish-charcoal-muted">
                      {exam.syllabusHighlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 bg-white p-5 rounded-2xl border border-ecowish-border/80">
                    <div>
                      <span className="text-[11px] font-bold text-ecowish-charcoal uppercase tracking-wider">
                        Exam Focus:
                      </span>
                      <p className="text-xs text-ecowish-charcoal-muted mt-0.5 leading-relaxed">
                        {exam.examPatternSummary}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-ecowish-sand">
                      <span className="text-[11px] font-bold text-ecowish-charcoal uppercase tracking-wider">
                        Ideal Candidate:
                      </span>
                      <p className="text-xs text-ecowish-charcoal-muted mt-0.5 leading-relaxed">
                        {exam.idealFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-warm-canvas" id="exam-apply">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              Registration
            </span>
            <h2 className="font-serif text-3xl font-bold text-ecowish-primary mt-1">
              Apply for Design Entrance Mentorship
            </h2>
            <p className="text-sm text-ecowish-charcoal-muted mt-2">
              Select your target examination and preferred batch. Our academic coordinator will contact you with batch schedules and fee details.
            </p>
          </div>

          <TrainingApplicationForm
            initialCourse="Design Entrance Preparation (NIFT / NID / UCEED)"
            initialCategory="Design Entrance Examination Preparation"
            isExamPrepDefault={true}
          />
        </div>
      </section>
    </div>
  );
}
