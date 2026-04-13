import { Badge } from "@/components/ui/badge";

type ProjectDetailsTechStackSectionProps = {
  tech: string[];
};

export default function ProjectDetailsTechStackSection({
  tech,
}: ProjectDetailsTechStackSectionProps) {
  return (
    <section className="py-6 pb-16">
      <div className="container">
        <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="text-xs sm:text-sm"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
