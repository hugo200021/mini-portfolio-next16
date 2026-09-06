import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Portfolio",
  description: "Portafolio construido con Next.js 16 y Supabase.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <header className="site-header">
          <div className="container header-content">
            <Link className="brand" href="/">
              Mini Portfolio
            </Link>
            <span className="tech-label">Next.js + Supabase</span>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container">
            Proyecto académico · Next.js 16 · App Router · Supabase
          </div>
        </footer>
      </body>
    </html>
  );
}
