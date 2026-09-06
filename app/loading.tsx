export default function Loading() {
  return (
    <main className="container loading-state" aria-live="polite">
      <div className="loader" aria-hidden="true" />
      <p>Cargando proyectos...</p>
    </main>
  );
}
