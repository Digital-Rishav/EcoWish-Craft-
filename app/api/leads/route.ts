import { NextRequest, NextResponse } from "next/server";
import { businessLeadSchema } from "@/lib/validations";
import { createBusinessLead, getBusinessLeads } from "@/lib/db";
import { sendBusinessLeadEmails } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check honeypot for spam bot protection
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Quietly return success to bots without processing
      return NextResponse.json({ success: true, leadId: "EWC-BLOCKED" }, { status: 200 });
    }

    const validated = businessLeadSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_FAILED",
            message: "Please check the form for errors.",
            details: validated.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    const { fullName, companyName, email, phone, city, service, projectType, estimatedBudget, expectedTimeline, message, preferredContact, couponCode } = validated.data;

    // Save lead to file-based storage
    const newLead = await createBusinessLead({
      name: fullName,
      companyName: companyName || "",
      email,
      phone,
      city,
      service,
      projectType,
      estimatedBudget: estimatedBudget || "Unspecified",
      expectedTimeline: expectedTimeline || "Standard",
      message,
      preferredContact,
      couponCode: couponCode || undefined,
      source: req.headers.get("referer") || "Direct Website",
    });

    // Send instant notification email to EcoWish and acknowledgement to client
    await sendBusinessLeadEmails(newLead);

    return NextResponse.json(
      {
        success: true,
        data: {
          leadId: newLead.id,
          name: newLead.name,
          service: newLead.service,
          message: "Thank you! Your enquiry has been received. Our team will contact you shortly.",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error in /api/leads:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "SERVER_ERROR",
          message: "We couldn't submit your enquiry right now. Please try again or contact us directly on WhatsApp.",
        },
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await getBusinessLeads();
    return NextResponse.json({ success: true, data: leads });
  } catch (error) {
    console.error("Error retrieving leads:", error);
    return NextResponse.json(
      { success: false, error: { code: "SERVER_ERROR", message: "Failed to read leads" } },
      { status: 500 }
    );
  }
}
