"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Code2,
  Home,
  User,
  Briefcase,
  Code,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const routes = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Skills", path: "/skills", icon: Code },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 hidden md:block",
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50"
            : "bg-transparent"
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Code2 className="h-4 w-4 text-white" />
              </motion.div>
              <span className="font-bold text-xl bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Ahsanul
              </span>
            </div>
          </Link>

          <nav className="flex items-center space-x-1">
            {routes.map((route) => {
              const isActive = pathname === route.path;
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "text-violet-600 dark:text-violet-400"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-lg bg-violet-500/10 dark:bg-violet-500/15"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{route.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-linear-to-r from-violet-500 to-indigo-500"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="ml-2">
              <ModeToggle />
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-t border-border/50">
        <div className="flex justify-around items-center h-16">
          {routes.map((route) => {
            const Icon = route.icon;
            const isActive = pathname === route.path;
            return (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "relative flex flex-col items-center justify-center space-y-1 text-xs font-medium transition-colors min-w-[48px] py-1",
                  isActive
                    ? "text-violet-600 dark:text-violet-400"
                    : "text-muted-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-nav-active"
                    className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-6 h-1 rounded-b-full bg-linear-to-r from-violet-500 to-indigo-500"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                  />
                )}
                <motion.div
                  animate={{ scale: isActive ? 1.15 : 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <span>{route.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
