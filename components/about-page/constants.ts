import { Sparkles, Users, Zap, Briefcase, Smile, Calendar, type LucideIcon } from "lucide-react";

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

const iconMap: Record<string, LucideIcon> = {
  "clean code": Sparkles,
  collaboration: Users,
  innovation: Zap,
  projects: Briefcase,
  happy: Smile,
  years: Calendar,
};

const normalizeIconKey = (value: string) => value.trim().toLowerCase();

export const getAboutIcon = (key: string): LucideIcon => {
  return iconMap[normalizeIconKey(key)] || Sparkles;
};

