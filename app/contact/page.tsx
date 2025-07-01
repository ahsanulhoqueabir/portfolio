"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Clock,
  MessageSquare,
  Calendar,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send me an email anytime",
    contact: "contact.ahsanul@gmail.com",
    href: "mailto:contact.ahsanul@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call me during business hours",
    contact: "+880 1875 507852",
    href: "tel:+8801875507852",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in Dhaka, Bangladesh",
    contact: "Dhaka, Bangladesh",
    href: "#",
    color: "from-purple-500 to-pink-500",
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/ahsanulhoqueabir",
    username: "@ahsanulhoqueabir",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/ahsanulhoqueabir",
    username: "ahsanulhoqueabir",
    color: "hover:text-blue-600",
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://x.com/Ahsanul_H_Abir",
    username: "@Ahsanul_H_Abir",
    color: "hover:text-blue-400",
  },
];

const faqs = [
  {
    question: "What's your typical response time?",
    answer:
      "I usually respond to emails and messages within 24 hours during business days.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! I work with clients from all around the world. I'm comfortable with different time zones and communication styles.",
  },
  {
    question: "What's your preferred project communication method?",
    answer:
      "I prefer using email for formal communications and Slack or Discord for real-time project discussions.",
  },
];

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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        reset(); // Reset form after successful submission
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen  ">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your ideas to life.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Usually responds in 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Available for freelance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div key={method.title} variants={itemVariants}>
                <Link href={method.href}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                    <CardHeader>
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${method.color} text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <method.icon className="h-8 w-8" />
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
            ))}
          </motion.div>

          {/* Contact Form & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Send Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Status Messages */}
                  {submitStatus.type && (
                    <Alert
                      className={
                        submitStatus.type === "success"
                          ? "border-green-200 bg-green-50 text-green-800"
                          : "border-red-200 bg-red-50 text-red-800"
                      }
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <AlertCircle className="h-4 w-4" />
                      )}
                      <AlertDescription>
                        {submitStatus.message}
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...register("name")}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          {...register("email")}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Project inquiry"
                        {...register("subject")}
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        className={`min-h-[120px] ${
                          errors.message ? "border-red-500" : ""
                        }`}
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Connect on Social</CardTitle>
                  <CardDescription>
                    Follow me on social media for updates and insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        className={`flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-all duration-200 ${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                        <div>
                          <div className="font-medium">{social.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {social.username}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
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

              {/* Response Time */}
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

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
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
