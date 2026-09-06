import { createSupabaseClient } from "@/lib/supabase";
import type { Project } from "@/types/project";

const PROJECT_FIELDS = "id, title, description, category";

function throwDatabaseError(message: string, details: string): never {
  throw new Error(`${message}: ${details}`);
}

export async function getProjects(): Promise<Project[]> {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("projects")
    .select(PROJECT_FIELDS)
    .order("id", { ascending: true });

  if (error) {
    throwDatabaseError("No se pudieron cargar los proyectos", error.message);
  }

  return data ?? [];
}

export async function getProjectById(id: number): Promise<Project | null> {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("projects")
    .select(PROJECT_FIELDS)
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throwDatabaseError("No se pudo cargar el proyecto", error.message);
  }

  return data;
}

export async function getProjectsByCategory(
  category: string,
): Promise<Project[]> {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase
    .from("projects")
    .select(PROJECT_FIELDS)
    .eq("category", category)
    .order("id", { ascending: true });

  if (error) {
    throwDatabaseError(
      "No se pudieron cargar los proyectos de la categoría",
      error.message,
    );
  }

  return data ?? [];
}
