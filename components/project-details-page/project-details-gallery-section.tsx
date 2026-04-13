import Image from "next/image";

type ProjectDetailsGallerySectionProps = {
  title: string;
  images: string[];
};

export default function ProjectDetailsGallerySection({
  title,
  images,
}: ProjectDetailsGallerySectionProps) {
  if (images.length === 0) {
    return null;
  }

  const getHeightClass = (index: number) => {
    const variants = ["h-52", "h-64", "h-72", "h-60", "h-80"];
    return variants[index % variants.length];
  };

  return (
    <section className="py-8 sm:py-10">
      <div className="container">
        <div className="mb-4 flex items-center justify-between sm:mb-5">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Visual Walkthrough
          </h2>
          <p className="text-xs text-muted-foreground sm:text-sm">
            {images.length} screenshots
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border/60 bg-muted/15 shadow-[0_20px_40px_-35px_rgba(0,0,0,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border"
            >
              <div
                className={`relative w-full overflow-hidden ${getHeightClass(index)}`}
              >
                <Image
                  src={image}
                  alt={`${title} screenshot ${index + 2}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
