import ProjectsPageContent from "@/components/projects-page-content";
import { projects as fallbackProjects } from "@/constants/projects.constant";
import { ProjectsService } from "@/services/projects.services";

export default async function ProjectsPage() {
  const dbProjects = await ProjectsService.getActiveProjects();

  const projects = dbProjects.length
    ? dbProjects.map((item) => ({
        id: item.projectId,
        title: item.title,
        description: item.description,
        longDescription: item.longDescription,
        tech: item.tech,
        category: item.category,
        image: item.images[0] ?? "/placeholder.jpg",
        github: item.github,
        demo: item.demo,
        stars: item.stars,
        forks: item.forks,
        status: item.status,
        featured: item.featured,
        date: item.publishedAt.toISOString(),
        gradient: item.gradientClass,
        accentColor: item.accentColorClass,
        orb: item.orbClass,
        topBar: item.topBarClass,
      }))
    : fallbackProjects;

  return <ProjectsPageContent projects={projects} />;
}
