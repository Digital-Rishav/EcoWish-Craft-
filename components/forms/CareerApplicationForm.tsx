"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { careerApplicationSchema, CareerApplicationInput } from "@/lib/validations";
import { CAREER_OPENINGS } from "@/lib/constants/careers";
import { COMPANY_INFO } from "@/lib/constants/company";
import { CheckCircle2, AlertCircle, Loader2, Briefcase, Mail } from "lucide-react";

interface Props {
  initialRoleId?: string;
}

export default function CareerApplicationForm({ initialRoleId = "" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareerApplicationInput>({
    resolver: zodResolver(careerApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      roleId: initialRoleId || CAREER_OPENINGS[0]?.id || "artisan-trainer",
      portfolioUrl: "",
      resumeSummary: "",
      message: "",
      consent: true,
      honeypot: "",
    },
  });

  const onSubmit = async (data: CareerApplicationInput) => {
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resJson = await res.json();
      if (!res.ok || !resJson.success) {
        throw new Error(resJson.error?.message || "Failed to submit application.");
      }

      setSuccess(true);
      reset();
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          "Could not submit application. Please email your CV directly to careers@ecowishcraft.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-ecowish-border text-center max-w-xl mx-auto">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
        <h3 className="font-serif text-2xl font-bold text-ecowish-primary mb-2">
          Application Submitted!
        </h3>
        <p className="text-sm text-ecowish-charcoal-muted mb-4">
          Thank you for your interest in joining the EcoWish team. We have received your application and will review your profile.
        </p>
        <p className="text-xs text-ecowish-charcoal-muted mb-6">
          You may also email your detailed PDF resume directly to{" "}
          <a href={`mailto:${COMPANY_INFO.contact.careersEmail}`} className="underline font-bold text-ecowish-primary">
            {COMPANY_INFO.contact.careersEmail}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="px-6 py-2.5 rounded-xl border border-ecowish-border text-sm font-semibold text-ecowish-charcoal hover:bg-ecowish-sand transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="visually-hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 text-red-800 text-xs flex items-start gap-2 border border-red-200">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="career-name" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="career-name"
            type="text"
            placeholder="e.g. Sumanth Verma"
            className="ecowish-input"
            {...register("name")}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="career-email" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="career-email"
            type="email"
            placeholder="sumanth@example.com"
            className="ecowish-input"
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="career-phone" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            id="career-phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="ecowish-input"
            {...register("phone")}
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="career-role" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
            Role / Area of Interest <span className="text-red-500">*</span>
          </label>
          <select id="career-role" className="ecowish-input" {...register("roleId")}>
            {CAREER_OPENINGS.map((op) => (
              <option key={op.id} value={op.title}>
                {op.title}
              </option>
            ))}
          </select>
          {errors.roleId && <p className="text-xs text-red-600 mt-1">{errors.roleId.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="career-portfolio" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
          Portfolio Link / LinkedIn / Google Drive URL <span className="text-ecowish-charcoal-muted font-normal">(Optional)</span>
        </label>
        <input
          id="career-portfolio"
          type="url"
          placeholder="https://behance.net/yourprofile or https://linkedin.com/in/..."
          className="ecowish-input"
          {...register("portfolioUrl")}
        />
        {errors.portfolioUrl && <p className="text-xs text-red-600 mt-1">{errors.portfolioUrl.message}</p>}
        <p className="text-[11px] text-ecowish-charcoal-muted mt-1">
          Provide a link to your creative portfolio, resume file, or professional profile.
        </p>
      </div>

      <div>
        <label htmlFor="career-resume" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
          Resume Summary / Prior Experience Highlights <span className="text-ecowish-charcoal-muted font-normal">(Optional)</span>
        </label>
        <textarea
          id="career-resume"
          rows={2}
          placeholder="Briefly outline your education, years of experience, and key craft/design or business skills..."
          className="ecowish-input resize-y"
          {...register("resumeSummary")}
        ></textarea>
      </div>

      <div>
        <label htmlFor="career-message" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
          Why EcoWish Craft India? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="career-message"
          rows={3}
          placeholder="What excites you about sustainable design, upcycling, and artisan empowerment?"
          className="ecowish-input resize-y"
          {...register("message")}
        ></textarea>
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-2.5">
        <input
          id="career-consent"
          type="checkbox"
          className="mt-1 w-4 h-4 rounded text-ecowish-primary focus:ring-ecowish-primary border-ecowish-border"
          {...register("consent")}
        />
        <label htmlFor="career-consent" className="text-xs text-ecowish-charcoal-muted">
          I declare that the information submitted is accurate, and I agree to have the EcoWish talent team contact me.
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}

      <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-ecowish-primary text-white text-sm font-semibold hover:bg-ecowish-primary-hover active:scale-98 transition-all disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-ecowish-accent" />
              <span>Submitting Application...</span>
            </>
          ) : (
            <>
              <Briefcase className="w-4 h-4 text-ecowish-accent" />
              <span>Submit Application</span>
            </>
          )}
        </button>

        <span className="text-xs text-ecowish-charcoal-muted">
          Or email your CV to{" "}
          <a href={`mailto:${COMPANY_INFO.contact.careersEmail}`} className="underline font-medium text-ecowish-primary">
            {COMPANY_INFO.contact.careersEmail}
          </a>
        </span>
      </div>
    </form>
  );
}
