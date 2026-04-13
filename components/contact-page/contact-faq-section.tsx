import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { FaqItem } from "@/types/contact.types";
import { containerVariants, itemVariants } from "./constants";

type ContactFaqSectionProps = {
  faqs: FaqItem[];
};

export default function ContactFaqSection({ faqs }: ContactFaqSectionProps) {
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
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about working with me
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-6 relative perspective-1000"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={itemVariants}
              style={{
                transformStyle: "preserve-3d",
                transform: `translateZ(${-index * 10}px)`,
                zIndex: faqs.length - index,
              }}
              whileHover={{
                transform: `translateZ(${-index * 10 + 50}px)`,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="backdrop-blur-sm bg-card/80 shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
