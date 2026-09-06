import Link from "next/link";
import { notFound } from "next/navigation";
import { formatCategory } from "@/lib/formatters";
import { getProjectById } from "@/lib/projects";

export const dynamic = "force-dynamic";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId) || projectId <= 0) {
    notFound();
  }

  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="container detail-page">
      <Link className="back-link" href="/">
        ← Volver al inicio
      </Link>

      <article className="detail-card">
        <span className="category-badge">
          {formatCategory(project.category)}
        </span>
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <Link className="primary-link" href={`/categorias/${project.category}`}>
          Ver más de {formatCategory(project.category)}
        </Link>
      </article>
    </main>
  );
}
