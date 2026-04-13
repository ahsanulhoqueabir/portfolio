"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

type ProjectDetailsGallerySectionProps = {
  title: string;
  images: string[];
};

export default function ProjectDetailsGallerySection({
  title,
  images,
}: ProjectDetailsGallerySectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null,
    );
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null,
    );
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, goPrev, goNext]);

  if (images.length === 0) return null;

  return (
    <>
      <section className="py-8 sm:py-10">
        <div className="container">
          <div className="mb-4 flex items-center justify-between sm:mb-5">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Visual Walkthrough
            </h2>
            <p className="text-xs text-muted-foreground sm:text-sm">
              {images.length} screenshot{images.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Masonry grid — images keep their natural dimensions */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {images.map((image, index) => (
              <button
                key={`gallery-${index}`}
                type="button"
                aria-label={`View ${title} screenshot ${index + 2} in full screen`}
                onClick={() => setLightboxIndex(index)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border/60 bg-muted/20 shadow-[0_8px_28px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-[0_16px_40px_-14px_rgba(0,0,0,0.45)]"
              >
                {/* Natural aspect-ratio image — portrait mobile SS stays tall, landscape desktop SS stays wide */}
                <Image
                  src={image}
                  alt={`${title} screenshot ${index + 2}`}
                  width={0}
                  height={0}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                  <ZoomIn className="h-8 w-8 scale-75 text-white opacity-0 drop-shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {isOpen && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition-colors hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm ring-1 ring-white/10">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Keyboard hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/40 backdrop-blur-sm hidden sm:block">
              ← → to navigate · Esc to close
            </div>

            {/* Prev */}
            {images.length > 1 && (
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition-all hover:bg-white/20 hover:-translate-x-px active:scale-95"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 transition-all hover:bg-white/20 hover:translate-x-px active:scale-95"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Active image — springs in on index change */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.93, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="px-14 sm:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={`${title} screenshot ${lightboxIndex + 2}`}
                width={0}
                height={0}
                sizes="90vw"
                className="max-h-[85vh] max-w-[88vw] rounded-xl object-contain shadow-2xl ring-1 ring-white/10"
                style={{ width: "auto", height: "auto" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
