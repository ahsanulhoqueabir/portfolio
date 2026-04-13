import {
  Code2,
  Database,
  GraduationCap,
  Layers,
  Palette,
  Rocket,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const getCategoryIcon = (iconKey: string) => {
  const normalized = iconKey.trim().toLowerCase();

  if (normalized.includes("front")) return Code2;
  if (normalized.includes("back")) return Database;
  if (normalized.includes("data")) return Database;
  if (normalized.includes("tool")) return Wrench;
  if (normalized.includes("mobile")) return Smartphone;
  if (normalized.includes("design")) return Palette;

  return Layers;
};

export const getSummaryIcon = (iconKey: string) => {
  const normalized = iconKey.trim().toLowerCase();

  if (normalized.includes("learn")) return GraduationCap;
  if (normalized.includes("build") || normalized.includes("project"))
    return Rocket;
  if (normalized.includes("growth") || normalized.includes("improve"))
    return Sparkles;

  return Sparkles;
};
