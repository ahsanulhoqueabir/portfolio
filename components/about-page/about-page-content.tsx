"use client";

import type { AboutPageContentProps } from "@/types/about.types";
import AboutExperienceSection from "./about-experience-section";
import AboutHeroSection from "./about-hero-section";
import AboutStorySection from "./about-story-section";
import AboutValuesSection from "./about-values-section";

export default function AboutPageContent({
  experiences,
  values,
  aboutStats,
  cvDownloadUrl,
}: AboutPageContentProps) {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = cvDownloadUrl;
    link.target = "_blank";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <AboutHeroSection
        aboutStats={aboutStats}
        onResumeDownload={handleResumeDownload}
      />
      <AboutStorySection />
      <AboutValuesSection values={values} />
      <AboutExperienceSection experiences={experiences} />
    </div>
  );
}
