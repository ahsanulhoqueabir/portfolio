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

function EmptyState({ label }: { label: string }) {
  return <p className="text-sm text-muted-foreground">No {label} added yet.</p>;
}

export default function ProjectDetailsPageContent({
  project,
}: ProjectDetailsPageContentProps) {
  const publishedDate = project.date
    ? new Date(project.date).toLocaleDateString()
    : "N/A";

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-10 sm:py-12 md:py-16">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background pointer-events-none" />
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

          <div className="space-y-4">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {project.longDescription || project.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              className="bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0"
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
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/20">
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
                  className="overflow-hidden rounded-xl border border-border/60 bg-muted/20"
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

      <section className="py-10 sm:py-12">
        <div className="container grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Card className="border-border/60">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CircleCheck className="h-5 w-5 text-emerald-500" />
                Feature List
              </CardTitle>
            </CardHeader>
            <CardContent>
              {project.features.length === 0 ? (
                <EmptyState label="features" />
              ) : (
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                What I Learned
              </CardTitle>
            </CardHeader>
            <CardContent>
              {project.learnings.length === 0 ? (
                <EmptyState label="learnings" />
              ) : (
                <ul className="space-y-2">
                  {project.learnings.map((learning) => (
                    <li
                      key={learning}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      • {learning}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <ShieldAlert className="h-5 w-5 text-rose-500" />
                Limitations Faced
              </CardTitle>
            </CardHeader>
            <CardContent>
              {project.limitations.length === 0 ? (
                <EmptyState label="limitations" />
              ) : (
                <ul className="space-y-2">
                  {project.limitations.map((limitation) => (
                    <li
                      key={limitation}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      • {limitation}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

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
