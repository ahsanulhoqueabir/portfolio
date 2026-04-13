import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github, GitFork, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectItem } from "@/types/projects.types";
import { itemVariants } from "./constants";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  onOpenProject: (projectId: string) => void;
};

export default function ProjectCard({
  project,
  index,
  onOpenProject,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <Card
        className="h-full hover:shadow-2xl transition-all duration-300 group border-border/60 hover:border-border overflow-hidden cursor-pointer"
        role="link"
        tabIndex={0}
        onClick={() => onOpenProject(project.id)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpenProject(project.id);
          }
        }}
      >
        <div
          className={`aspect-video bg-linear-to-br ${project.gradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className={`w-20 h-20 rounded-2xl ${project.orb} blur-xl`}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <span
              className={`absolute text-6xl font-black ${project.accentColor} opacity-25 select-none`}
            >
              {project.title.charAt(0)}
            </span>
          </div>
          {project.featured && (
            <div className="absolute top-3 right-3 z-10">
              <Badge className="bg-linear-to-r from-violet-600 to-indigo-600 text-white border-0 text-xs shadow-lg">
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-3 left-3 z-10">
            <Badge
              className={
                project.status === "completed"
                  ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 text-xs"
                  : "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30 text-xs"
              }
            >
              {project.status === "completed" ? "Completed" : "In Progress"}
            </Badge>
          </div>
          <div
            className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${project.topBar}`}
          />
        </div>

        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle
                className={`group-hover:${project.accentColor} transition-colors`}
              >
                {project.title}
              </CardTitle>
              <CardDescription className="mt-2 line-clamp-2">
                {project.description}
              </CardDescription>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5" />
              {project.stars}
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-3.5 w-3.5" />
              {project.forks}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(project.date).toLocaleDateString()}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-5">
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
              <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
              Code
            </Button>
            {project.demo && (
              <Button
                size="sm"
                className="flex-1 group/btn bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-0 text-white"
                onClick={(event) => {
                  event.stopPropagation();
                  window.open(project.demo, "_blank");
                }}
              >
                <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
                Demo
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
