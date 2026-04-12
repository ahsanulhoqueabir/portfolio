import AboutPageContent from "@/components/about-page-content";
import {
  aboutStats as fallbackAboutStats,
  experiences as fallbackExperiences,
  values as fallbackValues,
} from "@/constants/about.constant";
import { AboutContentService } from "@/services/about.services";

export default async function AboutPage() {
  const aboutContent = await AboutContentService.getActiveAboutContent();

  const experiences =
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
    })) ?? fallbackExperiences;

  const values =
    aboutContent?.values?.map((item) => ({
      iconKey: item.title.toLowerCase(),
      title: item.title,
      description: item.description,
      gradient: item.gradientClass,
      bg: item.backgroundClass,
      iconColor: item.imageTintClass,
    })) ??
    fallbackValues.map((item) => ({
      iconKey: item.title.toLowerCase(),
      title: item.title,
      description: item.description,
      gradient: item.gradient,
      bg: item.bg,
      iconColor: item.iconColor,
    }));

  const aboutStats =
    aboutContent?.stats?.map((item) => ({
      iconKey: item.label.toLowerCase(),
      label: item.label,
      value: item.value,
      color: item.colorClass,
      bg: item.backgroundClass,
      border: item.borderClass,
    })) ??
    fallbackAboutStats.map((item) => ({
      iconKey: item.label.toLowerCase(),
      label: item.label,
      value: item.value,
      color: item.color,
      bg: item.bg,
      border: item.border,
    }));

  return (
    <AboutPageContent
      experiences={experiences}
      values={values}
      aboutStats={aboutStats}
    />
  );
}
