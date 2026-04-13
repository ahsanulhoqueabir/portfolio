import { motion } from "framer-motion";

export default function ProjectsHeroSection() {
  return (
    <section className="py-24 relative overflow-hidden dot-grid">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background pointer-events-none" />
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, #ec4899, #f43f5e)",
          top: "10%",
          right: "5%",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            My{" "}
            <span className="bg-linear-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of my work showcasing various technologies and
            solutions. From simple frontends to complex full-stack applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
