import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects";
import type { Project } from "../../types";
import { ProjectCard } from "../ui/ProjectCard";
import { ProjectModal } from "../ui/ProjectModal";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionReveal } from "../ui/SectionReveal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="section-padding">
        <div className="section-container">
          <SectionReveal>
            <SectionHeading label="Projects" title="Selected work">
              Featured builds that showcase my approach to frontend architecture,
              UX craft, and end-to-end quality.
            </SectionHeading>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <SectionReveal key={project.id} delay={index * 0.1}>
                <ProjectCard
                  project={project}
                  onClick={setSelectedProject}
                />
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="mt-12 flex justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-white/10"
              >
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
