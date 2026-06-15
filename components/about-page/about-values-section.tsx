import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { AboutValueItem } from "@/types/about.types";
import { getAboutIcon } from "./constants";

type AboutValuesSectionProps = {
  values: AboutValueItem[];
};

// SVG Border Draw Variant
const borderVariants = {
  initial: { pathLength: 0, opacity: 0 },
  hover: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export default function AboutValuesSection({
  values,
}: AboutValuesSectionProps) {
  return (
    <section className="py-28 bg-muted/10 relative overflow-hidden">
      <div className="container">
        
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            What{" "}
            <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Drives Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            The principles and values that guide my work and professional relationships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => {
            const Icon = getAboutIcon(value.iconKey);

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover="hover"
                className="relative"
              >
                <Card className="h-full border-border/40 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden relative bg-card/35 backdrop-blur-md">
                  
                  {/* SVG Border Drawing overlay on card hover */}
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
                      rx="8"
                      stroke="currentColor"
                      className="text-emerald-500/80 dark:text-emerald-400/80"
                      strokeWidth="0.8"
                      fill="none"
                      variants={borderVariants}
                      initial="initial"
                    />
                  </svg>

                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${value.gradient}`}
                  />
                  
                  <CardHeader className="pt-10">
                    <div
                      className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center mb-5 border border-emerald-500/10 text-emerald-500`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-bold tracking-tight text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pb-8">
                    <CardDescription className="text-sm sm:text-base leading-relaxed font-medium text-muted-foreground">
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
