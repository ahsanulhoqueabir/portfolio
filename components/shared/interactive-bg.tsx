"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function InteractiveBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallel movement of lines on scroll
  const scrollYTransform1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scrollYTransform2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize values between -0.5 and 0.5
      setMousePos({
        x: (clientX / innerWidth - 0.5) * 40,
        y: (clientY / innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-background"
    >
      {/* Dynamic Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      {/* Floating Animated SVG Line Art Path 1 */}
      <svg
        className="absolute left-[-10%] top-[20%] w-[120%] h-[30%] opacity-20 dark:opacity-10 stroke-violet-500/35 dark:stroke-violet-400/20 fill-none"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 100 Q 360 250 720 100 T 1440 150"
          strokeWidth="1.5"
          style={{ y: scrollYTransform1, x: mousePos.x * 0.2 }}
          animate={{
            d: [
              "M 0 100 Q 360 250 720 100 T 1440 150",
              "M 0 150 Q 360 50 720 200 T 1440 100",
              "M 0 100 Q 360 250 720 100 T 1440 150",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M 0 120 Q 360 200 720 150 T 1440 180"
          strokeWidth="0.8"
          strokeDasharray="4 8"
          style={{ y: scrollYTransform1, x: mousePos.x * 0.3 }}
          animate={{
            d: [
              "M 0 120 Q 360 200 720 150 T 1440 180",
              "M 0 170 Q 360 100 720 220 T 1440 130",
              "M 0 120 Q 360 200 720 150 T 1440 180",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Floating Animated SVG Line Art Path 2 */}
      <svg
        className="absolute right-[-10%] bottom-[10%] w-[120%] h-[30%] opacity-20 dark:opacity-10 stroke-emerald-500/35 dark:stroke-emerald-400/20 fill-none"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 200 C 360 50, 720 250, 1440 150"
          strokeWidth="1.5"
          style={{ y: scrollYTransform2, x: mousePos.x * -0.2 }}
          animate={{
            d: [
              "M 0 200 C 360 50, 720 250, 1440 150",
              "M 0 150 C 360 200, 720 80, 1440 220",
              "M 0 200 C 360 50, 720 250, 1440 150",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M 0 180 C 340 90, 700 200, 1440 170"
          strokeWidth="0.8"
          strokeDasharray="5 5"
          style={{ y: scrollYTransform2, x: mousePos.x * -0.3 }}
          animate={{
            d: [
              "M 0 180 C 340 90, 700 200, 1440 170",
              "M 0 130 C 340 180, 700 120, 1440 200",
              "M 0 180 C 340 90, 700 200, 1440 170",
            ],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Decorative interactive nodes that float */}
      <motion.div
        className="absolute top-[15%] left-[25%] w-1.5 h-1.5 rounded-full bg-violet-500/40 blur-xs"
        style={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
      />
      <motion.div
        className="absolute bottom-[35%] right-[20%] w-2 h-2 rounded-full bg-emerald-500/40 blur-xs"
        style={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
      />
      <motion.div
        className="absolute top-[60%] left-[8%] w-1 h-1 rounded-full bg-pink-500/40 blur-xs"
        style={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
      />
    </div>
  );
}
