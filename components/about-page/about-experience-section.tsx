import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { AboutExperienceItem } from "@/types/about.types";

type AboutExperienceSectionProps = {
  experiences: AboutExperienceItem[];
};

export default function AboutExperienceSection({
  experiences,
}: AboutExperienceSectionProps) {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements over the years
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <motion.div
                    className={`w-5 h-5 ${exp.color} rounded-full shadow-lg ring-4 ring-background`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                  {index !== experiences.length - 1 && (
                    <div className="w-0.5 flex-1 bg-linear-to-b from-violet-500/40 to-transparent mt-2" />
                  )}
                </div>
                <motion.div
                  className="flex-1"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-border/60 hover:border-border overflow-hidden relative">
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${exp.topBar}`}
                    />
                    <CardHeader className="pt-6">
                      <div className="flex justify-between items-start flex-wrap gap-3">
                        <div>
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <CardDescription
                            className={`${exp.accent} font-semibold text-sm mt-1`}
                          >
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="text-xs shrink-0">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${exp.color} mt-1.5 shrink-0`}
                              />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
