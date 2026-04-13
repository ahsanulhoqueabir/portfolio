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
  const handleResumeDownload = async () => {
    const fileName = cvDownloadUrl.split("/").pop() || "resume.pdf";

    try {
      const response = await fetch(cvDownloadUrl, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Download failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
      return;
    } catch {
      const link = document.createElement("a");
      link.href = cvDownloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  const handleResumeDownloadClick = () => {
    void handleResumeDownload();
  };

  return (
    <div className="min-h-screen">
      <AboutHeroSection
        aboutStats={aboutStats}
        onResumeDownload={handleResumeDownloadClick}
      />
      <AboutStorySection />
      <AboutValuesSection values={values} />
      <AboutExperienceSection experiences={experiences} />
    </div>
  );
}
