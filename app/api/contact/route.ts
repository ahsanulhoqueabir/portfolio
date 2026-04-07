import { NextRequest, NextResponse } from "next/server";

import { sendContactForm } from "@/services/contacts.services";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await sendContactForm(body);

    return NextResponse.json(
      { message: result.message, errors: result.errors },
      {
        status: result.success
          ? 200
          : result.message === "Validation error"
            ? 400
            : 500,
      },
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
