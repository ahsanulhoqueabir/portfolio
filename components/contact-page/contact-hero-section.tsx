import { motion } from "framer-motion";
import { Clock, MessageSquare } from "lucide-react";

export default function ContactHeroSection() {
  return (
    <section className="py-24 relative overflow-hidden dot-grid">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background pointer-events-none" />
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, #7c3aed, #4f46e5)",
          top: "5%",
          right: "10%",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 11, repeat: Infinity }}
      />
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Let&apos;s{" "}
            <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            discuss how we can bring your ideas to life.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 border border-border/60">
              <Clock className="h-4 w-4 text-emerald-500" />
              <span>Usually responds in 24h</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 border border-border/60">
              <MessageSquare className="h-4 w-4 text-violet-500" />
              <span>Available for freelance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
