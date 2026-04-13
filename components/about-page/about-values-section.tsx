import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { AboutValueItem } from "@/types/about.types";
import { getEmoji } from "./constants";

type AboutValuesSectionProps = {
  values: AboutValueItem[];
};

export default function AboutValuesSection({
  values,
}: AboutValuesSectionProps) {
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
            What{" "}
            <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Drives Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles and values that guide my work and professional
            relationships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => {
            const emoji = getEmoji(value.iconKey);

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-border/60 hover:border-border hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${value.gradient}`}
                  />
                  <CardHeader className="pt-7">
                    <div
                      className={`w-12 h-12 rounded-xl ${value.bg} flex items-center justify-center mb-3`}
                    >
                      <span className="text-2xl">{emoji}</span>
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
