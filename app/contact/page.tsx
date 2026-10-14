import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { COMPANY_INFO } from "@/lib/constants/company";

export const metadata: Metadata = {
  title: "Contact Us | EcoWish Craft India Pvt. Ltd.",
  description:
    "Get in touch with EcoWish Craft India Pvt. Ltd. Reach us by phone, WhatsApp (+91 97097 09717), email, or visit our centers in West Champaran and Patna, Bihar.",
};

export default function ContactPage() {
  return (
    <div className="py-14 sm:py-20 bg-warm-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ecowish-sand text-xs font-semibold text-ecowish-primary mb-3">
            <Mail className="w-3.5 h-3.5 text-ecowish-accent" />
            <span>Connect Directly</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ecowish-primary tracking-tight">
            We&apos;d Love to Hear From You
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ecowish-charcoal-muted leading-relaxed">
            Whether you want to discuss a customized decor commission, corporate gifting order, artisan workshop, or training admissions, our team is readily accessible.
          </p>
        </div>

        {/* 4 Direct Touchpoint Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl p-6 border border-ecowish-border shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-ecowish-sand flex items-center justify-center text-ecowish-primary mb-4">
                <Phone className="w-5 h-5 text-ecowish-primary" />
              </div>
              <h3 className="font-serif font-bold text-base text-ecowish-primary mb-1">
                Direct Call
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted mb-3">
                Monday to Saturday, 10am – 6pm IST.
              </p>
              <div className="text-sm font-semibold text-ecowish-primary font-mono">
                {COMPANY_INFO.contact.primaryPhone}
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-ecowish-sand">
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                className="text-xs font-semibold text-ecowish-primary hover:underline flex items-center gap-1"
              >
                <span>Click to Call</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white rounded-2xl p-6 border border-ecowish-border shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-serif font-bold text-base text-ecowish-primary mb-1">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted mb-3">
                Fastest channel for project photos & references.
              </p>
              <div className="text-sm font-semibold text-emerald-800 font-mono">
                {COMPANY_INFO.contact.whatsapp}
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-ecowish-sand">
              <a
                href={COMPANY_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-700 hover:underline flex items-center gap-1"
              >
                <span>Start WhatsApp Chat</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-2xl p-6 border border-ecowish-border shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-ecowish-sand flex items-center justify-center text-ecowish-primary mb-4">
                <Mail className="w-5 h-5 text-ecowish-primary" />
              </div>
              <h3 className="font-serif font-bold text-base text-ecowish-primary mb-1">
                Email Inquiries
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted mb-3">
                Official quotes and corporate proposals.
              </p>
              <div className="text-xs font-semibold text-ecowish-primary truncate">
                {COMPANY_INFO.contact.primaryEmail}
              </div>
              <div className="text-[11px] text-ecowish-charcoal-muted truncate mt-0.5">
                {COMPANY_INFO.contact.alternateEmail}
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-ecowish-sand">
              <a
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                className="text-xs font-semibold text-ecowish-primary hover:underline flex items-center gap-1"
              >
                <span>Compose Email</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 4: Office */}
          <div className="bg-white rounded-2xl p-6 border border-ecowish-border shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-ecowish-sand flex items-center justify-center text-ecowish-primary mb-4">
                <MapPin className="w-5 h-5 text-ecowish-primary" />
              </div>
              <h3 className="font-serif font-bold text-base text-ecowish-primary mb-1">
                Registered Office
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted mb-2 line-clamp-3">
                {COMPANY_INFO.address.full}
              </p>
              <div className="text-[11px] text-ecowish-accent-dark font-medium">
                Studios: Patna & West Champaran
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-ecowish-sand text-[11px] text-ecowish-charcoal-muted flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-ecowish-accent-dark" />
              <span>Mon–Sat: 10am–6pm (Sun Closed)</span>
            </div>
          </div>
        </div>

        {/* Form and Quick Funnel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* General Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-ecowish-border shadow-soft">
            <h2 className="font-serif text-2xl font-bold text-ecowish-primary mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-ecowish-charcoal-muted mb-6">
              Have a general inquiry, media request, or partnership proposal? Fill out the form below.
            </p>
            <ContactForm />
          </div>

          {/* Action Hubs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Action Box A */}
            <div className="bg-ecowish-bg rounded-3xl p-8 border border-ecowish-border shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-ecowish-primary text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-ecowish-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ecowish-primary">
                Are You Planning a Client Project?
              </h3>
              <p className="text-xs text-ecowish-charcoal-muted leading-relaxed">
                If you need a formal price quotation for home decor, wedding decor, portraiture, or corporate gifting, please use our dedicated quotation form.
              </p>
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ecowish-primary text-white text-xs font-semibold hover:bg-ecowish-primary-hover transition-colors"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 text-ecowish-accent" />
              </Link>
            </div>

            {/* Action Box B */}
            <div className="bg-ecowish-primary text-white rounded-3xl p-8 border border-ecowish-primary-light shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-ecowish-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold">
                Student & Training Admissions
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Want to apply for our upcycling workshops or design entrance exam preparation (NIFT / NID / UCEED)? Use our dedicated application desk.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ecowish-accent text-ecowish-primary text-xs font-bold hover:bg-ecowish-accent-light transition-colors"
              >
                <span>Apply for Training</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
