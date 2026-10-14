import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants/services";
import { TRAINING_PROGRAMS } from "@/lib/constants/training";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ecowishcraft.com";
  const lastModified = new Date();

  const staticPages = [
    "",
    "/about",
    "/services",
    "/training",
    "/exams",
    "/batches",
    "/portfolio",
    "/contact",
    "/request-quote",
    "/apply",
    "/careers",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const trainingPages = TRAINING_PROGRAMS.map((prog) => ({
    url: `${baseUrl}/training/${prog.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...trainingPages];
}
