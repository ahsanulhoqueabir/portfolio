import { motion } from "framer-motion";
import type { SkillStatItem } from "@/types/skills.types";

type SkillsHeroSectionProps = {
  skillStats: SkillStatItem[];
};

export default function SkillsHeroSection({
  skillStats,
}: SkillsHeroSectionProps) {
  return (
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
  );
}
