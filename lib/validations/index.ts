import { z } from "zod";

// Spam honeypot helper
const honeypotField = z.string().max(0, "Bot detected").optional();

export const businessLeadSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters")
    .trim(),
  companyName: z
    .string()
    .max(100, "Company name cannot exceed 100 characters")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .email("Please provide a valid email address")
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .min(8, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number")
    .trim(),
  city: z
    .string()
    .min(2, "City name must be at least 2 characters")
    .max(100, "City name must not exceed 100 characters")
    .trim(),
  service: z
    .string()
    .min(2, "Please select a service"),
  projectType: z
    .string()
    .min(2, "Please choose a project type"),
  estimatedBudget: z
    .string()
    .optional()
    .or(z.literal("")),
  expectedTimeline: z
    .string()
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Please provide at least 10 characters describing your requirement")
    .max(2500, "Project description cannot exceed 2500 characters")
    .trim(),
  preferredContact: z
    .enum(["WhatsApp", "Phone Call", "Email"]),
  couponCode: z.string().optional().or(z.literal("")),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please agree to allow EcoWish Craft India to contact you regarding this inquiry.",
    }),
  honeypot: honeypotField,
});

export type BusinessLeadInput = z.infer<typeof businessLeadSchema>;

export const trainingApplicationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .min(8, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number")
    .trim(),
  age: z
    .string()
    .optional()
    .or(z.literal("")),
  city: z
    .string()
    .min(2, "City is required")
    .max(100, "City name too long")
    .trim(),
  education: z
    .string()
    .min(2, "Please select or enter your current education"),
  course: z
    .string()
    .min(2, "Please select a training program"),
  trainingCategory: z
    .string()
    .min(2, "Please select a category"),
  preferredBatch: z
    .string()
    .optional()
    .or(z.literal("")),
  isDesignExamPrep: z.boolean(),
  targetExam: z
    .string()
    .optional()
    .or(z.literal("")),
  skillLevel: z
    .enum(["Beginner / No prior experience", "Intermediate / Hobbyist", "Advanced / Practicing Artist", "Design Student"]),
  learningMode: z
    .enum(["In-Person Studio (Patna / Champaran)", "Online Masterclass", "Weekend Intensives", "Flexible"]),
  message: z
    .string()
    .max(1500, "Message cannot exceed 1500 characters")
    .optional()
    .or(z.literal("")),
  couponCode: z.string().optional().or(z.literal("")),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please agree to receive training updates and batch communications.",
    }),
  honeypot: honeypotField,
});

export type TrainingApplicationInput = z.infer<typeof trainingApplicationSchema>;

export const contactMessageSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long")
    .trim(),
  email: z
    .string()
    .email("Please provide a valid email address")
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .min(8, "Phone number too short")
    .max(20, "Phone number too long")
    .trim(),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject too long")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters")
    .trim(),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please consent to our team contacting you.",
    }),
  honeypot: honeypotField,
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;

export const careerApplicationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long")
    .trim(),
  email: z
    .string()
    .email("Please provide a valid email address")
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .min(8, "Phone number too short")
    .max(20, "Phone number too long")
    .trim(),
  roleId: z
    .string()
    .min(1, "Please select an opening"),
  portfolioUrl: z
    .string()
    .url("Please enter a valid URL (e.g. Google Drive, Behance, LinkedIn)")
    .optional()
    .or(z.literal("")),
  resumeSummary: z
    .string()
    .max(1000, "Summary too long")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Please share a brief note on why you'd like to work with EcoWish Craft")
    .max(2000, "Message too long")
    .trim(),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please agree to have your details reviewed by our hiring team.",
    }),
  honeypot: honeypotField,
});

export type CareerApplicationInput = z.infer<typeof careerApplicationSchema>;
