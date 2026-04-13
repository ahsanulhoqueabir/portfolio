import { CheckCircle2, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type InsightSection = {
  key: string;
  title: string;
  icon: LucideIcon;
  iconColor: string;
  items: string[];
  marker: string;
};

type ProjectDetailsInsightsSectionProps = {
  insightSections: InsightSection[];
};

export default function ProjectDetailsInsightsSection({
  insightSections,
}: ProjectDetailsInsightsSectionProps) {
  if (insightSections.length === 0) {
    return null;
  }

  return (
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
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${section.iconColor}`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
