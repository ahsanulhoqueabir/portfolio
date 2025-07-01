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
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 hidden md:block",
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Ahsanul</span>
            </div>
          </Link>

          <nav className="flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {route.name}
              </Link>
            ))}
            <ModeToggle />
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t">
        <div className="flex justify-around items-center h-16">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "flex flex-col items-center justify-center space-y-1 text-xs font-medium transition-colors hover:text-primary",
                  pathname === route.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{route.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
