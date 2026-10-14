"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactMessageSchema, ContactMessageInput } from "@/lib/validations";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants/company";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactMessageInput>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry / Partnership",
      message: "",
      consent: true,
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactMessageInput) => {
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resJson = await res.json();
      if (!res.ok || !resJson.success) {
        throw new Error(resJson.error?.message || "Failed to submit message.");
      }

      setSuccess(true);
      reset();
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          "Could not send message right now. Please connect directly via WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-ecowish-border text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
        <h4 className="font-serif text-xl font-bold text-ecowish-primary mb-2">
          Message Sent Successfully!
        </h4>
        <p className="text-sm text-ecowish-charcoal-muted mb-6">
          Thank you for reaching out. Our team will review your message and get back to you promptly.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="px-6 py-2.5 rounded-xl border border-ecowish-border text-sm font-semibold text-ecowish-charcoal hover:bg-ecowish-sand transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Honeypot */}
      <div className="visually-hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 text-red-800 text-xs flex items-start gap-2 border border-red-200">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="e.g. Rajesh Sharma"
          className="ecowish-input"
          {...register("name")}
        />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="rajesh@example.com"
            className="ecowish-input"
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="ecowish-input"
            {...register("phone")}
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
          Subject / Reason for Contact <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="e.g. Inquiry regarding upcycled decor / Artisan partnership"
          className="ecowish-input"
          {...register("subject")}
        />
        {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-1.5">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="How can we assist you today?"
          className="ecowish-input resize-y"
          {...register("message")}
        ></textarea>
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="contact-consent"
          type="checkbox"
          className="mt-1 w-4 h-4 rounded text-ecowish-primary focus:ring-ecowish-primary border-ecowish-border"
          {...register("consent")}
        />
        <label htmlFor="contact-consent" className="text-xs text-ecowish-charcoal-muted">
          I allow EcoWish Craft India to contact me regarding this query.
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ecowish-primary text-white text-sm font-semibold hover:bg-ecowish-primary-hover active:scale-98 transition-all disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-ecowish-accent" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-ecowish-accent" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
