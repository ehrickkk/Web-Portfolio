import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/sections/Navbar";
import { ProjectCard } from "../components/ui/ProjectCard";
import { ProjectModal } from "../components/ui/ProjectModal";
import { projects } from "../data/projects";
import type { Project } from "../types";

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-bg text-body">
      <Navbar />

      <main className="section-container px-5 pt-28 pb-20 md:px-8 md:pt-32">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mb-12 md:mb-16">
          <p className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
            Portfolio
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-heading md:text-4xl lg:text-5xl">
            All Projects
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
            Every build, experiment, and shipped product.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
