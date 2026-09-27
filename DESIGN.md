# Design System · 「Tinta」

Sistema de diseño de la landing de **Álvaro García** (medicina china, acupuntura
y terapia manual a domicilio en Las Palmas de Gran Canaria).

Referencia obligatoria para cualquier cambio de UI. Si una modificación
contradice este documento, la modificación está mal.

- Stack: **Astro 6** + **Tailwind CSS 4** (`@tailwindcss/vite`) + GSAP/Lenis.
- Arquitectura: ver `ARCHITECTURE.md`.
- Tokens: `src/styles/global.css` (`@theme` + `@layer components`).
- Contenido: `src/data/*.ts`. Config: `src/lib/site.ts`. WhatsApp: `src/lib/whatsapp.ts`.
- Componentes base: `src/components/ui/*`.
- Comportamiento de cliente: `src/scripts/motion.ts`.

---

## Design Principles

1. **Tinta y vacío (ma).** La composición respira; el espacio separa, no las cajas.
2. **Un solo acento: cinabrio.** Señala el punto, el sello y la acción. No decora.
3. **Meridianos en vez de cards.** Una línea fina con un punto estructura y numera
   las secciones. Sustituye bordes, divisores genéricos e iconos decorativos.
4. **Tipografía con intención.** Serif caligráfica para titulares, sans quieta para
   el cuerpo, hanzi como tinta de fondo.
5. **Asimetría y ritmo vertical.** Nada de grids de tarjetas; lectura en columna
   estrecha.
6. **Imagen unificada.** Todas las fotos pasan por un tratamiento tinta/sepia.
7. **Contenido separado de presentación.** Datos en `src/data`, copy de contacto y
   navegación en `src/lib/site.ts`.
8. **Práctico por encima de bonito.** Reservar siempre a un clic; precios legibles.

---

## Colors

Tokens `--color-*` en `@theme` (`src/styles/global.css`). Usar siempre las
utilidades (`bg-paper`, `text-ink`, `text-cinnabar`…), nunca hex sueltos.

| Token          | Valor     | Rol                          | Utilidad                       |
| :------------- | :-------- | :--------------------------- | :----------------------------- |
| `paper`        | `#f4efe3` | background (papel de arroz)  | `bg-paper`                     |
| `paper-2`      | `#eae2d1` | superficie secundaria        | `bg-paper-2/50`                |
| `ink`          | `#1b1916` | texto principal / fondo dark | `text-ink`, `bg-ink`           |
| `ink-2`        | `#554f45` | texto secundario             | `text-ink-2`                   |
| `ink-3`        | `#857d6f` | texto apagado / labels       | `text-ink-3`                   |
| `line`         | `#d8cfbc` | hairlines y bordes (1px)     | `border-line`, `bg-line`       |
| `cinnabar`     | `#b23a2e` | **primary** (cinabrio 朱砂)  | `bg-cinnabar`, `text-cinnabar` |
| `cinnabar-600` | `#8f2c22` | primary hover                | `hover:bg-cinnabar-600`        |
| `jade`         | `#5c7360` | secundario decorativo        | `text-jade/15` (水印)          |
| `success`      | `#4f7a4a` | estados correctos            | `text-success`                 |
| `warning`      | `#b07d2b` | avisos                       | `text-warning`                 |
| `danger`       | `#b4453a` | errores / destructivo        | `text-danger`                  |

- **Info**: sin token propio; usar `ink-2`/`ink-3` sobre `paper`.
- Sobre fondos oscuros (`bg-ink`): usar `text-paper` con alpha (`/60`, `/70`).
- El cinabrio **no decora**: punto de meridiano, número de sección, enlaces, sello
  y botón primario. Nada más.
- `jade` solo para el hanzi-agua del manifiesto. No añadir más acentos.

---

## Typography

Tres familias, definidas en `@theme`:

- **Display / titulares**: `Cormorant Garamond` (`--font-display`, `font-display`).
  Los `h1–h4` la reciben por defecto (peso 500).
- **UI / body**: `Hanken Grotesk` (`--font-sans`).
- **Hanzi**: `Noto Serif SC` (`--font-hanzi`, `font-hanzi`).

| Rol              | Clase                              | Tamaño   | Peso    | Line-height                 |
| :--------------- | :--------------------------------- | :------- | :------ | :-------------------------- |
| H1 / apertura    | `text-5xl sm:text-6xl lg:text-7xl` | 48–72px  | 500     | `leading-[1.02]`            |
| H1 / CTA         | `text-4xl sm:text-5xl`             | 36–48px  | 500     | `leading-[1.05]`            |
| H2 / sección     | `text-3xl sm:text-4xl`             | 30–36px  | 500     | `leading-[1.1]`             |
| H3 / capítulo    | `text-2xl sm:text-3xl`             | 24–30px  | 500     | normal                      |
| Lead             | `text-lg`                          | 18px     | 400     | `leading-relaxed`           |
| Body             | `text-base`                        | 16px     | 400     | `leading-relaxed`           |
| Small            | `text-sm`                          | 14px     | 400/500 | `leading-relaxed`           |
| Label / metadata | `.eyebrow`                         | 12px     | 500     | normal, `tracking-[0.22em]` |
| Hanzi            | `font-hanzi`                       | variable | 400/600 | —                           |

- `eyebrow`: 12px, 500, uppercase, `tracking-[0.22em]`, `text-ink-3`.
- Los párrafos se limitan (`max-w-md`/`xl`/`2xl`); nunca a ancho completo.
- Evitar tamaños arbitrarios puntuales (ver deuda técnica).

---

## Spacing

Escala de Tailwind (múltiplos de `0.25rem`). Referencias:

| Uso                        | Clase                             |
| :------------------------- | :-------------------------------- |
| Gap entre elementos        | `gap-2`, `gap-3`, `gap-5`         |
| Gap entre columnas         | `gap-10`, `gap-16`                |
| Padding de sección         | `py-16` → `lg:py-24`              |
| Padding vertical de fila   | `py-8` / `py-10`                  |
| Ritmo cabecera → contenido | `mt-6` (título), `mt-12` (bloque) |

- No inventar márgenes: elegir 2–3 valores por pantalla.

---

## Layout

- **Contenedor**: `.shell` → `mx-auto w-full max-w-5xl px-6`. Ancho editorial
  (más estrecho que un dashboard) para lectura tipo pergamino.
- **Ancho de lectura**: `max-w-md` (texto), `max-w-xl`/`max-w-2xl`/`max-w-3xl`
  (cabeceras y manifiesto).
- **Composición asimétrica**: Hero `lg:grid-cols-[1.05fr_0.95fr]`; CTA
  `lg:grid-cols-[1.1fr_0.9fr]`.
- **Filas de datos**: Tratamientos `sm:grid-cols-[6.5rem_1fr]` (hanzi + contenido);
  Precios `sm:grid-cols-[1fr_auto]`.
- **Separación**: `border-t border-line` en las filas; el título de sección usa el
  **marcador de meridiano** (punto cinabrio + label + hairline). Sin fondos por bloque.
- **Secciones**: Hero → Manifiesto → Tratamientos → Precios → CTA (`bg-ink`) → Footer.

---

## Breakpoints

Tailwind por defecto:

| Nombre | Min-width | Uso                                                             |
| :----- | :-------- | :-------------------------------------------------------------- |
| `sm`   | `640px`   | Rejillas de fila a 2 columnas, imágenes de tratamiento visibles |
| `md`   | `768px`   | Poco usado                                                      |
| `lg`   | `1024px`  | Header visible, hero/CTA a 2 columnas                           |
| `xl`   | `1280px`  | Ajustes finos                                                   |

- Mobile-first. El script de animación usa `max-width: 767px` como "móvil" (deuda).

---

## Borders and Radius

**Bordes**

- Color: siempre `line` (sobre oscuro: `paper/25`).
- Grosor: `1px`. Para filas y hairlines del marcador.
- No rodear contenido informativo con cajas.

**Radius** (tokens)

| Token               | Valor     | Uso                            |
| :------------------ | :-------- | :----------------------------- |
| `rounded-control`   | `0.25rem` | Botones, inputs, items de nav  |
| `rounded-surface`   | `0.5rem`  | Imágenes y figuras             |
| `rounded-[0.15rem]` | seal      | Sello cinabrio (casi cuadrado) |

- Estética de imprenta: radios pequeños. `rounded-full` solo para el punto del
  meridiano.

---

## Shadows

- Sin sombras en secciones ni filas.
- Única excepción: la nav inferior móvil (`shadow-lg shadow-ink/10`).
- Hover por color/borde, no por sombra.

---

## Components

### Meridian marker (SectionHeading)

`ui/SectionHeading.astro`. Estructura: punto cinabrio + `eyebrow` (opcional número
`index`) + hairline `line`. Sustituye al patrón "eyebrow + borde".

- Props: `index`, `label`, `title`, `description`, `class`.
- El `h2` va en display, `max-w-2xl`. La descripción en `ink-2`, `max-w-xl`.
- **Animación**: al entrar en pantalla (IntersectionObserver en `Layout.astro`), la
  hairline se dibuja de izquierda a derecha (`scaleX`) y el punto aparece
  (`opacity` + `scale`). Estado inicial `is-visible`. Sin JS el marcador queda
  estático y visible (el estado "oculto" solo se aplica bajo `html.js`).

### Buttons

Base `.btn` (inline-flex, `gap-2`, `rounded-control`, `px-5 py-2.5`, `text-sm`,
`font-medium`, transición de color 200ms).

| Variante  | Clase            | Uso                                 |
| :-------- | :--------------- | :---------------------------------- |
| Primary   | `.btn-primary`   | Acción dominante (cinabrio)         |
| Secondary | `.btn-secondary` | Acción secundaria (borde ink)       |
| On dark   | `.btn-on-dark`   | Secundaria sobre `bg-ink`           |
| Link      | `.link-arrow`    | Acción discreta en línea con flecha |

- Tamaño por defecto `sm`; `.btn-lg` solo en apertura y CTA.
- Componente compartido: `ui/WhatsAppButton.astro` (variantes, `size`).
- Máximo una acción primaria por área.

### Inputs and Forms

No hay formulario (la conversión es por WhatsApp). Si se añade:

- Label visible `text-sm font-medium text-ink`; control con `rounded-control`,
  borde `line`, fondo `paper`, foco `outline-cinnabar`.
- Ayuda `text-sm text-ink-3`; error `text-danger` + borde `danger`.
- Agrupar con espacio y un subtítulo, no con cards.

### Cards

No se usan como primitiva de layout. Reservadas para elementos flotantes (nav
móvil). Las filas (tratamientos, precios) son la estructura de datos por defecto.

### Tables

Los precios se presentan como **lista de filas** (`border-t border-line`), no como
tabla con cabecera.

- Nombre en display (`text-2xl`/`3xl`); descripción `text-sm` `ink-2`.
- Cifra en display (`text-3xl`/`4xl`), alineada a la derecha (columna en `sm`).
- Fila recomendada: punto + label "Recomendado" en cinabrio; botón primario.
- Resto de filas: botón secundario.
- Responsive: en móvil la cifra y el botón pasan a una fila inferior.

### Testimonials (Casos)

Opcional y data-driven (`sections/Testimonials.astro` + `data/testimonials.ts`).
Mientras `TESTIMONIALS` esté vacío, la sección **no se renderiza**.

- Estructura: marcador de meridiano (`index="03"`) + lista de citas.
- Cada cita: display serif (`text-xl`/`2xl`), entre comillas angulares; autor y
  contexto en `text-sm text-ink-3`. Separadas por `border-t border-line`, sin cards.
- **Nunca inventar testimonios**: solo frases reales de pacientes.

### Navigation

- **Navbar**: `layout/Header.astro`, `sticky`, `h-16`, `bg-paper/85` +
  `backdrop-blur`, borde inferior `line`, solo `lg+`. Marca + hanzi + CTA.
- **Móvil**: `layout/MobileNav.astro`, barra inferior flotante (icono + label),
  `rounded-surface`, una sombra. Body con `padding-bottom: 5.5rem`.
- Items desde `NAV_ITEMS` (`src/lib/site.ts`).

### Modals and Dialogs

No existen. Si se añaden: fondo `ink/50`, panel `paper`, `rounded-surface`,
`shadow-lg`, foco atrapado, `Esc`, `role="dialog"` + `aria-modal`.

### Alerts and Notifications

No existen. Usar tokens semánticos (`success`/`warning`/`danger`), icono + texto,
sin cards con sombra.

---

## States

| Estado   | Regla                                                  |
| :------- | :----------------------------------------------------- |
| Default  | Colores base de token                                  |
| Hover    | Color (`hover:text-cinnabar`, `hover:bg-cinnabar-600`) |
| Active   | Igual que hover; sin transforms grandes                |
| Focus    | `:focus-visible`: outline `2px cinnabar`, offset 2px   |
| Disabled | `opacity-50`, `pointer-events-none`                    |
| Loading  | `aria-busy`, icono girando, mantener tamaño            |
| Empty    | Texto `ink-3` + acción clara                           |
| Error    | Borde/texto `danger` + mensaje asociado                |

---

## Responsive Design

- **Móvil (<640px)**: una columna; imágenes de tratamiento compactas; precio y
  botón en fila inferior; nav inferior flotante; sin scroll horizontal.
- **Tablet (640–1023px)**: filas a 2 columnas; imágenes visibles.
- **Escritorio (≥1024px)**: header sticky; hero/CTA a 2 columnas; se elimina el
  padding inferior del body.

---

## Accessibility

- **Contraste**: `ink-3` (`#857d6f`) sobre `paper` no llega a AA para texto
  pequeño; úsalo solo en labels/metadata uppercase de 12px o usa `ink-2`.
  Texto de cuerpo siempre `ink` o `ink-2`.
- **Foco** visible global (outline cinabrio).
- **Labels** en controles; iconos `aria-hidden`; botones de icono con `aria-label`.
- **Teclado**: enlaces y nav operables; foco visible.
- **Área táctil**: nav `min-h-12` (~44px); botones `py-2.5`.
- **ARIA**: `aria-label` en nav; hanzi decorativos con `aria-hidden`.

---

## Icons

- **Familia única** en `src/components/ui/Icon.astro` (sin dependencias).
- UI: trazo `1.75`, `stroke-linecap/linejoin: round`, grid 24px, `currentColor`.
- Marcas (WhatsApp, Instagram, TikTok): rellenas, mismo tamaño base.
- Tamaños: `h-4 w-4` (inline), `h-5 w-5` (botones grandes y nav).
- **Hanzi** (Noto Serif SC) no son iconos: son tinta de fondo o acento tipográfico
  con significado. No usarlos como pictogramas funcionales.

---

## Animations

- Transiciones: `color`, `background-color`, `border-color`, `transform`, y el
  `filter` del tratamiento de imagen.
- Duración: `200ms`; `img-ink` usa `500ms` (revela el color al pasar el ratón).
- **Marcador de meridiano**: `650ms` con `cubic-bezier(0.2, 0.7, 0.2, 1)`; el
  punto, `500ms`. Se dispara una sola vez por sección al entrar en pantalla.
- **Watermark hanzi del hero**: entrada `ink-in` (`1200ms`, fade + `translateY`)
  al cargar la página.
- Reveal de scroll: GSAP `fromTo` (opacity + `y:48`) con ScrollTrigger;
  desactivado en móvil y con `prefers-reduced-motion`. Implementado en
  `src/scripts/motion.ts` (`initScrollMotion`, `initMeridianReveal`).
- Evitar: animaciones infinitas, gradientes animados, movimientos grandes.

---

## Component Reuse

| Necesidad         | Recurso                                     |
| :---------------- | :------------------------------------------ |
| Contenedor        | `.shell`                                    |
| Label de sección  | `.eyebrow` / `ui/SectionHeading.astro`      |
| Botón             | `.btn` + variantes                          |
| CTA de WhatsApp   | `ui/WhatsAppButton.astro` + `whatsappUrl()` |
| Icono             | `ui/Icon.astro`                             |
| Imagen tinta      | `.img-ink`                                  |
| Sello             | `.seal`                                     |
| Datos de contacto | `SITE` en `src/lib/site.ts`                 |
| Mensajes y URL WA | `src/lib/whatsapp.ts`                       |
| Contenido         | `src/data/services.ts`, `src/data/plans.ts` |
| Testimonios       | `src/data/testimonials.ts` (opcional)       |

Regla: si un componente existente resuelve el problema, reutilizarlo o
extenderlo; no duplicarlo.

---

## Do

- Usar tokens y utilidades existentes.
- Separar con espacio, hairlines y el marcador de meridiano.
- Una única acción primaria por área.
- Limitar los párrafos a un ancho de lectura.
- Tratar las fotos con `.img-ink` para unificar el look.
- Documentar cualquier token o patrón nuevo antes de añadirlo.

## Don't

- No envolver cada sección en una card.
- No anidar cards.
- No usar bordes/`border-radius` grandes como primitiva de layout.
- No añadir gradientes ni fondos de color por bloque.
- No usar badges/pills para texto normal.
- No añadir iconos a cada título.
- No usar sombras para separar secciones.
- No convertir todo en `rounded-full`.
- No usar `font-semibold` en todo.
- No usar emojis como iconos.
- No introducir colores fuera de los tokens (nada de verdes/azules "clínicos").
- No duplicar datos (teléfono, WhatsApp, navegación) en componentes.
- No usar hanzi decorativos aleatorios: solo los aprobados.

---

## Avoiding generic AI UI

Reglas explícitas para no recaer en el "look de plantilla". Cualquier PR que las
incumpla debe rechazarse.

- **Do not wrap every section in a card.** Las secciones se separan con espacio y
  el marcador de meridiano, no con cajas.
- **Do not create cards inside cards.**
- **Do not use large rounded rectangles as the default layout primitive.** Radios
  pequeños (`rounded-control`, `rounded-surface`); `rounded-full` solo para el
  punto del meridiano.
- **Do not add decorative gradients** (aurora, radiales, `from-… to-…`) ni fondos
  de color por bloque.
- **Do not use badges or pills for ordinary text.** Un badge solo si aporta estado.
- **Do not add icons to every heading**, and never inside colored squares.
- **Do not use shadows to separate normal page sections.** La única sombra es la
  nav inferior móvil.
- **Do not give every component a border.** El borde es una hairline `line` de 1px
  para filas y divisores.
- **Do not use `font-semibold` on everything.** La jerarquía la dan tamaño,
  familia (serif/sans) y color.
- **Prefer whitespace, typography and alignment over containers.**
- **Prefer lists, rows and tables over grids of cards** for structured data.
- **Use the accent (cinabrio) sparingly**: punto, número de sección, enlace,
  sello y botón primario. Nada más.
- **Avoid decorative pills and chips**; el texto plano es suficiente.
- **Avoid emoji as icons**; usar `ui/Icon.astro`.
- **Preserve a strong visual hierarchy** and generous white space.

---

## Existing Design Debt

1. **Hanzi**: los caracteres (中医, 气, 正骨, 针灸, 艾灸, 贴扎, 耳针) son
   decorativos y **deben revisarse con una persona nativa** antes de publicar;
   `贴扎` (vendaje) es el más discutible.
2. **Fotografías de stock**: las imágenes actuales no son de Álvaro ni de sus
   sesiones. Sustituir por material propio cuando exista.
3. **Disponibilidad**: `SITE.availability.hours` está vacío (no se muestra). Rellenar
   con el horario real.
4. **Breakpoint móvil duplicado**: script de `Layout.astro` y `@media` de
   `global.css` usan `767px`, frente a `md: 768px` de Tailwind.
5. **Tamaños arbitrarios**: watermarks hanzi (`text-[13rem]`, `text-[15rem]`) y
   `leading-[1.02]`. Candidatos a token si se reutilizan.
6. **Sin tests** (unitarios, e2e ni regresión visual).
7. **Precios como string** (`"40€"`): si se necesitan cálculos, migrar a número +
   formateo.
8. **Componentes de modal/alerta/formulario**: documentados pero no implementados.
