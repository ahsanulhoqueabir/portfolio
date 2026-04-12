"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ExternalLink,
  Github,
  GitFork,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProjectItem = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  github: string;
  demo?: string;
  stars: number;
  forks: number;
  status: "completed" | "on-going" | "planned" | string;
  featured: boolean;
  date: string;
  gradient: string;
  accentColor: string;
  orb: string;
  topBar: string;
};

type ProjectsPageContentProps = {
  projects: ProjectItem[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectsPageContent({
  projects,
}: ProjectsPageContentProps) {
  const featuredProjects = projects.filter((p) => p.featured);
  const frontendProjects = projects.filter((p) => p.category === "frontend");
  const backendProjects = projects.filter((p) => p.category === "backend");
  const fullstackProjects = projects.filter((p) => p.category === "fullstack");

  const ProjectCard = ({
    project,
    index,
  }: {
    project: ProjectItem;
    index: number;
  }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-300 group border-border/60 hover:border-border overflow-hidden">
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
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
              Code
            </Button>
            {project.demo && (
              <Button
                size="sm"
                className="flex-1 group/btn bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-0 text-white"
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
  );

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
      <section className="py-24 relative overflow-hidden dot-grid">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background pointer-events-none" />
        <motion.div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #ec4899, #f43f5e)",
            top: "10%",
            right: "5%",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              My{" "}
              <span className="bg-linear-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A collection of my work showcasing various technologies and
              solutions. From simple frontends to complex full-stack
              applications.
            </p>
          </motion.div>
        </div>
      </section>

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
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="fullstack">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {fullstackProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="frontend">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {frontendProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="backend">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {backendProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project{" "}
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Statistics
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that tell the story of my development journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl border border-border/60 bg-card hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className={`text-4xl font-black ${stat.color} mb-2`}
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
