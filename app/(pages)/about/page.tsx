import AboutPageContent from "@/components/about-page-content";
import {
  aboutStats as fallbackAboutStats,
  experiences as fallbackExperiences,
  values as fallbackValues,
} from "@/constants/about.constant";
import { AboutContentService } from "@/services/about.services";

export default async function AboutPage() {
  const aboutContent = await AboutContentService.getActiveAboutContent();

  const valueIconMap = new Map(
    fallbackValues.map((item) => [item.title.toLowerCase(), item.icon]),
  );

  const statIconMap = new Map(
    fallbackAboutStats.map((item) => [item.label.toLowerCase(), item.icon]),
  );

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
      icon:
        valueIconMap.get(item.title.toLowerCase()) ?? fallbackValues[0].icon,
      title: item.title,
      description: item.description,
      gradient: item.gradientClass,
      bg: item.backgroundClass,
      iconColor: item.imageTintClass,
    })) ?? fallbackValues;

  const aboutStats =
    aboutContent?.stats?.map((item) => ({
      icon:
        statIconMap.get(item.label.toLowerCase()) ?? fallbackAboutStats[0].icon,
      label: item.label,
      value: item.value,
      color: item.colorClass,
      bg: item.backgroundClass,
      border: item.borderClass,
    })) ?? fallbackAboutStats;

  return (
    <AboutPageContent
      experiences={experiences}
      values={values}
      aboutStats={aboutStats}
    />
  );
}
