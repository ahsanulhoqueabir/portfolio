import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

// SVG Border Draw Variant
const borderVariants = {
  initial: { pathLength: 0, opacity: 0 },
  hover: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export default function ProjectCard({
  project,
  index,
  onOpenProject,
}: ProjectCardProps) {
  // 3D Parallax Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);

  const springX = useSpring(rotateX, { stiffness: 250, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 250, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08 }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="h-full"
    >
      <Card
        className="h-full hover:shadow-2xl transition-all duration-300 group border-border/40 hover:border-transparent overflow-hidden cursor-pointer bg-card/35 backdrop-blur-md relative"
        role="link"
        tabIndex={0}
        onClick={() => onOpenProject(project.id)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpenProject(project.id);
          }
        }}
      >
        {/* SVG Border Drawing overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-30"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.rect
            x="0.5"
            y="0.5"
            width="99"
            height="99"
            rx="8"
            stroke="currentColor"
            className="text-violet-500/80 dark:text-violet-400/80"
            strokeWidth="0.8"
            fill="none"
            variants={borderVariants}
            initial="initial"
            whileHover="hover"
          />
        </svg>

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
              <Badge className="bg-linear-to-r from-violet-600 to-indigo-600 text-white border-0 text-xs shadow-lg font-semibold py-0.5 px-2">
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-3 left-3 z-10">
            <Badge
              className={
                project.status === "completed"
                  ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 text-xs font-semibold py-0.5 px-2"
                  : "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30 text-xs font-semibold py-0.5 px-2"
              }
            >
              {project.status === "completed" ? "Completed" : "In Progress"}
            </Badge>
          </div>
          <div
            className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${project.topBar}`}
          />
        </div>

        <CardHeader className="pt-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle
                className={`group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors font-bold text-xl tracking-tight`}
              >
                {project.title}
              </CardTitle>
              <CardDescription className="mt-2 line-clamp-2 text-sm font-medium">
                {project.description}
              </CardDescription>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground pt-2">
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

        <CardContent className="pb-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-semibold py-0.5 px-2">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 group/btn hover:border-violet-500/50 hover:text-violet-600 dark:hover:text-violet-400 cursor-none font-semibold text-xs"
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
                className="flex-1 group/btn bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-0 text-white cursor-none font-semibold text-xs"
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
