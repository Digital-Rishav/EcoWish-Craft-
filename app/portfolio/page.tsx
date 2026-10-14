"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PORTFOLIO_ITEMS,
  PORTFOLIO_CATEGORIES,
  PortfolioItem,
} from "@/lib/constants/portfolio";
import { Sparkles, MapPin, Layers, Calendar, ArrowRight, X } from "lucide-react";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-14 sm:py-20 bg-warm-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecowish-sand text-xs font-semibold text-ecowish-primary mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ecowish-accent" />
            <span>Creative Showcase</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ecowish-primary tracking-tight">
            Our Work & Artisan Craftsmanship
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ecowish-charcoal-muted leading-relaxed">
            A curated visual archive of fine art portraits, contemporary folk paintings, upcycled lifestyle decor, and sustainable festive installations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-ecowish-primary text-white shadow-sm"
                  : "bg-white text-ecowish-charcoal hover:bg-ecowish-sand border border-ecowish-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="bg-white rounded-2xl overflow-hidden border border-ecowish-border shadow-xs hover:shadow-elevated transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className="relative h-64 w-full overflow-hidden bg-ecowish-sand">
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
                {item.priceNote && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-amber-500/95 backdrop-blur-sm text-[10px] font-extrabold text-white shadow-xs">
                    50% OFF
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h2 className="font-serif text-lg font-bold text-ecowish-primary group-hover:text-ecowish-secondary transition-colors">
                    {item.title}
                  </h2>
                  {item.priceNote && (
                    <div className="mt-1.5 text-[11px] font-semibold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200/80 inline-flex items-center gap-1">
                      <span>🏹 {item.priceNote}</span>
                    </div>
                  )}
                  <p className="mt-2 text-xs text-ecowish-charcoal-muted leading-relaxed line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-ecowish-sand space-y-1.5 text-[11px] text-ecowish-charcoal-muted">
                  {item.materials && (
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-ecowish-accent flex-shrink-0" />
                      <span className="line-clamp-1">{item.materials}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-1">
                    {item.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-ecowish-secondary" />
                        <span>{item.location}</span>
                      </span>
                    )}
                    {item.year && (
                      <span className="flex items-center gap-1 font-medium text-ecowish-accent-dark">
                        <Calendar className="w-3 h-3" />
                        <span>{item.year}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Viewer */}
        {activeModalItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full border border-ecowish-border shadow-elevated relative animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-ecowish-charcoal flex items-center justify-center shadow-md transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 sm:h-96 w-full bg-ecowish-sand">
                <Image
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-ecowish-accent-dark">
                    {activeModalItem.category}
                  </span>
                  {activeModalItem.year && (
                    <span className="text-xs font-semibold text-ecowish-charcoal-muted">
                      Created: {activeModalItem.year}
                    </span>
                  )}
                </div>

                <h3 id="modal-title" className="font-serif text-2xl font-bold text-ecowish-primary">
                  {activeModalItem.title}
                </h3>

                <p className="text-sm text-ecowish-charcoal-muted leading-relaxed">
                  {activeModalItem.shortDescription}
                </p>

                {activeModalItem.materials && (
                  <div className="p-3 rounded-xl bg-ecowish-bg border border-ecowish-border text-xs text-ecowish-charcoal">
                    <strong>Materials & Medium:</strong> {activeModalItem.materials}
                  </div>
                )}

                {activeModalItem.priceNote && (
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-xs text-amber-900 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <strong>Festive Special:</strong> {activeModalItem.priceNote}
                    </div>
                    <span className="font-mono font-bold text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-300 text-[11px]">
                      Code: DUSSEHRA50
                    </span>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-between">
                  <Link
                    href={`/request-quote?service=${encodeURIComponent(activeModalItem.category)}&coupon=DUSSEHRA50`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ecowish-primary text-white text-xs font-semibold hover:bg-ecowish-primary-hover transition-colors shadow-sm"
                  >
                    <span>Commission with 50% Off</span>
                    <ArrowRight className="w-3.5 h-3.5 text-ecowish-accent" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(null)}
                    className="text-xs font-semibold text-ecowish-charcoal-muted hover:underline"
                  >
                    Back to Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Footer */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-ecowish-primary text-white text-center max-w-4xl mx-auto shadow-elevated">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Want a Custom Art Commission or Bulk Handcrafted Order?
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto mb-6">
            Our artists and master craftspeople bring your unique aesthetic specifications to life using sustainable and upcycled materials.
          </p>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-ecowish-accent text-ecowish-primary text-sm font-bold hover:bg-ecowish-accent-light transition-colors shadow-sm"
          >
            <span>Start Your Commission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
