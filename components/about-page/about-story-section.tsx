import { motion } from "framer-motion";
import { Sparkles, Compass, Rocket } from "lucide-react";

export default function AboutStorySection() {
  const milestones = [
    {
      icon: Compass,
      title: "The Spark",
      subtitle: "Where curiosity met code",
      text: "My journey into the world of programming began during my computer science studies, where I discovered my passion for creating digital solutions that make a real difference. What started as curiosity about how websites work has evolved into a dedicated mission to craft exceptional user experiences.",
      quote: "Curiosity is the wick in the candle of learning.",
      color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-500",
      accent: "text-blue-500",
    },
    {
      icon: Sparkles,
      title: "The Hustle",
      subtitle: "Continuous self-improvement & building",
      text: "I am an aspiring developer eager to start my professional journey in the tech industry. I dedicate my hours to building personal projects, mastering modern web stacks (React, Next.js, Node.js), and constantly polishing my programming skills through hands-on engineering challenges.",
      quote: "Build things to learn, learn to build better.",
      color: "from-violet-500/10 to-pink-500/10 border-violet-500/20 text-violet-500",
      accent: "text-violet-500",
    },
    {
      icon: Rocket,
      title: "The Vision",
      subtitle: "Looking forward to what's next",
      text: "When I'm not coding, you can find me contributing to open-source projects or exploring the latest web technologies. I believe in continuous learning, writing clean/maintainable code, and sharing knowledge with the developer community.",
      quote: "Great software is written by humans, for humans.",
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-500",
      accent: "text-emerald-500",
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            My{" "}
            <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
            A brief journey into how I became a developer and the philosophy driving my work.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center md:items-start`}
              >
                {/* Milestone Graphic Box */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: isEven ? 3 : -3 }}
                    className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${milestone.color} border flex flex-col items-center justify-center p-6 text-center backdrop-blur-md shadow-lg`}
                  >
                    <div className="p-3.5 rounded-2xl bg-background/50 dark:bg-background-dark/50 border border-border/10 mb-3 shadow-xs">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-black text-lg tracking-tight text-foreground/90">{milestone.title}</span>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground/80 tracking-wider mt-1">{milestone.subtitle}</span>
                  </motion.div>
                </div>

                {/* Milestone Narrative Text */}
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h3 className={`text-2xl font-extrabold tracking-tight ${milestone.accent}`}>
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base font-medium">
                    {milestone.text}
                  </p>
                  
                  {/* Quote block */}
                  <div className={`border-l-4 ${milestone.accent.replace("text-", "border-")} pl-4 italic text-sm text-foreground/85 font-semibold my-4 py-1 inline-block text-left`}>
                    &ldquo;{milestone.quote}&rdquo;
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
