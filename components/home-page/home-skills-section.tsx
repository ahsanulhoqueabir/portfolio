import { motion } from "framer-motion";
import type { HomeSkill } from "@/types/home.types";

type HomeSkillsSectionProps = {
  skills: HomeSkill[];
};

export default function HomeSkillsSection({ skills }: HomeSkillsSectionProps) {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to deliver exceptional results
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2 items-center">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-sm font-medium text-muted-foreground tabular-nums">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className={`bg-linear-to-r ${skill.color} h-2.5 rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
