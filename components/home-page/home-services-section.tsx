import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "./constants";

// Framer variants for animated border drawing on card hover
const cardBorderVariants = {
  initial: { pathLength: 0, opacity: 0 },
  hover: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export default function HomeServicesSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            What{" "}
            <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              I Do
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            I offer a comprehensive range of development services to bring your
            ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover="hover"
              className="relative"
            >
              <Card className="h-full border-border/40 hover:border-transparent hover:shadow-2xl transition-all duration-300 group overflow-hidden relative bg-card/35 backdrop-blur-md">
                
                {/* SVG path to draw neon borders on hover */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-20"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <motion.rect
                    x="0.5"
                    y="0.5"
                    width="99"
                    height="99"
                    rx="8" // rounded-2xl matches card shape (or standard card radius)
                    stroke="currentColor"
                    className="text-violet-500/80 dark:text-violet-400/80"
                    strokeWidth="1"
                    fill="none"
                    variants={cardBorderVariants}
                    initial="initial"
                  />
                </svg>

                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${service.gradient}`}
                />
                
                <CardHeader className="text-center pt-10">
                  <div
                    className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 border border-violet-500/10`}
                  >
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg font-bold tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pb-8">
                  <CardDescription className="text-center text-sm leading-relaxed font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
