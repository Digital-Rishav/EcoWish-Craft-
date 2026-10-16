import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart, Leaf } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants/company";
import { SERVICES } from "@/lib/constants/services";
import { TRAINING_PROGRAMS } from "@/lib/constants/training";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ecowish-primary text-white pt-16 pb-12 border-t border-ecowish-primary-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Mission Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-full p-1 flex-shrink-0">
                <Image
                  src="/assets/images/logo.png"
                  alt="EcoWish Craft India"
                  fill
                  className="object-contain p-0.5"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight block">
                  EcoWish Craft India
                </span>
                <span className="text-xs text-ecowish-accent tracking-wider uppercase">
                  Private Limited
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              An innovative, eco-conscious creative company transforming waste materials into valuable,
              beautiful lifestyle products, bespoke interiors, and meaningful artisan livelihoods.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-ecowish-accent">
              <Leaf className="w-4 h-4 text-ecowish-accent" />
              <span>Mission: &ldquo;Convert waste into value&rdquo;</span>
            </div>

            <div className="pt-4 space-y-2 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-ecowish-accent flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.po}, {COMPANY_INFO.address.district}, {COMPANY_INFO.address.state} – {COMPANY_INFO.address.pincode}, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-ecowish-accent flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-ecowish-accent flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.primaryEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Client Services */}
          <div>
            <h3 className="font-serif text-base font-semibold text-ecowish-accent mb-4">
              Client Services
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-ecowish-accent transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-ecowish-accent/60" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-ecowish-accent hover:underline"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Training & Exam Prep */}
          <div>
            <h3 className="font-serif text-base font-semibold text-ecowish-accent mb-4">
              Training & Education
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              {TRAINING_PROGRAMS.map((prog) => (
                <li key={prog.slug}>
                  <Link
                    href={`/training/${prog.slug}`}
                    className="hover:text-ecowish-accent transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-ecowish-accent/60" />
                    <span>{prog.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/exams"
                  className="hover:text-ecowish-accent transition-colors font-medium flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-ecowish-accent" />
                  <span>Design Exam Prep (NIFT/NID/UCEED)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/batches"
                  className="hover:text-ecowish-accent transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-ecowish-accent" />
                  <span>Upcoming Batches (Bihar)</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-ecowish-accent hover:underline"
                >
                  <span>Apply for Training</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Trust */}
          <div>
            <h3 className="font-serif text-base font-semibold text-ecowish-accent mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Journey
                </Link>
              </li>
              <li>
                <Link href="/about#founders" className="hover:text-white transition-colors">
                  Meet the Founders
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Our Work & Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers & Openings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Studio Locations
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/admin/leads"
                  className="text-[11px] text-white/40 hover:text-white/80 transition-colors flex items-center gap-1"
                >
                  {/* <ShieldCheck className="w-3 h-3" />
                  <span>Leads Dashboard</span>
                </Link> */}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} EcoWish Craft India Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Handcrafted with <Heart className="w-3.5 h-3.5 text-ecowish-accent fill-ecowish-accent" /> in Bihar, India
            </span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
