import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Package,
  Layers,
  HelpCircle,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/lib/constants/services";
import { COMPANY_INFO } from "@/lib/constants/company";
import RequestQuoteForm from "@/components/forms/RequestQuoteForm";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | EcoWish Craft India`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | EcoWish Craft India`,
      description: service.shortDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <section className="bg-ecowish-primary text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-ecowish-accent">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Client & Bespoke Service</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {service.title}
              </h1>
              <p className="font-serif text-lg text-ecowish-accent-light italic">
                {service.tagline}
              </p>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl pt-2">
                {service.fullDescription}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#quote-form"
                  className="px-6 py-3.5 rounded-xl bg-ecowish-accent text-ecowish-primary font-bold text-xs sm:text-sm hover:bg-ecowish-accent-light transition-colors shadow-md"
                >
                  Request a Quote for This Service
                </a>
                <a
                  href={COMPANY_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-elevated border-4 border-white/20">
                <Image
                  src={service.heroImage}
                  alt={service.title}
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

      {/* Target Audience & Deliverables Section */}
      <section className="py-16 bg-white border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Who It Is For */}
            <div className="bg-ecowish-bg rounded-2xl p-8 border border-ecowish-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-ecowish-sand flex items-center justify-center text-ecowish-primary">
                  <Users className="w-5 h-5 text-ecowish-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-ecowish-primary">
                  Who This Is For
                </h2>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-ecowish-charcoal-muted">
                {service.targetAudience.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What EcoWish Provides */}
            <div className="bg-ecowish-bg rounded-2xl p-8 border border-ecowish-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-ecowish-sand flex items-center justify-center text-ecowish-primary">
                  <Package className="w-5 h-5 text-ecowish-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-ecowish-primary">
                  What EcoWish Delivers
                </h2>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-ecowish-charcoal-muted">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-ecowish-accent-dark flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example Use Cases & Impact */}
      <section className="py-16 bg-warm-canvas border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              Case Highlights
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary mt-1">
              Example Use Cases & Sustainability Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.exampleUseCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-ecowish-border shadow-xs"
              >
                <h3 className="font-serif font-bold text-lg text-ecowish-primary mb-2">
                  {useCase.title}
                </h3>
                <p className="text-xs sm:text-sm text-ecowish-charcoal-muted mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-medium border border-emerald-200/60">
                  <strong>Impact:</strong> {useCase.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 bg-white border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              Execution Methodology
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary mt-1">
              How We Execute Your Project
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-ecowish-bg border border-ecowish-border relative"
              >
                <div className="text-2xl font-serif font-bold text-ecowish-accent-dark mb-2">
                  {step.step}
                </div>
                <h3 className="font-serif font-bold text-base text-ecowish-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-warm-canvas border-b border-ecowish-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-2xl p-6 border border-ecowish-border shadow-xs"
              >
                <h3 className="font-serif font-bold text-base text-ecowish-primary mb-2 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-ecowish-accent-dark flex-shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-ecowish-charcoal-muted leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Quote Form Section */}
      <section className="py-20 bg-white" id="quote-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              Start Your Journey
            </span>
            <h2 className="font-serif text-3xl font-bold text-ecowish-primary mt-1">
              Request a Custom Quote: {service.title}
            </h2>
            <p className="text-sm text-ecowish-charcoal-muted mt-2">
              Tell us about your timeline, dimensions, or budget preferences. We will respond with a tailored proposal.
            </p>
          </div>

          <RequestQuoteForm initialService={service.title} />
        </div>
      </section>
    </div>
  );
}
