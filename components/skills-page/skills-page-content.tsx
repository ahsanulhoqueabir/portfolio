"use client";

import type { SkillsPageContentProps } from "@/types/skills.types";
import SkillsCategoriesSection from "./skills-categories-section";
import SkillsCertificationsSection from "./skills-certifications-section";
import SkillsHeroSection from "./skills-hero-section";
import SkillsSummarySection from "./skills-summary-section";

export default function SkillsPageContent({
  skillCategories,
  certifications,
  skillStats,
  skillSummaryItems,
}: SkillsPageContentProps) {
  return (
    <div className="min-h-screen">
      <SkillsHeroSection skillStats={skillStats} />
      <SkillsCategoriesSection skillCategories={skillCategories} />
      <SkillsCertificationsSection certifications={certifications} />
      <SkillsSummarySection skillSummaryItems={skillSummaryItems} />
    </div>
  );
}
