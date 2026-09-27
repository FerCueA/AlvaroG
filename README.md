# Landing Page de Álvaro García

Landing page desarrollada con Astro para un negocio de osteopatía, quiromasaje, acupuntura y terapias naturales en Las Palmas de Gran Canaria.

El proyecto está orientado a conversión en móvil, con foco en reservas por WhatsApp, secciones inmersivas, animaciones suaves y una presentación visual premium.

## Stack

- Astro 6
- Tailwind CSS 4 (design tokens en `src/styles/global.css`)
- GSAP con ScrollTrigger
- Lenis para smooth scroll

## Requisitos

- Node.js 22.12.0 o superior
- npm

## Scripts

Ejecuta los comandos desde la raíz del proyecto.

| Comando           | Descripción                                |
| :---------------- | :----------------------------------------- |
| `npm install`     | Instala dependencias                       |
| `npm run dev`     | Inicia el entorno de desarrollo            |
| `npm run build`   | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza la build localmente           |
| `npm run check`   | Ejecuta el type-check de Astro             |

## Estructura

```text
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Cta.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── MobileNav.astro
│   │   ├── Pricing.astro
│   │   ├── Services.astro
│   │   └── ui/
│   │       └── Icon.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── DESIGN.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Diseño

El sistema visual (tipografía, color, spacing, componentes y patrones
prohibidos) está documentado en [`DESIGN.md`](./DESIGN.md). Es la referencia
obligatoria para cualquier cambio de frontend.

## Secciones actuales

- Hero editorial con CTA principal a WhatsApp y datos de confianza
- Tratamientos: carrusel en móvil, layout alternado en escritorio
- Tabla de precios con plan recomendado
- CTA final de reserva
- Footer con contacto, redes y crédito del creador
- Cabecera sticky en escritorio y navegación inferior flotante en móvil

## Personalización rápida

### Textos y estructura

- Página principal: `src/pages/index.astro`
- Hero: `src/components/Hero.astro`
- Servicios: `src/components/Services.astro`
- Precios: `src/components/Pricing.astro`
- CTA final: `src/components/Cta.astro`
- Footer: `src/components/Footer.astro`

### Imágenes

Las imágenes están en `public/images/`.

### Estilos globales

La configuración visual global, tipografías y utilidades están en `src/styles/global.css`.

### WhatsApp

El número y los mensajes precargados están definidos directamente en los componentes que lanzan la reserva.

## Notas

- El proyecto está optimizado como sitio estático.
- La build actual se genera correctamente con `npm run build`.
- Hay animaciones de scroll, pero la página sigue siendo funcional sin interacción avanzada.

## Autoría

- Desarrollo de la web: https://aleixofdezcuevas.es/
