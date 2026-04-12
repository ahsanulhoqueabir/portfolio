import { FORM_ID } from "@/config/env.config";
import dbConnect from "@/lib/mongodb";
import {
  ContactContentModel,
  type ContactContentDocument,
} from "@/models/contact.m";
import type {
  ContactFormData,
  ContactFormMapping,
} from "@/types/contact.types";

function escapeRegex(input: string) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export class ContactService {
  private static mapping: ContactFormMapping = {
    email: "entry.2081231678",
    name: "entry.1331583129",
    subject: "entry.275668378",
    message: "entry.311945800",
  };
  private static formid = FORM_ID;

  static async submitContactForm(data: ContactFormData) {
    const formData = new FormData();
    for (const key in this.mapping) {
      const field = key as keyof ContactFormData;
      formData.append(this.mapping[field], data[field]);
    }

    try {
      // mode: "no-cors" returns an opaque response — status is always 0
      // and ok is always false, so we only catch network errors.
      await fetch(
        `https://docs.google.com/forms/d/e/${this.formid}/formResponse`,
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        },
      );
    } catch (error) {
      console.error("Contact form submission error:", error);
      throw error;
    }
  }
}

export class ContactContentService {
  /**
   * Finds an active contact content document by slug.
   * Returns lean data for server-side rendering.
   */
  static async getActiveContactContent(
    slug = "default",
  ): Promise<ContactContentDocument | null> {
    await dbConnect();

    const normalized = slug.trim().toLowerCase();
    const escapedSlug = escapeRegex(normalized);

    return ContactContentModel.findOne({
      slug: { $regex: new RegExp(`^${escapedSlug}$`, "i") },
      isActive: true,
    }).lean<ContactContentDocument>();
  }
}
