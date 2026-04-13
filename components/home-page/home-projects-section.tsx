import { motion } from "framer-motion";
import { ExternalLink, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { HomeProject } from "@/types/home.types";

type HomeProjectsSectionProps = {
  projects: HomeProject[];
};

export default function HomeProjectsSection({
  projects,
}: HomeProjectsSectionProps) {
  const router = useRouter();

  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Card
                className="h-full cursor-pointer overflow-hidden border-border/60 transition-all duration-300 group hover:border-border hover:shadow-2xl"
                role="link"
                tabIndex={0}
                onClick={() =>
                  router.push(project.id ? `/projects/${project.id}` : "/projects")
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    router.push(project.id ? `/projects/${project.id}` : "/projects");
                  }
                }}
              >
                <div
                  className={`aspect-video bg-linear-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className={`w-24 h-24 rounded-2xl ${project.orb} blur-xl`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <span
                      className={`absolute text-7xl font-black ${project.accent} opacity-30 select-none`}
                    >
                      {project.initial}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-br from-background/0 to-background/30 group-hover:from-background/5 group-hover:to-background/10 transition-all duration-300">
                    <Image
                      alt={project.title}
                      src={project.image}
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105"
                      width={400}
                      height={225}
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 group/btn hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400"
                      onClick={(event) => {
                        event.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                    >
                      <GithubIcon className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 group/btn bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-0"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-violet-500/30 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400"
            asChild
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
