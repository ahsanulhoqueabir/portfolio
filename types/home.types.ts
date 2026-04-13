import type { LucideIcon } from "lucide-react";

export type HomeSkill = {
  name: string;
  level: number;
  color: string;
};

export type HomeProject = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo?: string;
  gradient: string;
  accent: string;
  initial: string;
  orb: string;
};

export type HomeStat = {
  value: string;
  label: string;
  color: string;
};

export type HomePageContentProps = {
  skills: HomeSkill[];
  projects: HomeProject[];
  aboutStats: HomeStat[];
  heroSubtitle: string;
  aboutParagraph: string;
  heroImageUrl: string;
  cvDownloadUrl: string;
};

export type HomeService = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  bg: string;
  iconColor: string;
};
