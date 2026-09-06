import Link from "next/link";
import { ProjectGrid } from "@/components/ProjectGrid";
import { formatCategory } from "@/lib/formatters";
import { getProjectsByCategory } from "@/lib/projects";

export const dynamic = "force-dynamic";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = decodeURIComponent(slug).toLowerCase();
  const projects = await getProjectsByCategory(category);

  return (
    <main className="container detail-page">
      <Link className="back-link" href="/">
        ← Volver al inicio
      </Link>

      <div className="section-heading category-heading">
        <div>
          <span className="eyebrow">CATEGORÍA</span>
          <h1>{formatCategory(category)}</h1>
          <p>
            {projects.length === 0
              ? "No hay proyectos en esta categoría."
              : `${projects.length} proyecto${projects.length === 1 ? "" : "s"} encontrado${projects.length === 1 ? "" : "s"}.`}
          </p>
        </div>
      </div>

      <ProjectGrid projects={projects} />
    </main>
  );
}
