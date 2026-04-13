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
    <section className="py-24 bg-muted/20">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            {aboutParagraph}
          </p>
          <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto">
            {aboutStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl border border-border bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={`text-4xl font-black ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
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
