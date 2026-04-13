import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomeCtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-violet-600/10 via-fuchsia-500/5 to-pink-600/10" />
      <div className="absolute inset-0 dot-grid opacity-50" />
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, #7c3aed, #4f46e5)",
          right: "10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Let&apos;s Work{" "}
            <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Have a project in mind? I&apos;d love to hear about it and discuss
            how we can bring your ideas to life.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              size="lg"
              className="group bg-linear-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white border-0 shadow-xl shadow-violet-500/25 text-base px-8 py-6"
              asChild
            >
              <Link href="/contact" className="flex items-center">
                Start a Project
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
