"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Copy,
  Check,
  Tag,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { COMPANY_INFO } from "@/lib/constants/company";

export default function DussehraSaleSection() {
  const [copied, setCopied] = useState(false);

  const copyCoupon = () => {
    navigator.clipboard.writeText("DUSSEHRA50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const saleOffers = [
    {
      id: "sale-portrait",
      title: "Bespoke Realistic Portrait Commission",
      category: "Portraits & Fine Arts",
      image: "/assets/ecowish/portraits/portrait-1.jpg",
      regularPrice: "₹3,999",
      salePrice: "₹1,999",
      discount: "50% OFF",
      highlights: "Charcoal / Graphite on Archival Sheet • Framed & Delivered",
      quoteUrl: "/request-quote?service=Painting%20%26%20Portrait%20Services&coupon=DUSSEHRA50",
      whatsappText: "Hello EcoWish! I want to order a Handcrafted Portrait Commission with the Dussehra 50% Offer (Coupon: DUSSEHRA50).",
    },
    {
      id: "sale-painting",
      title: "Devotional & Indian Folk Canvas Art",
      category: "Paintings & Heritage Decor",
      image: "/assets/ecowish/paintings/painting-1.jpg",
      regularPrice: "₹7,999",
      salePrice: "₹3,999",
      discount: "50% OFF",
      highlights: "Traditional Folk & Contemporary Canvas • Gold Accents • Custom Sizes",
      quoteUrl: "/request-quote?service=Painting%20%26%20Portrait%20Services&coupon=DUSSEHRA50",
      whatsappText: "Hello EcoWish! I would like to order a Custom Painting with the Dussehra 50% Offer (Coupon: DUSSEHRA50).",
    },
    {
      id: "sale-waste",
      title: "Handmade Agriculture Waste Straw Art Frame",
      category: "Upcycling & Eco Decor",
      image: "/assets/ecowish/products/product-11.jpg",
      regularPrice: "₹1,999",
      salePrice: "₹999",
      discount: "50% OFF",
      highlights: "100% Upcycled Natural Wheat Straw • Zero Plastic • Heirloom Finish",
      quoteUrl: "/request-quote?service=Handicrafts%20%26%20Upcycled%20Creations&coupon=DUSSEHRA50",
      whatsappText: "Hello EcoWish! I want to purchase an Agriculture Waste Straw Craft Frame with the Dussehra 50% Offer.",
    },
    {
      id: "sale-decor",
      title: "Wedding Mandap & Marriage Hall Festive Decor",
      category: "Event & Festive Decor",
      image: "/assets/ecowish/decorations/decor-1.jpg",
      regularPrice: "₹45,000+",
      salePrice: "Flat 50% OFF Setup",
      discount: "50% OFF",
      highlights: "Sustainable Fabric Drapes • Brass Illumination • Turnkey Installation",
      quoteUrl: "/request-quote?service=Event%20%26%20Festive%20Decor&coupon=DUSSEHRA50",
      whatsappText: "Hello EcoWish! I want to book Wedding / Event Decor with the Dussehra 50% Booking Discount.",
    },
    {
      id: "sale-course",
      title: "Upcycling & Sustainable Home Decor Course",
      category: "Artisan Training & Certification",
      image: "/assets/ecowish/waste-products/waste-item-2.jpg",
      regularPrice: "Studio Fee",
      salePrice: "50% Scholarship Fee",
      discount: "50% OFF",
      highlights: "Practical Studio Training • Material Toolkits • Certification Awarded",
      quoteUrl: "/apply?coupon=DUSSEHRA50",
      whatsappText: "Hello EcoWish! I would like to enroll in the Training Course with the Dussehra 50% Scholarship Waiver.",
    },
    {
      id: "sale-exam",
      title: "NIFT / NID / UCEED Design Entrance Mentorship",
      category: "Design Exam Coaching",
      image: "/assets/ecowish/portraits/portrait-3.jpg",
      regularPrice: "Coaching Fee",
      salePrice: "50% Mentorship Concession",
      discount: "50% OFF",
      highlights: "Led by NIFT Alumnus Sudhanshu Pandey • CAT/GAT & 3D Situation Test",
      quoteUrl: "/apply?examPrep=true&coupon=DUSSEHRA50",
      whatsappText: "Hello EcoWish! I want to join the Design Entrance Coaching Batch with the Dussehra 50% Concession.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#143326] via-[#1B4332] to-[#122A20] text-white relative overflow-hidden border-y-2 border-[#C9A96E]/40">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C9A96E]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-xs font-bold text-amber-300 tracking-wider uppercase">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
            <span>Grand Vijayadashami Mahotsav Sale</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Celebrate Dussehra with <span className="text-amber-300">Flat 50% OFF</span>
          </h2>

          <p className="text-sm sm:text-base text-white/85 leading-relaxed">
            Honoring the triumph of creativity, craftsmanship, and sustainable values! Claim an exclusive <strong>50% discount</strong> on all bespoke portraits, fine paintings, upcycled agriculture decor, event styling, and design training batches.
          </p>

          {/* Interactive Coupon Box */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-black/40 border-2 border-dashed border-[#C9A96E]">
              <Tag className="w-4 h-4 text-amber-300" />
              <span className="text-xs text-white/70">Coupon Code:</span>
              <span className="font-mono text-base font-bold text-amber-300 tracking-wider">
                DUSSEHRA50
              </span>
              <button
                type="button"
                onClick={copyCoupon}
                className="ml-2 flex items-center gap-1 px-3 py-1 rounded-md bg-[#C9A96E] hover:bg-[#B59458] text-[#1B4332] text-xs font-bold transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <span className="text-xs text-white/60">Valid across all bookings & enrollments</span>
          </div>
        </div>

        {/* 6 Featured Sale Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saleOffers.map((offer) => {
            const waUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappRaw}?text=${encodeURIComponent(
              offer.whatsappText
            )}`;

            return (
              <div
                key={offer.id}
                className="bg-white/95 text-ecowish-charcoal rounded-3xl overflow-hidden shadow-elevated border border-amber-300/40 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image with 50% Badge */}
                  <div className="relative h-60 w-full overflow-hidden bg-ecowish-sand">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Discount Pill */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-extrabold shadow-md border border-white/40">
                      {offer.discount}
                    </div>

                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-[11px] font-bold text-amber-300">
                      {offer.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-ecowish-primary mb-2 line-clamp-1">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-ecowish-charcoal-muted leading-relaxed mb-4">
                      {offer.highlights}
                    </p>

                    {/* Price Block */}
                    <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-ecowish-charcoal-muted line-through font-mono">
                          {offer.regularPrice}
                        </div>
                        <div className="text-sm font-extrabold text-emerald-800 font-mono">
                          {offer.salePrice}
                        </div>
                      </div>
                      <div className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                        With Code: DUSSEHRA50
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={offer.quoteUrl}
                      className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-[#1B4332] text-white hover:bg-emerald-800 text-xs font-bold transition-colors text-center"
                    >
                      <span>Claim 50% Off</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                    </Link>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-left text-xs">
            <ShieldCheck className="w-6 h-6 text-amber-300 flex-shrink-0" />
            <div>
              <strong className="block text-white">100% Satisfaction & Authenticity Guarantee</strong>
              <span className="text-white/80">Every artwork and decor piece is hand-finished by master artisans in Bihar. 50% discount honored through the festive month.</span>
            </div>
          </div>
          <Link
            href="/request-quote?coupon=DUSSEHRA50"
            className="flex-shrink-0 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#1B4332] font-bold text-xs transition-colors"
          >
            Start Your Festive Project Now
          </Link>
        </div>
      </div>
    </section>
  );
}
