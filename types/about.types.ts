export type AboutExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  color: string;
  accent: string;
  border: string;
  topBar: string;
};

export type AboutValueItem = {
  iconKey: string;
  title: string;
  description: string;
  gradient: string;
  bg: string;
  iconColor: string;
};

export type AboutStatItem = {
  iconKey: string;
  label: string;
  value: string;
  color: string;
  bg: string;
  border: string;
};

export type AboutPageContentProps = {
  experiences: AboutExperienceItem[];
  values: AboutValueItem[];
  aboutStats: AboutStatItem[];
  cvDownloadUrl: string;
};
