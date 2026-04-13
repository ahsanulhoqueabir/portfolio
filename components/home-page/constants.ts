import { Code2, Database, Palette, Smartphone } from "lucide-react";
import type { HomeService } from "@/types/home.types";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const heroPatternStyle = {
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

export const services: HomeService[] = [
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
