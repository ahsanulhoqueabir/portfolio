import Image from "next/image";
import type { ProjectItem } from "@/types/projects.types";

type ProjectDetailsGallerySectionProps = {
  project: ProjectItem;
};

export default function ProjectDetailsGallerySection({
  project,
}: ProjectDetailsGallerySectionProps) {
  return (
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
  );
}
