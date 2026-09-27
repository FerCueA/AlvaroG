# AGENTS.md

Guía para agentes de IA (y personas) que trabajen en este repositorio.

Lee `ARCHITECTURE.md` para entender cómo está construido el proyecto y
`DESIGN.md` antes de tocar UI. Este documento define **cómo trabajar** aquí.

## Design

Before creating or modifying frontend or UI code, read `DESIGN.md`.

All new UI must follow the design system documented in `DESIGN.md`.

Prefer existing components and design tokens over creating new ones.

Do not introduce new colors, spacing values, border radii, typography styles or
UI patterns unless there is a clear reason.

If an existing component already solves the problem, reuse or extend it instead
of duplicating it.

Keep the rules in `DESIGN.md` → `Avoiding generic AI UI`.

## Project structure

Before creating new files, inspect the existing architecture and place them in
the most appropriate feature or shared directory.

Do not create duplicate components, hooks, services, utilities or styles.

Prefer extending an existing abstraction over introducing a parallel
implementation.

Keep domain-specific code close to its feature. Keep shared primitives genuinely
generic.

```
src/
├── components/
│   ├── layout/     # Header, Footer, MobileNav (chrome de la página)
│   ├── sections/   # Hero, Manifesto, Treatments, Pricing, Testimonials, Cta
│   └── ui/         # Icon, SectionHeading, WhatsAppButton (primitivas)
├── data/           # Contenido editable: services.ts, plans.ts, testimonials.ts
├── layouts/        # Layout.astro (documento HTML + arranque de scripts)
├── lib/            # Config y dominio: site.ts (constantes), whatsapp.ts (helpers)
├── pages/          # Rutas
├── scripts/        # Comportamiento de cliente reutilizable (motion.ts)
└── styles/         # global.css (design tokens + clases base)
```

- Contacto, navegación y metadatos: `src/lib/site.ts` (no repetirlos).
- Mensajes y URL de WhatsApp: `src/lib/whatsapp.ts` (nunca componer `wa.me` a mano).
- Contenido (tratamientos, precios, testimonios): `src/data/*`.
- Estilos: tokens y clases base en `src/styles/global.css`; **nada de hex sueltos**.

Do not reorganize unrelated parts of the repository without a clear
maintainability benefit. No crees carpetas (features, services, hooks, stores)
que el tamaño real del proyecto no justifique.

## Components

Components should have one clear responsibility.

Avoid large components that combine data access, business logic and complex
presentation.

Extract reusable logic into helpers or services when doing so improves clarity.

Do not split components purely to reduce line count. Split them when there is a
meaningful responsibility boundary.

Before creating a component, search for an existing component that can be reused
or extended.

- Primitiva reutilizable y sin lógica de negocio → `components/ui/`.
- Chrome global → `components/layout/`.
- Bloque de la página → `components/sections/`.
- Lógica de cliente → `scripts/` (funciones exportadas, sin estado global).
- Estilos de un solo componente → su `<style>`.

## Documentation

When a change alters architecture, project structure, design conventions or
important development patterns, update the corresponding documentation **in the
same change**.

Documentation must describe the current implementation, not an idealized future
implementation.

Estos documentos forman parte del proyecto y deben mantenerse vivos:

- `AGENTS.md` → cómo trabajar aquí (este archivo).
- `ARCHITECTURE.md` → cómo está construido (estructura, capas, datos).
- `DESIGN.md` → cómo debe verse la interfaz.
- `README.md` → cómo empezar a trabajar con el proyecto.

No dupliques explicaciones entre documentos: referencia el documento adecuado.

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

1. `npm run format`
2. `npm run lint`
3. `npm run check`
4. `npm test` (si existiera; actualmente no configurado)
5. `npm run build`

Corrige los problemas introducidos por tus cambios. No ocultes errores
preexistentes: distínguelos en el informe.

## Conventions

- Mantener el comportamiento funcional: rutas, datos y acciones no deben cambiar
  salvo que exista un error evidente.
- Español para textos visibles; identificadores de código en inglés.
- Componentes Astro con frontmatter tipado (`interface Props`).
- Un solo acento (cinabrio) y una sola familia de iconos (`ui/Icon.astro`).
- No introducir dependencias sin justificarlo.
