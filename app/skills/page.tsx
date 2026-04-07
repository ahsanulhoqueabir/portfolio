"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Palette,
  Zap,
  Award,
  BookOpen,
  Wrench,
  Server,
  Globe,
  Terminal,
} from "lucide-react";
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

const skillCategories = {
  frontend: {
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 95, experience: "3 years", icon: "⚛️" },
      { name: "Next.js", level: 90, experience: "3 years", icon: "▲" },
      { name: "TypeScript", level: 88, experience: "3 years", icon: "🔷" },
      { name: "JavaScript", level: 92, experience: "3 years", icon: "🟨" },
      { name: "HTML5", level: 96, experience: "3 years", icon: "🟧" },
      { name: "CSS3", level: 90, experience: "3 years", icon: "🎨" },
      { name: "Tailwind CSS", level: 85, experience: "2 years", icon: "💨" },
      { name: "Sass/SCSS", level: 80, experience: "3 years", icon: "💅" },
      { name: "Framer Motion", level: 78, experience: "2 years", icon: "🎬" },
    ],
  },
  backend: {
    title: "Backend Development",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85, experience: "3 years", icon: "🟢" },
      { name: "Express.js", level: 82, experience: "3 years", icon: "🚂" },
      { name: "GraphQL", level: 72, experience: "2 years", icon: "🔗" },
      { name: "REST APIs", level: 88, experience: "3 years", icon: "🔄" },
      { name: "Socket.io", level: 70, experience: "2 years", icon: "🔌" },
      { name: "Microservices", level: 68, experience: "2 years", icon: "🏗️" },
      { name: "Serverless", level: 65, experience: "1 year", icon: "☁️" },
    ],
  },
  database: {
    title: "Database & Storage",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PostgreSQL", level: 78, experience: "3 years", icon: "🐘" },
      { name: "MongoDB", level: 80, experience: "3 years", icon: "🍃" },
      { name: "MySQL", level: 75, experience: "3 years", icon: "🐬" },
      { name: "Redis", level: 70, experience: "2 years", icon: "🔴" },
      { name: "Prisma", level: 75, experience: "2 years", icon: "⚡" },
      { name: "Mongoose", level: 78, experience: "3 years", icon: "🦫" },
      { name: "SQLite", level: 72, experience: "2 years", icon: "💾" },
      { name: "Firebase", level: 68, experience: "2 years", icon: "🔥" },
      { name: "Supabase", level: 65, experience: "1 year", icon: "⚡" },
    ],
  },
  tools: {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", level: 90, experience: "3 years", icon: "📝" },
      { name: "Docker", level: 75, experience: "2 years", icon: "🐳" },
      { name: "AWS", level: 70, experience: "2 years", icon: "☁️" },
      { name: "Vercel", level: 85, experience: "3 years", icon: "▲" },
      { name: "Netlify", level: 80, experience: "2 years", icon: "🌐" },
      { name: "GitHub Actions", level: 72, experience: "2 years", icon: "⚙️" },
      { name: "Webpack", level: 70, experience: "3 years", icon: "📦" },
      { name: "Vite", level: 78, experience: "2 years", icon: "⚡" },
    ],
  },
  mobile: {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-teal-500 to-cyan-500",
    skills: [
      { name: "React Native", level: 72, experience: "2 years", icon: "📱" },
      { name: "Expo", level: 70, experience: "2 years", icon: "🚀" },
    ],
  },
  design: {
    title: "Design & UI/UX",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Figma", level: 80, experience: "3 years", icon: "🎨" },
      { name: "Photoshop", level: 65, experience: "3 years", icon: "🖼️" },
      { name: "UI Design", level: 75, experience: "3 years", icon: "🎯" },
      { name: "UX Research", level: 68, experience: "2 years", icon: "🔍" },
      { name: "Prototyping", level: 72, experience: "2 years", icon: "🛠️" },
      {
        name: "Responsive Design",
        level: 85,
        experience: "3 years",
        icon: "📱",
      },
      { name: "Accessibility", level: 70, experience: "2 years", icon: "♿" },
    ],
  },
};

const certifications = [
  {
    name: "MERN Stack Developer",
    issuer: "Programming Hero",
    date: "2022",
    icon: "🏆",
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

export default function SkillsPage() {
  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
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
    category: any;
    skills: any[];
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
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white mb-4`}
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
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden dot-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
        <motion.div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #06b6d4, #0891b2)", top: "10%", left: "5%" }}
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
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              A comprehensive overview of my technical skills, tools, and
              technologies I work with to deliver exceptional digital solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "8+", label: "Frontend Technologies", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { value: "6+", label: "Backend Technologies", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                { value: "8+", label: "Databases", color: "text-violet-500", bg: "bg-violet-500/10", border: "border-violet-500/20" },
                { value: "10+", label: "Tools & Platforms", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={`text-center p-4 rounded-2xl border ${stat.border} ${stat.bg}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Certifications Section */}
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
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
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

      {/* Skills Summary */}
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
                <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                  Summary
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                My approach to continuous learning and skill development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Continuous Learning",
                  desc: "I stay updated with the latest technologies and best practices through online courses, documentation, and hands-on experimentation.",
                  gradient: "from-blue-500 to-cyan-500",
                  bg: "bg-blue-500/10",
                  iconColor: "text-blue-500",
                },
                {
                  icon: Zap,
                  title: "Practical Application",
                  desc: "I believe in learning by doing. Every skill I acquire is immediately applied in real projects to solidify my understanding.",
                  gradient: "from-amber-500 to-orange-500",
                  bg: "bg-amber-500/10",
                  iconColor: "text-amber-500",
                },
                {
                  icon: Award,
                  title: "Knowledge Sharing",
                  desc: "I actively contribute to the developer community through blog posts, open-source contributions, and mentoring fellow developers.",
                  gradient: "from-violet-500 to-pink-500",
                  bg: "bg-violet-500/10",
                  iconColor: "text-violet-500",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 border-border/60 hover:border-border overflow-hidden relative">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                    <CardHeader className="pt-7">
                      <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-3`}>
                        <item.icon className={`h-7 w-7 ${item.iconColor}`} />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">{item.desc}</CardDescription>
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
