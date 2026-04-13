import { motion } from "framer-motion";

export default function AboutStorySection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              My{" "}
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed text-lg">
                My journey into the world of programming began during my
                computer science studies, where I discovered my passion for
                creating digital solutions that make a real difference. What
                started as curiosity about how websites work has evolved into a
                career dedicated to crafting exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a passionate developer eager to start my professional
                journey in the tech industry. While I haven&apos;t had formal
                work experience yet, I&apos;ve been dedicating my time to
                building personal projects, learning modern web technologies
                like React, Next.js, and Node.js, and constantly improving my
                programming skills through hands-on practice.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                When I&apos;m not coding, you can find me contributing to
                open-source projects or exploring the latest web technologies. I
                believe in continuous learning and sharing knowledge with the
                developer community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
