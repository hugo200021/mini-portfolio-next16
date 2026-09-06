# Mini Portfolio — Next.js 16 + Supabase

Landing page académica desarrollada con **Next.js 16**, **App Router**, **TypeScript** y **Supabase**. El proyecto muestra un portafolio de proyectos almacenados en una base de datos serverless y utiliza Server Components para consultar la información.

## Requisitos de la actividad cubiertos

- Next.js 16+ con App Router.
- Supabase como base de datos serverless.
- Lectura de datos desde Server Components.
- Ruta dinámica `/proyectos/[id]`.
- Ruta dinámica `/categorias/[slug]`.
- Tabla `projects` con 5 registros de ejemplo.
- RLS configurado con acceso público de solo lectura.
- Loading state mediante `app/loading.tsx`.
- Manejo de errores mediante `app/error.tsx`.
- Diseño responsive.
- Variables de entorno sin credenciales en el repositorio.
- Código separado por responsabilidades.

## Requisitos locales

- Node.js 20.9 o superior.
- npm.
- Proyecto de Supabase.

## Instalación

```bash
npm install
```

Copia el archivo de ejemplo:

```bash
cp .env.example .env.local
```

En Windows también puedes crear manualmente `.env.local`.

Agrega tus valores:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=tu_publishable_key
```

## Configuración de Supabase

1. Crea un proyecto en Supabase.
2. Abre **SQL Editor**.
3. Ejecuta el contenido de `supabase/schema.sql`.
4. Obtén la URL del proyecto y la Publishable Key.
5. Colócalas en `.env.local`.

El SQL crea la tabla `projects`, agrega cinco registros, habilita RLS y permite únicamente lectura pública para el rol `anon`.

## Ejecutar localmente

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Validar código

```bash
npm run lint
npm run build
```

## Rutas dinámicas

### Proyecto individual

```text
/proyectos/1
/proyectos/2
```

### Categoría

```text
/categorias/web
/categorias/backend
/categorias/productividad
```

## Estructura

```text
app/
├── categorias/[slug]/page.tsx
├── proyectos/[id]/page.tsx
├── error.tsx
├── loading.tsx
├── not-found.tsx
├── globals.css
├── layout.tsx
└── page.tsx
components/
├── ProjectCard.tsx
└── ProjectGrid.tsx
lib/
├── formatters.ts
├── projects.ts
└── supabase.ts
types/
└── project.ts
supabase/
└── schema.sql
```

## Clean Code aplicado

- Los componentes visuales no contienen lógica de acceso a datos.
- Las consultas a Supabase están centralizadas en `lib/projects.ts`.
- La creación del cliente está aislada en `lib/supabase.ts`.
- Los tipos del dominio están separados en `types/project.ts`.
- Nombres descriptivos y funciones pequeñas con una sola responsabilidad.
- No se utiliza `use client` excepto donde Next.js lo requiere para el error boundary.
- No se incluyen credenciales en el repositorio.

## Despliegue

El proyecto puede desplegarse en Vercel. Antes del despliegue agrega las mismas variables de entorno configuradas localmente en la sección **Environment Variables** del proyecto de Vercel.
