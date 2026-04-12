import type { ComponentType } from "react";

export type SkillItem = {
  name: string;
  level: number;
  experience: string;
  icon: string;
};

export type SkillCategoryItem = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
  skills: SkillItem[];
};

export type SkillStatItem = {
  value: string;
  label: string;
  color: string;
  bg: string;
  border: string;
};

export type SkillSummaryItem = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  gradient: string;
  bg: string;
  iconColor: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  icon: string;
};

export type SkillsPageContentProps = {
  skillCategories: Record<string, SkillCategoryItem>;
  certifications: CertificationItem[];
  skillStats: SkillStatItem[];
  skillSummaryItems: SkillSummaryItem[];
};
