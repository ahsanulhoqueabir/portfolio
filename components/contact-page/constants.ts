import type { ComponentType } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const contactMethodIconMap: Record<
  string,
  ComponentType<{ className?: string }>
> = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

export const socialIconMap: Record<
  string,
  ComponentType<{ className?: string }>
> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
