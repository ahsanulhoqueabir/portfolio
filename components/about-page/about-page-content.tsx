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
}: AboutPageContentProps) {
  const handleResumeDownload = () => {
    const fileId = "1-AqnRS_mDnDUJbE5JLMQspGv2CNW0aOj";
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement("a");
    link.href = directDownloadUrl;
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
