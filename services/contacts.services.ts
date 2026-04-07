import { ContactForm } from "@/types/contact.types";

export class ContactsService {
  private static readonly id = `1FAIpQLSfOto7PfxwD1-FmhsrYXA7SRNnUvCv1E6A7pV8hxjI0lVpPpQ`;
  private static readonly fields = {
    email: "entry.2081231678",
    name: "entry.1331583129",
    subject: "entry.275668378",
    message: "entry.311945800",
  };

  static async sendContactForm(
    data: ContactForm,
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const formData = new URLSearchParams();
      formData.append(this.fields.email, data.email);
      formData.append(this.fields.name, data.name);
      formData.append(this.fields.subject, data.subject);
      formData.append(this.fields.message, data.message);

      const response = await fetch(
        `https://docs.google.com/forms/d/e/${this.id}/formResponse`,
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          mode: "no-cors",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to send message. Please try again.",
      };
    }
  }
}
