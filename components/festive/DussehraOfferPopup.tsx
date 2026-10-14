"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  X,
  Copy,
  Check,
  MessageCircle,
  ArrowRight,
  Gift,
  Flame,
  Award,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants/company";

interface Props {
  forceOpen?: boolean;
  onClose?: () => void;
}

export default function DussehraOfferPopup({ forceOpen, onClose }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof forceOpen === "boolean") {
      setIsOpen(forceOpen);
      return;
    }

    // Auto-open after 2 seconds if not previously dismissed in this session
    const dismissed = sessionStorage.getItem("ecowish_dussehra_popup_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [forceOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("ecowish_dussehra_popup_dismissed", "true");
    if (onClose) onClose();
  };

  const copyCoupon = () => {
    navigator.clipboard.writeText("DUSSEHRA50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  const whatsappSaleUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappRaw}?text=${encodeURIComponent(
    "Hello EcoWish Craft India! I would like to claim the Dussehra 50% discount offer using coupon code DUSSEHRA50 for my art / decor / training inquiry."
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dussehra-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-gradient-to-b from-[#143326] via-[#1B4332] to-[#0F281E] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#C9A96E]/50 overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Festive Background Glows */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#C9A96E]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors border border-white/20"
          aria-label="Close festive offer popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/50 text-xs font-bold text-[#E2CB9E] tracking-wider uppercase">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Vijayadashami Mahotsav Offer</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>

          <h2
            id="dussehra-title"
            className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight"
          >
            🏹 Shubh Dussehra!
          </h2>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md mx-auto">
            Celebrate the triumph of goodness and the rebirth of creativity. This festive season, turn your spaces and creative dreams into masterpieces with our grand festive discount.
          </p>
        </div>

        {/* 50% OFF Hero Box */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-[#C9A96E]/30 to-amber-500/20 border border-[#C9A96E]/60 text-center relative">
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#E2CB9E]">
            Limited Festive Special
          </div>
          <div className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-300 tracking-tight my-1">
            FLAT 50% OFF
          </div>
          <div className="text-xs text-white/90 font-medium">
            Applicable on All Courses, Custom Portraits, Paintings & Handicrafts
          </div>
        </div>

        {/* What's Covered List */}
        <div className="grid grid-cols-2 gap-2 text-[11px] text-white/85 mb-5 bg-white/5 p-3.5 rounded-xl border border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-bold">✓</span>
            <span>Bespoke Portraits & Paintings</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-bold">✓</span>
            <span>Agri-Waste Home Decor</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-bold">✓</span>
            <span>Wedding & Festive Decor</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 font-bold">✓</span>
            <span>All 4 Training Courses</span>
          </div>
          <div className="col-span-2 flex items-center justify-center gap-1.5 pt-1 text-amber-300 font-medium border-t border-white/10">
            <Award className="w-3.5 h-3.5" />
            <span>NIFT/NID/UCEED Design Coaching Batches Included</span>
          </div>
        </div>

        {/* Coupon Code Strip */}
        <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/40 border border-[#C9A96E]/40 mb-5">
          <div className="text-left pl-1">
            <div className="text-[10px] text-white/60 uppercase font-semibold">Festive Coupon Code</div>
            <div className="font-mono text-base font-bold text-amber-300 tracking-wider">
              DUSSEHRA50
            </div>
          </div>
          <button
            type="button"
            onClick={copyCoupon}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#C9A96E] hover:bg-[#B59458] text-[#1B4332] text-xs font-bold transition-all active:scale-95 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <a
            href={whatsappSaleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Claim 50% Off on WhatsApp</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/request-quote?coupon=DUSSEHRA50"
              onClick={handleClose}
              className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-[#C9A96E] hover:bg-[#B59458] text-[#1B4332] text-xs font-bold transition-colors text-center"
            >
              <span>Custom Project</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <Link
              href="/apply?coupon=DUSSEHRA50"
              onClick={handleClose}
              className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl border border-white/30 hover:bg-white/10 text-white text-xs font-semibold transition-colors text-center"
            >
              <span>Enroll in Course</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
