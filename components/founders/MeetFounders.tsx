import Image from "next/image";
import { FOUNDERS } from "@/lib/constants/company";
import { Sparkles, Quote, Award } from "lucide-react";

export default function MeetFounders() {
  return (
    <section className="py-20 bg-warm-canvas border-y border-ecowish-border" id="founders">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ecowish-sand border border-ecowish-border text-xs font-semibold text-ecowish-primary mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ecowish-accent" />
            <span>Visionary Leadership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ecowish-primary tracking-tight">
            Meet Our Founders
          </h2>
          <p className="mt-4 text-base text-ecowish-charcoal-muted leading-relaxed">
            Uniting professional design rigor with strategic business execution to convert waste materials into enduring value and elevate grassroots Indian artisan communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {FOUNDERS.map((founder, index) => (
            <div
              key={founder.name}
              className="bg-white rounded-2xl overflow-hidden border border-ecowish-border shadow-soft hover:shadow-elevated transition-shadow duration-300 flex flex-col md:flex-row"
            >
              {/* Image Column */}
              <div className="md:w-5/12 relative min-h-[300px] md:min-h-[380px] bg-ecowish-sand overflow-hidden">
                <Image
                  src={founder.image}
                  alt={`${founder.name} - ${founder.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-3 left-3 right-3 text-white md:hidden">
                  <div className="font-serif font-bold text-lg">{founder.name}</div>
                  <div className="text-xs text-ecowish-accent-light">{founder.role}</div>
                </div>
              </div>

              {/* Content Column */}
              <div className="p-6 sm:p-8 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="hidden md:block">
                    <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                      {founder.role}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-ecowish-primary mt-1 mb-1">
                      {founder.name}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-ecowish-sand/70 text-xs font-medium text-ecowish-charcoal mb-4">
                    <Award className="w-3.5 h-3.5 text-ecowish-accent" />
                    <span>{founder.credentials}</span>
                  </div>

                  <p className="text-sm text-ecowish-charcoal-muted leading-relaxed mb-5">
                    {founder.bio}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
                      Core Specialization:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {founder.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-ecowish-bg border border-ecowish-border text-ecowish-charcoal"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-ecowish-sand mt-4">
                  <div className="flex items-start gap-2 text-xs italic text-ecowish-charcoal-muted">
                    <Quote className="w-4 h-4 text-ecowish-accent flex-shrink-0 mt-0.5" />
                    <span>&ldquo;{founder.quote}&rdquo;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
