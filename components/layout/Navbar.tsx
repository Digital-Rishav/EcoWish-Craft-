"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Palette,
  Clock,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants/company";
import { SERVICES } from "@/lib/constants/services";
import { TRAINING_PROGRAMS } from "@/lib/constants/training";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setTrainingOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Information Strip */}
      <div className="bg-ecowish-primary text-white text-xs py-2 px-4 border-b border-ecowish-primary-light/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-white/90">
            <a
              href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
              className="flex items-center gap-1.5 hover:text-ecowish-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-ecowish-accent" />
              <span>{COMPANY_INFO.contact.primaryPhone}</span>
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <a
              href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-ecowish-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-ecowish-accent" />
              <span>{COMPANY_INFO.contact.primaryEmail}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-white/80 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-ecowish-accent" />
              <span>Mon – Sat: 10:00 AM – 6:00 PM</span>
            </span>
            <span className="text-white/30">•</span>
            <span className="text-ecowish-accent font-medium">Patna & West Champaran, Bihar</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled ? "shadow-md py-2.5 border-ecowish-border" : "py-3.5 border-ecowish-sand"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/images/logo.png"
                alt="EcoWish Craft India Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 44px, 48px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-ecowish-primary leading-tight">
                EcoWish Craft
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase text-ecowish-accent-dark font-medium">
                India Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/" ? "text-ecowish-primary font-semibold" : "text-ecowish-charcoal hover:text-ecowish-primary"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                pathname === "/about" ? "text-ecowish-primary font-semibold" : "text-ecowish-charcoal hover:text-ecowish-primary"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium py-2 transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-ecowish-primary font-semibold"
                    : "text-ecowish-charcoal hover:text-ecowish-primary"
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Client Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-ecowish-primary" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-elevated border border-ecowish-border p-3 mt-1 animate-in fade-in-50 slide-in-from-top-2 duration-200 z-50">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ecowish-charcoal-muted">
                    Core Business Offerings
                  </div>
                  <div className="space-y-1 mt-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-3 py-2 rounded-lg hover:bg-ecowish-sand/70 transition-colors group"
                      >
                        <div className="text-sm font-medium text-ecowish-charcoal group-hover:text-ecowish-primary flex items-center justify-between">
                          <span>{s.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-ecowish-accent" />
                        </div>
                        <p className="text-xs text-ecowish-charcoal-muted line-clamp-1 mt-0.5">
                          {s.tagline}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-ecowish-sand text-center">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-ecowish-primary hover:underline flex items-center justify-center gap-1"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Training & Education Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTrainingOpen(true)}
              onMouseLeave={() => setTrainingOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium py-2 transition-colors ${
                  pathname.startsWith("/training") || pathname.startsWith("/exams") || pathname.startsWith("/batches")
                    ? "text-ecowish-primary font-semibold"
                    : "text-ecowish-charcoal hover:text-ecowish-primary"
                }`}
                aria-expanded={trainingOpen}
              >
                <span>Training & Education</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${trainingOpen ? "rotate-180 text-ecowish-primary" : ""}`} />
              </button>

              {trainingOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-elevated border border-ecowish-border p-3 mt-1 animate-in fade-in-50 slide-in-from-top-2 duration-200 z-50">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ecowish-charcoal-muted">
                    Skill Programs & Mentorship
                  </div>
                  <div className="space-y-1 mt-1">
                    {TRAINING_PROGRAMS.map((prog) => (
                      <Link
                        key={prog.slug}
                        href={`/training/${prog.slug}`}
                        className="block px-3 py-2 rounded-lg hover:bg-ecowish-sand/70 transition-colors group"
                      >
                        <div className="text-sm font-medium text-ecowish-charcoal group-hover:text-ecowish-primary flex items-center justify-between">
                          <span>{prog.title}</span>
                          <span className="text-[11px] text-ecowish-accent-dark font-normal">{prog.duration.split(" ")[0]}</span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-2 pt-2 border-t border-ecowish-sand space-y-1">
                    <Link
                      href="/exams"
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-ecowish-sand/50 hover:bg-ecowish-sand transition-colors text-xs font-medium text-ecowish-primary"
                    >
                      <span className="flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-ecowish-secondary" />
                        <span>Design Exam Prep (NIFT/NID/UCEED)</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/batches"
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-ecowish-sand/50 transition-colors text-xs font-medium text-ecowish-charcoal"
                    >
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-ecowish-accent-dark" />
                        <span>Upcoming Batches (Patna / Champaran)</span>
                      </span>
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`text-sm font-medium transition-colors ${
                pathname === "/portfolio" ? "text-ecowish-primary font-semibold" : "text-ecowish-charcoal hover:text-ecowish-primary"
              }`}
            >
              Our Work
            </Link>

            <Link
              href="/careers"
              className={`text-sm font-medium transition-colors ${
                pathname === "/careers" ? "text-ecowish-primary font-semibold" : "text-ecowish-charcoal hover:text-ecowish-primary"
              }`}
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                pathname === "/contact" ? "text-ecowish-primary font-semibold" : "text-ecowish-charcoal hover:text-ecowish-primary"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Dual Conversion CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold text-ecowish-primary border border-ecowish-primary/30 hover:bg-ecowish-sand transition-colors"
            >
              <span>Explore Training</span>
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold bg-ecowish-primary text-white hover:bg-ecowish-primary-hover shadow-sm transition-all duration-200 hover:shadow"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-ecowish-accent" />
              <span>Start a Project</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-ecowish-primary text-white"
            >
              <span>Quote</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-ecowish-charcoal hover:bg-ecowish-sand focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-ecowish-border px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
            <Link
              href="/"
              className="block py-2 text-base font-medium text-ecowish-charcoal border-b border-ecowish-sand"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-base font-medium text-ecowish-charcoal border-b border-ecowish-sand"
            >
              About EcoWish
            </Link>

            {/* Mobile Services Section */}
            <div className="py-2 border-b border-ecowish-sand">
              <div className="font-semibold text-sm text-ecowish-primary mb-2 flex items-center justify-between">
                <span>Client Services</span>
                <Link href="/services" className="text-xs text-ecowish-accent-dark font-normal underline">
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-1.5 pl-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="text-sm py-1 text-ecowish-charcoal-muted hover:text-ecowish-primary"
                  >
                    • {s.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Training Section */}
            <div className="py-2 border-b border-ecowish-sand">
              <div className="font-semibold text-sm text-ecowish-primary mb-2 flex items-center justify-between">
                <span>Training & Education</span>
                <Link href="/training" className="text-xs text-ecowish-accent-dark font-normal underline">
                  Hub
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-1.5 pl-2">
                {TRAINING_PROGRAMS.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/training/${t.slug}`}
                    className="text-sm py-1 text-ecowish-charcoal-muted hover:text-ecowish-primary"
                  >
                    • {t.title}
                  </Link>
                ))}
                <Link
                  href="/exams"
                  className="text-sm py-1 font-medium text-ecowish-secondary"
                >
                  • Design Exam Prep (NIFT, NID, UCEED)
                </Link>
                <Link
                  href="/batches"
                  className="text-sm py-1 font-medium text-ecowish-accent-dark"
                >
                  • Upcoming Batches (Patna / Champaran)
                </Link>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="block py-2 text-base font-medium text-ecowish-charcoal border-b border-ecowish-sand"
            >
              Portfolio & Work
            </Link>

            <Link
              href="/careers"
              className="block py-2 text-base font-medium text-ecowish-charcoal border-b border-ecowish-sand"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className="block py-2 text-base font-medium text-ecowish-charcoal border-b border-ecowish-sand"
            >
              Contact Us
            </Link>

            {/* Mobile CTAs */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <Link
                href="/apply"
                className="flex items-center justify-center py-2.5 px-3 rounded-lg border border-ecowish-primary text-ecowish-primary text-xs font-semibold"
              >
                Apply for Training
              </Link>
              <Link
                href="/request-quote"
                className="flex items-center justify-center py-2.5 px-3 rounded-lg bg-ecowish-primary text-white text-xs font-semibold"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
