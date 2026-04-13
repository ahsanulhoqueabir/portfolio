import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ProjectItem } from "@/types/projects.types";
import { containerVariants } from "./constants";
import ProjectCard from "./project-card";

type ProjectsTabsSectionProps = {
  featuredProjects: ProjectItem[];
  frontendProjects: ProjectItem[];
  backendProjects: ProjectItem[];
  fullstackProjects: ProjectItem[];
  onOpenProject: (projectId: string) => void;
};

export default function ProjectsTabsSection({
  featuredProjects,
  frontendProjects,
  backendProjects,
  fullstackProjects,
  onOpenProject,
}: ProjectsTabsSectionProps) {
  const renderCards = (items: ProjectItem[]) => (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onOpenProject={onOpenProject}
        />
      ))}
    </motion.div>
  );

  return (
    <section className="py-20">
      <div className="container">
        <Tabs defaultValue="featured" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-4 bg-muted/60 p-1 rounded-xl">
              <TabsTrigger
                value="featured"
                className="rounded-lg text-xs sm:text-sm"
              >
                Featured
              </TabsTrigger>
              <TabsTrigger
                value="fullstack"
                className="rounded-lg text-xs sm:text-sm"
              >
                Full Stack
              </TabsTrigger>
              <TabsTrigger
                value="frontend"
                className="rounded-lg text-xs sm:text-sm"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="rounded-lg text-xs sm:text-sm"
              >
                Backend
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="featured">
            {renderCards(featuredProjects)}
          </TabsContent>
          <TabsContent value="fullstack">
            {renderCards(fullstackProjects)}
          </TabsContent>
          <TabsContent value="frontend">
            {renderCards(frontendProjects)}
          </TabsContent>
          <TabsContent value="backend">
            {renderCards(backendProjects)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
