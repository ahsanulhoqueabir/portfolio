import SkillsPageContent from "@/components/skills-page-content";
import {
  CertificationsService,
  SkillsContentService,
} from "@/services/skills.services";

export default async function SkillsPage() {
  const [skillsContent, dbCertifications] = await Promise.all([
    SkillsContentService.getActiveSkillsContent(),
    CertificationsService.getActiveCertifications(),
  ]);

  const skillCategories = skillsContent?.categories?.length
    ? skillsContent.categories
        .slice()
        .sort((a, b) => a.order - b.order)
        .reduce<Record<string, any>>((acc, category) => {
          acc[category.key] = {
            title: category.title,
            color: `${category.colorFrom} ${category.colorTo}`,
            skills: category.skills.map((skill) => ({
              name: skill.name,
              level: skill.level,
              experience: `${skill.experienceYears} years`,
              icon: "💠",
            })),
          };
          return acc;
        }, {})
    : {};

  const skillStats =
    skillsContent?.stats?.map((item) => ({
      value: item.value,
      label: item.label,
      color: item.colorClass,
      bg: item.backgroundClass,
      border: item.borderClass,
    })) ?? [];

  const skillSummaryItems =
    skillsContent?.summaryItems?.map((item) => ({
      title: item.title,
      desc: item.description,
      gradient: `${item.gradientFrom} ${item.gradientTo}`,
      bg: item.backgroundClass,
      iconColor: item.imageTintClass,
    })) ?? [];

  const certifications = dbCertifications.map((item) => ({
    name: item.name,
    issuer: item.issuer,
    date: item.issueDate,
    icon: "🏆",
  }));

  return (
    <SkillsPageContent
      skillCategories={skillCategories}
      certifications={certifications}
      skillStats={skillStats}
      skillSummaryItems={skillSummaryItems}
    />
  );
}
