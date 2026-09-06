"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main className="container error-state">
      <span className="eyebrow">ERROR</span>
      <h1>No fue posible cargar la información.</h1>
      <p>
        Verifica la conexión con Supabase y las variables de entorno del
        proyecto.
      </p>
      <button className="button" type="button" onClick={reset}>
        Intentar de nuevo
      </button>
    </main>
  );
}
