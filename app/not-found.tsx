import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="container error-state">
      <span className="eyebrow">404</span>
      <h1>Proyecto no encontrado.</h1>
      <p>El recurso solicitado no existe.</p>
      <Link className="primary-link" href="/">
        Volver al inicio
      </Link>
    </main>
  );
}
