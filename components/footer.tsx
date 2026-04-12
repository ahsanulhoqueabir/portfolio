"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  MapPin,
  Code2,
  Heart,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Resources", href: "/resources" },
  ],
};

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/ahsanulhoqueabir",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/ahsanulhoqueabir",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:contact.ahsanul@gmail.com",
    label: "Email",
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t relative">
      <div className="container px-4 mx-auto">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-sm">
                  <Code2 className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-xl bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Ahsanul
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md text-sm lg:text-base">
                Full Stack Developer passionate about creating exceptional
                digital experiences with clean code and modern design.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <MapPin className="h-4 w-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-base lg:text-lg">Navigation</h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-base lg:text-lg">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ahsanul. All rights reserved.
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Available for freelance work
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20" />
      </div>
    </footer>
  );
}
