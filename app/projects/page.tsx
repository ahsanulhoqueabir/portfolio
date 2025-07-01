"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Calendar,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "Department Introductory",
    description: "Full-stack e-commerce solution with React and Node.js",
    longDescription:
      "A comprehensive department website built with modern technologies.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "fullstack",
    image: "/projects/department.png",
    github: "https://github.com/ahsaulhoqueabir/csejnu",
    demo: "",
    stars: 0,
    forks: 0,
    status: "completed",
    featured: true,
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Briefly60",
    description:
      "This is a summarized website for news and articles. It will help you to get the summary of top newspaper of Bangladesh in 60 words.",
    longDescription:
      "A news summarization platform that provides concise 60-word summaries of Bangladesh's top newspapers.",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    category: "fullstack",
    image: "/projects/briefly60.png",
    github: "https://github.com/ahsaulhoqueabir/briefly60",
    demo: "https://briefly60.netlify.app/",
    stars: 0,
    forks: 0,
    status: "completed",
    featured: true,
    date: "2024-02-01",
  },
  {
    id: 3,
    title: "IEEE JnU Student Chapter",
    description:
      "This is a website for IEEE JnU.It is used to manage the members and events update of IEEE JnU.",
    longDescription:
      "A website for managing IEEE JnU members and events, built with modern web technologies.",
    tech: ["NEXTjs", "Supabase", "Tailwind CSS", "Framer"],
    category: "frontend",
    image: "/projects/ieee.png",
    github: "https://github.com/ahsaulhoqueabir/ieeejnu",
    demo: "https://ieeejnu.vercel.app/",
    stars: 0,
    forks: 0,
    status: "completed",
    featured: true,
    date: "2024-01-20",
  },
  {
    id: 4,
    title: "TEDxJagannathUniversity",
    description:
      "A website for TEDxJagannathUniversity, showcasing events and speakers.",
    longDescription:
      "A modern website for TEDxJagannathUniversity, featuring event details and speaker profiles.",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    category: "fullstack",
    image: "/placeholder.jpg",
    github: "https://github.com/ahsaulhoqueabir/tedxjnu",
    stars: 0,
    forks: 0,
    status: "on-going",
    featured: true,
    date: "2025-04-25",
  },
  {
    id: 5,
    title: "Bangladesh AI institute",
    description:
      "A website for Bangladesh AI Institute, providing information about courses and events.",
    longDescription:
      "A comprehensive website for Bangladesh AI Institute, showcasing courses, events, and resources.",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    category: "fullstack",
    image: "/placeholder.jpg",
    github: "https://github.com/ahsaulhoqueabir/bangladesh-ai-institute",
    stars: 0,
    forks: 0,
    status: "completed",
    featured: false,
    date: "2025-05-20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const frontendProjects = projects.filter((p) => p.category === "frontend");
  const backendProjects = projects.filter((p) => p.category === "backend");
  const fullstackProjects = projects.filter((p) => p.category === "fullstack");

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="text-6xl font-bold text-primary/20">
              {project.title.charAt(0)}
            </div>
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-primary to-secondary">
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <Badge
              variant={
                project.status === "completed" ? "default" : "destructive"
              }
            >
              {project.status === "completed" ? "Completed" : "In Progress"}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="mt-2">
                {project.description}
              </CardDescription>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {project.stars}
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              {project.forks}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(project.date).toLocaleDateString()}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="group/btn flex-1">
              <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
              Code
            </Button>
            {project.demo && (
              <Button size="sm" className="group/btn flex-1">
                <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                Demo
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen  ">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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

      {/* Projects Section */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="featured" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
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

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project Statistics
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that tell the story of my development journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {projects.length}
              </div>
              <div className="text-muted-foreground">Total Projects</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {projects.reduce((acc, p) => acc + p.stars, 0)}
              </div>
              <div className="text-muted-foreground">GitHub Stars</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {projects.reduce((acc, p) => acc + p.forks, 0)}
              </div>
              <div className="text-muted-foreground">GitHub Forks</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {projects.filter((p) => p.status === "completed").length}
              </div>
              <div className="text-muted-foreground">Completed</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
