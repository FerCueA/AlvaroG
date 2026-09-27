# DESIGN.md

Sistema de diseño de la landing de **Álvaro García** (osteopatía, quiromasaje y
medicina china a domicilio en Las Palmas).

Este documento es la **referencia obligatoria** para cualquier cambio visual
futuro. Si una modificación contradice estas reglas, la modificación está mal.

Principio rector:

> jerarquía > decoración · espacio > cajas · tipografía > bordes ·
> estructura > cards · consistencia > variedad · claridad > efectos

---

## 1. Tipografía

| Rol       | Familia                             | Uso                                  |
| :-------- | :---------------------------------- | :----------------------------------- |
| Display   | **Fraunces** (`--font-display`)     | Títulos h1–h4, cifras grandes, marca |
| UI / Body | **Instrument Sans** (`--font-sans`) | Todo lo demás                        |

- Fraunces es una serif variable con carácter: aporta personalidad y calidez sin
  resultar decorativa. Se usa con `font-optical-sizing: auto`.
- Los encabezados `h1–h4` reciben la display face por defecto desde
  `global.css`; no hace falta añadir `font-display` manualmente.
- El cuerpo usa Instrument Sans con
  `-webkit-font-smoothing: antialiased`.
- No introducir una tercera familia.

### Escala tipográfica

Usar la escala de Tailwind; evitar tamaños arbitrarios (`text-[0.62rem]`). Para
casos realmente puntuales usar `clamp()` en el token, no valores sueltos.

| Nivel                 | Clase                   | Tamaño  | Notas                              |
| :-------------------- | :---------------------- | :------ | :--------------------------------- |
| Display / hero        | `text-5xl` – `text-6xl` | 48–60px | Solo el nombre en el hero          |
| H1 / título de página | `text-4xl`              | 36px    | CTA final                          |
| H2 / sección          | `text-3xl sm:text-4xl`  | 30–36px | Cabeceras de sección               |
| H3 / item             | `text-2xl`              | 24px    | Filas de precios, servicios        |
| Lead / entradilla     | `text-lg`               | 18px    | Párrafo introductorio              |
| Body                  | `text-base`             | 16px    | `leading-relaxed`                  |
| Small                 | `text-sm`               | 14px    | Descripciones, metadata secundaria |
| Metadata / label      | `text-xs`               | 12px    | `eyebrow`, notas al pie            |

Reglas:

- **No todo es `font-semibold`.** El peso se usa con intención: los títulos
  confían en tamaño + familia; el cuerpo va en 400; los botones y
  `eyebrow` en 600.
- Los párrafos largos se limitan con `max-w-md` / `max-w-xl` / `max-w-2xl`.
  Nunca ocupar todo el ancho del contenedor.
- `line-height`: `leading-tight` (1.15–1.25) en titulares, `leading-relaxed`
  (~1.6) en cuerpo.
- `letter-spacing`: negativo (-0.015em) en display; positivo solo en
  `eyebrow`/labels (`tracking-[0.18em]`, uppercase).

---

## 2. Color

Una sola paleta, definida como tokens en `@theme` (Tailwind v4). Neutros
cálidos + **un único** acento.

| Token                            | Hex       | Uso                                                    |
| :------------------------------- | :-------- | :----------------------------------------------------- |
| `canvas`                         | `#f7f3ec` | Fondo general de la página                             |
| `surface`                        | `#ffffff` | Secciones que necesitan distinguirse (Precios, Footer) |
| `surface-2`                      | `#efe8dd` | Hover de filas/botones secundarios                     |
| `ink`                            | `#221d19` | Texto principal                                        |
| `ink-2`                          | `#5c5349` | Texto secundario                                       |
| `ink-3`                          | `#6f665c` | Metadata, labels, texto terciario                      |
| `line`                           | `#e5ddd1` | Hairlines, bordes de 1px                               |
| `clay`                           | `#a5522f` | **Acento único**: acciones primarias y `eyebrow`       |
| `clay-600`                       | `#893f20` | Hover de primario                                      |
| `clay-50`                        | `#f6ece5` | Tinte de la fila recomendada                           |
| `success` / `warning` / `danger` | —         | Reservados para estados; hoy sin uso                   |

Reglas:

- El acento (clay) **no decora**: marca acciones importantes, el label de
  sección y el plan recomendado. Nada más.
- Prohibido usar la paleta `orange-500`/`amber-300` sueltas: existen los tokens.
- Nada de gradientes decorativos ni "aurora" animada.

---

## 3. Spacing y ritmo vertical

- Contenedor: `.shell` → `mx-auto w-full max-w-6xl px-6`. Siempre el mismo.
- Padding vertical de sección: `py-16` (móvil) → `lg:py-24`.
- Separación entre secciones: `.border-t border-line` + el padding anterior.
  No fondos distintos por cada bloque.
- Escala de espacio: la de Tailwind (múltiplos de 0.25rem). Elegir 2–3 valores
  por pantalla, no inventar cada margen.

---

## 4. Layout y composición

- **No centrar todo.** Los encabezados de sección van alineados a la izquierda,
  con un ancho máximo de lectura (`max-w-2xl`).
- Grids de 2 columnas para servicios (imagen + texto), con alternancia
  (`lg:order-1` / `lg:order-2`).
- Contenido a ancho completo pero legible: `max-w-6xl` de contenedor y
  `max-w-md/xl/2xl` en los textos.
- Dejar respirar: el espacio en blanco agrupa; no rellenar el viewport.
- Fondo general `canvas`; usar `surface` solo cuando una sección deba
  distinguirse de verdad (Precios, Footer).

---

## 5. Cards: cuándo sí y cuándo no

**Sí usar card:**

- Entidades independientes y repetidas que el usuario compara (las tarjetas del
  carrusel móvil de precios/servicios).
- Elementos flotantes con elevación real: dropdown, modal, popover, navegación
  flotante móvil.

**NO usar card (por defecto):**

- Cada dato o grupo de datos (estadísticas del hero → fila con `border-t`).
- Cada servicio en desktop → layout editorial abierto.
- Cada grupo de campos de un formulario.
- Cada sección de la página.
- Cajas dentro de cajas.

Alternativas preferidas: **secciones abiertas + divisores**, **filas
etiqueta/valor**, **listas estructuradas**, **tablas** y **espacio negativo**.

---

## 6. Fondos y superficies

Orden de preferencia para separar información:

1. espacio
2. tipografía
3. alineación
4. divisores (`border-line`)
5. cambio sutil de superficie
6. …y solo al final, una card.

`surface` blanco se usa en Precios y Footer; el CTA final usa `bg-ink` como
bloque de contraste a ancho completo (no una tarjeta).

---

## 7. Bordes

- Color de borde **siempre** `line` (salvo texto sobre oscuro: `white/15`,
  `white/25`).
- Grosor 1px. Los bordes delimitan formularios, tablas, divisores y superficies
  que realmente lo necesitan.
- Prohibido rodear contenido puramente informativo con cajas.

---

## 8. Border radius

Escala mínima y coherente (tokens):

| Token             | Valor    | Uso                                      |
| :---------------- | :------- | :--------------------------------------- |
| `rounded-control` | 0.5rem   | Botones, inputs, items de nav            |
| `rounded-surface` | 0.875rem | Imágenes, carruseles, panel de nav móvil |

- **No** convertir botones, filtros o labels en cápsulas (`rounded-full`) por
  defecto. `rounded-full` **solo** para puntos de carrusel.
- Nada de `rounded-4xl`/`rounded-[1.6rem]` como primitiva de layout.

---

## 9. Sombras

- Sin sombras en secciones ni cards normales.
- Única excepción: elementos realmente flotantes (nav inferior móvil:
  `shadow-lg`). Estados hover refuerzan color/borde, no sombra.

---

## 10. Botones

Jerarquía estricta; como máximo **una** acción primaria por área.

| Clase                 | Uso                                                    |
| :-------------------- | :----------------------------------------------------- |
| `.btn .btn-primary`   | Acción principal (Reservar por WhatsApp). Fondo clay   |
| `.btn .btn-secondary` | Acción secundaria (Reservar en planes no recomendados) |
| `.btn .btn-on-dark`   | Secundaria sobre fondo oscuro (teléfono en CTA)        |
| `.btn-ghost`          | Acción terciaria / navegación                          |
| `.link-arrow`         | Acción discreta en línea ("Reservar sesión →")         |

- `.btn-lg` solo cuando la acción lo merece (hero, CTA final).
- Evitar botones enormes para acciones menores. Preferir acciones de texto.

---

## 11. Inputs

Hoy la landing no tiene formulario (la conversión es por WhatsApp). Si se añade
uno:

- Label visible encima del campo (`text-sm font-medium text-ink`).
- Control con `rounded-control`, borde `line`, foco `outline-clay`.
- Mensaje de ayuda en `text-sm text-ink-3`; error en `danger`.
- Sin cards por grupo de campos: agrupar con espacio y, como mucho, un subtítulo.
- Altura cómoda (~`py-2.5`), un solo ancho de columna de lectura.

---

## 12. Tablas y datos

Para información estructurada usar filas, no grids de cards.

- Cabecera/etiquetas en `text-xs uppercase tracking-[0.18em] text-ink-3`.
- Filas separadas por `border-b border-line`; la primera con `border-t`.
- Números alineados y con la display face (precios en `font-display`).
- Hover de fila sutil (`bg-surface-2`) solo si la fila es interactiva.
- Estados con `ink-3`/`clay`; badges solo cuando aporten semántica real.
- Ejemplo canónico: la tabla de precios (`.astro` Pricing, desktop).

---

## 13. Navegación

- **Desktop:** `Header.astro` sticky, `h-16`, fondo `canvas/85` +
  `backdrop-blur`, borde inferior `line`. Marca + anchors + un CTA primario.
- **Móvil:** `MobileNav.astro`, barra inferior flotante con icono + label,
  `rounded-surface`, una sola sombra. El body reserva `padding-bottom: 5.5rem`.
- Anchors con scroll suave. Sin breadcrumbs (sitio de una página).
- Estados: `text-ink-2` por defecto → `hover:text-ink`.

---

## 14. Iconografía

- **Una sola familia**, centralizada en `src/components/ui/Icon.astro`.
- Iconos de UI: trazo `1.75`, `stroke-linecap/linejoin: round`, grid 24px,
  `currentColor`.
- Marcas (WhatsApp, Instagram, TikTok): rellenas, mismo tamaño base.
- Tamaños: `h-4 w-4` (en línea), `h-5 w-5` (botones grandes).
- Un icono debe **mejorar comprensión o facilitar una acción**. Nunca decorar.
- Prohibido el patrón "icono dentro de un cuadrado de color + título +
  descripción" repetido. Prohibidos los emojis (📍📞) como iconos.

---

## 15. Responsive

- Breakpoints: `sm` (640) y `lg` (1024).
- Móvil prioriza contenido: carruseles horizontales con snap para servicios y
  precios, en lugar de apilar todo verticalmente.
- En desktop, los carruseles se ocultan (`lg:hidden`) y se muestran los layouts
  editoriales/tabla (`hidden lg:block`).
- Sin scroll horizontal accidental; imágenes y figuras con `w-full`.
- `backdrop-blur` se desactiva en móvil (coste GPU).

---

## 16. Microinteracciones

- Transiciones cortas (~200ms) y naturales, solo en color/borde/transform.
- `:focus-visible` global en clay.
- `link-arrow` desplaza su flecha 3px en hover.
- `prefers-reduced-motion`: se anulan animaciones y transiciones.
- El reveal de scroll (GSAP) se desactiva en móvil y con reduced-motion.

---

## 17. Cómo extender

- Nuevos colores → tokens en `@theme` (`global.css`), nunca valores sueltos.
- Nuevos patrones de botón → `@layer components` en `global.css`.
- Nuevos iconos → `Icon.astro`.
- Reutilizar `.shell`, `.eyebrow`, `.btn*`, `.link-arrow`.

---

# Avoiding generic AI UI

Patrones prohibidos. Un revisor debe rechazar un PR que los introduzca.

- **Do not wrap every section in a card.** Las secciones se separan con
  `border-t` y espacio.
- **Do not create cards inside cards.**
- **Do not use large rounded rectangles as the default layout primitive.**
  Nada de `rounded-3xl`/`rounded-4xl` por defecto.
- **Do not add decorative gradients** (aurora, radiales, `from-orange-500
to-amber-300`) without a functional purpose.
- **Do not use badges for ordinary text.** Un badge solo si aporta estado.
- **Do not add icons to every heading**, and never inside colored squares.
- **Do not use shadows to separate normal page sections.**
- **Do not give every component a border.** Borde solo cuando delimita algo.
- **Do not use `rounded-full` for buttons/labels** by default.
- **Do not use `font-semibold` on everything.** Jerarquía por tamaño y familia.
- **Prefer whitespace, typography and alignment over containers.**
- **Prefer structured lists and rows for data-heavy interfaces.**
- **Use accent colors sparingly** (one accent: clay).
- **Avoid decorative pills and chips**; usar texto plano.
- **Avoid emoji as icons.**
- **Preserve strong information hierarchy** and generous white space.
