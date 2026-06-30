import { ExternalLink } from "lucide-react";
import type { Project } from "../../types";
import { GithubIcon } from "./BrandIcons";

function isImageUrl(value: string): boolean {
  return value.startsWith("http") || value.startsWith("/");
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onClick(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(project);
        }
      }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
    >
      <div
        className={`relative aspect-video bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        {project.images[0] && isImageUrl(project.images[0]) ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className="h-full w-full object-fill"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-4xl font-bold text-white/30 transition-transform duration-300 group-hover:scale-110">
                {project.title.charAt(0)}
              </span>
            </div>
            <div className="absolute inset-0 bg-grid opacity-20" />
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-heading transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3 border-t border-border pt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-heading"
            >
              <GithubIcon size={16} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-accent"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
