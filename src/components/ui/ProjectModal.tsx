import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../../types";
import { GithubIcon } from "./BrandIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function isImageUrl(value: string): boolean {
  return value.startsWith("http") || value.startsWith("/");
}

function getSlides(project: Project): string[] {
  if (project.images.length > 0) return project.images;
  return [project.gradient];
}

interface ImageCarouselProps {
  project: Project;
  slides: string[];
}

function ImageCarousel({ project, slides }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const showControls = slides.length > 1;

  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [project.id]);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        const next = prev + newDirection;
        if (next < 0) return slides.length - 1;
        if (next >= slides.length) return 0;
        return next;
      });
    },
    [slides.length],
  );

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) paginate(1);
    else if (info.offset.x > swipeThreshold) paginate(-1);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir >= 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir >= 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="group relative aspect-video w-full shrink-0 overflow-hidden rounded-t-2xl">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`${project.id}-${currentIndex}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          drag={showControls ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          className="absolute inset-0"
        >
          {isImageUrl(currentSlide) ? (
            <img
              src={currentSlide}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              className="h-full w-full object-fill"
              draggable={false}
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${currentSlide || project.gradient}`}
            >
              <span className="font-display text-6xl font-bold text-white/25">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {showControls && (
        <>
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous image"
            className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-black/70"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next image"
            className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-black/70"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "h-1.5 w-4 bg-accent"
                    : "h-1.5 w-1.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (typeof document === "undefined") return null;

  const slides = project ? getSlides(project) : [];

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-md md:items-center md:p-6"
          onClick={onClose}
          role="presentation"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="fixed top-4 right-4 z-[110] rounded-xl border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>

          <motion.div
            key={project.id}
            initial={
              isMobile
                ? { opacity: 0, y: "100%" }
                : { opacity: 0, scale: 0.95 }
            }
            animate={
              isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1 }
            }
            exit={
              isMobile
                ? { opacity: 0, y: "100%" }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-[#1a1a2e] md:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <ImageCarousel project={project} slides={slides} />

            <div className="modal-scrollbar min-h-0 flex-1 overflow-y-auto px-6 pt-5 pb-4">
              <h2
                id="project-modal-title"
                className="mb-3 text-xl font-bold text-white"
              >
                {project.title}
              </h2>

              <div className="mb-4 inline-flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mb-4 text-sm leading-relaxed text-white/70">
                {project.longDescription}
              </p>

              <div className="my-4 border-t border-white/10 pt-4">
                <h3 className="mb-2 font-mono text-xs tracking-widest text-accent uppercase">
                  The Problem
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {project.problem}
                </p>
              </div>

              <div className="my-4 border-t border-white/10 pt-4">
                <h3 className="mb-2 font-mono text-xs tracking-widest text-accent uppercase">
                  My Role
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {project.role}
                </p>
              </div>
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="sticky bottom-0 shrink-0 border-t border-white/10 bg-[#1a1a2e] px-6 py-4">
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                    >
                      <ExternalLink size={15} />
                      Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      <GithubIcon size={15} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
