import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { TRAINING_PROGRAMS, UPCOMING_BATCHES } from "@/lib/constants/training";

export default function TrainingPreview() {
  return (
    <section className="py-20 bg-white border-b border-ecowish-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecowish-sand text-xs font-semibold text-ecowish-primary mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-ecowish-secondary" />
              <span>Art, Craft & Design Education</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ecowish-primary tracking-tight">
              Empowering Artisans, Students & Aspiring Designers
            </h2>
            <p className="mt-3 text-sm text-ecowish-charcoal-muted leading-relaxed">
              Practical, hands-on masterclasses and entrance exam mentoring combining traditional craftsmanship with modern design pedagogy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/batches"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-ecowish-border text-xs font-semibold text-ecowish-charcoal hover:bg-ecowish-sand transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-ecowish-accent-dark" />
              <span>Upcoming Batches</span>
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-ecowish-primary text-white text-xs font-semibold hover:bg-ecowish-primary-hover transition-colors shadow-sm"
            >
              <span>Apply for Training</span>
              <ArrowRight className="w-3.5 h-3.5 text-ecowish-accent" />
            </Link>
          </div>
        </div>

        {/* Training Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TRAINING_PROGRAMS.map((prog) => (
            <div
              key={prog.slug}
              className="bg-ecowish-bg rounded-2xl overflow-hidden border border-ecowish-border shadow-xs hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-bold text-ecowish-primary">
                    {prog.duration.split("(")[0].trim()}
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ecowish-accent-dark">
                    {prog.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ecowish-primary mt-1 mb-2 leading-snug">
                    <Link href={`/training/${prog.slug}`} className="hover:underline">
                      {prog.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-ecowish-charcoal-muted line-clamp-2 leading-relaxed">
                    {prog.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-ecowish-border/60 text-xs space-y-1">
                    <div className="text-[11px] text-ecowish-charcoal font-medium">
                      Location: <span className="font-normal text-ecowish-charcoal-muted">{prog.location}</span>
                    </div>
                    <div className="text-[11px] text-ecowish-charcoal font-medium">
                      Fee: <span className="font-normal text-ecowish-charcoal-muted italic">{prog.currentFeeText}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/training/${prog.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-ecowish-primary/30 text-xs font-semibold text-ecowish-primary hover:bg-ecowish-primary hover:text-white transition-colors"
                >
                  <span>View Syllabus</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Design Exam Prep Spotlight Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-ecowish-primary to-ecowish-secondary text-white p-8 sm:p-10 shadow-elevated relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-ecowish-accent/10 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-ecowish-accent">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NIFT / NID / UCEED / CEED Exam Coaching</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                Design Entrance Examination Mentorship
              </h3>
              <p className="text-sm text-white/85 max-w-2xl leading-relaxed">
                Led by NIFT graduate Sudhanshu Pandey, our structured curriculum focuses on Creative Ability Test (CAT), General Ability Test (GAT), 3D Situation Tests, observation sketching, and creative portfolio development.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-white/90">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-ecowish-accent" />
                  <span>CAT & GAT Foundation</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-ecowish-accent" />
                  <span>Hands-on Material Handling</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-ecowish-accent" />
                  <span>Mock Juries & Portfolio Building</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/exams"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-ecowish-primary text-sm font-semibold hover:bg-ecowish-sand transition-colors shadow-sm"
              >
                <span>Explore Exam Prep</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/apply?examPrep=true"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <span>Register for Design Coaching</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
