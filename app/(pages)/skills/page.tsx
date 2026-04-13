import SkillsPageContent from "@/components/skills-page-content";
import { getSiteContext } from "@/lib/site-context";

export default async function SkillsPage() {
  const siteContext = await getSiteContext();
  const { skillCategories, certifications, skillStats, skillSummaryItems } =
    siteContext.skills;

  return (
    <SkillsPageContent
      skillCategories={skillCategories}
      certifications={certifications}
      skillStats={skillStats}
      skillSummaryItems={skillSummaryItems}
    />
  );
}
