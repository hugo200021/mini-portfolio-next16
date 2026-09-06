import Link from "next/link";
import { ProjectGrid } from "@/components/ProjectGrid";
import { formatCategory } from "@/lib/formatters";
import { getProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const projects = await getProjects();
  const categories = [...new Set(projects.map((project) => project.category))];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">PORTAFOLIO PERSONAL</span>
          <h1>Proyectos simples, ideas claras.</h1>
          <p className="hero-copy">
            Una selección de proyectos consultados desde Supabase mediante
            Server Components de Next.js.
          </p>
        </div>
      </section>

      <section className="container content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PROYECTOS</span>
            <h2>Trabajo reciente</h2>
          </div>

          <nav className="category-nav" aria-label="Categorías">
            {categories.map((category) => (
              <Link key={category} href={`/categorias/${category}`}>
                {formatCategory(category)}
              </Link>
            ))}
          </nav>
        </div>

        <ProjectGrid projects={projects} />
      </section>
    </main>
  );
}
