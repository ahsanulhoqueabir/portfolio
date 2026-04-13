import { notFound } from "next/navigation";
import ProjectDetailsPageContent from "@/components/project-details-page";
import { ProjectsService } from "@/services/projects.services";
import type { ProjectItem } from "@/types/projects.types";

type ProjectDetailsPageProps = {
  params: Promise<{
    projectId: string;
  }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { projectId } = await params;
  if (!projectId) {
    notFound();
  }

  const dbProject = await ProjectsService.getActiveProjectById(projectId);

  if (!dbProject) {
    notFound();
  }

  const project: ProjectItem = {
    id: dbProject._id.toString(),
    title: dbProject.title,
    description: dbProject.description,
    longDescription: dbProject.longDescription,
    tech: dbProject.tech ?? [],
    features: dbProject.features ?? [],
    learnings: dbProject.learnings ?? [],
    limitations: dbProject.limitations ?? [],
    category: dbProject.category,
    image: dbProject.images?.[0] ?? "/placeholder.jpg",
    images: dbProject.images ?? [],
    github: dbProject.github,
    demo: dbProject.demo,
    stars: dbProject.stars,
    forks: dbProject.forks,
    status: dbProject.status,
    featured: dbProject.featured,
    date: dbProject.publishedAt.toISOString(),
    gradient: dbProject.gradientClass,
    accentColor: dbProject.accentColorClass,
    orb: dbProject.orbClass,
    topBar: dbProject.topBarClass,
  };

  return <ProjectDetailsPageContent project={project} />;
}
