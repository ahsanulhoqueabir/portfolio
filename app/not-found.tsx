"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Compass, Home, MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const container_variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  const item_variants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-16">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(600px_circle_at_10%_10%,hsl(var(--primary)/0.16),transparent_45%),radial-gradient(500px_circle_at_90%_25%,hsl(var(--accent)/0.18),transparent_42%)]" />

      <motion.div
        variants={container_variants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[80vh] w-full max-w-2xl items-center justify-center"
      >
        <div className="w-full rounded-3xl border bg-background/85 p-8 text-center shadow-xl backdrop-blur-sm sm:p-12">
          <motion.div variants={item_variants} className="relative mb-6">
            <span className="block select-none text-[7rem] font-black leading-none text-muted-foreground/10 sm:text-[10rem]">
              404
            </span>
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.35,
                type: "spring",
                stiffness: 220,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="rounded-full border border-primary/30 bg-primary/10 p-4">
                <Compass className="h-9 w-9 text-primary" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={item_variants}>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Page Not Found
            </span>
          </motion.div>

          <motion.h1
            variants={item_variants}
            className="mb-3 text-3xl font-black text-foreground sm:text-4xl"
          >
            This route doesn&apos;t exist
          </motion.h1>

          <motion.p
            variants={item_variants}
            className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Looks like the link is broken, outdated, or the page has been
            removed from this portfolio. Let&apos;s take you somewhere useful.
          </motion.p>

          <motion.div
            variants={item_variants}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              <MoveLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              <Link href="/projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.p
            variants={item_variants}
            className="mt-10 text-xs text-muted-foreground"
          >
            Md Ahsanul Hoque Abir Portfolio &mdash; Think this is an issue?{" "}
            <Link
              href="/contact"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Contact me
            </Link>
            .
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
