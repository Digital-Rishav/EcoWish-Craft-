import { NextRequest, NextResponse } from "next/server";
import { trainingApplicationSchema } from "@/lib/validations";
import { createTrainingApplication, getTrainingApplications } from "@/lib/db";
import { sendTrainingApplicationEmails } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, applicationId: "EWC-BLOCKED" }, { status: 200 });
    }

    const validated = trainingApplicationSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_FAILED",
            message: "Please correct the highlighted fields in the application form.",
            details: validated.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      phone,
      age,
      city,
      education,
      course,
      trainingCategory,
      preferredBatch,
      isDesignExamPrep,
      targetExam,
      skillLevel,
      learningMode,
      message,
      couponCode,
    } = validated.data;

    const application = await createTrainingApplication({
      name: fullName,
      email,
      phone,
      age: age || "",
      city,
      education,
      course,
      trainingCategory,
      preferredBatch: preferredBatch || "Next available batch",
      isDesignExamPrep,
      targetExam: targetExam || "",
      skillLevel,
      learningMode,
      message: message || "",
      couponCode: couponCode || undefined,
    });

    // Send instant notification email to EcoWish and acknowledgement to student
    await sendTrainingApplicationEmails(application);

    return NextResponse.json(
      {
        success: true,
        data: {
          applicationId: application.id,
          name: application.name,
          course: application.course,
          message: "Your application has been received. Our admissions team will reach out with batch details.",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error in /api/training-applications:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "SERVER_ERROR",
          message: "We couldn't submit your application right now. Please connect with us directly on WhatsApp or call us.",
        },
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const apps = await getTrainingApplications();
    return NextResponse.json({ success: true, data: apps });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { success: false, error: { code: "SERVER_ERROR", message: "Failed to read applications" } },
      { status: 500 }
    );
  }
}
