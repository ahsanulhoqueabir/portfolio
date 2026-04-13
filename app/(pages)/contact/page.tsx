import ContactPageContent from "@/components/contact-page/contact-page-content";
import { getSiteContext } from "@/lib/site-context";

export default async function ContactPage() {
  const siteContext = await getSiteContext();
  const { contactMethods, socialLinks, faqs } = siteContext.contact;

  return (
    <ContactPageContent
      contactMethods={contactMethods}
      socialLinks={socialLinks}
      faqs={faqs}
    />
  );
}
