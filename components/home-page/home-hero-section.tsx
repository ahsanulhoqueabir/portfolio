"use client";

import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import {
  ArrowDown,
  Download,
  ExternalLink,
  GithubIcon,
  LinkedinIcon,
  Mail,
  Code2,
  Cpu,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { containerVariants, heroPatternStyle, itemVariants } from "./constants";

type HomeHeroSectionProps = {
  heroSubtitle: string;
  heroImageUrl: string;
  cvDownloadUrl: string;
};

// Word reveal animations
const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const titleWordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
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

  // Mouse Parallax Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 60, damping: 22 };
  const floatX1 = useSpring(useTransform(mouseX, (val) => val * 0.4), springConfig);
  const floatY1 = useSpring(useTransform(mouseY, (val) => val * 0.4), springConfig);
  const floatX2 = useSpring(useTransform(mouseX, (val) => val * -0.6), springConfig);
  const floatY2 = useSpring(useTransform(mouseY, (val) => val * -0.6), springConfig);
  const floatX3 = useSpring(useTransform(mouseX, (val) => val * 0.2), springConfig);
  const floatY3 = useSpring(useTransform(mouseY, (val) => val * -0.2), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 50);
      mouseY.set((clientY / innerHeight - 0.5) * 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Blueprint Drawing Paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M -50,150 L 150,150 L 220,220 L 400,220"
          stroke="currentColor"
          className="text-violet-500/15 dark:text-violet-500/10"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 1500,100 L 1300,100 L 1230,170 L 1050,170"
          stroke="currentColor"
          className="text-emerald-500/15 dark:text-emerald-500/10"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 0.4, ease: "easeInOut" }}
        />
      </svg>

      <div
        className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
        style={heroPatternStyle}
      />
      <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/70 to-background pointer-events-none z-0" />

      {/* Radial blurring background glows */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-35 dark:opacity-25"
        style={{
          background: "radial-gradient(circle, #7c3aed, #4f46e5)",
          left: "8%",
          top: "10%",
          x: floatX1,
          y: floatY1,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 dark:opacity-20"
        style={{
          background: "radial-gradient(circle, #ec4899, #f43f5e)",
          right: "10%",
          top: "15%",
          x: floatX2,
          y: floatY2,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="container relative z-10 py-28 md:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text items */}
          <div className="text-center lg:text-left lg:col-span-7">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400 dark:bg-violet-500/5 dark:border-violet-500/15"
                whileHover={{ scale: 1.05, border: "1px solid rgba(139, 92, 246, 0.4)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Available for freelance work
              </motion.span>
            </motion.div>

            {/* Title with letter reveals */}
            <motion.h1
              variants={titleContainerVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none"
            >
              <motion.span variants={titleWordVariants} className="block text-foreground">
                Full Stack
              </motion.span>
              <motion.span
                variants={titleWordVariants}
                className="block bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "300% 300%" }}
              >
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              {heroSubtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="group bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg shadow-violet-500/25 cursor-none"
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
                  className="group border-violet-500/20 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 cursor-none"
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
                  className="group border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-none"
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

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-5"
            >
              {[
                {
                  href: "https://github.com/ahsanulhoqueabir",
                  icon: GithubIcon,
                  color:
                    "hover:text-foreground hover:bg-muted border-muted/50",
                },
                {
                  href: "https://linkedin.com/in/ahsanulhoqueabir",
                  icon: LinkedinIcon,
                  color:
                    "hover:text-blue-600 hover:bg-blue-500/10 dark:hover:bg-blue-950/30 border-muted/50",
                },
                {
                  href: "mailto:contact.ahsanul@gmail.com",
                  icon: Mail,
                  color:
                    "hover:text-violet-600 hover:bg-violet-500/10 dark:hover:bg-violet-950/30 border-muted/50",
                },
              ].map((social) => (
                <motion.div
                  key={social.href}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    className={`flex items-center justify-center w-11 h-11 rounded-xl border text-muted-foreground transition-all duration-200 cursor-none ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image with custom SVG frame drawing overlays */}
          <div className="relative mx-auto w-full max-w-lg lg:col-span-5 flex items-center justify-center">
            
            {/* SVG tech frames & dashboard overlays */}
            <div className="absolute inset-[-30px] flex items-center justify-center pointer-events-none z-0">
              <svg className="w-[115%] h-[115%] stroke-violet-500/20 dark:stroke-violet-400/10 fill-none" viewBox="0 0 400 400">
                <motion.circle
                  cx="200"
                  cy="200"
                  r="170"
                  strokeWidth="1.2"
                  strokeDasharray="8 20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="150"
                  strokeWidth="1"
                  strokeDasharray="60 30 180 30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M 50,200 A 150,150 0 0,1 350,200"
                  strokeWidth="2"
                  className="stroke-violet-500/40 dark:stroke-violet-400/25"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                />
              </svg>
            </div>

            {/* Float elements (react, cpu etc icons floating) */}
            <motion.div
              className="absolute top-4 left-4 p-3 rounded-2xl bg-background/85 border border-border/80 shadow-lg text-violet-500 z-20 backdrop-blur-md"
              style={{ x: floatX1, y: floatY1 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 className="h-6 w-6" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-6 right-4 p-3 rounded-2xl bg-background/85 border border-border/80 shadow-lg text-emerald-500 z-20 backdrop-blur-md"
              style={{ x: floatX2, y: floatY2 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cpu className="h-6 w-6" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-16 left-[-10px] p-2.5 rounded-2xl bg-background/85 border border-border/80 shadow-lg text-pink-500 z-20 backdrop-blur-md"
              style={{ x: floatX3, y: floatY3 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Layers className="h-5 w-5" />
            </motion.div>

            {/* Main picture container */}
            <motion.div
              variants={itemVariants}
              className="relative w-full aspect-square md:aspect-auto md:h-[450px] lg:h-[480px] overflow-hidden rounded-[2.5rem] border-2 border-border/60 hover:border-violet-500/50 shadow-2xl transition-colors duration-500 z-10 bg-muted/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={heroImageUrl}
                alt="Ahsanul Hoque - Full Stack Developer"
                width={800}
                height={800}
                priority
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Modern pulsing scroll-down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] text-muted-foreground font-semibold tracking-[0.2em] uppercase select-none">
          scroll
        </span>
        <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-muted-foreground/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
