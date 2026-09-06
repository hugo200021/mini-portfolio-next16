import { createClient } from "@supabase/supabase-js";

function getRequiredEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      `Falta la variable de entorno ${name}. Revisa tu archivo .env.local.`,
    );
  }

  return value;
}

export function createSupabaseClient() {
  const supabaseUrl = getRequiredEnvironmentVariable(
    "NEXT_PUBLIC_SUPABASE_URL",
  );
  const supabaseKey = getRequiredEnvironmentVariable(
    "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  );

  return createClient(supabaseUrl, supabaseKey);
}
