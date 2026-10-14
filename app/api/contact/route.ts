import { NextRequest, NextResponse } from "next/server";
import { contactMessageSchema } from "@/lib/validations";
import { createContactMessage } from "@/lib/db";
import { sendContactMessageEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, messageId: "EWC-BLOCKED" });
    }

    const validated = contactMessageSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_FAILED",
            message: "Please fill all required fields correctly.",
            details: validated.error.flatten().fieldErrors,
          },
        },
        { status: 400 }
      );
    }

    const msg = await createContactMessage({
      name: validated.data.name,
      email: validated.data.email,
      phone: validated.data.phone,
      subject: validated.data.subject,
      message: validated.data.message,
    });

    await sendContactMessageEmail(msg);

    return NextResponse.json({
      success: true,
      data: {
        messageId: msg.id,
        message: "Thank you for reaching out! We have received your message and will respond shortly.",
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: { code: "SERVER_ERROR", message: "Failed to send message. Please contact us via WhatsApp." } },
      { status: 500 }
    );
  }
}
