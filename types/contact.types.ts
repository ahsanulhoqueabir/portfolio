import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export type ContactFormMapping = Record<keyof ContactFormData, string>;

// Contact Page Content Types
export type ContactMethodItem = {
  title: string;
  description: string;
  contact: string;
  href: string;
  colorClass?: string;
  color?: string;
};

export type SocialLinkItem = {
  name: string;
  href: string;
  username: string;
  colorClass?: string;
  color?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactPageContentProps = {
  contactMethods: ContactMethodItem[];
  socialLinks: SocialLinkItem[];
  faqs: FaqItem[];
};
