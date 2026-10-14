"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants/company";

export default function WhatsAppFloat() {
  return (
    <aside
      aria-label="Instant Assistance"
      className="hidden md:flex fixed bottom-8 right-8 z-40 items-center group"
    >
      <div className="mr-3 px-3 py-1.5 rounded-full bg-white text-ecowish-charcoal text-xs font-semibold shadow-md border border-ecowish-border opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
        Chat with our artisans & team
      </div>
      <a
        href={COMPANY_INFO.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 p-3.5 rounded-full bg-emerald-600 text-white shadow-elevated hover:bg-emerald-700 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center focus:ring-4 focus:ring-emerald-300"
        aria-label="Open WhatsApp conversation with EcoWish Craft India"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </aside>
  );
}
