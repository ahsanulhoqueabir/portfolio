import Image from "next/image";

type ProjectDetailsFeaturedImageSectionProps = {
  title: string;
  image?: string;
};

export default function ProjectDetailsFeaturedImageSection({
  title,
  image,
}: ProjectDetailsFeaturedImageSectionProps) {
  const featuredImage = image || "/placeholder.jpg";

  return (
    <section className="py-2 sm:py-4">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/20 shadow-[0_24px_70px_-36px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-cyan-500 via-emerald-500 to-amber-500" />
          <Image
            src={featuredImage}
            alt={`${title} featured preview`}
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
