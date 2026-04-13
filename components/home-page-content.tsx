"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CSSProperties, useRef } from "react";
import {
  ArrowDown,
  GithubIcon,
  LinkedinIcon,
  Mail,
  ExternalLink,
  Download,
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

type HomeSkill = {
  name: string;
  level: number;
  color: string;
};

type HomeProject = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo?: string;
  gradient: string;
  accent: string;
  initial: string;
  orb: string;
};

type HomeStat = {
  value: string;
  label: string;
  color: string;
};

type HomePageContentProps = {
  skills: HomeSkill[];
  projects: HomeProject[];
  aboutStats: HomeStat[];
  heroSubtitle: string;
  aboutParagraph: string;
  heroImageUrl: string;
  cvDownloadUrl: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroPatternStyle: CSSProperties = {
  backgroundImage: `
    linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
    linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
  `,
  backgroundSize: "40px 40px",
  WebkitMaskImage:
    "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
  maskImage:
    "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
};

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Modern, responsive web applications using React, Next.js, and TypeScript",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10 dark:bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Scalable server-side solutions with Node.js and database management",
    gradient: "from-emerald-500 to-green-500",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10 dark:bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design with modern aesthetics and optimal user experience",
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-500/10 dark:bg-pink-500/10",
    iconColor: "text-pink-500",
  },
];

export default function HomePageContent({
  skills,
  projects,
  aboutStats,
  heroSubtitle,
  aboutParagraph,
  heroImageUrl,
  cvDownloadUrl,
}: HomePageContentProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  return (
    <div className="min-h-screen">
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 opacity-80 dark:opacity-30"
          style={heroPatternStyle}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/95 via-background/85 to-background pointer-events-none z-0" />

        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 dark:opacity-20"
          style={{
            background: "radial-gradient(circle, #7c3aed, #4f46e5)",
            left: "5%",
            top: "15%",
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-25 dark:opacity-15"
          style={{
            background: "radial-gradient(circle, #ec4899, #f43f5e)",
            right: "8%",
            top: "20%",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-20 dark:opacity-15"
          style={{
            background: "radial-gradient(circle, #06b6d4, #0891b2)",
            left: "30%",
            bottom: "15%",
          }}
          animate={{ scale: [1, 1.4, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-56 h-56 rounded-full blur-3xl opacity-20 dark:opacity-10"
          style={{
            background: "radial-gradient(circle, #10b981, #059669)",
            right: "20%",
            bottom: "20%",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="container relative z-10 py-24 md:py-28 lg:py-32"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <motion.div variants={itemVariants} className="mb-6">
                <motion.span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 dark:bg-violet-500/10 dark:border-violet-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for freelance work
                </motion.span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
              >
                <span className="block text-foreground">Full Stack</span>
                <motion.span
                  className="block bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "300% 300%" }}
                >
                  Developer
                </motion.span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl lg:max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {heroSubtitle}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    size="lg"
                    className="group bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-violet-500/25"
                    asChild
                  >
                    <Link href="/contact" className="flex items-center">
                      Get In Touch
                      <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-violet-500/30 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400"
                    asChild
                  >
                    <Link href="/projects" className="flex items-center">
                      View Projects
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"
                    asChild
                  >
                    <a
                      href={cvDownloadUrl}
                      download
                      className="flex items-center"
                    >
                      Download CV
                      <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start space-x-5"
              >
                {[
                  {
                    href: "https://github.com/ahsanulhoqueabir",
                    icon: GithubIcon,
                    color:
                      "hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800",
                  },
                  {
                    href: "https://linkedin.com/in/ahsanulhoqueabir",
                    icon: LinkedinIcon,
                    color:
                      "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30",
                  },
                  {
                    href: "mailto:contact.ahsanul@gmail.com",
                    icon: Mail,
                    color:
                      "hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950/30",
                  },
                ].map((social) => (
                  <motion.div
                    key={social.href}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      className={`flex items-center justify-center w-10 h-10 rounded-xl border border-border text-muted-foreground transition-all duration-200 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <Image
                  src={heroImageUrl}
                  alt="Ahsanul Hoque - Full Stack Developer"
                  width={1000}
                  height={800}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 z-10"
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
            scroll
          </span>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {aboutParagraph}
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto">
              {aboutStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl border border-border bg-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className={`text-4xl font-black ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
              What{" "}
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                I Do
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer a comprehensive range of development services to bring
              your ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-border/60 hover:border-border hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${service.gradient}`}
                  />
                  <CardHeader className="text-center pt-8">
                    <div
                      className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon
                        className={`h-7 w-7 ${service.iconColor}`}
                      />
                    </div>
                    <CardTitle className="text-base">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Skills &{" "}
              <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to deliver exceptional results
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2 items-center">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm font-medium text-muted-foreground tabular-nums">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className={`bg-linear-to-r ${skill.color} h-2.5 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group border-border/60 hover:border-border">
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
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
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

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-violet-600/10 via-fuchsia-500/5 to-pink-600/10" />
        <div className="absolute inset-0 dot-grid opacity-50" />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #7c3aed, #4f46e5)",
            right: "10%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Let&apos;s Work{" "}
              <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Have a project in mind? I&apos;d love to hear about it and discuss
              how we can bring your ideas to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="lg"
                className="group bg-linear-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white border-0 shadow-xl shadow-violet-500/25 text-base px-8 py-6"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  Start a Project
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
