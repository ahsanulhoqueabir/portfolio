export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  features: string[];
  learnings: string[];
  limitations: string[];
  category: string;
  image?: string;
  images?: string[];
  github: string;
  demo?: string;
  stars: number;
  forks: number;
  status: "completed" | "on-going" | "planned" | string;
  featured: boolean;
  date: string;
  gradient: string;
  accentColor: string;
  orb: string;
  topBar: string;
};

export type ProjectsPageContentProps = {
  projects: ProjectItem[];
};

export type ProjectDetailsPageContentProps = {
  project: ProjectItem;
};
