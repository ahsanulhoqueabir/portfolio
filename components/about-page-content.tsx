"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type {
  AboutExperienceItem,
  AboutValueItem,
  AboutStatItem,
  AboutPageContentProps,
} from "@/types/about.types";

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

const normalizeIconKey = (value: string) => value.trim().toLowerCase();

// Icon emoji map for values and stats
const iconEmojiMap: Record<string, string> = {
  "clean code": "✨",
  collaboration: "🤝",
  innovation: "⚡",
  projects: "📦",
  happy: "😊",
  years: "📅",
};

export default function AboutPageContent({
  experiences,
  values,
  aboutStats,
}: AboutPageContentProps) {
  const handleResumeDownload = () => {
    const fileId = "1-AqnRS_mDnDUJbE5JLMQspGv2CNW0aOj";
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement("a");
    link.href = directDownloadUrl;
    link.target = "_blank";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getEmoji = (key: string) => {
    return iconEmojiMap[normalizeIconKey(key)] || "💫";
  };

  return (
    <div className="min-h-screen">
      <section className="py-24 relative overflow-hidden dot-grid">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background pointer-events-none" />
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #7c3aed, #4f46e5)",
            top: "10%",
            right: "10%",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <div className="container relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-14">
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                About{" "}
                <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
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
              className="flex justify-center items-center gap-6 mb-12"
            >
              {aboutStats.map((stat) => {
                const emoji = getEmoji(stat.iconKey);

                return (
                  <motion.div
                    key={stat.label}
                    className={`text-center p-8 rounded-2xl border ${stat.border} ${stat.bg} min-w-[160px]`}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3 border ${stat.border}`}
                    >
                      <span className="text-2xl">{emoji}</span>
                    </div>
                    <div className={`text-3xl font-black ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="group bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-violet-500/25"
                  onClick={handleResumeDownload}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                My{" "}
                <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <div className="space-y-5">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  My journey into the world of programming began during my
                  computer science studies, where I discovered my passion for
                  creating digital solutions that make a real difference. What
                  started as curiosity about how websites work has evolved into
                  a career dedicated to crafting exceptional user experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I am a passionate developer eager to start my professional
                  journey in the tech industry. While I haven&apos;t had formal
                  work experience yet, I&apos;ve been dedicating my time to
                  building personal projects, learning modern web technologies
                  like React, Next.js, and Node.js, and constantly improving my
                  programming skills through hands-on practice.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  When I&apos;m not coding, you can find me contributing to
                  open-source projects or exploring the latest web technologies.
                  I believe in continuous learning and sharing knowledge with
                  the developer community.
                </p>
              </div>
            </motion.div>
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
              What{" "}
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Drives Me
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles and values that guide my work and professional
              relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const emoji = getEmoji(value.iconKey);

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full border-border/60 hover:border-border hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${value.gradient}`}
                    />
                    <CardHeader className="pt-7">
                      <div
                        className={`w-12 h-12 rounded-xl ${value.bg} flex items-center justify-center mb-3`}
                      >
                        <span className="text-2xl">{emoji}</span>
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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
              <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key achievements over the years
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <motion.div
                      className={`w-5 h-5 ${exp.color} rounded-full shadow-lg ring-4 ring-background`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                    {index !== experiences.length - 1 && (
                      <div className="w-0.5 flex-1 bg-linear-to-b from-violet-500/40 to-transparent mt-2" />
                    )}
                  </div>
                  <motion.div
                    className="flex-1"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 border-border/60 hover:border-border overflow-hidden relative">
                      <div
                        className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${exp.topBar}`}
                      />
                      <CardHeader className="pt-6">
                        <div className="flex justify-between items-start flex-wrap gap-3">
                          <div>
                            <CardTitle className="text-lg">
                              {exp.title}
                            </CardTitle>
                            <CardDescription
                              className={`${exp.accent} font-semibold text-sm mt-1`}
                            >
                              {exp.company}
                            </CardDescription>
                          </div>
                          <Badge
                            variant="secondary"
                            className="text-xs shrink-0"
                          >
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${exp.color} mt-1.5 shrink-0`}
                                />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
