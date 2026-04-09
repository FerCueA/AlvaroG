# Landing Page de Álvaro García

Landing page desarrollada con Astro para un negocio de osteopatía, quiromasaje, acupuntura y terapias naturales en Las Palmas de Gran Canaria.

El proyecto está orientado a conversión en móvil, con foco en reservas por WhatsApp, secciones inmersivas, animaciones suaves y una presentación visual premium.

## Stack y dependencias principales

Estas son las dependencias actuales definidas en `package.json`:

- `astro` 6
- `tailwindcss` 4
- `@tailwindcss/vite`
- `gsap` con `ScrollTrigger`
- `lenis` para smooth scroll


## Requisitos

- Node.js 22.12.0 o superior
- npm

## Scripts

Ejecuta los comandos desde la raíz del proyecto.

| Comando | Descripción |
| :-- | :-- |
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia el entorno de desarrollo |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza la build localmente |

## Estructura

```text
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Cta.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Pricing.astro
│   │   ├── Services.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Secciones actuales

- Hero con CTA principal a WhatsApp
- Carrusel móvil de tratamientos
- Bloque de precios con bono recomendado
- CTA final de reserva
- Footer con contacto, redes y crédito del creador
- Botón flotante de WhatsApp

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

## Despliegue

El proyecto está preparado para desplegarse en Netlify mediante `netlify.toml`:

- comando de build: `npm run build`
- carpeta publicada: `dist`
- versión de Node configurada: `22`

## Notas

- El proyecto está optimizado como sitio estático.
- Hay animaciones de scroll, pero la página sigue siendo funcional sin interacción avanzada.
- Para dejar la documentación alineada con el código real, conviene revisar `package.json` cada vez que se añadan o eliminen librerías.

## Autoría

- Desarrollo de la web: https://aleixofdezcuevas.es/
