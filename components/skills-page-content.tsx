"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type SkillItem = {
  name: string;
  level: number;
  experience: string;
  icon: string;
};

type SkillCategoryItem = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
  skills: SkillItem[];
};

type SkillStatItem = {
  value: string;
  label: string;
  color: string;
  bg: string;
  border: string;
};

type SkillSummaryItem = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  gradient: string;
  bg: string;
  iconColor: string;
};

type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  icon: string;
};

type SkillsPageContentProps = {
  skillCategories: Record<string, SkillCategoryItem>;
  certifications: CertificationItem[];
  skillStats: SkillStatItem[];
  skillSummaryItems: SkillSummaryItem[];
};

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

export default function SkillsPageContent({
  skillCategories,
  certifications,
  skillStats,
  skillSummaryItems,
}: SkillsPageContentProps) {
  const SkillCard = ({ skill, index }: { skill: SkillItem; index: number }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{skill.icon}</span>
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.experience}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{skill.level}%</div>
            </div>
          </div>
          <Progress value={skill.level} className="h-2" />
        </CardContent>
      </Card>
    </motion.div>
  );

  const CategorySection = ({
    category,
    skills,
  }: {
    category: SkillCategoryItem;
    skills: SkillItem[];
  }) => (
    <div className="space-y-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r ${category.color} text-white mb-4`}
        >
          <category.icon className="h-5 w-5" />
          <h2 className="text-lg font-semibold">{category.title}</h2>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen  ">
      <section className="py-24 relative overflow-hidden dot-grid">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background pointer-events-none" />
        <motion.div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #06b6d4, #0891b2)",
            top: "10%",
            left: "5%",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Skills &{" "}
              <span className="bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              A comprehensive overview of my technical skills, tools, and
              technologies I work with to deliver exceptional digital solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skillStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={`text-center p-4 rounded-2xl border ${stat.border} ${stat.bg}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className={`text-3xl font-black ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-4xl grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <CategorySection category={category} skills={category.skills} />
              </TabsContent>
            ))}
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
              <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional certifications that validate my expertise
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="text-4xl mb-2">{cert.icon}</div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">{cert.date}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Skill{" "}
                <span className="bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                  Summary
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                My approach to continuous learning and skill development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillSummaryItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 border-border/60 hover:border-border overflow-hidden relative">
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${item.gradient}`}
                    />
                    <CardHeader className="pt-7">
                      <div
                        className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-3`}
                      >
                        <item.icon className={`h-7 w-7 ${item.iconColor}`} />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {item.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
