import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AboutStatItem } from "@/types/about.types";
import { containerVariants, getAboutIcon, itemVariants } from "./constants";

type AboutHeroSectionProps = {
  aboutStats: AboutStatItem[];
  onResumeDownload: () => void;
};

// SVG Border Draw Variant for the button
const buttonBorderVariants = {
  initial: { pathLength: 0, opacity: 0 },
  hover: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export default function AboutHeroSection({
  aboutStats,
  onResumeDownload,
}: AboutHeroSectionProps) {
  return (
    <section className="py-28 relative overflow-hidden dot-grid">
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              About{" "}
              <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Passionate developer with a love for creating exceptional digital
              experiences
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-16"
          >
            {aboutStats.map((stat) => {
              const Icon = getAboutIcon(stat.iconKey);

              return (
                <motion.div
                  key={stat.label}
                  className={`text-center p-8 rounded-2xl border ${stat.border} ${stat.bg} min-w-[160px] flex-1 sm:flex-initial bg-card/35 backdrop-blur-md hover:border-violet-500/35 transition-colors duration-300`}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-muted/40 dark:bg-muted/15 flex items-center justify-center mx-auto mb-4 border ${stat.border} text-foreground/80`}
                  >
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <div className={`text-4xl font-black ${stat.color} mb-1.5`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              className="inline-block relative"
            >
              {/* SVG drawing border around button */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-30"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.rect
                  x="0.5"
                  y="0.5"
                  width="99"
                  height="99"
                  rx="12"
                  stroke="currentColor"
                  className="text-violet-500/80 dark:text-violet-400/80"
                  strokeWidth="1.2"
                  fill="none"
                  variants={buttonBorderVariants}
                  initial="initial"
                />
              </svg>

              <Button
                size="lg"
                className="group bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-violet-500/25 cursor-none py-6 px-8 rounded-2xl font-bold"
                onClick={onResumeDownload}
              >
                <Download className="mr-2.5 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
