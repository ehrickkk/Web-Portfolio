import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";
import { projects } from "../../data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionReveal } from "../ui/SectionReveal";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionReveal>
          <SectionHeading label="Projects" title="Selected work">
            Featured builds that showcase my approach to frontend architecture,
            UX craft, and end-to-end quality.
          </SectionHeading>
        </SectionReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                <div
                  className={`relative aspect-video bg-gradient-to-br ${project.thumbnailGradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-white/30 transition-transform duration-300 group-hover:scale-110">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-heading transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3 border-t border-border pt-5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-heading"
                    >
                      <GithubIcon size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-accent"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
