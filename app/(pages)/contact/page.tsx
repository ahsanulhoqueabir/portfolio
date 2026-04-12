import ContactPageContent from "@/components/contact-page-content";
import { ContactContentService } from "@/services/contacts.services";

export default async function ContactPage() {
  const contactContent = await ContactContentService.getActiveContactContent();

  const contactMethods = contactContent?.methods ?? [];
  const socialLinks = contactContent?.socialLinks ?? [];
  const faqs = contactContent?.faqs ?? [];

  return (
    <ContactPageContent
      contactMethods={contactMethods}
      socialLinks={socialLinks}
      faqs={faqs}
    />
  );
}
