import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ContactMethodItem } from "@/types/contact.types";
import {
  containerVariants,
  contactMethodIconMap,
  itemVariants,
} from "./constants";

type ContactMethodsSectionProps = {
  contactMethods: ContactMethodItem[];
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

export default function ContactMethodsSection({
  contactMethods,
}: ContactMethodsSectionProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {contactMethods.map((method, index) => {
        const Icon = contactMethodIconMap[method.title.toLowerCase()] ?? Mail;
        const gradientClass =
          method.colorClass ?? method.color ?? "from-blue-500 to-cyan-500";

        // Determine specific stroke color depending on method
        const strokeColor = method.title.toLowerCase().includes("email")
          ? "text-violet-500"
          : method.title.toLowerCase().includes("linkedin")
          ? "text-blue-500"
          : "text-emerald-500";

        return (
          <motion.div key={method.title} variants={itemVariants} whileHover="hover">
            <Link href={method.href} className="cursor-none">
              <Card className="h-full text-center hover:shadow-2xl transition-all duration-300 group cursor-none border-border/40 hover:border-transparent bg-card/35 backdrop-blur-md relative overflow-hidden">
                
                {/* SVG Border Drawing overlay on hover */}
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
                    className={strokeColor}
                    strokeWidth="0.8"
                    fill="none"
                    variants={borderVariants}
                    initial="initial"
                  />
                </svg>

                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${gradientClass}`}
                />

                <CardHeader className="pt-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${gradientClass} text-white mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md border border-white/10`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="font-bold tracking-tight text-lg">{method.title}</CardTitle>
                  <CardDescription className="text-xs font-semibold text-muted-foreground/90 mt-1">{method.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pb-8">
                  <p className="font-bold text-base text-foreground/85 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {method.contact}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
