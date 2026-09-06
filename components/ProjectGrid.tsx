import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/types/project";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return <p className="empty-state">No hay proyectos disponibles.</p>;
  }

  return (
    <section className="project-grid" aria-label="Listado de proyectos">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
