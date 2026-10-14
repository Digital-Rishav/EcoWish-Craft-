import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Leaf, HeartHandshake, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import MeetFounders from "@/components/founders/MeetFounders";
import { COMPANY_INFO } from "@/lib/constants/company";

export const metadata: Metadata = {
  title: "About Us | EcoWish Craft India Pvt. Ltd.",
  description:
    "Learn about EcoWish Craft India Pvt. Ltd., our mission to convert waste into value, our leadership team (Sudhanshu Pandey & Amiya Swarup), and our artisan community in Bihar.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Header Banner */}
      <section className="bg-ecowish-primary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-ecowish-accent mb-4">
            <Leaf className="w-3.5 h-3.5" />
            <span>Our Origin & Purpose</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Crafting a Sustainable Future from Discarded Materials
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            EcoWish Craft India Pvt. Ltd. was established to prove that ecological responsibility and high-end aesthetic design can exist in complete harmony.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-warm-canvas border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-ecowish-border shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-ecowish-sand flex items-center justify-center text-ecowish-primary mb-4">
                <Sparkles className="w-6 h-6 text-ecowish-accent" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                Our Vision
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary mt-1 mb-4">
                Waste as an Opportunity
              </h2>
              <p className="text-sm sm:text-base text-ecowish-charcoal-muted leading-relaxed">
                &ldquo;{COMPANY_INFO.vision}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-ecowish-sand text-xs text-ecowish-charcoal">
                We imagine Indian homes, corporate offices, and celebration venues where decor choices celebrate nature rather than depleting it.
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-ecowish-border shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-ecowish-sand flex items-center justify-center text-ecowish-primary mb-4">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                Our Mission
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary mt-1 mb-4">
                Convert Waste into Value
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-ecowish-charcoal-muted">
                {COMPANY_INFO.missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ecowish-accent mt-2 flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Artisan Grounding in Bihar */}
      <section className="py-20 bg-white border-b border-ecowish-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                Rooted in Bihar
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ecowish-primary">
                Connecting Rural Craft Clusters with Contemporary Demand
              </h2>
              <p className="text-sm sm:text-base text-ecowish-charcoal-muted leading-relaxed">
                Registered in <strong>West Champaran, Bihar</strong>, EcoWish Craft India is deeply committed to grassroots artisan revitalization. Bihar holds one of the richest legacies of folk art, weaving, and vernacular craftsmanship in South Asia.
              </p>
              <p className="text-sm text-ecowish-charcoal-muted leading-relaxed">
                However, many skilled artisans lack direct exposure to modern design trends, material innovation, and urban client networks. We provide structured training, fair compensation, and collaborative design guidance, transforming traditional hand-skills into thriving, self-sustaining livelihoods.
              </p>

              <div className="p-4 rounded-xl bg-ecowish-sand/60 border border-ecowish-border flex items-start gap-3 text-xs text-ecowish-charcoal">
                <MapPin className="w-5 h-5 text-ecowish-accent-dark flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Registered Office & Artisan Center:</strong>
                  <div>{COMPANY_INFO.address.full}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-elevated border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=80"
                  alt="Rural artisans working on upcycled handicrafts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Founders */}
      <MeetFounders />

      {/* Dual CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ecowish-primary">
            Partner with Us
          </h2>
          <p className="text-sm text-ecowish-charcoal-muted">
            Whether you represent a corporate organization seeking bespoke gifting or an aspiring designer ready to refine your creative craft, we welcome you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/request-quote"
              className="px-6 py-3 rounded-xl bg-ecowish-primary text-white text-xs font-semibold hover:bg-ecowish-primary-hover transition-colors"
            >
              Start a Client Project
            </Link>
            <Link
              href="/training"
              className="px-6 py-3 rounded-xl border border-ecowish-border text-ecowish-charcoal text-xs font-semibold hover:bg-ecowish-sand transition-colors"
            >
              Explore Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
