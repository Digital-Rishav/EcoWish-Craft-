import { ArrowRight, Recycle, Lightbulb, Hand, Compass, PackageCheck, HeartHandshake } from "lucide-react";

export default function ValueStory() {
  const steps = [
    {
      step: "01",
      icon: Recycle,
      label: "Waste",
      desc: "Reclaiming post-consumer fabrics, paper, and metal scrap.",
    },
    {
      step: "02",
      icon: Lightbulb,
      label: "Creativity",
      desc: "Ideating functional and modern aesthetic transformations.",
    },
    {
      step: "03",
      icon: Hand,
      label: "Craft",
      desc: "Empowering rural artisans with heritage weaving and sculpting.",
    },
    {
      step: "04",
      icon: Compass,
      label: "Design",
      desc: "Applying NIFT-level proportions, ergonomics, and testing.",
    },
    {
      step: "05",
      icon: PackageCheck,
      label: "Product",
      desc: "Crafting heirloom home decor, fine portraits, and gifts.",
    },
    {
      step: "06",
      icon: HeartHandshake,
      label: "Sustainable Value",
      desc: "Diverting tons of waste while creating prosperous livelihoods.",
    },
  ];

  return (
    <section className="py-16 bg-ecowish-sand/50 border-b border-ecowish-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
            Our Circular Design Philosophy
          </span>
          <h2 className="font-serif text-3xl font-bold text-ecowish-primary mt-1">
            How We Convert Waste Into Value
          </h2>
          <p className="text-sm text-ecowish-charcoal-muted mt-2">
            Every creation follows a conscious lifecycle from raw discard to enduring cultural treasure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="relative bg-white rounded-2xl p-5 border border-ecowish-border shadow-xs hover:shadow-soft transition-all duration-300 text-center flex flex-col items-center justify-between"
              >
                <div className="w-full flex items-center justify-between text-[11px] font-bold text-ecowish-accent-dark mb-3">
                  <span>STEP</span>
                  <span>{item.step}</span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-ecowish-sand flex items-center justify-center text-ecowish-primary mb-3">
                  <Icon className="w-6 h-6 text-ecowish-primary" />
                </div>

                <h3 className="font-serif font-bold text-base text-ecowish-primary mb-1">
                  {item.label}
                </h3>
                <p className="text-[11px] text-ecowish-charcoal-muted leading-relaxed">
                  {item.desc}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 border border-ecowish-border shadow-xs text-ecowish-accent">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
