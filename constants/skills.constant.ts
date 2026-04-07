import {
  Code2,
  Database,
  Smartphone,
  Wrench,
  Palette,
  Server,
  BookOpen,
  Zap,
  Award,
} from "lucide-react";

export const skillCategories = {
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

export const certifications = [
  {
    name: "MERN Stack Developer",
    issuer: "Programming Hero",
    date: "2022",
    icon: "🏆",
  },
];

export const skillStats = [
  { value: "8+", label: "Frontend Technologies", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { value: "6+", label: "Backend Technologies", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { value: "8+", label: "Databases", color: "text-violet-500", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  { value: "10+", label: "Tools & Platforms", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
];

export const skillSummaryItems = [
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
];
