import { NextRequest, NextResponse } from "next/server";
import { careerApplicationSchema } from "@/lib/validations";
import { createCareerApplication } from "@/lib/db";
import { sendCareerApplicationEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, applicationId: "EWC-BLOCKED" });
    }

    const validated = careerApplicationSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_FAILED",
            message: "Please ensure all application fields are filled correctly.",
            details: validated.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    const application = await createCareerApplication({
      name: validated.data.name,
      email: validated.data.email,
      phone: validated.data.phone,
      roleId: validated.data.roleId,
      portfolioUrl: validated.data.portfolioUrl || "",
      resumeSummary: validated.data.resumeSummary || "",
      message: validated.data.message,
    });

    await sendCareerApplicationEmail(application);

    return NextResponse.json({
      success: true,
      data: {
        applicationId: application.id,
        message: "Thank you for applying to EcoWish Craft India! Our team will review your profile and contact you.",
      },
    });
  } catch (error) {
    console.error("Career API error:", error);
    return NextResponse.json(
      { success: false, error: { code: "SERVER_ERROR", message: "Failed to submit career application." } },
      { status: 500 }
    );
  }
}
