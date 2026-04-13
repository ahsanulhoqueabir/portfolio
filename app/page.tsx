import HomePageContent from "@/components/home-page-content";
import { getSiteContext } from "@/lib/site-context";

const fallbackSkills = [
  { name: "React", level: 85, color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", level: 90, color: "from-violet-500 to-purple-600" },
  { name: "TypeScript", level: 88, color: "from-blue-500 to-indigo-600" },
  { name: "Node.js", level: 85, color: "from-emerald-500 to-green-600" },
  { name: "Python", level: 60, color: "from-amber-400 to-yellow-500" },
  { name: "PostgreSQL", level: 75, color: "from-sky-500 to-cyan-600" },
];

const fallbackProjects = [
  {
    id: "fallback-department-introductory",
    title: "Department Introductory",
    description: "Full-stack e-commerce solution with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/projects/department.png",
    github: "https://github.com/ahsaulhoqueabir/csejnu",
    demo: "",
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    accent: "text-blue-500",
    initial: "D",
    orb: "bg-blue-500/30",
  },
  {
    id: "fallback-briefly60",
    title: "Briefly60",
    description:
      "This is a summarized website for news and articles. It will help you to get the summary of top newspaper of Bangladesh in 60 words.",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    image: "/projects/briefly60.png",
    github: "https://github.com/ahsaulhoqueabir/briefly60",
    demo: "https://briefly60.netlify.app/",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    accent: "text-emerald-500",
    initial: "B",
    orb: "bg-emerald-500/30",
  },
  {
    id: "fallback-ieee-jnu",
    title: "IEEE JnU Student Chapter",
    description:
      "This is a website for IEEE JnU.It is used to manage the members and events update of IEEE JnU.",
    tech: ["NEXTjs", "Supabase", "Tailwind CSS", "Framer"],
    image: "/projects/ieee.png",
    github: "https://github.com/ahsaulhoqueabir/ieeejnu",
    demo: "https://ieeejnu.vercel.app/",
    gradient: "from-amber-500/20 via-orange-500/10 to-pink-500/20",
    accent: "text-amber-500",
    initial: "I",
    orb: "bg-amber-500/30",
  },
];

const fallbackAboutStats = [
  {
    value: "10+",
    label: "Projects Completed",
    color: "text-violet-500",
  },
  {
    value: "3+",
    label: "Years Experience",
    color: "text-emerald-500",
  },
];

const fallbackHomeCopy = {
  heroSubtitle:
    "I craft exceptional digital experiences with clean code and modern design. Passionate about building scalable web applications.",
  aboutParagraph:
    "I'm a passionate full-stack developer with 3+ years of experience building modern web applications. I specialize in React, Next.js, and Node.js, with a strong focus on user experience and clean, maintainable code. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
};

const fallbackHomeAssets = {
  heroImageUrl:
    "https://cdn.ahsanull.com/Untitled%20(1000%20x%20800%20px)%20(1).png",
  cvDownloadUrl: "https://cdn.ahsanull.com/resume-ahsanul.pdf",
};

type SiteSkillCategory = {
  color: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
};

export default async function HomePage() {
  const siteContext = await getSiteContext();

  const mappedSkills = Object.values(
    siteContext.skills.skillCategories as Record<string, SiteSkillCategory>,
  )
    .flatMap((category) =>
      category.skills.map((skill) => ({
        name: skill.name,
        level: skill.level,
        color: category.color,
      })),
    )
    .slice(0, 6);

  const mappedProjects = siteContext.projects.projects
    .slice(0, 3)
    .map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      tech: project.tech,
      image: project.image,
      github: project.github,
      demo: project.demo,
      gradient: project.gradient,
      accent: project.accentColor,
      initial: project.title.charAt(0).toUpperCase(),
      orb: project.orb,
    }));

  const mappedAboutStats = siteContext.about.aboutStats
    .slice(0, 2)
    .map((stat) => ({
      value: stat.value,
      label: stat.label,
      color: stat.color,
    }));

  const homeCopy = {
    heroSubtitle:
      siteContext.home?.heroSubtitle || fallbackHomeCopy.heroSubtitle,
    aboutParagraph:
      siteContext.home?.aboutParagraph || fallbackHomeCopy.aboutParagraph,
  };

  const homeAssets = {
    heroImageUrl:
      siteContext.home?.heroImageUrl || fallbackHomeAssets.heroImageUrl,
    cvDownloadUrl:
      siteContext.home?.cvDownloadUrl || fallbackHomeAssets.cvDownloadUrl,
  };

  return (
    <HomePageContent
      skills={mappedSkills.length ? mappedSkills : fallbackSkills}
      projects={mappedProjects.length ? mappedProjects : fallbackProjects}
      aboutStats={
        mappedAboutStats.length ? mappedAboutStats : fallbackAboutStats
      }
      heroSubtitle={homeCopy.heroSubtitle}
      aboutParagraph={homeCopy.aboutParagraph}
      heroImageUrl={homeAssets.heroImageUrl}
      cvDownloadUrl={homeAssets.cvDownloadUrl}
    />
  );
}
