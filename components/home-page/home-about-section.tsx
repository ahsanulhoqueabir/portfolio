import { motion } from "framer-motion";
import type { HomeStat } from "@/types/home.types";

type HomeAboutSectionProps = {
  aboutParagraph: string;
  aboutStats: HomeStat[];
};

export default function HomeAboutSection({
  aboutParagraph,
  aboutStats,
}: HomeAboutSectionProps) {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Decorative SVG connection line art on the side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 opacity-15 dark:opacity-10 pointer-events-none hidden lg:block">
        <svg className="w-full h-full stroke-violet-500/30 dark:stroke-violet-400/20 fill-none" viewBox="0 0 200 400">
          <motion.path
            d="M 200 50 Q 50 150 150 250 T 50 350"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
            About{" "}
            <span className="bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-medium">
            {aboutParagraph}
          </p>

          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto"
            style={{ perspective: 1000 }} // Enable 3D perspective for child tilts
          >
            {aboutStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center p-8 rounded-2xl border border-border/40 bg-card/35 backdrop-blur-md shadow-lg shadow-black/5 hover:shadow-violet-500/5 hover:border-violet-500/40 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -6, 
                  rotateY: i % 2 === 0 ? -6 : 6, 
                  rotateX: 4,
                  transition: { duration: 0.25, ease: "easeOut" } 
                }}
              >
                <div className={`text-5xl font-black ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
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
