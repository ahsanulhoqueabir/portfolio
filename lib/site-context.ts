import "server-only";

import { unstable_cache } from "next/cache";
import { AboutContentService } from "@/services/about.services";
import { ContactContentService } from "@/services/contacts.services";
import { ProjectsService } from "@/services/projects.services";
import {
  CertificationsService,
  SkillsContentService,
} from "@/services/skills.services";

const loadSiteContext = unstable_cache(
  async () => {
    const [
      aboutContent,
      dbProjects,
      skillsContent,
      dbCertifications,
      contactContent,
    ] = await Promise.all([
      AboutContentService.getActiveAboutContent(),
      ProjectsService.getActiveProjects(),
      SkillsContentService.getActiveSkillsContent(),
      CertificationsService.getActiveCertifications(),
      ContactContentService.getActiveContactContent(),
    ]);

    const about = {
      experiences:
        aboutContent?.experiences?.map((item) => ({
          title: item.title,
          company: item.company,
          period: item.period,
          description: item.description,
          achievements: item.achievements,
          color: item.colorClass,
          accent: item.accentClass,
          border: item.borderClass,
          topBar: item.topBarClass,
        })) ?? [],
      values:
        aboutContent?.values?.map((item) => ({
          iconKey: item.title.toLowerCase(),
          title: item.title,
          description: item.description,
          gradient: item.gradientClass,
          bg: item.backgroundClass,
          iconColor: item.imageTintClass,
        })) ?? [],
      aboutStats:
        aboutContent?.stats?.map((item) => ({
          iconKey: item.label.toLowerCase(),
          label: item.label,
          value: item.value,
          color: item.colorClass,
          bg: item.backgroundClass,
          border: item.borderClass,
        })) ?? [],
    };

    const projects = {
      projects: dbProjects.map((item) => ({
        id: item._id.toString(),
        title: item.title,
        description: item.description,
        longDescription: item.longDescription,
        tech: item.tech,
        features: item.features ?? [],
        learnings: item.learnings ?? [],
        limitations: item.limitations ?? [],
        category: item.category,
        image: item.images[0] ?? "/placeholder.jpg",
        images: item.images ?? [],
        github: item.github,
        demo: item.demo,
        stars: item.stars,
        forks: item.forks,
        status: item.status,
        featured: item.featured,
        date: item.publishedAt.toISOString(),
        gradient: item.gradientClass,
        accentColor: item.accentColorClass,
        orb: item.orbClass,
        topBar: item.topBarClass,
      })),
    };

    const skills = {
      skillCategories: skillsContent?.categories?.length
        ? skillsContent.categories
            .slice()
            .sort((a, b) => a.order - b.order)
            .reduce<Record<string, any>>((acc, category) => {
              acc[category.key] = {
                title: category.title,
                iconKey: category.key,
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
        : {},
      skillStats:
        skillsContent?.stats?.map((item) => ({
          value: item.value,
          label: item.label,
          color: item.colorClass,
          bg: item.backgroundClass,
          border: item.borderClass,
        })) ?? [],
      skillSummaryItems:
        skillsContent?.summaryItems?.map((item) => ({
          iconKey: item.title.toLowerCase(),
          title: item.title,
          desc: item.description,
          gradient: `${item.gradientFrom} ${item.gradientTo}`,
          bg: item.backgroundClass,
          iconColor: item.imageTintClass,
        })) ?? [],
      certifications: dbCertifications.map((item) => ({
        name: item.name,
        issuer: item.issuer,
        date: item.issueDate,
        icon: "🏆",
        description:
          item.description ?? "Certification details will be added soon.",
        certificate: item.certificate ?? item.credential ?? "",
      })),
    };

    const contact = {
      contactMethods: contactContent?.methods ?? [],
      socialLinks: contactContent?.socialLinks ?? [],
      faqs: contactContent?.faqs ?? [],
    };

    const home = {
      heroImageUrl:
        aboutContent?.heroImageUrl ||
        "https://cdn.ahsanull.com/Untitled%20(1000%20x%20800%20px)%20(1).png",
      cvDownloadUrl:
        aboutContent?.cvDownloadUrl ||
        "https://cdn.ahsanull.com/resume-ahsanul.pdf",
      heroSubtitle:
        aboutContent?.homeHeroSubtitle ||
        "I craft exceptional digital experiences with clean code and modern design. Passionate about building scalable web applications.",
      aboutParagraph:
        aboutContent?.homeAboutParagraph ||
        "I'm a passionate full-stack developer with 3+ years of experience building modern web applications. I specialize in React, Next.js, and Node.js, with a strong focus on user experience and clean, maintainable code. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
    };

    return {
      about,
      projects,
      skills,
      contact,
      home,
    };
  },
  ["site-context"],
  {
    revalidate: 300,
  },
);

export async function getSiteContext() {
  return loadSiteContext();
}
