"use client";

import { useRouter } from "next/navigation";
import type { ProjectsPageContentProps } from "@/types/projects.types";
import ProjectsHeroSection from "./projects-hero-section";
import ProjectsStatsSection from "./projects-stats-section";
import ProjectsTabsSection from "./projects-tabs-section";

export default function ProjectsPageContent({
  projects,
}: ProjectsPageContentProps) {
  const router = useRouter();
  const featuredProjects = projects.filter((p) => p.featured);
  const frontendProjects = projects.filter((p) => p.category === "frontend");
  const backendProjects = projects.filter((p) => p.category === "backend");
  const fullstackProjects = projects.filter((p) => p.category === "fullstack");

  const statsData = [
    {
      value: projects.length,
      label: "Total Projects",
      color: "text-violet-500",
    },
    {
      value: projects.reduce((acc, p) => acc + p.stars, 0),
      label: "GitHub Stars",
      color: "text-amber-500",
    },
    {
      value: projects.reduce((acc, p) => acc + p.forks, 0),
      label: "GitHub Forks",
      color: "text-cyan-500",
    },
    {
      value: projects.filter((p) => p.status === "completed").length,
      label: "Completed",
      color: "text-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen">
      <ProjectsHeroSection />
      <ProjectsTabsSection
        featuredProjects={featuredProjects}
        frontendProjects={frontendProjects}
        backendProjects={backendProjects}
        fullstackProjects={fullstackProjects}
        onOpenProject={(projectId) => router.push(`/projects/${projectId}`)}
      />
      <ProjectsStatsSection statsData={statsData} />
    </div>
  );
}
