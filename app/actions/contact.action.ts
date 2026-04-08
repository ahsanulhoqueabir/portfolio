"use server";

import { ContactService } from "@/services/contacts.services";
import { ContactFormSchema } from "@/types/contact.types";
import { verifyTurnstile } from "@/lib/turnstile";

export interface ContactActionState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitContactAction(
  _prev: ContactActionState,
  form_data: FormData,
): Promise<ContactActionState> {
  const token = form_data.get("cf-turnstile-response") as string | null;
  if (!token) {
    return { status: "error", message: "CAPTCHA token is missing." };
  }

  const is_valid = await verifyTurnstile(token);
  if (!is_valid) {
    return {
      status: "error",
      message: "CAPTCHA verification failed. Please try again.",
    };
  }

  const parsed = ContactFormSchema.safeParse({
    name: form_data.get("name"),
    email: form_data.get("email"),
    subject: form_data.get("subject"),
    message: form_data.get("message"),
  });

  if (!parsed.success) {
    return { status: "error", message: parsed.error.errors[0].message };
  }

  try {
    await ContactService.submitContactForm(parsed.data);
    return {
      status: "success",
      message: "Message sent! We'll get back to you shortly.",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
