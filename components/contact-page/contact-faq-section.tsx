import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { FaqItem } from "@/types/contact.types";

type ContactFaqSectionProps = {
  faqs: FaqItem[];
};

export default function ContactFaqSection({ faqs }: ContactFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 relative overflow-hidden bg-muted/10">
      <div className="container relative z-10">
        
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
            Find quick answers to common questions about collaborations and workflows.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-border/40 bg-card/35 backdrop-blur-md transition-all duration-300 hover:border-violet-500/35"
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-none focus:outline-hidden relative group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors duration-300 ${isOpen ? "text-violet-500" : "text-muted-foreground/70"}`} />
                    <span className="font-bold text-base sm:text-lg text-foreground/90 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-muted-foreground/80 p-1 rounded-full bg-muted/40"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>

                  {/* Draw an SVG underline under the header of active item */}
                  <div className="absolute bottom-0 left-6 right-6 h-[1.5px] overflow-hidden pointer-events-none">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full bg-linear-to-r from-violet-500 to-emerald-500 origin-left"
                    />
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-border/10">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
