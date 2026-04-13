import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  Download,
  ExternalLink,
  GithubIcon,
  LinkedinIcon,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { containerVariants, heroPatternStyle, itemVariants } from "./constants";

type HomeHeroSectionProps = {
  heroSubtitle: string;
  heroImageUrl: string;
  cvDownloadUrl: string;
};

export default function HomeHeroSection({
  heroSubtitle,
  heroImageUrl,
  cvDownloadUrl,
}: HomeHeroSectionProps) {
  const handleResumeDownload = async () => {
    const fileName = cvDownloadUrl.split("/").pop() || "resume.pdf";

    try {
      const response = await fetch(cvDownloadUrl, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Download failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
      return;
    } catch {
      const link = document.createElement("a");
      link.href = cvDownloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.35,
  });
  const heroOpacity = useTransform(
    smoothProgress,
    [0, 0.7, 1],
    [1, 0.72, 0.35],
  );
  const heroY = useTransform(smoothProgress, [0, 1], [0, -120]);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 opacity-80 dark:opacity-30"
        style={heroPatternStyle}
      />
      <div className="absolute inset-0 bg-linear-to-b from-background/95 via-background/85 to-background pointer-events-none z-0" />

      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 dark:opacity-20"
        style={{
          background: "radial-gradient(circle, #7c3aed, #4f46e5)",
          left: "5%",
          top: "15%",
        }}
        animate={{ scale: [1, 1.3, 1], x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-25 dark:opacity-15"
        style={{
          background: "radial-gradient(circle, #ec4899, #f43f5e)",
          right: "8%",
          top: "20%",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-20 dark:opacity-15"
        style={{
          background: "radial-gradient(circle, #06b6d4, #0891b2)",
          left: "30%",
          bottom: "15%",
        }}
        animate={{ scale: [1, 1.4, 1], x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full blur-3xl opacity-20 dark:opacity-10"
        style={{
          background: "radial-gradient(circle, #10b981, #059669)",
          right: "20%",
          bottom: "20%",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="container relative z-10 py-24 md:py-28 lg:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 dark:bg-violet-500/10 dark:border-violet-500/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for freelance work
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
            >
              <span className="block text-foreground">Full Stack</span>
              <motion.span
                className="block bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "300% 300%" }}
              >
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl lg:max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {heroSubtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="group bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-violet-500/25"
                  asChild
                >
                  <Link href="/contact" className="flex items-center">
                    Get In Touch
                    <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-violet-500/30 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400"
                  asChild
                >
                  <Link href="/projects" className="flex items-center">
                    View Projects
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400"
                  type="button"
                  onClick={() => {
                    void handleResumeDownload();
                  }}
                >
                  <span className="flex items-center">
                    Download CV
                    <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-5"
            >
              {[
                {
                  href: "https://github.com/ahsanulhoqueabir",
                  icon: GithubIcon,
                  color:
                    "hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800",
                },
                {
                  href: "https://linkedin.com/in/ahsanulhoqueabir",
                  icon: LinkedinIcon,
                  color:
                    "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30",
                },
                {
                  href: "mailto:contact.ahsanul@gmail.com",
                  icon: Mail,
                  color:
                    "hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950/30",
                },
              ].map((social) => (
                <motion.div
                  key={social.href}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    className={`flex items-center justify-center w-10 h-10 rounded-xl border border-border text-muted-foreground transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src={heroImageUrl}
                alt="Ahsanul Hoque - Full Stack Developer"
                width={1000}
                height={800}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 z-10"
        animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
          scroll
        </span>
        <ArrowDown className="h-4 w-4 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
