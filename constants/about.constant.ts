import {
  Award,
  Users,
  Code2,
  Zap,
  Heart,
} from "lucide-react";

export const experiences = [
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
    color: "bg-violet-500",
    accent: "text-violet-500",
    border: "border-violet-500/30",
    topBar: "from-violet-500 to-indigo-500",
  },
];

export const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I believe in writing code that is not only functional but also readable, maintainable, and elegant.",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great products are built by great teams. I thrive in collaborative environments and enjoy mentoring others.",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "I'm always exploring new technologies and approaches to solve problems more efficiently and effectively.",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description:
      "Every line of code I write is with the end user in mind, ensuring the best possible experience.",
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-500/10",
    iconColor: "text-pink-500",
  },
];

export const aboutStats = [
  {
    icon: Award,
    label: "Years Experience",
    value: "3+",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Users,
    label: "Projects Completed",
    value: "10+",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];
