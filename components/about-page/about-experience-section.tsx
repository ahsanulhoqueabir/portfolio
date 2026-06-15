import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the experience container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the scroll progress
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            My professional journey and key achievements over the years
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <div ref={containerRef} className="max-w-3xl mx-auto relative">
          
          {/* Scroll-drawn SVG Path */}
          <div className="absolute left-[9px] top-3 bottom-3 w-0.5 bg-muted/40 dark:bg-muted/10 pointer-events-none z-0">
            <svg className="w-full h-full stroke-violet-500 dark:stroke-violet-400 fill-none" preserveAspectRatio="none">
              <motion.line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                strokeWidth="2.5"
                style={{ pathLength: scaleY }}
              />
            </svg>
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="relative mb-14 last:mb-0 z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex">
                {/* Left side node column */}
                <div className="flex flex-col items-center mr-6">
                  {/* Dot lights up when in view */}
                  <motion.div
                    className={`w-5 h-5 ${exp.color} rounded-full shadow-md ring-4 ring-background dark:ring-background-dark z-25 relative`}
                    initial={{ scale: 0.5, filter: "brightness(0.6)" }}
                    whileInView={{ scale: 1.1, filter: "brightness(1.1)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  />
                </div>

                {/* Right side experience card */}
                <motion.div
                  className="flex-1"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Card className="hover:shadow-2xl transition-all duration-300 border-border/40 hover:border-border/80 overflow-hidden relative bg-card/40 backdrop-blur-md">
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${exp.topBar}`}
                    />
                    <CardHeader className="pt-7">
                      <div className="flex justify-between items-start flex-wrap gap-3">
                        <div>
                          <CardTitle className="text-xl font-bold tracking-tight">{exp.title}</CardTitle>
                          <CardDescription
                            className={`${exp.accent} font-semibold text-sm mt-1.5`}
                          >
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="text-xs font-semibold shrink-0 py-1 px-2.5">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-7">
                      <p className="text-muted-foreground mb-5 leading-relaxed text-sm font-medium">
                        {exp.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-bold text-sm tracking-wide uppercase text-foreground/80">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2.5">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground font-medium leading-relaxed"
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${exp.color} mt-1.5 shrink-0`}
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
