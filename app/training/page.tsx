import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Award,
  Users,
  ShieldCheck,
} from "lucide-react";
import { TRAINING_PROGRAMS, UPCOMING_BATCHES } from "@/lib/constants/training";

export const metadata: Metadata = {
  title: "Training & Artisan Skill Development | EcoWish Craft India",
  description:
    "Professional craft, upcycling, portrait painting, and design entrance exam (NIFT/NID/UCEED) mentoring in Bihar. Convert waste into valuable handicrafts and build creative careers.",
};

export default function TrainingPage() {
  const trainingBenefits = [
    "Learn to convert waste into sellable, high-utility handicrafts",
    "Blend traditional Indian craft with modern design principles",
    "Improve household income and self-reliant entrepreneurship opportunities",
    "Direct opportunity to work on EcoWish commercial client projects",
    "Official Certificate of Completion awarded after evaluation",
    "Join an active, supportive network of eco-conscious creators and artisans",
  ];

  const categories = [
    { title: "Portrait & Painting Training", desc: "Fine arts, live portraiture, anatomy, charcoal, acrylics, and folk arts." },
    { title: "Handicraft & Upcycling Training", desc: "Fiber weaving, mold making, paper pulp, and waste material manipulation." },
    { title: "Sustainable Home Decor Training", desc: "Modern interior accessories, trend research, BOM costing, and premium finishes." },
    { title: "Design & Creative Skill Development", desc: "Form exploration, visual storytelling, 2D/3D prototyping, and studio critique." },
    { title: "Design Entrance Exam Preparation", desc: "Targeted coaching for NIFT, NID, UCEED, CEED, and leading design universities." },
  ];

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-ecowish-primary text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-ecowish-accent">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Creative Skill Development & Mentorship</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/50 text-xs font-bold text-amber-300">
              <span>🏹 Dussehra Offer: FLAT 50% OFF (Code: DUSSEHRA50)</span>
            </div>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Learn Practical Craft, Upcycling & Design Excellence
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Hands-on training programs designed for young designers, students, aspiring artists, rural craftspeople, and candidates preparing for premier design entrance examinations in India.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply?coupon=DUSSEHRA50"
              className="px-6 py-3.5 rounded-xl bg-ecowish-accent text-ecowish-primary text-xs sm:text-sm font-bold hover:bg-ecowish-accent-light transition-colors shadow-md"
            >
              Apply with 50% Festive Discount
            </Link>
            <Link
              href="/exams"
              className="px-6 py-3.5 rounded-xl border border-white/30 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Design Exam Coaching
            </Link>
          </div>
        </div>
      </section>

      {/* 5 Core Training Categories */}
      <section className="py-16 bg-white border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              Academic Architecture
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary mt-1">
              Core Training Verticals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {categories.map((cat, idx) => (
              <div
                key={cat.title}
                className="bg-ecowish-bg rounded-2xl p-5 border border-ecowish-border hover:border-ecowish-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-ecowish-accent-dark mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-base text-ecowish-primary mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Catalog */}
      <section className="py-20 bg-warm-canvas border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                Curriculum Catalog
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ecowish-primary mt-1">
                Featured Programs & Workshops
              </h2>
            </div>
            <Link
              href="/batches"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-ecowish-primary hover:underline"
            >
              <span>View batch schedule & locations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRAINING_PROGRAMS.map((prog) => (
              <div
                key={prog.slug}
                className="bg-white rounded-2xl overflow-hidden border border-ecowish-border shadow-soft flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative min-h-[220px] bg-ecowish-sand">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 text-[11px] font-bold text-ecowish-primary">
                    {prog.duration.split("(")[0]}
                  </div>
                </div>

                <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ecowish-accent-dark">
                      {prog.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-ecowish-primary mt-1 mb-2">
                      <Link href={`/training/${prog.slug}`} className="hover:underline">
                        {prog.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-ecowish-charcoal-muted leading-relaxed line-clamp-3">
                      {prog.shortDescription}
                    </p>

                    <div className="mt-3 pt-3 border-t border-ecowish-sand text-[11px] text-ecowish-charcoal">
                      <div>
                        <strong>Location:</strong> {prog.location}
                      </div>
                      <div className="italic text-ecowish-charcoal-muted mt-0.5">
                        Fee: {prog.currentFeeText}
                      </div>
                      <div className="mt-1 text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                        🏹 Dussehra Special: 50% Off with DUSSEHRA50
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Link
                      href={`/training/${prog.slug}`}
                      className="px-4 py-2 rounded-lg bg-ecowish-primary text-white text-xs font-semibold hover:bg-ecowish-primary-hover transition-colors"
                    >
                      View Syllabus
                    </Link>
                    <Link
                      href={`/apply?course=${encodeURIComponent(prog.title)}&coupon=DUSSEHRA50`}
                      className="px-4 py-2 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold hover:bg-amber-200 transition-colors"
                    >
                      Apply 50% Off
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits from Supplied Company Information */}
      <section className="py-20 bg-white border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                Artisan Prosperity & Creative Growth
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ecowish-primary">
                Why Train With EcoWish Craft India?
              </h2>
              <p className="text-sm text-ecowish-charcoal-muted leading-relaxed">
                Unlike theoretical classrooms, our training is delivered in active production studios where students interact directly with master craftspeople, study real market demand, and turn discarded materials into commercial-grade products.
              </p>

              <div className="space-y-3 pt-2">
                {trainingBenefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 text-xs sm:text-sm text-ecowish-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Scholarship Banner */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>Scholarship Assistance:</strong> We offer special financial support, fee waivers, and sponsored toolkits for women, rural artisans, and differently-abled candidates.
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-elevated border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                  alt="Student learning portraiture and craft"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Exam CTA Banner */}
      <section className="py-16 bg-warm-canvas">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary">
            Preparing for NIFT, NID, UCEED, or CEED?
          </h2>
          <p className="text-sm text-ecowish-charcoal-muted max-w-xl mx-auto">
            Get personalized mentoring from NIFT textile design alumnus Sudhanshu Pandey, focusing on observation, CAT drawing, and 3D situation tests.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/exams"
              className="px-6 py-3 rounded-xl bg-ecowish-primary text-white text-xs font-semibold hover:bg-ecowish-primary-hover transition-colors"
            >
              View Exam Preparation Syllabus
            </Link>
            <Link
              href="/apply?examPrep=true"
              className="px-6 py-3 rounded-xl border border-ecowish-border text-ecowish-charcoal text-xs font-semibold hover:bg-ecowish-sand transition-colors"
            >
              Apply for Coaching Batch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
