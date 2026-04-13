import { motion } from "framer-motion";

type ProjectsStatsSectionProps = {
  statsData: Array<{
    value: number;
    label: string;
    color: string;
  }>;
};

export default function ProjectsStatsSection({
  statsData,
}: ProjectsStatsSectionProps) {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project{" "}
            <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Numbers that tell the story of my development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl border border-border/60 bg-card hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <motion.div
                className={`text-4xl font-black ${stat.color} mb-2`}
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
