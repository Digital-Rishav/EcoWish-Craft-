import { Resend } from "resend";
import fs from "fs/promises";
import path from "path";
import { BusinessLead, TrainingApplication, ContactMessage, CareerApplication } from "./db";
import { COMPANY_INFO } from "./constants/company";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const NOTIFICATION_EMAIL = process.env.CONTACT_EMAIL || "ecowishcraft@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "EcoWish Craft India <notifications@resend.dev>";

interface EmailLogItem {
  id: string;
  timestamp: string;
  type: "BUSINESS_LEAD" | "TRAINING_APPLICATION" | "CONTACT_MESSAGE" | "CAREER_APPLICATION";
  to: string;
  subject: string;
  preview: string;
  status: "SENT_VIA_RESEND" | "LOGGED_LOCAL_DEV";
}

async function logEmailToFile(item: EmailLogItem): Promise<void> {
  try {
    const filePath = path.join(process.cwd(), "data", "email-logs.json");
    let logs: EmailLogItem[] = [];
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      if (raw.trim()) logs = JSON.parse(raw);
    } catch {
      // file might not exist yet
    }
    logs.unshift(item);
    await fs.writeFile(filePath, JSON.stringify(logs, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to write to email-logs.json:", err);
  }
}

// --------------------------------------------------------------------------
// 1. BUSINESS LEAD EMAILS
// --------------------------------------------------------------------------
export async function sendBusinessLeadEmails(lead: BusinessLead) {
  const companySubject = `[NEW CLIENT ENQUIRY] ${lead.service} - ${lead.name} (${lead.city})`;
  const clientSubject = `Thank you for reaching out to EcoWish Craft India [Ref: ${lead.id}]`;

  const companyHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #FAF8F3; margin: 0; padding: 24px; color: #1E2420; }
          .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #E8E2D5; padding: 32px; }
          .header { border-bottom: 2px solid #1B4332; padding-bottom: 16px; margin-bottom: 24px; }
          .badge { display: inline-block; background: #1B4332; color: #ffffff; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; }
          .title { font-size: 22px; color: #1B4332; margin: 12px 0 4px; }
          .ref { font-size: 13px; color: #718096; }
          .section-title { font-size: 14px; font-weight: 700; text-transform: uppercase; color: #C9A96E; margin-top: 24px; margin-bottom: 12px; letter-spacing: 0.5px; }
          .data-table { width: 100%; border-collapse: collapse; }
          .data-table td { padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #F3EFE6; }
          .label { font-weight: 600; color: #525B54; width: 38%; }
          .value { color: #1E2420; }
          .message-box { background: #FAF8F3; border-left: 4px solid #1B4332; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 8px; font-size: 14px; line-height: 1.6; }
          .cta-strip { margin-top: 28px; padding-top: 20px; border-top: 1px solid #E8E2D5; font-size: 13px; color: #525B54; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">Business Lead</span>
            <h2 class="title">New Client Project Enquiry</h2>
            <div class="ref">Lead Reference ID: <strong>${lead.id}</strong> | Received: ${new Date(lead.createdAt).toLocaleString("en-IN")}</div>
          </div>

          <div class="section-title">Client Information</div>
          <table class="data-table">
            <tr><td class="label">Full Name:</td><td class="value"><strong>${lead.name}</strong></td></tr>
            <tr><td class="label">Company / Organization:</td><td class="value">${lead.companyName || "Individual / Private Client"}</td></tr>
            <tr><td class="label">Email Address:</td><td class="value"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
            <tr><td class="label">Phone / WhatsApp:</td><td class="value"><a href="tel:${lead.phone}">${lead.phone}</a></td></tr>
            <tr><td class="label">City / Location:</td><td class="value">${lead.city}</td></tr>
            <tr><td class="label">Preferred Contact Mode:</td><td class="value"><strong>${lead.preferredContact}</strong></td></tr>
          </table>

          <div class="section-title">Project Scope</div>
          <table class="data-table">
            <tr><td class="label">Service Category:</td><td class="value"><strong>${lead.service}</strong></td></tr>
            <tr><td class="label">Project Type:</td><td class="value">${lead.projectType}</td></tr>
            <tr><td class="label">Estimated Budget:</td><td class="value">${lead.estimatedBudget || "To be discussed"}</td></tr>
            <tr><td class="label">Expected Timeline:</td><td class="value">${lead.expectedTimeline || "Flexible / Normal"}</td></tr>
            ${lead.couponCode ? `<tr><td class="label">Applied Offer / Coupon:</td><td class="value"><span style="background: #FEF3C7; color: #92400E; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${lead.couponCode}</span> ${lead.couponCode.toUpperCase() === "DUSSEHRA50" ? "— 🏹 FLAT 50% Dussehra Mahotsav Concession" : ""}</td></tr>` : ""}
          </table>

          <div class="section-title">Project Description / Requirements</div>
          <div class="message-box">
            ${lead.message.replace(/\n/g, "<br>")}
          </div>

          <div class="cta-strip">
            Direct action: Reply via <a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}">WhatsApp</a> or call <a href="tel:${lead.phone}">${lead.phone}</a>.
          </div>
        </div>
      </body>
    </html>
  `;

  const clientHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #FAF8F3; margin: 0; padding: 24px; color: #1E2420; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #E8E2D5; padding: 36px; }
          .header { text-align: center; border-bottom: 2px solid #C9A96E; padding-bottom: 20px; margin-bottom: 24px; }
          .brand { font-size: 24px; font-weight: 700; color: #1B4332; letter-spacing: 0.5px; }
          .tagline { font-size: 13px; color: #525B54; margin-top: 4px; }
          .greeting { font-size: 18px; color: #1B4332; font-weight: 600; margin-bottom: 12px; }
          .body-text { font-size: 15px; line-height: 1.7; color: #374151; margin-bottom: 16px; }
          .summary-card { background: #FAF8F3; border: 1px solid #E8E2D5; border-radius: 8px; padding: 18px; margin: 24px 0; }
          .summary-title { font-size: 13px; font-weight: 700; text-transform: uppercase; color: #1B4332; margin-bottom: 10px; }
          .summary-item { font-size: 14px; margin-bottom: 6px; color: #4B5563; }
          .cta-btn { display: inline-block; background-color: #1B4332; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px; margin-top: 12px; }
          .footer { margin-top: 32px; padding-top: 20px; border-top: 1px solid #E8E2D5; font-size: 12px; color: #849087; text-align: center; line-height: 1.6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand">EcoWish Craft India</div>
            <div class="tagline">Turning Creativity, Craft & Waste Into Meaningful Design</div>
          </div>

          <div class="greeting">Dear ${lead.name},</div>
          <div class="body-text">
            Thank you for reaching out to EcoWish Craft India Pvt. Ltd. We have successfully received your enquiry regarding <strong>${lead.service}</strong>.
          </div>
          <div class="body-text">
            Our creative and project management team is reviewing your requirements. One of our lead designers or strategy specialists will contact you within <strong>24 to 48 business hours</strong> via your preferred contact channel (${lead.preferredContact}).
          </div>

          <div class="summary-card">
            <div class="summary-title">Your Project Reference Summary</div>
            <div class="summary-item"><strong>Reference ID:</strong> ${lead.id}</div>
            <div class="summary-item"><strong>Service:</strong> ${lead.service}</div>
            <div class="summary-item"><strong>Project Scope:</strong> ${lead.projectType}</div>
            <div class="summary-item"><strong>Location:</strong> ${lead.city}</div>
            ${lead.couponCode ? `<div class="summary-item" style="color: #92400E; font-weight: 600;"><strong>Festive Offer Applied:</strong> ${lead.couponCode} ${lead.couponCode.toUpperCase() === "DUSSEHRA50" ? "(FLAT 50% Dussehra Concession applied to quote)" : ""}</div>` : ""}
          </div>

          <div class="body-text">
            Need urgent assistance or wish to share immediate architectural sketches or references? You can connect with us directly on WhatsApp:
          </div>
          <div style="text-align: center; margin: 20px 0;">
            <a href="${COMPANY_INFO.socials.whatsapp}" class="cta-btn">Chat with Us on WhatsApp</a>
          </div>

          <div class="footer">
            <strong>EcoWish Craft India Pvt. Ltd.</strong><br>
            ${COMPANY_INFO.address.full}<br>
            Phone: ${COMPANY_INFO.contact.primaryPhone} | Email: ${COMPANY_INFO.contact.primaryEmail}<br>
            www.ecowishcraft.com
          </div>
        </div>
      </body>
    </html>
  `;

  if (resend) {
    try {
      await Promise.all([
        resend.emails.send({
          from: FROM_EMAIL,
          to: NOTIFICATION_EMAIL,
          subject: companySubject,
          html: companyHtml,
        }),
        resend.emails.send({
          from: FROM_EMAIL,
          to: lead.email,
          subject: clientSubject,
          html: clientHtml,
        }),
      ]);
      await logEmailToFile({
        id: lead.id,
        timestamp: new Date().toISOString(),
        type: "BUSINESS_LEAD",
        to: `${NOTIFICATION_EMAIL}, ${lead.email}`,
        subject: companySubject,
        preview: `Client: ${lead.name}, Service: ${lead.service}`,
        status: "SENT_VIA_RESEND",
      });
      return { success: true, mode: "RESEND_SENT" };
    } catch (err) {
      console.error("Resend API error:", err);
      // Fallback to local log
    }
  }

  // Fallback / Development mode logging
  await logEmailToFile({
    id: lead.id,
    timestamp: new Date().toISOString(),
    type: "BUSINESS_LEAD",
    to: `${NOTIFICATION_EMAIL}, ${lead.email}`,
    subject: companySubject,
    preview: `Client: ${lead.name}, Service: ${lead.service}, Phone: ${lead.phone}`,
    status: "LOGGED_LOCAL_DEV",
  });

  return { success: true, mode: "LOGGED_LOCAL_DEV" };
}

// --------------------------------------------------------------------------
// 2. TRAINING APPLICATION EMAILS
// --------------------------------------------------------------------------
export async function sendTrainingApplicationEmails(app: TrainingApplication) {
  const companySubject = `[NEW STUDENT APPLICATION] ${app.course} - ${app.name} (${app.city})`;
  const studentSubject = `Application Received: ${app.course} | EcoWish Craft India [ID: ${app.id}]`;

  const companyHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: sans-serif; background: #FAF8F3; padding: 24px; color: #1E2420; }
          .container { max-width: 620px; margin: 0 auto; background: #fff; border-radius: 12px; border: 1px solid #E8E2D5; padding: 32px; }
          .badge { background: #2D6A4F; color: #fff; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; }
          .title { font-size: 22px; color: #1B4332; margin: 12px 0 4px; }
          .data-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          .data-table td { padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #F3EFE6; }
          .label { font-weight: 600; color: #525B54; width: 40%; }
        </style>
      </head>
      <body>
        <div class="container">
          <span class="badge">Student Application</span>
          <h2 class="title">New Training / Exam Prep Registration</h2>
          <p>Application Ref: <strong>${app.id}</strong></p>

          <table class="data-table">
            <tr><td class="label">Applicant Name:</td><td><strong>${app.name}</strong></td></tr>
            <tr><td class="label">Email Address:</td><td><a href="mailto:${app.email}">${app.email}</a></td></tr>
            <tr><td class="label">Phone / WhatsApp:</td><td><a href="tel:${app.phone}">${app.phone}</a></td></tr>
            <tr><td class="label">City:</td><td>${app.city}</td></tr>
            <tr><td class="label">Current Education:</td><td>${app.education}</td></tr>
            <tr><td class="label">Program Selected:</td><td><strong>${app.course}</strong></td></tr>
            <tr><td class="label">Training Category:</td><td>${app.trainingCategory}</td></tr>
            <tr><td class="label">Design Exam Prep?:</td><td>${app.isDesignExamPrep ? `Yes (${app.targetExam || "Targeting Design Entrance"})` : "No"}</td></tr>
            <tr><td class="label">Skill Level:</td><td>${app.skillLevel}</td></tr>
            <tr><td class="label">Preferred Mode:</td><td>${app.learningMode}</td></tr>
            ${app.couponCode ? `<tr><td class="label">Applied Offer / Coupon:</td><td><strong style="color: #92400E; background: #FEF3C7; padding: 2px 6px; border-radius: 4px;">${app.couponCode}</strong> ${app.couponCode.toUpperCase() === "DUSSEHRA50" ? "(🏹 50% Dussehra Mahotsav Concession Claimed)" : ""}</td></tr>` : ""}
            <tr><td class="label">Statement / Note:</td><td>${app.message || "None provided"}</td></tr>
          </table>
        </div>
      </body>
    </html>
  `;

  const studentHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: sans-serif; background: #FAF8F3; padding: 24px; color: #1E2420; }
          .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; border: 1px solid #E8E2D5; padding: 36px; }
          .brand { font-size: 24px; font-weight: 700; color: #1B4332; }
          .cta-btn { display: inline-block; background: #1B4332; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; margin-top: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="brand">EcoWish Craft India</div>
          <p style="color: #C9A96E; font-weight: 600; font-size: 14px;">Creative Education & Artisan Skill Development</p>
          <h3>Welcome, ${app.name}!</h3>
          <p>We have received your application for the <strong>${app.course}</strong> program.</p>
          <p>Our academic coordinator will reach out to you with batch availability, orientation schedule, and fee guidelines.</p>
          <div style="background: #FAF8F3; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <strong>Application ID:</strong> ${app.id}<br>
            <strong>Program:</strong> ${app.course}<br>
            <strong>Mode:</strong> ${app.learningMode}<br>
            <strong>Center:</strong> Patna / West Champaran Hubs<br>
            ${app.couponCode ? `<span style="color: #92400E; font-weight: 600;">Festive Offer Applied: ${app.couponCode} ${app.couponCode.toUpperCase() === "DUSSEHRA50" ? "(FLAT 50% Dussehra Concession)" : ""}</span>` : ""}
          </div>
          <p>Have questions about batches or scholarship support for rural artisans and women? Chat directly with our training team:</p>
          <a href="${COMPANY_INFO.socials.whatsapp}" class="cta-btn">Message Admissions on WhatsApp</a>
          <br><br>
          <small style="color: #718096;">EcoWish Craft India Pvt. Ltd. | Bihar, India</small>
        </div>
      </body>
    </html>
  `;

  if (resend) {
    try {
      await Promise.all([
        resend.emails.send({
          from: FROM_EMAIL,
          to: NOTIFICATION_EMAIL,
          subject: companySubject,
          html: companyHtml,
        }),
        resend.emails.send({
          from: FROM_EMAIL,
          to: app.email,
          subject: studentSubject,
          html: studentHtml,
        }),
      ]);
      await logEmailToFile({
        id: app.id,
        timestamp: new Date().toISOString(),
        type: "TRAINING_APPLICATION",
        to: `${NOTIFICATION_EMAIL}, ${app.email}`,
        subject: companySubject,
        preview: `Student: ${app.name}, Course: ${app.course}`,
        status: "SENT_VIA_RESEND",
      });
      return { success: true, mode: "RESEND_SENT" };
    } catch (err) {
      console.error("Resend API error:", err);
    }
  }

  await logEmailToFile({
    id: app.id,
    timestamp: new Date().toISOString(),
    type: "TRAINING_APPLICATION",
    to: `${NOTIFICATION_EMAIL}, ${app.email}`,
    subject: companySubject,
    preview: `Student: ${app.name}, Course: ${app.course}, Phone: ${app.phone}`,
    status: "LOGGED_LOCAL_DEV",
  });

  return { success: true, mode: "LOGGED_LOCAL_DEV" };
}

// --------------------------------------------------------------------------
// 3. CONTACT & CAREER EMAILS
// --------------------------------------------------------------------------
export async function sendContactMessageEmail(msg: ContactMessage) {
  const companySubject = `[CONTACT MESSAGE] ${msg.subject} - ${msg.name}`;
  const companyHtml = `
    <div style="font-family: sans-serif; padding: 20px; background: #FAF8F3;">
      <div style="max-width: 580px; margin: 0 auto; background: #fff; padding: 24px; border-radius: 8px;">
        <h3 style="color: #1B4332;">New Website Inquiry</h3>
        <p><strong>From:</strong> ${msg.name} (<a href="mailto:${msg.email}">${msg.email}</a>)</p>
        <p><strong>Phone:</strong> ${msg.phone}</p>
        <p><strong>Subject:</strong> ${msg.subject}</p>
        <div style="background: #FAF8F3; padding: 12px; border-left: 3px solid #1B4332;">
          ${msg.message.replace(/\n/g, "<br>")}
        </div>
      </div>
    </div>
  `;

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFICATION_EMAIL,
        subject: companySubject,
        html: companyHtml,
      });
    } catch (err) {
      console.error("Resend error:", err);
    }
  }

  await logEmailToFile({
    id: msg.id,
    timestamp: new Date().toISOString(),
    type: "CONTACT_MESSAGE",
    to: NOTIFICATION_EMAIL,
    subject: companySubject,
    preview: `From: ${msg.name}, Subject: ${msg.subject}`,
    status: resend ? "SENT_VIA_RESEND" : "LOGGED_LOCAL_DEV",
  });

  return { success: true };
}

export async function sendCareerApplicationEmail(app: CareerApplication) {
  const companySubject = `[JOB APPLICATION] Role: ${app.roleId} - ${app.name}`;
  const companyHtml = `
    <div style="font-family: sans-serif; padding: 20px; background: #FAF8F3;">
      <div style="max-width: 580px; margin: 0 auto; background: #fff; padding: 24px; border-radius: 8px;">
        <h3 style="color: #1B4332;">New Career Application</h3>
        <p><strong>Applicant:</strong> ${app.name}</p>
        <p><strong>Email:</strong> ${app.email} | <strong>Phone:</strong> ${app.phone}</p>
        <p><strong>Role ID:</strong> ${app.roleId}</p>
        <p><strong>Portfolio / Profile:</strong> ${app.portfolioUrl || "None provided"}</p>
        <p><strong>Cover Note:</strong><br>${app.message.replace(/\n/g, "<br>")}</p>
      </div>
    </div>
  `;

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: process.env.CAREERS_EMAIL || NOTIFICATION_EMAIL,
        subject: companySubject,
        html: companyHtml,
      });
    } catch (err) {
      console.error("Resend error:", err);
    }
  }

  await logEmailToFile({
    id: app.id,
    timestamp: new Date().toISOString(),
    type: "CAREER_APPLICATION",
    to: process.env.CAREERS_EMAIL || NOTIFICATION_EMAIL,
    subject: companySubject,
    preview: `Candidate: ${app.name}, Role: ${app.roleId}`,
    status: resend ? "SENT_VIA_RESEND" : "LOGGED_LOCAL_DEV",
  });

  return { success: true };
}
