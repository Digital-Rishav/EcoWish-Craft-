import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/constants/services";

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.map((service) => (
        <article
          key={service.slug}
          className="bg-white rounded-2xl overflow-hidden border border-ecowish-border shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col group"
        >
          {/* Service Image */}
          <div className="relative h-56 w-full overflow-hidden bg-ecowish-sand">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ecowish-accent-light">
                {service.subCategories[0]}
              </span>
            </div>
          </div>

          {/* Service Details */}
          <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-ecowish-primary group-hover:text-ecowish-secondary transition-colors">
                <Link href={`/services/${service.slug}`} className="hover:underline">
                  {service.title}
                </Link>
              </h3>
              <p className="mt-2 text-xs text-ecowish-charcoal-muted line-clamp-3 leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Sub categories pills */}
              <div className="mt-4 pt-3 border-t border-ecowish-sand flex flex-wrap gap-1.5">
                {service.subCategories.slice(0, 3).map((sub) => (
                  <span
                    key={sub}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-ecowish-bg border border-ecowish-border text-ecowish-charcoal"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-ecowish-sand flex items-center justify-between gap-3">
              <Link
                href={`/services/${service.slug}`}
                className="text-xs font-semibold text-ecowish-primary hover:text-ecowish-secondary flex items-center gap-1 group/link"
              >
                <span>Learn Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-ecowish-accent-dark" />
              </Link>

              <Link
                href={`/request-quote?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-ecowish-sand hover:bg-ecowish-primary hover:text-white text-ecowish-primary text-xs font-semibold transition-colors"
              >
                <Sparkles className="w-3 h-3 text-ecowish-accent" />
                <span>Quote</span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
