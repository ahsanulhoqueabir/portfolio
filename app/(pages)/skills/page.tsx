import SkillsPageContent from "@/components/skills-page-content";
import {
  certifications as fallbackCertifications,
  skillCategories as fallbackSkillCategories,
  skillStats as fallbackSkillStats,
  skillSummaryItems as fallbackSkillSummaryItems,
} from "@/constants/skills.constant";
import {
  CertificationsService,
  SkillsContentService,
} from "@/services/skills.services";

export default async function SkillsPage() {
  const [skillsContent, dbCertifications] = await Promise.all([
    SkillsContentService.getActiveSkillsContent(),
    CertificationsService.getActiveCertifications(),
  ]);

  const summaryIconMap = new Map(
    fallbackSkillSummaryItems.map((item) => [
      item.title.toLowerCase(),
      item.icon,
    ]),
  );

  const certificationIconMap = new Map(
    fallbackCertifications.map((item) => [item.name.toLowerCase(), item.icon]),
  );

  const skillCategories = skillsContent?.categories?.length
    ? skillsContent.categories
        .slice()
        .sort((a, b) => a.order - b.order)
        .reduce<
          Record<
            string,
            (typeof fallbackSkillCategories)[keyof typeof fallbackSkillCategories]
          >
        >((acc, category) => {
          const fallbackCategory = fallbackSkillCategories[category.key];
          if (!fallbackCategory) {
            return acc;
          }

          const fallbackSkillIconMap = new Map(
            fallbackCategory.skills.map((skill) => [
              skill.name.toLowerCase(),
              { icon: skill.icon, experience: skill.experience },
            ]),
          );

          acc[category.key] = {
            title: category.title,
            icon: fallbackCategory.icon,
            color: `${category.colorFrom} ${category.colorTo}`,
            skills: category.skills.map((skill) => {
              const fallbackSkill = fallbackSkillIconMap.get(
                skill.name.toLowerCase(),
              );

              return {
                name: skill.name,
                level: skill.level,
                experience:
                  fallbackSkill?.experience ?? `${skill.experienceYears} years`,
                icon: fallbackSkill?.icon ?? "💠",
              };
            }),
          };

          return acc;
        }, {})
    : fallbackSkillCategories;

  const skillStats =
    skillsContent?.stats?.map((item) => ({
      value: item.value,
      label: item.label,
      color: item.colorClass,
      bg: item.backgroundClass,
      border: item.borderClass,
    })) ?? fallbackSkillStats;

  const skillSummaryItems =
    skillsContent?.summaryItems?.map((item) => ({
      icon:
        summaryIconMap.get(item.title.toLowerCase()) ??
        fallbackSkillSummaryItems[0].icon,
      title: item.title,
      desc: item.description,
      gradient: `${item.gradientFrom} ${item.gradientTo}`,
      bg: item.backgroundClass,
      iconColor: item.imageTintClass,
    })) ?? fallbackSkillSummaryItems;

  const certifications = dbCertifications.length
    ? dbCertifications.map((item) => ({
        name: item.name,
        issuer: item.issuer,
        date: item.issueDate,
        icon: certificationIconMap.get(item.name.toLowerCase()) ?? "🏆",
      }))
    : fallbackCertifications;

  return (
    <SkillsPageContent
      skillCategories={skillCategories}
      certifications={certifications}
      skillStats={skillStats}
      skillSummaryItems={skillSummaryItems}
    />
  );
}
