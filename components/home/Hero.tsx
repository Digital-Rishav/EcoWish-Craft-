import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, MessageCircle, ShieldCheck, Leaf, HeartHandshake } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants/company";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-canvas pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-ecowish-border">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-ecowish-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-ecowish-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Dual Funnel */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Tag / Category Badge & Festive Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ecowish-sand border border-ecowish-border shadow-xs text-xs font-semibold text-ecowish-primary">
                <Leaf className="w-3.5 h-3.5 text-ecowish-secondary" />
                <span>Eco-Conscious Creative Enterprise • Bihar, India</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xs text-xs font-bold animate-pulse">
                <span>🏹 Dussehra 50% OFF</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ecowish-primary leading-[1.12] text-balance">
              Turning Creativity, Craft & Waste Into{" "}
              <span className="italic font-serif text-ecowish-accent-dark font-normal">
                Meaningful Design
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-ecowish-charcoal-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              EcoWish Craft India combines traditional Indian craftsmanship, fine portraiture, and upcycling to create heirloom artworks, inspired living spaces, and professional design careers.
            </p>

            {/* Dussehra Festive Discount Callout Strip */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-[#C9A96E]/20 to-amber-500/10 border border-amber-400/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="text-xs">
                <span className="font-bold text-[#1B4332] block">
                  🏹 Dussehra Mahotsav Special: Flat 50% Discount Active
                </span>
                <span className="text-ecowish-charcoal-muted text-[11px]">
                  Use coupon code <strong className="font-mono text-amber-800">DUSSEHRA50</strong> for 50% off on all portraits, paintings, decor & training batches!
                </span>
              </div>
              <Link
                href="/request-quote?coupon=DUSSEHRA50"
                className="flex-shrink-0 px-3.5 py-1.5 rounded-xl bg-[#1B4332] text-white hover:bg-emerald-800 text-xs font-bold transition-colors"
              >
                Claim 50% Off
              </Link>
            </div>

            {/* Dual Funnel Conversion Selection Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-ecowish-primary text-white font-semibold text-sm hover:bg-ecowish-primary-hover active:scale-98 transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <Sparkles className="w-4 h-4 text-ecowish-accent group-hover:rotate-12 transition-transform" />
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-ecowish-accent group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/training"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-ecowish-primary/30 bg-white/80 text-ecowish-primary font-semibold text-sm hover:bg-ecowish-sand hover:border-ecowish-primary transition-all duration-200 shadow-xs"
              >
                <span>Explore Training</span>
              </Link>

              <a
                href={COMPANY_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-ecowish-border bg-white text-ecowish-charcoal font-medium text-sm hover:bg-ecowish-sand transition-colors"
                aria-label="Talk to Us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Talk to Us</span>
              </a>
            </div>

            {/* Quick Micro-Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-ecowish-charcoal-muted border-t border-ecowish-sand">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-ecowish-secondary" />
                <span>NIFT Design Leadership</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <HeartHandshake className="w-4 h-4 text-ecowish-secondary" />
                <span>Grassroots Artisan Empowerment</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Leaf className="w-4 h-4 text-ecowish-secondary" />
                <span>100% Upcycled & Natural Materials</span>
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Craft Composition with Real Authentic Artwork */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Feature Image Card */}
              <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-elevated border-4 border-white">
                <Image
                  src="/assets/ecowish/paintings/painting-1.jpg"
                  alt="Authentic EcoWish Craft India Fine Art Painting"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                {/* Dussehra 50% Floating Badge on Image */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-amber-500/90 backdrop-blur-md text-white text-xs font-extrabold shadow-md border border-amber-300">
                  🏹 Dussehra 50% OFF
                </div>
                
                {/* Floating Inset Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                        Bespoke Masterpiece
                      </div>
                      <div className="text-sm font-bold text-ecowish-primary">
                        Fine Art, Portraits & Upcycled Decor
                      </div>
                    </div>
                    <Link
                      href="/portfolio"
                      className="px-3 py-1.5 rounded-lg bg-ecowish-primary text-white text-xs font-semibold hover:bg-ecowish-primary-hover transition-colors"
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Card with Real Portrait */}
              <div className="absolute -top-5 -left-5 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white shadow-elevated border border-ecowish-border animate-in fade-in slide-in-from-bottom-2">
                <div className="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 bg-ecowish-sand">
                  <Image
                    src="/assets/ecowish/portraits/portrait-1.jpg"
                    alt="Realistic Portrait Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-ecowish-primary">
                    Portrait Studio
                  </div>
                  <div className="text-[11px] text-ecowish-charcoal-muted">
                    Lifelike Hand-Drawn Art
                  </div>
                </div>
              </div>

              {/* Training Badge Pill */}
              <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-ecowish-primary text-white shadow-elevated border border-ecowish-primary-light">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-semibold">Dussehra Batch 50% Scholarship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
