"use client";

import { motion } from "framer-motion";
import {
  Download,
  Award,
  Users,
  Coffee,
  Code2,
  Globe,
  Heart,
  Zap,
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

const experiences = [
  {
    title: "Webmaster",
    company: "IEEE Jagannath University",
    period: "2024 - Present",
    description:
      "As the Webmaster of IEEE JnU Student Branch, I am responsible for developing and maintaining the organization's web presence. I lead a team of developers, implement modern web technologies, and ensure optimal performance and user experience.",
    achievements: [
      "Redesigned the official website to enhance user experience and accessibility.",
      "Implemented a content management system for easy updates by non-technical members.",
    ],
  },
];

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I believe in writing code that is not only functional but also readable, maintainable, and elegant.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great products are built by great teams. I thrive in collaborative environments and enjoy mentoring others.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "I'm always exploring new technologies and approaches to solve problems more efficiently and effectively.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description:
      "Every line of code I write is with the end user in mind, ensuring the best possible experience.",
  },
];

const stats = [
  { icon: Award, label: "Years Experience", value: "3+" },
  { icon: Users, label: "Projects Completed", value: "10+" },
];

export default function AboutPage() {
  const handleResumeDownload = () => {
    // Google Drive direct download URL format
    const fileId = "1WyMQAe17ZWrXrgeH9Jf78C8nKAUO1pd6";
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = directDownloadUrl;
    link.target = "_blank";
    link.download = "resume.pdf"; // Set desired filename

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Me
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate developer with a love for creating exceptional
                digital experiences
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex  justify-center items-center gap-16 mb-12"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <Button
                size="lg"
                className="group"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                My Story
              </h2>
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-muted-foreground">
                  My journey into the world of programming began during my
                  computer science studies, where I discovered my passion for
                  creating digital solutions that make a real difference. What
                  started as curiosity about how websites work has evolved into
                  a career dedicated to crafting exceptional user experiences.
                </p>
                <p className="text-muted-foreground">
                  I am a passionate developer eager to start my professional
                  journey in the tech industry. While I haven't had formal work
                  experience yet, I've been dedicating my time to building
                  personal projects, learning modern web technologies like
                  React, Next.js, and Node.js, and constantly improving my
                  programming skills through hands-on practice.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me contributing to
                  open-source projects or exploring the latest web technologies.
                  I believe in continuous learning and sharing knowledge with
                  the developer community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              What Drives Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles and values that guide my work and professional
              relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <value.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key achievements over the years
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    {index !== experiences.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2"></div>
                    )}
                  </div>
                  <Card className="flex-1 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{exp.title}</CardTitle>
                          <CardDescription className="text-primary font-medium">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">{exp.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
