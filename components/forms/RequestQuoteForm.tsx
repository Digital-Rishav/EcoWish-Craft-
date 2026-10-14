"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { businessLeadSchema, BusinessLeadInput } from "@/lib/validations";
import { COMPANY_INFO } from "@/lib/constants/company";
import { CheckCircle2, AlertCircle, Loader2, Send, MessageCircle, Sparkles, Tag } from "lucide-react";

interface Props {
  initialService?: string;
  initialCoupon?: string;
}

export default function RequestQuoteForm({ initialService = "", initialCoupon = "DUSSEHRA50" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ leadId: string; name: string; coupon?: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<BusinessLeadInput>({
    resolver: zodResolver(businessLeadSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      city: "",
      service: initialService || "Eco-Conscious Home Decor",
      projectType: "Residential / Personal Decor",
      estimatedBudget: "Under ₹25,000",
      expectedTimeline: "Within 1 month",
      message: "",
      preferredContact: "WhatsApp",
      couponCode: initialCoupon || "DUSSEHRA50",
      consent: true,
      honeypot: "",
    },
  });

  const watchCoupon = watch("couponCode");

  const onSubmit = async (data: BusinessLeadInput) => {
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();

      if (!response.ok || !resJson.success) {
        throw new Error(
          resJson.error?.message ||
            "We couldn't submit your enquiry right now. Please try again or contact us directly on WhatsApp."
        );
      }

      setSuccessData({
        leadId: resJson.data?.leadId || "EWC-LEAD-CONFIRMED",
        name: data.fullName,
        coupon: data.couponCode,
      });
      reset();
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          "We couldn't submit your enquiry right now. Please try again or contact us directly on WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-ecowish-border shadow-soft text-center max-w-2xl mx-auto animate-in fade-in-50 duration-300">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-ecowish-primary mb-2">
          Enquiry Received Successfully!
        </h3>
        <p className="text-sm text-ecowish-charcoal-muted mb-4">
          Thank you, <strong>{successData.name}</strong>. Your project enquiry has been registered and logged in our system.
        </p>

        {successData.coupon && successData.coupon.toUpperCase() === "DUSSEHRA50" && (
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>🏹 Dussehra Flat 50% Festive Discount applied to your quotation reference!</span>
          </div>
        )}

        <div className="bg-ecowish-sand/60 rounded-xl p-4 mb-6 inline-block text-left border border-ecowish-border">
          <div className="text-xs text-ecowish-charcoal-muted uppercase tracking-wider font-semibold">
            Your Reference ID
          </div>
          <div className="text-lg font-mono font-bold text-ecowish-primary">
            {successData.leadId}
          </div>
          <div className="text-xs text-ecowish-charcoal-muted mt-1">
            We have also dispatched an acknowledgement to your email address.
          </div>
        </div>

        <p className="text-sm text-ecowish-charcoal mb-6 max-w-lg mx-auto">
          Our design and project coordinators will review your specifications and contact you within 24–48 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={COMPANY_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setSuccessData(null)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-ecowish-border text-sm font-semibold text-ecowish-charcoal hover:bg-ecowish-sand transition-colors"
          >
            Submit Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl p-6 sm:p-10 border border-ecowish-border shadow-soft space-y-6"
      noValidate
    >
      {/* Spam Honeypot (hidden from human users) */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="company-website-extra">Do not fill this field</label>
        <input
          id="company-website-extra"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">Submission Notice</p>
            <p className="text-xs">{errorMessage}</p>
            <p className="text-xs pt-1">
              You can also reach us directly on WhatsApp at{" "}
              <a
                href={COMPANY_INFO.socials.whatsapp}
                className="underline font-bold"
                target="_blank"
                rel="noreferrer"
              >
                {COMPANY_INFO.contact.primaryPhone}
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Anandita Roy"
            className="ecowish-input"
            aria-required="true"
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="companyName" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Company / Organization Name <span className="text-ecowish-charcoal-muted font-normal">(Optional)</span>
          </label>
          <input
            id="companyName"
            type="text"
            placeholder="e.g. Studio Arc / Taj Eco Resort"
            className="ecowish-input"
            {...register("companyName")}
          />
        </div>
      </div>

      {/* Row 2: Email, Phone & City */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@organization.com"
            className="ecowish-input"
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="ecowish-input"
            aria-required="true"
            aria-invalid={errors.phone ? "true" : "false"}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="city" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            City / Location <span className="text-red-500">*</span>
          </label>
          <input
            id="city"
            type="text"
            placeholder="e.g. Patna / Delhi / Mumbai"
            className="ecowish-input"
            aria-required="true"
            aria-invalid={errors.city ? "true" : "false"}
            {...register("city")}
          />
          {errors.city && (
            <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>
          )}
        </div>
      </div>

      {/* Row 3: Service Selection & Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Service Interested In <span className="text-red-500">*</span>
          </label>
          <select id="service" className="ecowish-input" {...register("service")}>
            <option value="Eco-Conscious Home Decor">Home Decor (Upcycled & Handmade)</option>
            <option value="Handicrafts & Upcycled Creations">Handicrafts & Upcycled Products</option>
            <option value="Painting & Portrait Services">Painting & Portrait Commissions</option>
            <option value="Interior & Design Solutions">Interior Design & Styling Solutions</option>
            <option value="Wedding & Event Decor">Event & Festive Decor (Weddings, Functions)</option>
            <option value="Corporate Gifting & ESG Projects">Corporate Gifting & Institutional Projects</option>
            <option value="Sustainability Workshops">Hands-on Workshops (Schools/Colleges/NGOs)</option>
            <option value="Custom Creative Project">Custom Bespoke Project</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Project Type <span className="text-red-500">*</span>
          </label>
          <select id="projectType" className="ecowish-input" {...register("projectType")}>
            <option value="Residential / Personal Decor">Residential / Personal Decor</option>
            <option value="Corporate / Office Interior">Corporate / Commercial Space</option>
            <option value="Wedding / Festive Celebration">Wedding / Festive Celebration</option>
            <option value="Bulk Corporate Gifting">Bulk Corporate Gifting</option>
            <option value="Educational / Campus Workshop">Educational / Campus Workshop</option>
            <option value="Fine Art / Portrait Commission">Fine Art / Portrait Commission</option>
            <option value="Custom Collaborative Project">Custom Collaborative Project</option>
          </select>
        </div>
      </div>

      {/* Row 4: Budget, Timeline & Preferred Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="estimatedBudget" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Estimated Budget <span className="text-ecowish-charcoal-muted font-normal">(Optional)</span>
          </label>
          <select id="estimatedBudget" className="ecowish-input" {...register("estimatedBudget")}>
            <option value="Under ₹25,000">Under ₹25,000</option>
            <option value="₹25,000 – ₹1,00,000">₹25,000 – ₹1,00,000</option>
            <option value="₹1,00,000 – ₹5,00,000">₹1,00,000 – ₹5,00,000</option>
            <option value="₹5,00,000+">₹5,00,000+</option>
            <option value="To be discussed">To be discussed with designer</option>
          </select>
        </div>

        <div>
          <label htmlFor="expectedTimeline" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Expected Timeline
          </label>
          <select id="expectedTimeline" className="ecowish-input" {...register("expectedTimeline")}>
            <option value="Urgent (Within 2 weeks)">Urgent (Within 2 weeks)</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="2 – 3 months">2 – 3 months</option>
            <option value="Flexible / Planning stage">Flexible / Planning stage</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredContact" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Preferred Contact Mode
          </label>
          <select id="preferredContact" className="ecowish-input" {...register("preferredContact")}>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Phone Call">Phone Call</option>
            <option value="Email">Email</option>
          </select>
        </div>
      </div>

      {/* Row 5: Message Description */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
          Project Description & Requirements <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Please describe your requirements, themes, dimensions, quantities, or specific materials you are interested in..."
          className="ecowish-input resize-y"
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Row 6: Festive Special Coupon */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/90 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-900 flex-shrink-0 mt-0.5">
              <Tag className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-amber-950 uppercase tracking-wider">
                  🏹 Dussehra Mahotsav Offer
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-extrabold tracking-wide">
                  FLAT 50% OFF
                </span>
              </div>
              <p className="text-xs text-amber-900/80 mt-1 leading-relaxed">
                Celebrating Vijayadashami! A flat 50% discount will be applied to your custom artwork, decor, or handicraft proposal.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <label htmlFor="couponCode" className="text-xs font-semibold text-amber-950 whitespace-nowrap">
              Coupon:
            </label>
            <input
              id="couponCode"
              type="text"
              placeholder="Coupon Code"
              className="w-36 px-3 py-2 text-xs font-mono font-bold uppercase rounded-lg border border-amber-300 bg-white text-amber-950 shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
              {...register("couponCode")}
            />
          </div>
        </div>
      </div>

      {/* Row 7: Consent */}
      <div className="flex items-start gap-3 pt-2">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 w-4 h-4 rounded text-ecowish-primary focus:ring-ecowish-primary border-ecowish-border"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-xs text-ecowish-charcoal-muted leading-relaxed">
          I agree to allow EcoWish Craft India Pvt. Ltd. to contact me via Phone, WhatsApp, or Email regarding this project enquiry. We respect your privacy and never share your data.
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-600">{errors.consent.message}</p>
      )}

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-ecowish-primary text-white text-sm font-semibold hover:bg-ecowish-primary-hover active:scale-98 transition-all duration-200 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-ecowish-accent" />
              <span>Registering Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-ecowish-accent" />
              <span>Submit Project Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
