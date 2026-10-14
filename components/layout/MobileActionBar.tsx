"use client";

import Link from "next/link";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants/company";

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-ecowish-border px-3 py-2 shadow-elevated">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg border border-ecowish-border bg-white text-ecowish-charcoal active:bg-ecowish-sand transition-colors text-center"
          aria-label="Call EcoWish Craft India"
        >
          <Phone className="w-4 h-4 text-ecowish-primary mb-1" />
          <span className="text-[11px] font-semibold leading-none">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={COMPANY_INFO.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-600 text-white active:bg-emerald-700 transition-colors text-center"
          aria-label="Chat with EcoWish Craft on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-semibold leading-none">WhatsApp</span>
        </a>

        {/* Enquire / Start a Project */}
        <Link
          href="/request-quote"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-ecowish-primary text-white active:bg-ecowish-primary-hover transition-colors text-center shadow-sm"
          aria-label="Request a Quote or Project Enquiry"
        >
          <Sparkles className="w-4 h-4 text-ecowish-accent mb-1" />
          <span className="text-[11px] font-semibold leading-none">Enquire</span>
        </Link>
      </div>
    </div>
  );
}
