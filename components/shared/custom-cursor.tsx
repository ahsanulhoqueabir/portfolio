"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position of the mouse pointer
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring settings for smooth lag effect on the trailing ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(
        window.matchMedia("(pointer: coarse)").matches ||
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0
      );
    };

    checkTouch();
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Event delegation for hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if hovering interactive element
      const interactiveEl = target.closest("a, button, input, textarea, select, [role='button'], [role='link'], .interactive-hover");
      
      if (interactiveEl) {
        if (interactiveEl.classList.contains("border-violet-500") || interactiveEl.textContent?.includes("Demo")) {
          setHovered("violet");
        } else if (interactiveEl.classList.contains("border-emerald-500") || interactiveEl.textContent?.includes("CV")) {
          setHovered("emerald");
        } else {
          setHovered("default");
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveEl = target.closest("a, button, input, textarea, select, [role='button'], [role='link'], .interactive-hover");
      if (interactiveEl) {
        setHovered(null);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible, isTouchDevice]);

  if (isTouchDevice) return null;

  // Ring dimensions and properties based on hover state
  const ringSize = hovered ? 56 : 28;
  const ringBorderColor =
    hovered === "violet"
      ? "border-violet-500/80 bg-violet-500/10"
      : hovered === "emerald"
      ? "border-emerald-500/80 bg-emerald-500/10"
      : hovered
      ? "border-violet-600/80 bg-violet-600/10 dark:border-violet-400/80 dark:bg-violet-400/10"
      : "border-muted-foreground/45";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-100 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Outer ring */}
      <motion.div
        className={`absolute rounded-full border-2 transition-colors duration-300 flex items-center justify-center`}
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {hovered && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`w-2 h-2 rounded-full ${
              hovered === "violet"
                ? "bg-violet-500"
                : hovered === "emerald"
                ? "bg-emerald-500"
                : "bg-violet-600 dark:bg-violet-400"
            }`}
          />
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className={`absolute w-1.5 h-1.5 rounded-full z-50 bg-violet-600 dark:bg-violet-400`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
