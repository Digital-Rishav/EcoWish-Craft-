"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trainingApplicationSchema, TrainingApplicationInput } from "@/lib/validations";
import { COMPANY_INFO } from "@/lib/constants/company";
import { CheckCircle2, AlertCircle, Loader2, GraduationCap, MessageCircle, Sparkles, Tag } from "lucide-react";

interface Props {
  initialCourse?: string;
  initialCategory?: string;
  isExamPrepDefault?: boolean;
  initialCoupon?: string;
}

export default function TrainingApplicationForm({
  initialCourse = "",
  initialCategory = "",
  isExamPrepDefault = false,
  initialCoupon = "DUSSEHRA50",
}: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ applicationId: string; name: string; coupon?: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<TrainingApplicationInput>({
    resolver: zodResolver(trainingApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      age: "",
      city: "",
      education: "Undergraduate / College Student",
      course: initialCourse || "Upcycling & Waste-to-Craft Workshop (3–5 Days)",
      trainingCategory: initialCategory || "Handicrafts & Upcycling",
      preferredBatch: "Next Available Cohort (Patna / West Champaran)",
      isDesignExamPrep: isExamPrepDefault,
      targetExam: isExamPrepDefault ? "NIFT Entrance Examination" : "None",
      skillLevel: "Beginner / No prior experience",
      learningMode: "In-Person Studio (Patna / Champaran)",
      message: "",
      couponCode: initialCoupon || "DUSSEHRA50",
      consent: true,
      honeypot: "",
    },
  });

  const watchExamPrep = watch("isDesignExamPrep");

  const onSubmit = async (data: TrainingApplicationInput) => {
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/training-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();

      if (!response.ok || !resJson.success) {
        throw new Error(
          resJson.error?.message ||
            "Unable to submit application at this moment. Please connect with our admissions desk on WhatsApp."
        );
      }

      setSuccessData({
        applicationId: resJson.data?.applicationId || "EWC-STU-CONFIRMED",
        name: data.fullName,
        coupon: data.couponCode,
      });
      reset();
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          "Unable to submit application at this moment. Please connect with our admissions desk on WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-ecowish-border shadow-soft text-center max-w-2xl mx-auto animate-in fade-in-50 duration-300">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <GraduationCap className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-ecowish-primary mb-2">
          Application Submitted Successfully!
        </h3>
        <p className="text-sm text-ecowish-charcoal-muted mb-4">
          Welcome to the creative community, <strong>{successData.name}</strong>. Your training registration has been logged.
        </p>

        {successData.coupon && successData.coupon.toUpperCase() === "DUSSEHRA50" && (
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>🏹 Dussehra Flat 50% Course Concession (DUSSEHRA50) attached to your application!</span>
          </div>
        )}

        <div className="bg-ecowish-sand/60 rounded-xl p-4 mb-6 inline-block text-left border border-ecowish-border">
          <div className="text-xs text-ecowish-charcoal-muted uppercase tracking-wider font-semibold">
            Application Reference ID
          </div>
          <div className="text-lg font-mono font-bold text-ecowish-primary">
            {successData.applicationId}
          </div>
          <div className="text-xs text-ecowish-charcoal-muted mt-1">
            An acknowledgement confirmation has also been sent to your email.
          </div>
        </div>

        <p className="text-sm text-ecowish-charcoal mb-6 max-w-lg mx-auto">
          Our admissions and academic coordinator will get in touch with you shortly regarding orientation schedules, batch timings, and current fees.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={COMPANY_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Admissions Desk</span>
          </a>
          <button
            type="button"
            onClick={() => setSuccessData(null)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-ecowish-border text-sm font-semibold text-ecowish-charcoal hover:bg-ecowish-sand transition-colors"
          >
            Register Another Learner
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
      {/* Honeypot field */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="student-website-extra">Do not fill this field</label>
        <input
          id="student-website-extra"
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
            <p className="font-semibold">Application Notice</p>
            <p className="text-xs">{errorMessage}</p>
            <p className="text-xs pt-1">
              Need immediate admission assistance? Message our team directly on WhatsApp at{" "}
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

      {/* Row 1: Name, Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Student Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Priyanshu Kumar"
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
          <label htmlFor="email" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="student@example.com"
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
            placeholder="+91 97097 09717"
            className="ecowish-input"
            aria-required="true"
            aria-invalid={errors.phone ? "true" : "false"}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: City, Age & Current Education */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="city" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            City / District <span className="text-red-500">*</span>
          </label>
          <input
            id="city"
            type="text"
            placeholder="e.g. Patna / West Champaran / Muzaffarpur"
            className="ecowish-input"
            aria-required="true"
            aria-invalid={errors.city ? "true" : "false"}
            {...register("city")}
          />
          {errors.city && (
            <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="age" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Age <span className="text-ecowish-charcoal-muted font-normal">(Optional)</span>
          </label>
          <input
            id="age"
            type="text"
            placeholder="e.g. 19"
            className="ecowish-input"
            {...register("age")}
          />
        </div>

        <div>
          <label htmlFor="education" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Current Education / Status <span className="text-red-500">*</span>
          </label>
          <select id="education" className="ecowish-input" {...register("education")}>
            <option value="School Student (Class 10-12)">School Student (Class 10-12)</option>
            <option value="Undergraduate / College Student">Undergraduate / College Student</option>
            <option value="Design / Fine Arts Graduate">Design / Fine Arts Graduate</option>
            <option value="Practicing Artisan / Craftsperson">Practicing Artisan / Craftsperson</option>
            <option value="Working Professional">Working Professional</option>
            <option value="Homemaker / Self-employed">Homemaker / Self-employed</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Row 3: Course & Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="course" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Course Interested In <span className="text-red-500">*</span>
          </label>
          <select id="course" className="ecowish-input" {...register("course")}>
            <option value="Upcycling & Waste-to-Craft Workshop (3–5 Days)">Upcycling Workshop (3–5 Days)</option>
            <option value="Sustainable Home Decor Course (15 Days)">Sustainable Home Decor Course (15 Days)</option>
            <option value="Master Artisan Certification (1–3 Months)">Master Artisan Certification (1–3 Months)</option>
            <option value="Portrait & Painting Masterclass">Portrait & Painting Training</option>
            <option value="Design Entrance Preparation (NIFT / NID / UCEED)">Design Entrance Exam Preparation</option>
            <option value="Institutional / NGO Skill Workshop">Institutional / NGO Workshop</option>
          </select>
        </div>

        <div>
          <label htmlFor="trainingCategory" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Training Category <span className="text-red-500">*</span>
          </label>
          <select id="trainingCategory" className="ecowish-input" {...register("trainingCategory")}>
            <option value="Handicrafts & Upcycling">Handicrafts & Upcycling</option>
            <option value="Sustainable Home Decor">Sustainable Home Decor</option>
            <option value="Portrait & Painting Training">Portrait & Painting Training</option>
            <option value="Design / Creative Skill Development">Design / Creative Skill Development</option>
            <option value="Design Entrance Examination Preparation">Design Entrance Examination Preparation</option>
          </select>
        </div>
      </div>

      {/* Row 4: Design Entrance Exam Toggle & Target */}
      <div className="bg-ecowish-sand/40 border border-ecowish-sand rounded-xl p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-3">
          <input
            id="isDesignExamPrep"
            type="checkbox"
            className="w-4 h-4 rounded text-ecowish-primary focus:ring-ecowish-primary border-ecowish-border"
            {...register("isDesignExamPrep")}
          />
          <label htmlFor="isDesignExamPrep" className="text-xs sm:text-sm font-semibold text-ecowish-primary cursor-pointer">
            Are you preparing for Design-related Entrance Examinations in India? (NIFT, NID, UCEED, etc.)
          </label>
        </div>

        {watchExamPrep && (
          <div className="pt-2">
            <label htmlFor="targetExam" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
              Select Your Target Entrance Exam
            </label>
            <select id="targetExam" className="ecowish-input" {...register("targetExam")}>
              <option value="NIFT (National Institute of Fashion Technology)">NIFT (B.Des / M.Des / Situation Test)</option>
              <option value="NID DAT (National Institute of Design Prelims & Mains)">NID DAT (Prelims & Mains Studio Test)</option>
              <option value="UCEED (IIT Bombay / Delhi / Guwahati / Hyderabad)">UCEED (IIT Undergraduate Design)</option>
              <option value="CEED (Postgraduate Design IITs / IISc)">CEED (IIT Postgraduate M.Des)</option>
              <option value="Multiple / General Design Entrance">Multiple / Comprehensive Design Entrance</option>
              <option value="Other Design College Exams">Other University Design Entrances</option>
            </select>
            <p className="mt-1 text-[11px] text-ecowish-charcoal-muted">
              Note: EcoWish Craft India offers independent skill and design mentoring led by NIFT alumni and does not claim official affiliation with exam authorities.
            </p>
          </div>
        )}
      </div>

      {/* Row 5: Skill Level & Learning Mode */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="skillLevel" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Current Creative Skill Level
          </label>
          <select id="skillLevel" className="ecowish-input" {...register("skillLevel")}>
            <option value="Beginner / No prior experience">Beginner / No prior experience</option>
            <option value="Intermediate / Hobbyist">Intermediate / Hobbyist</option>
            <option value="Advanced / Practicing Artist">Advanced / Practicing Artist</option>
            <option value="Design Student">Design Student</option>
          </select>
        </div>

        <div>
          <label htmlFor="learningMode" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
            Preferred Learning Mode & Center
          </label>
          <select id="learningMode" className="ecowish-input" {...register("learningMode")}>
            <option value="In-Person Studio (Patna / Champaran)">In-Person Studio (Patna / West Champaran)</option>
            <option value="Weekend Intensives">Weekend Intensives</option>
            <option value="Online Masterclass">Online Masterclass Modules</option>
            <option value="Flexible">Flexible / Discuss with counselor</option>
          </select>
        </div>
      </div>

      {/* Row 6: Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-ecowish-charcoal uppercase tracking-wider mb-2">
          Your Creative Goals / Note <span className="text-ecowish-charcoal-muted font-normal">(Optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Tell us what you hope to achieve, any prior artistic experience, or if you wish to apply for women/rural artisan scholarship support..."
          className="ecowish-input resize-y"
          {...register("message")}
        ></textarea>
      </div>

      {/* Row 7: Festive Special Coupon */}
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
                Vijayadashami celebration scholarship! 50% concession on course tuition and workshop material kits.
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

      {/* Scholarship Info Box */}
      <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 leading-relaxed">
        <strong>Scholarship & Financial Aid Notice:</strong> Special fee concessions are available for eligible women candidates, rural artisan families, and differently-abled learners. Please mention in your message or during your orientation discussion.
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 w-4 h-4 rounded text-ecowish-primary focus:ring-ecowish-primary border-ecowish-border"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-xs text-ecowish-charcoal-muted leading-relaxed">
          I consent to receive information about upcoming batches, workshops, and admissions from EcoWish Craft India Pvt. Ltd.
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-600">{errors.consent.message}</p>
      )}

      {/* Submit Button */}
      <div className="pt-3">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-ecowish-primary text-white text-sm font-semibold hover:bg-ecowish-primary-hover active:scale-98 transition-all duration-200 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-ecowish-accent" />
              <span>Submitting Application...</span>
            </>
          ) : (
            <>
              <GraduationCap className="w-4 h-4 text-ecowish-accent" />
              <span>Submit Training Application</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
