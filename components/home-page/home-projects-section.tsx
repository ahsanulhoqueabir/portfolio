"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

// SVG Border Draw Variant
const borderVariants = {
  initial: { pathLength: 0, opacity: 0 },
  hover: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

function HomeProjectCard({
  project,
  index,
  onClick,
}: {
  project: HomeProject;
  index: number;
  onClick: () => void;
}) {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      viewport={{ once: true }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="h-full"
    >
      <Card
        className="h-full cursor-pointer overflow-hidden border-border/40 hover:border-transparent transition-all duration-300 group hover:shadow-2xl bg-card/35 backdrop-blur-md relative"
        role="link"
        tabIndex={0}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClick();
          }
        }}
      >
        {/* Border drawing outline on card hover */}
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

        <CardHeader className="pt-6">
          <CardTitle className="group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors font-bold text-xl tracking-tight">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-sm font-medium">
            {project.description}
          </CardDescription>
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
              <GithubIcon className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
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

export default function HomeProjectsSection({
  projects,
}: HomeProjectsSectionProps) {
  const router = useRouter();

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Featured{" "}
            <span className="bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <HomeProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() =>
                router.push(
                  project.id ? `/projects/${project.id}` : "/projects",
                )
              }
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-violet-500/20 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 cursor-none font-semibold"
            asChild
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
