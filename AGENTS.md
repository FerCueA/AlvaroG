# AGENTS.md

Guía para agentes de IA (y personas) que trabajen en este repositorio.

## Design

Before creating or modifying frontend or UI code, read `DESIGN.md`.

All new UI should follow the design system documented in `DESIGN.md`.

Prefer existing components and design tokens over creating new ones.

Do not introduce new colors, spacing values, border radii, typography styles or
UI patterns unless there is a clear reason.

If an existing component already solves the problem, reuse or extend it instead
of duplicating it.

## Project structure

Before creating a new file, inspect the existing project structure and place it
in the most appropriate location.

```
src/
├── components/
│   ├── layout/     # Header, Footer, MobileNav (chrome de la página)
│   ├── sections/   # Hero, Services, Pricing, Cta (secciones de la landing)
│   └── ui/         # Icon, SectionHeader, WhatsAppButton (primitivas reutilizables)
├── data/           # Contenido: services.ts, plans.ts
├── lib/            # Config del sitio y helpers: site.ts
├── scripts/        # Lógica de cliente reutilizable: carousel.ts
├── layouts/        # Layout.astro
├── pages/          # Rutas
└── styles/         # global.css (design tokens)
```

- Datos de contacto, navegación y metadatos: `src/lib/site.ts` (no repetirlos).
- Contenido editable (tratamientos, precios): `src/data/*`.
- Estilos: tokens y clases base en `src/styles/global.css`; no hex sueltos.

Avoid creating duplicate utilities, components, hooks or styles.

Prefer small reusable components over large duplicated implementations.

Do not reorganize unrelated parts of the repository without a clear
maintainability benefit.

## Commands

```bash
npm run dev          # servidor de desarrollo
npm run build        # build de producción
npm run preview      # previsualizar la build
npm run check        # type-check (astro check)
npm run lint         # eslint
npm run format       # prettier --write
npm run format:check # verificar formato
npm test             # no configurado (no hay tests todavía)
```

## Before finishing any change

1. `npm run lint`
2. `npm run check`
3. `npm test` (si existiera; actualmente no configurado)
4. `npm run build`

Corrige cualquier problema introducido por tus cambios.

## Conventions

- Mantener el comportamiento funcional: rutas, datos y acciones no deben cambiar
  salvo que exista un error evidente.
- Español para textos visibles; identificadores de código en inglés.
- Astro components con frontmatter tipado (`interface Props`).
- Un solo acento (`clay`) y una sola familia de iconos (`ui/Icon.astro`).
- No introducir dependencias sin justificarlo.
