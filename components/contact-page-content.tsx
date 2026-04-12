"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  Calendar,
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type {
  ContactMethodItem,
  SocialLinkItem,
  FaqItem,
  ContactPageContentProps,
} from "@/types/contact.types";

const contactMethodIconMap: Record<
  string,
  ComponentType<{ className?: string }>
> = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

const socialIconMap: Record<string, ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactPageContent({
  contactMethods,
  socialLinks,
  faqs,
}: ContactPageContentProps) {
  return (
    <div className="min-h-screen  ">
      <section className="py-24 relative overflow-hidden dot-grid">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background pointer-events-none" />
        <motion.div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #7c3aed, #4f46e5)",
            top: "5%",
            right: "10%",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Let's{" "}
              <span className="bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your ideas to life.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 border border-border/60">
                <Clock className="h-4 w-4 text-emerald-500" />
                <span>Usually responds in 24h</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 border border-border/60">
                <MessageSquare className="h-4 w-4 text-violet-500" />
                <span>Available for freelance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method) => {
              const Icon =
                contactMethodIconMap[method.title.toLowerCase()] ?? Mail;
              const gradientClass =
                method.colorClass ??
                method.color ??
                "from-blue-500 to-cyan-500";

              return (
                <motion.div key={method.title} variants={itemVariants}>
                  <Link href={method.href}>
                    <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                      <CardHeader>
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r ${gradientClass} text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="h-8 w-8" />
                        </div>
                        <CardTitle>{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {method.contact}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Connect on Social</CardTitle>
                  <CardDescription>
                    Follow me on social media for updates and insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {socialLinks.map((social) => {
                      const Icon = socialIconMap[social.name.toLowerCase()];
                      const colorClass =
                        social.colorClass ??
                        social.color ??
                        "hover:text-primary";

                      return (
                        <Link
                          key={social.name}
                          href={social.href}
                          className={`flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-all duration-200 ${colorClass}`}
                        >
                          {Icon ? <Icon className="h-5 w-5" /> : null}
                          <div>
                            <div className="font-medium">{social.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {social.username}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Freelance Projects</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        Available
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Full-time Opportunities</span>
                      <Badge variant="secondary">Open to discuss</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Consulting</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        Available
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Email</span>
                      <span className="text-muted-foreground">
                        Within 24 hours
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Project Inquiries</span>
                      <span className="text-muted-foreground">Same day</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Urgent Matters</span>
                      <span className="text-muted-foreground">
                        Within 2 hours
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about working with me
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-6 relative perspective-1000"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                variants={itemVariants}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${-index * 10}px)`,
                  zIndex: faqs.length - index,
                }}
                whileHover={{
                  transform: `translateZ(${-index * 10 + 50}px)`,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="backdrop-blur-sm bg-card/80 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
