"use client";

import type { HomePageContentProps } from "@/types/home.types";
import HomeAboutSection from "./home-about-section";
import HomeCtaSection from "./home-cta-section";
import HomeHeroSection from "./home-hero-section";
import HomeProjectsSection from "./home-projects-section";
import HomeServicesSection from "./home-services-section";
import HomeSkillsSection from "./home-skills-section";

export default function HomePageContent({
  skills,
  projects,
  aboutStats,
  heroSubtitle,
  aboutParagraph,
  heroImageUrl,
  cvDownloadUrl,
}: HomePageContentProps) {
  return (
    <div className="min-h-screen">
      <HomeHeroSection
        heroSubtitle={heroSubtitle}
        heroImageUrl={heroImageUrl}
        cvDownloadUrl={cvDownloadUrl}
      />
      <HomeAboutSection
        aboutParagraph={aboutParagraph}
        aboutStats={aboutStats}
      />
      <HomeServicesSection />
      <HomeSkillsSection skills={skills} />
      <HomeProjectsSection projects={projects} />
      <HomeCtaSection />
    </div>
  );
}
