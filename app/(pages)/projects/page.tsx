import ProjectsPageContent from "@/components/projects-page";
import { getSiteContext } from "@/lib/site-context";

export default async function ProjectsPage() {
  const siteContext = await getSiteContext();
  const { projects } = siteContext.projects;

  return <ProjectsPageContent projects={projects} />;
}
