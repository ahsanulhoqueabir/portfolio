type PageSectionHeadingProps = {
  prefix?: string;
  highlight: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  highlightClassName?: string;
  descriptionClassName?: string;
};

export default function PageSectionHeading({
  prefix,
  highlight,
  description,
  className = "",
  titleClassName = "text-3xl md:text-5xl font-bold mb-4",
  highlightClassName = "bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent",
  descriptionClassName = "text-lg text-muted-foreground",
}: PageSectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className={titleClassName}>
        {prefix ? (
          <>
            {prefix} <span className={highlightClassName}>{highlight}</span>
          </>
        ) : (
          <span className={highlightClassName}>{highlight}</span>
        )}
      </h2>
      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
    </div>
  );
}
