import ContactPageContent from "@/components/contact-page-content";
import {
  contactMethods as fallbackContactMethods,
  faqs as fallbackFaqs,
  socialLinks as fallbackSocialLinks,
} from "@/constants/contact.constant";
import { ContactContentService } from "@/services/contacts.services";

export default async function ContactPage() {
  const contactContent = await ContactContentService.getActiveContactContent();

  const contactMethods = contactContent?.methods ?? fallbackContactMethods;
  const socialLinks = contactContent?.socialLinks ?? fallbackSocialLinks;
  const faqs = contactContent?.faqs ?? fallbackFaqs;

  return (
    <ContactPageContent
      contactMethods={contactMethods}
      socialLinks={socialLinks}
      faqs={faqs}
    />
  );
}
