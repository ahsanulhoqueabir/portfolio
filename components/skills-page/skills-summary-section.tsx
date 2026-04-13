import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SkillSummaryItem } from "@/types/skills.types";
import { getSummaryIcon } from "./constants";

type SkillsSummarySectionProps = {
  skillSummaryItems: SkillSummaryItem[];
};

export default function SkillsSummarySection({
  skillSummaryItems,
}: SkillsSummarySectionProps) {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skill{" "}
              <span className="bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                Summary
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              My approach to continuous learning and skill development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillSummaryItems.map((item, i) => {
              const SummaryIcon = getSummaryIcon(item.iconKey);

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 border-border/60 hover:border-border overflow-hidden relative">
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${item.gradient}`}
                    />
                    <CardHeader className="pt-7">
                      <div
                        className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-3`}
                      >
                        <SummaryIcon className={`h-7 w-7 ${item.iconColor}`} />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {item.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
