import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CertificationItem } from "@/types/skills.types";
import { containerVariants, itemVariants } from "./constants";

type SkillsCertificationsSectionProps = {
  certifications: CertificationItem[];
};

export default function SkillsCertificationsSection({
  certifications,
}: SkillsCertificationsSectionProps) {
  return (
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
            <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional certifications that validate my expertise
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/70 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-1 w-full bg-linear-to-r from-amber-500 via-orange-500 to-rose-500" />
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Badge className="rounded-full" variant="secondary">
                        {cert.issuer}
                      </Badge>
                    </div>
                    <div className="text-3xl">{cert.icon}</div>
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {cert.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {cert.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-3 pt-0">
                  <Badge variant="outline">{cert.date}</Badge>
                  {cert.certificate ? (
                    <Button asChild size="sm" className="rounded-full px-4">
                      <a
                        href={cert.certificate}
                        target="_blank"
                        rel="noreferrer"
                        download
                        aria-label={`Open certificate for ${cert.name}`}
                      >
                        Certificate
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
