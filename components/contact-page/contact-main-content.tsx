import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
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
import type { SocialLinkItem } from "@/types/contact.types";
import { socialIconMap } from "./constants";

type ContactMainContentProps = {
  socialLinks: SocialLinkItem[];
};

export default function ContactMainContent({
  socialLinks,
}: ContactMainContentProps) {
  return (
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
                  social.colorClass ?? social.color ?? "hover:text-primary";

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
                <span className="text-muted-foreground">Within 24 hours</span>
              </div>
              <div className="flex justify-between">
                <span>Project Inquiries</span>
                <span className="text-muted-foreground">Same day</span>
              </div>
              <div className="flex justify-between">
                <span>Urgent Matters</span>
                <span className="text-muted-foreground">Within 2 hours</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
