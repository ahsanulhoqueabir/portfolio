import { CircleCheck, Lightbulb, ShieldAlert } from "lucide-react";
import type { ProjectDetailsPageContentProps } from "@/types/projects.types";
import ProjectDetailsGallerySection from "./project-details-gallery-section";
import ProjectDetailsHeroSection from "./project-details-hero-section";
import ProjectDetailsInsightsSection from "./project-details-insights-section";
import ProjectDetailsTechStackSection from "./project-details-tech-stack-section";

export default function ProjectDetailsPageContent({
  project,
}: ProjectDetailsPageContentProps) {
  const publishedDate = project.date
    ? new Date(project.date).toLocaleDateString()
    : "N/A";

  const insightSections = [
    {
      key: "features",
      title: "Feature List",
      icon: CircleCheck,
      iconColor: "text-emerald-500",
      items: project.features,
      marker: "bg-emerald-500",
    },
    {
      key: "learnings",
      title: "What I Learned",
      icon: Lightbulb,
      iconColor: "text-amber-500",
      items: project.learnings,
      marker: "bg-amber-500",
    },
    {
      key: "limitations",
      title: "Limitations Faced",
      icon: ShieldAlert,
      iconColor: "text-rose-500",
      items: project.limitations,
      marker: "bg-rose-500",
    },
  ].filter((section) => section.items.length > 0);

  return (
    <div className="min-h-screen">
      <ProjectDetailsHeroSection
        project={project}
        publishedDate={publishedDate}
      />
      <ProjectDetailsGallerySection project={project} />
      <ProjectDetailsInsightsSection insightSections={insightSections} />
      <ProjectDetailsTechStackSection tech={project.tech} />
    </div>
  );
}
