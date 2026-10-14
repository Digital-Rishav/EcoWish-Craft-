"use client";

import { Gift, Flame } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function FestiveFloatingTrigger({ onClick }: Props) {
  return (
    <aside
      aria-label="Festive Discount"
      className="fixed bottom-20 md:bottom-8 left-4 md:left-8 z-40"
    >
      <button
        type="button"
        onClick={onClick}
        className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-[#1B4332] text-white shadow-elevated border-2 border-amber-300 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Open Dussehra 50% discount offer"
      >
        <span className="w-6 h-6 rounded-full bg-amber-400 text-[#1B4332] flex items-center justify-center font-bold text-xs">
          <Gift className="w-3.5 h-3.5 text-[#1B4332]" />
        </span>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold text-amber-200 tracking-wider leading-none">
            Dussehra Offer
          </span>
          <span className="text-xs font-extrabold text-white leading-tight">
            Flat 50% OFF
          </span>
        </div>
      </button>
    </aside>
  );
}
