import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  ChevronRight,
  Award,
  Layers,
  Leaf,
} from "lucide-react";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ValueStory from "@/components/home/ValueStory";
import ServiceGrid from "@/components/services/ServiceGrid";
import TrainingPreview from "@/components/training/TrainingPreview";
import MeetFounders from "@/components/founders/MeetFounders";
import DussehraSaleSection from "@/components/festive/DussehraSaleSection";
import { PORTFOLIO_ITEMS } from "@/lib/constants/portfolio";
import { UPCOMING_BATCHES } from "@/lib/constants/training";
import { COMPANY_INFO } from "@/lib/constants/company";

export default function HomePage() {
  const featuredPortfolio = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* Dussehra Mahotsav Sale Section (Flat 50% OFF) */}
      <DussehraSaleSection />

      {/* 3. About EcoWish & Origin Summary */}
      <section className="py-20 bg-warm-canvas border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-elevated border-4 border-white">
                <Image
                  src="/assets/images/ecowishcraftimage.jpg"
                  alt="EcoWish Craft India authentic upcycled agriculture craft"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-ecowish-primary text-white p-6 rounded-2xl shadow-elevated max-w-xs border border-ecowish-primary-light">
                <div className="font-serif text-3xl font-bold text-ecowish-accent">100%</div>
                <div className="text-xs font-medium text-white/90 mt-1">
                  Commitment to eco-conscious materials, local artisan livelihoods & circular design.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecowish-sand text-xs font-semibold text-ecowish-primary">
                <Leaf className="w-3.5 h-3.5 text-ecowish-secondary" />
                <span>Our Philosophy & Purpose</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ecowish-primary tracking-tight">
                Where Waste Becomes Art & Tradition Meets Innovation
              </h2>

              <p className="text-sm sm:text-base text-ecowish-charcoal-muted leading-relaxed">
                Headquartered in West Champaran with studios in Patna, Bihar, <strong>EcoWish Craft India Pvt. Ltd.</strong> was founded on a simple yet radical premise: <em>waste is not a burden, but an abundant resource for extraordinary design</em>.
              </p>

              <p className="text-sm text-ecowish-charcoal-muted leading-relaxed">
                By bridging traditional Indian craftsmanship with contemporary design principles, we transform industrial offcuts, discarded fabrics, and natural residues into heirloom home decor, fine portraits, bespoke event installations, and ethical corporate merchandise.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-ecowish-charcoal">Reclaiming discarded textiles & wood</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-ecowish-charcoal">NIFT & Engineering founding leadership</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-ecowish-charcoal">Skill building for rural Bihar craft clusters</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-ecowish-charcoal">Design entrance examination mentoring</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ecowish-primary hover:text-ecowish-secondary underline underline-offset-4"
                >
                  <span>Read our full story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Do: Core Business Services */}
      <section className="py-20 bg-white border-b border-ecowish-border" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecowish-sand text-xs font-semibold text-ecowish-primary mb-3">
              <Sparkles className="w-3.5 h-3.5 text-ecowish-accent" />
              <span>Comprehensive Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ecowish-primary tracking-tight">
              Bespoke Design, Craft & Decor Solutions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ecowish-charcoal-muted leading-relaxed">
              Tailored services for mindful homeowners, corporate enterprises, educational institutions, and festive celebrations.
            </p>
          </div>

          <ServiceGrid />

          <div className="mt-14 text-center">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-ecowish-primary text-white text-sm font-semibold hover:bg-ecowish-primary-hover shadow-md hover:shadow-lg transition-all"
            >
              <Sparkles className="w-4 h-4 text-ecowish-accent" />
              <span>Discuss Your Custom Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Circular Story: Waste -> Value */}
      <ValueStory />

      {/* 6. Why EcoWish (Core Advantages) */}
      <section className="py-20 bg-white border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
              The EcoWish Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ecowish-primary mt-1">
              Why Discerning Clients Choose EcoWish
            </h2>
            <p className="mt-3 text-sm text-ecowish-charcoal-muted">
              We never compromise between authentic sustainability and uncompromising aesthetic refinement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-ecowish-bg border border-ecowish-border shadow-xs hover:shadow-soft transition-all">
              <div className="w-12 h-12 rounded-xl bg-ecowish-primary text-white flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-ecowish-accent" />
              </div>
              <h3 className="font-serif font-bold text-lg text-ecowish-primary mb-2">
                Sustainable Approach
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
                Prioritizing circular materials, non-toxic finishes, and zero single-use plastics across all commissions and installations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ecowish-bg border border-ecowish-border shadow-xs hover:shadow-soft transition-all">
              <div className="w-12 h-12 rounded-xl bg-ecowish-primary text-white flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-ecowish-accent" />
              </div>
              <h3 className="font-serif font-bold text-lg text-ecowish-primary mb-2">
                Unique Handcrafted Designs
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
                Every piece is shaped by human hands, ensuring that no two items are identical and every creation holds an authentic narrative.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ecowish-bg border border-ecowish-border shadow-xs hover:shadow-soft transition-all">
              <div className="w-12 h-12 rounded-xl bg-ecowish-primary text-white flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-ecowish-accent" />
              </div>
              <h3 className="font-serif font-bold text-lg text-ecowish-primary mb-2">
                Quality Finishing
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
                Supervised by NIFT-trained design leadership, applying high-grade joinery, protective coatings, and commercial durability standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ecowish-bg border border-ecowish-border shadow-xs hover:shadow-soft transition-all">
              <div className="w-12 h-12 rounded-xl bg-ecowish-primary text-white flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-ecowish-accent" />
              </div>
              <h3 className="font-serif font-bold text-lg text-ecowish-primary mb-2">
                Customized Solutions
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
                From bespoke wall dimensions and corporate brand alignments to wedding themes, we tailor each project to your exact vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Work / Portfolio Preview */}
      <section className="py-20 bg-warm-canvas border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                Selected Commissions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ecowish-primary mt-1 tracking-tight">
                Our Work & Artisan Craftsmanship
              </h2>
              <p className="mt-2 text-sm text-ecowish-charcoal-muted">
                Explore our portfolio across portraits, upcycled decor, handicrafts, and event styling.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-ecowish-border bg-white text-xs font-semibold text-ecowish-primary hover:bg-ecowish-sand transition-colors"
            >
              <span>View Full Gallery (9 Categories)</span>
              <ArrowRight className="w-3.5 h-3.5 text-ecowish-accent" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-ecowish-border shadow-xs hover:shadow-elevated transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-ecowish-sand">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-bold text-ecowish-primary">
                    {item.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-ecowish-primary group-hover:text-ecowish-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-ecowish-charcoal-muted line-clamp-2 leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ecowish-sand flex items-center justify-between text-[11px] text-ecowish-charcoal-muted">
                    <span>{item.location || "Studio Craft"}</span>
                    <span className="font-medium text-ecowish-accent-dark">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Training & Education Section */}
      <TrainingPreview />

      {/* 9. Meet Our Founders */}
      <MeetFounders />

      {/* 10. Upcoming Batches Strip */}
      <section className="py-16 bg-white border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                Admissions & Enrollment
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary mt-1">
                Upcoming Training Batches (Bihar)
              </h2>
            </div>
            <Link
              href="/batches"
              className="text-xs font-semibold text-ecowish-primary hover:underline flex items-center gap-1"
            >
              <span>View all scheduled batches</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {UPCOMING_BATCHES.map((batch) => (
              <div
                key={batch.id}
                className="bg-ecowish-bg rounded-2xl p-6 border border-ecowish-border flex flex-col justify-between hover:border-ecowish-primary/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                      <span>Status: {batch.status}</span>
                    </span>
                    <span className="text-xs font-bold text-ecowish-accent-dark">{batch.duration}</span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-ecowish-primary mb-2">
                    {batch.programTitle}
                  </h3>

                  <div className="space-y-1.5 text-xs text-ecowish-charcoal-muted">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-ecowish-secondary" />
                      <span>{batch.locations.join(" / ")} Centers</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-ecowish-secondary" />
                      <span>{batch.startDateDescription}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] text-ecowish-charcoal italic">
                    Fee: Contact us for current fees. Scholarships available for women & rural artisans.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-ecowish-border flex items-center gap-2">
                  <Link
                    href={`/apply?batch=${encodeURIComponent(batch.programTitle)}`}
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-ecowish-primary text-white text-xs font-semibold hover:bg-ecowish-primary-hover transition-colors"
                  >
                    Apply for Batch
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 & 12. Dual CTA Section (Client Funnel vs. Student Funnel) */}
      <section className="py-20 bg-warm-canvas border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box A: For Businesses, Architects & Event Planners */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-ecowish-border shadow-soft flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                  For Clients & Organizations
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary">
                  Have a Project in Mind?
                </h3>
                <p className="text-sm text-ecowish-charcoal-muted leading-relaxed">
                  Looking for bespoke upcycled decor, fine art portrait commissions, sustainable wedding decor, or ESG corporate gifting? Let&apos;s build something meaningful together.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ecowish-primary text-white text-sm font-semibold hover:bg-ecowish-primary-hover transition-colors shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-ecowish-accent" />
                  <span>Tell Us About Your Project</span>
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-ecowish-border text-sm font-semibold text-ecowish-charcoal hover:bg-ecowish-sand transition-colors"
                >
                  <Phone className="w-4 h-4 text-ecowish-primary" />
                  <span>Call {COMPANY_INFO.contact.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Box B: For Students, Artists & Design Aspirants */}
            <div className="bg-ecowish-primary text-white rounded-3xl p-8 sm:p-10 border border-ecowish-primary-light shadow-soft flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent">
                  For Aspiring Creators & Students
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  Want to Build Your Creative Skills?
                </h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  Learn practical upcycling, master contemporary home decor prototyping, refine fine arts, or prepare for premier design entrance exams (NIFT, NID, UCEED).
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ecowish-accent text-ecowish-primary text-sm font-bold hover:bg-ecowish-accent-light transition-colors shadow-sm"
                >
                  <span>Apply for Training</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/exams"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  <span>Design Exam Syllabus</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
