import Link from "next/link";
import { formatCategory } from "@/lib/formatters";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <span className="category-badge">{formatCategory(project.category)}</span>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <div className="card-actions">
        <Link className="primary-link" href={`/proyectos/${project.id}`}>
          Ver proyecto
        </Link>
        <Link className="secondary-link" href={`/categorias/${project.category}`}>
          Ver categoría
        </Link>
      </div>
    </article>
  );
}
