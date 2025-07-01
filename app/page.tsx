"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  GithubIcon,
  LinkedinIcon,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Smartphone,
  Database,
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
import Link from "next/link";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const skills = [
  { name: "React", level: 85 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 60 },
  { name: "PostgreSQL", level: 75 },
];

const projects = [
  {
    title: "Department Introductory",
    description: "Full-stack e-commerce solution with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/projects/department.png",
    github: "https://github.com/ahsaulhoqueabir/csejnu",
    demo: "",
  },
  {
    title: "Briefly60",
    description:
      "This is a summarized website for news and articles. It will help you to get the summary of top newspaper of Bangladesh in 60 words.",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    image: "/projects/briefly60.png",
    github: "https://github.com/ahsaulhoqueabir/briefly60",
    demo: "https://briefly60.netlify.app/",
  },
  {
    title: "IEEE JnU Student Chapter",
    description:
      "This is a website for IEEE JnU.It is used to manage the members and events update of IEEE JnU.",
    tech: ["NEXTjs", "Supabase", "Tailwind CSS", "Framer"],
    image: "/projects/ieee.png",
    github: "https://github.com/ahsaulhoqueabir/ieeejnu",
    demo: "https://ieeejnu.vercel.app/",
  },
];

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Modern, responsive web applications using React, Next.js, and TypeScript",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Scalable server-side solutions with Node.js and database management",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design with modern aesthetics and optimal user experience",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent)]" />

        {/* Animated background elements */}
        <motion.div
          className="absolute w-72 h-72 bg-primary/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ left: "10%", top: "20%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-secondary/5 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ right: "10%", bottom: "20%" }}
        />

        <motion.div
          className="container text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Badge variant="secondary" className="mb-4">
              Available for freelance work
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Full Stack
            <br />
            <motion.span
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Developer
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            I craft exceptional digital experiences with clean code and modern
            design. Passionate about building scalable web applications and
            solving complex problems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="group">
                <Link href="/contact" className="flex items-center">
                  Get In Touch
                  <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="group">
                <Link href="/projects" className="flex items-center">
                  View Projects
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { href: "https://github.com/ahsanulhoqueabir", icon: GithubIcon },
              {
                href: "https://linkedin.com/in/ahsanulhoqueabir",
                icon: LinkedinIcon,
              },
              { href: "mailto:contact.ahsanul@gmail.com", icon: Mail },
            ].map((social, index) => (
              <motion.div
                key={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm a passionate full-stack developer with 3+ years of experience
              building modern web applications. I specialize in React, Next.js,
              and Node.js, with a strong focus on user experience and clean,
              maintainable code. When I'm not coding, you can find me exploring
              new technologies or contributing to open-source projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer a comprehensive range of development services to bring
              your ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to deliver exceptional results
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-muted relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Image
                        alt={project.title}
                        src={project.image}
                        className="object-cover w-full h-full transition-transform duration-3000 group-hover:translate-y-[-50%]"
                        width={400}
                        height={300}
                        layout="responsive"
                        style={{ transform: "scale(1.5)" }}
                      />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="group"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <GithubIcon className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="group"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
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
            <Button variant="outline" size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
        <div className="container">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? I'd love to hear about it and discuss how
              we can bring your ideas to life.
            </p>
            <Button size="lg" className="group">
              <Link href="/contact" className="flex items-center">
                Start a Project
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform rotate-[-45deg]" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
