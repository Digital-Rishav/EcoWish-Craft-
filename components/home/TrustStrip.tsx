import { Leaf, Sparkles, Sliders, GraduationCap } from "lucide-react";

export default function TrustStrip() {
  const pillars = [
    {
      icon: Leaf,
      title: "Sustainable Design",
      description: "Pioneering the circular economy by repurposing waste streams into high-value functional objects.",
    },
    {
      icon: Sparkles,
      title: "Handmade Craft",
      description: "Bridging traditional Indian folk techniques with contemporary aesthetics and modern quality finishes.",
    },
    {
      icon: Sliders,
      title: "Customized Solutions",
      description: "Tailored commissions for bespoke residential decor, corporate gifting, and large-scale event styling.",
    },
    {
      icon: GraduationCap,
      title: "Skill Development",
      description: "Mentoring young designers, rural artisans, and students for national design entrance examinations.",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-ecowish-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-ecowish-sand/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-ecowish-sand flex-shrink-0 flex items-center justify-center text-ecowish-primary group-hover:bg-ecowish-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 text-ecowish-accent group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-ecowish-primary mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
