import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  CircleCheck,
  ExternalLink,
  Github,
  Lightbulb,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectDetailsPageContentProps } from "@/types/projects.types";

export default function ProjectDetailsPageContent({
  project,
}: ProjectDetailsPageContentProps) {
  const publishedDate = project.date
    ? new Date(project.date).toLocaleDateString()
    : "N/A";

  const insightSections = [
    {
      key: "features",
      title: "Feature List",
      icon: CircleCheck,
      iconColor: "text-emerald-500",
      items: project.features,
      marker: "bg-emerald-500",
    },
    {
      key: "learnings",
      title: "What I Learned",
      icon: Lightbulb,
      iconColor: "text-amber-500",
      items: project.learnings,
      marker: "bg-amber-500",
    },
    {
      key: "limitations",
      title: "Limitations Faced",
      icon: ShieldAlert,
      iconColor: "text-rose-500",
      items: project.limitations,
      marker: "bg-rose-500",
    },
  ].filter((section) => section.items.length > 0);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-10 sm:py-12 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_38%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />
        <div className="container relative z-10 space-y-6">
          <Button
            variant="ghost"
            asChild
            className="w-fit px-0 hover:bg-transparent"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                className={
                  project.status === "completed"
                    ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"
                    : "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30"
                }
              >
                {project.status === "completed" ? "Completed" : "In Progress"}
              </Badge>
              <Badge variant="secondary" className="capitalize">
                {project.category}
              </Badge>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {publishedDate}
              </span>
            </div>

            <h1 className="text-balance text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.longDescription || project.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              className="border-0 bg-linear-to-r from-violet-600 to-indigo-600 text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.8)] hover:from-violet-500 hover:to-indigo-500"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
            {project.demo && (
              <Button variant="outline" asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-6">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/20 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.65)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />
            <Image
              src={project.image || project.images?.[0] || "/placeholder.jpg"}
              alt={project.title}
              width={1200}
              height={680}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {project.images && project.images.length > 1 && (
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="overflow-hidden rounded-xl border border-border/60 bg-muted/20 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    width={400}
                    height={225}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {insightSections.length > 0 && (
        <section className="py-10 sm:py-12">
          <div className="container grid grid-cols-1 gap-5 lg:grid-cols-3">
            {insightSections.map((section) => {
              const Icon = section.icon;

              return (
                <Card
                  key={section.key}
                  className="group relative overflow-hidden border-border/60 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-[0_18px_40px_-30px_rgba(0,0,0,0.9)]"
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-1 opacity-70 ${section.marker}`}
                  />
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Icon className={`h-5 w-5 ${section.iconColor}`} />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      <section className="py-6 pb-16">
        <div className="container">
          <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs sm:text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
