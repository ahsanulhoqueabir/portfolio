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

const iconEmojiMap: Record<string, string> = {
  "clean code": "✨",
  collaboration: "🤝",
  innovation: "⚡",
  projects: "📦",
  happy: "😊",
  years: "📅",
};

const normalizeIconKey = (value: string) => value.trim().toLowerCase();

export const getEmoji = (key: string) => {
  return iconEmojiMap[normalizeIconKey(key)] || "💫";
};
