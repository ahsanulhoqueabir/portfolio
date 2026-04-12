export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
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
