"use client";

import { Sparkles, Gift, Flame, ArrowRight } from "lucide-react";

interface Props {
  onOpenOffer: () => void;
}

export default function FestiveTopBar({ onOpenOffer }: Props) {
  return (
    <aside
      aria-label="Festive Promotion"
      className="bg-gradient-to-r from-amber-600 via-amber-700 to-[#1B4332] text-white py-2 px-3 text-xs border-b border-amber-400/30"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400 text-[#1B4332] font-extrabold text-[10px] uppercase tracking-wider animate-pulse">
            <Flame className="w-3 h-3 fill-amber-700 text-amber-700" />
            <span>Dussehra 50% Sale</span>
          </span>
          <span className="truncate text-white/95 font-medium">
            🏹 <strong>Shubh Dussehra Special:</strong> Flat 50% OFF on All Training Courses, Custom Portraits & Decor! Use Code: <span className="font-mono font-bold text-amber-300">DUSSEHRA50</span>
          </span>
        </div>

        <button
          type="button"
          onClick={onOpenOffer}
          className="flex-shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400 hover:bg-amber-300 text-[#1B4332] font-bold text-[11px] transition-transform active:scale-95 shadow-sm"
        >
          <Gift className="w-3 h-3 text-[#1B4332]" />
          <span>Claim 50% Offer</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
}
