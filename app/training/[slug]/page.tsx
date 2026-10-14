import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { TRAINING_PROGRAMS, TrainingProgram } from "@/lib/constants/training";
import { COMPANY_INFO } from "@/lib/constants/company";
import TrainingApplicationForm from "@/components/forms/TrainingApplicationForm";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return TRAINING_PROGRAMS.map((prog) => ({
    slug: prog.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const prog = TRAINING_PROGRAMS.find((p) => p.slug === params.slug);
  if (!prog) return { title: "Program Not Found" };

  return {
    title: `${prog.title} | EcoWish Craft Training`,
    description: prog.shortDescription,
    openGraph: {
      title: `${prog.title} | EcoWish Craft Training`,
      description: prog.shortDescription,
      images: [{ url: prog.image }],
    },
  };
}

export default function TrainingProgramDetailPage({ params }: Props) {
  const prog = TRAINING_PROGRAMS.find((p) => p.slug === params.slug);

  if (!prog) {
    notFound();
  }

  return (
    <div className="space-y-0">
      {/* Hero Header */}
      <section className="bg-ecowish-primary text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-ecowish-accent">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{prog.category}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {prog.title}
              </h1>
              <p className="font-serif text-lg text-ecowish-accent-light italic">
                {prog.tagline}
              </p>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed pt-2">
                {prog.fullDescription}
              </p>

              {/* Fast Meta Info Grid */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/10">
                  <div className="text-white/60 font-medium">Duration:</div>
                  <div className="font-bold text-white mt-0.5">{prog.duration}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10">
                  <div className="text-white/60 font-medium">Location:</div>
                  <div className="font-bold text-white mt-0.5">{prog.location}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 col-span-2 sm:col-span-1">
                  <div className="text-white/60 font-medium">Current Fee:</div>
                  <div className="font-bold text-ecowish-accent mt-0.5 italic">{prog.currentFeeText}</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#enroll-form"
                  className="px-6 py-3.5 rounded-xl bg-ecowish-accent text-ecowish-primary font-bold text-xs sm:text-sm hover:bg-ecowish-accent-light transition-colors shadow-md"
                >
                  Apply for This Program
                </a>
                <a
                  href={COMPANY_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-elevated border-4 border-white/20">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas & Benefits */}
      <section className="py-16 bg-white border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Focus Areas */}
            <div className="bg-ecowish-bg rounded-2xl p-8 border border-ecowish-border">
              <div className="flex items-center gap-3 mb-5">
                <BookOpen className="w-6 h-6 text-ecowish-primary" />
                <h2 className="font-serif text-2xl font-bold text-ecowish-primary">
                  Program Focus Areas
                </h2>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-ecowish-charcoal-muted">
                {prog.focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-ecowish-secondary flex-shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div className="bg-ecowish-bg rounded-2xl p-8 border border-ecowish-border">
              <div className="flex items-center gap-3 mb-5">
                <Award className="w-6 h-6 text-ecowish-accent-dark" />
                <h2 className="font-serif text-2xl font-bold text-ecowish-primary">
                  Participant Benefits
                </h2>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-ecowish-charcoal-muted">
                {prog.keyBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Curriculum Breakdown */}
      <section className="py-16 bg-warm-canvas border-b border-ecowish-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              Course Syllabus
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary mt-1">
              Structured Curriculum Breakdown
            </h2>
          </div>

          <div className="space-y-4">
            {prog.curriculum.map((item) => (
              <div
                key={item.module}
                className="bg-white rounded-2xl p-6 border border-ecowish-border shadow-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 rounded bg-ecowish-sand text-xs font-bold text-ecowish-primary">
                    {item.module}
                  </span>
                  <h3 className="font-serif font-bold text-base text-ecowish-primary">
                    {item.title}
                  </h3>
                </div>
                <ul className="mt-3 pl-2 space-y-1.5 text-xs text-ecowish-charcoal-muted list-disc list-inside">
                  {item.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Scholarship Notice Box */}
          <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed text-center">
            <strong>Scholarship Notice:</strong> {prog.scholarshipNotice}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white" id="enroll-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              Enrollment
            </span>
            <h2 className="font-serif text-3xl font-bold text-ecowish-primary mt-1">
              Apply for: {prog.title}
            </h2>
            <p className="text-sm text-ecowish-charcoal-muted mt-2">
              Fill out your details below. Our admissions team will reach out with batch timings, fee options, and orientation instructions.
            </p>
          </div>

          <TrainingApplicationForm
            initialCourse={prog.title}
            initialCategory={prog.category}
          />
        </div>
      </section>
    </div>
  );
}
