import AboutPageContent from "@/components/about-page-content";
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
    })) ?? [];

  const values =
    aboutContent?.values?.map((item) => ({
      iconKey: item.title.toLowerCase(),
      title: item.title,
      description: item.description,
      gradient: item.gradientClass,
      bg: item.backgroundClass,
      iconColor: item.imageTintClass,
    })) ?? [];

  const aboutStats =
    aboutContent?.stats?.map((item) => ({
      iconKey: item.label.toLowerCase(),
      label: item.label,
      value: item.value,
      color: item.colorClass,
      bg: item.backgroundClass,
      border: item.borderClass,
    })) ?? [];

  return (
    <AboutPageContent
      experiences={experiences}
      values={values}
      aboutStats={aboutStats}
    />
  );
}
