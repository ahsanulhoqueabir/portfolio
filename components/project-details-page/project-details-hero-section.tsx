import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProjectItem } from "@/types/projects.types";

type ProjectDetailsHeroSectionProps = {
  project: ProjectItem;
  publishedDate: string;
};

export default function ProjectDetailsHeroSection({
  project,
  publishedDate,
}: ProjectDetailsHeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-8 sm:py-10 ">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_38%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />
      <div className="container relative z-10 space-y-7">
        <div className="space-y-6">
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

          <div className="flex items-start justify-between gap-4">
            <h1 className="text-pretty text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <Button
              variant="outline"
              asChild
              className="group mt-1 hidden shrink-0 rounded-full border-border/60 bg-background/75 pl-2 pr-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-border hover:bg-background sm:inline-flex"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground transition-transform duration-300 group-hover:-translate-x-0.5">
                  <ArrowLeft className="h-3.5 w-3.5" />
                </span>
                Back to Projects
              </Link>
            </Button>
          </div>

          <p className="w-full text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
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
  );
}
