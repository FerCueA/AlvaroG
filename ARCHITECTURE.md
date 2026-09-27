# Architecture

Cómo está construido el proyecto. Para el aspecto visual, ver `DESIGN.md`; para
las reglas de trabajo, `AGENTS.md`.

## Overview

Landing page **estática** de una sola ruta (`/`) para Álvaro García (medicina
china y terapia manual a domicilio). No hay backend, ni base de datos, ni
autenticación: el único "canal" es **WhatsApp** mediante enlaces profundos
(`https://wa.me/...`) con el mensaje precargado.

Astro genera HTML estático en build; no se hidrata ningún framework en cliente.
El único JavaScript que llega al navegador son dos comportamientos opcionales:
smooth scroll + reveal (GSAP/Lenis) y la animación del marcador de sección
(IntersectionObserver), ambos en `src/scripts/motion.ts`.

## Tech Stack

| Capa       | Tecnología                                        |
| :--------- | :------------------------------------------------ |
| Framework  | Astro 6 (output estático)                         |
| Estilos    | Tailwind CSS 4 vía `@tailwindcss/vite`            |
| Tokens     | CSS custom properties en `@theme`                 |
| Animación  | GSAP + ScrollTrigger, Lenis, IntersectionObserver |
| Lenguaje   | TypeScript (strict, `astro/tsconfigs/strict`)     |
| Calidad    | ESLint (flat) + Prettier (`astro` + tailwind)     |
| Despliegue | Netlify (`netlify.toml`), carpeta `dist/`         |

## Project Structure

```
src/
├── components/
│   ├── layout/      # Chrome de la página: Header, Footer, MobileNav
│   ├── sections/    # Secciones de la landing (una por bloque de la página)
│   └── ui/          # Primitivas reutilizables: Icon, SectionHeading, WhatsAppButton
├── data/            # Contenido editable: services.ts, plans.ts, testimonials.ts
├── layouts/         # Layout.astro (documento HTML + scripts de página)
├── lib/             # Configuración y helpers de dominio
│   ├── site.ts      # SITE, PHONE_TEL, NAV_ITEMS (constantes)
│   └── whatsapp.ts  # Mensajes y whatsappUrl() (dominio WhatsApp)
├── pages/           # Rutas (index.astro)
├── scripts/         # Comportamiento de cliente reutilizable (motion.ts)
└── styles/          # global.css (tokens del design system + clases base)
```

Reglas de organización:

- **Una sección nueva de la página** → `components/sections/`.
- **Chrome global** (nav, footer) → `components/layout/`.
- **Primitiva reutilizable y agnóstica al negocio** → `components/ui/`.
- **Contenido/copy editable** → `data/` (una constante por archivo).
- **Config/valores fijos del sitio** → `lib/site.ts`.
- **Lógica de dominio reutilizable** → `lib/` (p. ej. `whatsapp.ts`).
- **Comportamiento de cliente** → `scripts/` (funciones exportadas, sin estado global).
- **Estilos** → tokens en `global.css`; los estilos locales de un componente van en
  su `<style>` cuando son de un solo componente (p. ej. el marcador).

No crear carpetas vacías ni capas (features, providers, services, hooks) que el
tamaño real del proyecto no justifica.

## Frontend Architecture

- **Pages** (`pages/index.astro`): componen las secciones en orden. No contienen
  lógica: solo imports y composición.
- **Layouts** (`layouts/Layout.astro`): documento HTML, metadatos (desde `SITE`),
  import de estilos y arranque de los scripts de página. No contiene lógica de
  animación inline (delegada a `scripts/motion.ts`).
- **Components**: ver "Component Architecture".
- **Data**: módulos que exportan arrays tipados; el markup solo los recorre.
- **Lib**: constantes (`site.ts`) y helpers de dominio (`whatsapp.ts`).
- **Scripts**: funciones de comportamiento exportadas, invocadas desde el layout.
- **Styles**: `global.css` define tokens (`@theme`) y clases base
  (`.shell`, `.eyebrow`, `.seal`, `.btn*`, `.link-arrow`, `.img-ink`).

No hay **hooks** ni **providers**: no se usa ningún framework de UI en cliente, así
que no aplican. Se documenta la ausencia para evitar carpetas artificiales.

## Component Architecture

Cinco tipos, de más genérico a más específico:

| Tipo            | Ubicación              | Ejemplos                                                            | Regla                                                                        |
| :-------------- | :--------------------- | :------------------------------------------------------------------ | :--------------------------------------------------------------------------- |
| UI primitives   | `components/ui/`       | `Icon`, `SectionHeading`, `WhatsAppButton`                          | Gestos genéricos, sin lógica de negocio. Reutilizables en cualquier sección. |
| Layout          | `components/layout/`   | `Header`, `Footer`, `MobileNav`                                     | Chrome global; siempre presente en la página.                                |
| Section         | `components/sections/` | `Hero`, `Manifesto`, `Treatments`, `Pricing`, `Testimonials`, `Cta` | Un bloque de la página; compone primitivas y datos.                          |
| Data            | `data/`                | `services`, `plans`, `testimonials`                                 | Contenido tipado, sin presentación.                                          |
| Client behavior | `scripts/`             | `motion`                                                            | Efectos de navegador, sin JSX/markup.                                        |

Secciones como `Treatments` o `Pricing` renderizan sus filas en un bucle dentro
del propio archivo (el markup de una fila es pequeño y se usa en un solo lugar);
no se han extraído componentes por fila para evitar abstracción sin reutilización
real. Si una fila creciera o se reutilizara en otro sitio, se extraería.

## Data Flow

En build, Astro resuelve todo en servidor:

```
data/* (contenido)  +  lib/site.ts (config)  +  lib/whatsapp.ts (helpers)
        ↓
components/ui  ←  components/sections  ←  pages/index.astro  →  layouts/Layout.astro
        ↓
HTML estático (dist/)
```

En cliente no hay fetching: el navegador solo ejecuta `scripts/motion.ts` para
mejorar la experiencia (scroll y reveals). Los enlaces de WhatsApp se calculan en
build; al hacer clic no hay llamada a nuestra app, se abre `wa.me`.

## State Management

No hay estado global ni almacenamiento en cliente. El único estado es efímero y
vive en el DOM:

- Clases de estado puramente CSS (`.is-visible` en el marcador de sección).
- Atributos de datos leídos por los scripts (`[data-gsap]`, `[data-meridian]`).

No se introduce ningún store mientras no exista interacción que lo requiera.

## API Layer

No existe backend ni cliente HTTP. La única integración externa es **WhatsApp**
por enlace profundo, encapsulada en `lib/whatsapp.ts`:

- `WHATSAPP_MESSAGES` centraliza los textos (`reservation`, `treatment(title)`, `plan(name)`).
- `whatsappUrl(message?)` construye la URL codificada.

Regla: ningún componente debe componer URLs de `wa.me` ni repetir el número; usar
`whatsappUrl()` y, para el copy, `WHATSAPP_MESSAGES`. El número vive en `SITE.whatsappNumber`.

## Architectural Rules

1. **Separación datos / config / dominio / presentación.** El markup no define
   contenido (`data/`) ni credenciales/contacto (`lib/site.ts`) ni construye URLs
   (`lib/whatsapp.ts`).
2. **Una responsabilidad por componente.** Ningún componente llama a APIs,
   transforma datos complejos y renderiza grandes bloques a la vez.
3. **Lógica de cliente en `scripts/`**, no inline en el layout.
4. **Estilos centralizados.** Colores, tipografía, spacing, radius y sombras son
   tokens de `global.css`; los valores sueltos están prohibidos.
5. **Reutilizar antes de crear.** Buscar en `ui/`, `layout/` y `lib/` antes de
   añadir un componente o helper nuevo.
6. **Rutas y contenido público estables.** Cambiar estructura no debe alterar la
   URL (`/`) ni los datos mostrados.
7. **Documentación viva.** Un cambio que altere arquitectura, estructura, diseño o
   convenciones actualiza el `.md` correspondiente en el mismo cambio.
8. **Sin sobreingeniería.** No añadir capas (features, services, hooks, stores)
   sin una necesidad real del producto.

## Technical Debt

Deuda conocida y aceptada (ver también la sección equivalente en `DESIGN.md`):

1. **Una sola ruta.** No existen `features/`; si el producto crece (varias
   páginas, reservas reales), habrá que introducir esa separación.
2. **Breakpoint móvil duplicado** (`767px`) entre `scripts/motion.ts` y
   `global.css`, frente a `md: 768px` de Tailwind. Unificar si se toca.
3. **Animación del marcador en CSS + JS.** El estado inicial se define bajo
   `html.js`; convive con GSAP sin problema, pero son dos mecanismos de motion.
4. **Sin tests** (unitarios, e2e ni regresión visual).
5. **Contenido no verificado**: los hanzi y los testimonios dependen de revisión
   humana; ver `DESIGN.md` → Existing Design Debt.
6. **`dist/` no se versiona** (correcto), pero no hay CI que valide el build.
