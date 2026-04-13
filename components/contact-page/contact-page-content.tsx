"use client";

import type { ContactPageContentProps } from "@/types/contact.types";
import ContactFaqSection from "./contact-faq-section";
import ContactHeroSection from "./contact-hero-section";
import ContactMainContent from "./contact-main-content";
import ContactMethodsSection from "./contact-methods-section";

export default function ContactPageContent({
  contactMethods,
  socialLinks,
  faqs,
}: ContactPageContentProps) {
  return (
    <div className="min-h-screen">
      <ContactHeroSection />

      <section className="py-20">
        <div className="container">
          <ContactMethodsSection contactMethods={contactMethods} />
          <ContactMainContent socialLinks={socialLinks} />
        </div>
      </section>

      <ContactFaqSection faqs={faqs} />
    </div>
  );
}
