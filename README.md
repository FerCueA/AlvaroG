# 🧘 Landing de Álvaro García

**Web de osteopatía, quiromasaje y medicina china a domicilio en Las Palmas de Gran Canaria.**

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com)

Landing page construida con **Astro** y **Tailwind CSS**, pensada para la conversión en móvil con reservas por WhatsApp. Presenta los tratamientos, los precios y la vía de contacto de forma clara, rápida y fácil de mantener.

🌍 **Autoría:** [aleixofdezcuevas.es](https://aleixofdezcuevas.es/)

---

## ✨ Qué incluye

- 🀄 **Identidad de medicina china**: tinta, papel y cinabrio; hanzi como acento y un sistema de **marcadores de meridiano** en lugar de cards.
- 🏠 **Apertura editorial** con CTA a WhatsApp y datos de confianza.
- 🖋️ **Manifiesto** breve con el enfoque de trabajo.
- 💆 **Tratamientos** como capítulos (hanzi, descripción y reserva directa).
- 💶 **Precios** en lista sobria con plan recomendado.
- 📲 **CTA final** con sello y disponibilidad; footer con contacto y redes.
- 🧭 **Navegación** con cabecera sticky en escritorio y barra inferior flotante en móvil.
- 🪄 **Animaciones** de aparición al hacer scroll, respetando `prefers-reduced-motion`.
- ♿ **Responsive** mobile-first y accesible (foco visible, áreas táctiles, contraste).
- 🧩 **Contenido centralizado** en `src/data` y `src/lib`, separado de la presentación.
- 🎨 **Design system** con tokens en `src/styles/global.css` documentado en `DESIGN.md`.

---

## 🛠️ Tecnologías

**🎨 Frontend**
[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black)](https://gsap.com)
[![Lenis](https://img.shields.io/badge/Lenis-111827?style=flat-square&logoColor=white)](https://github.com/darkroomengineering/lenis)

**🧰 Calidad y tooling**
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)](https://prettier.io)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com)

---

## 🚀 Puesta en marcha

### Requisitos

- 🟢 `Node.js >= 22.12.0`
- 📦 `npm`

### Comandos

```bash
npm install       # instalar dependencias
npm run dev       # entorno de desarrollo → http://localhost:4321
npm run build     # generar la versión estática en dist/
npm run preview   # servir localmente la build generada
```

---

## 🧾 Scripts

| Script                 | Descripción                                 |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Inicia el entorno de desarrollo             |
| `npm run build`        | Genera la versión estática en `dist/`       |
| `npm run preview`      | Sirve localmente la build generada          |
| `npm run check`        | Valida tipos y plantillas con `astro check` |
| `npm run lint`         | Analiza el código con ESLint                |
| `npm run format`       | Formatea el código con Prettier             |
| `npm run format:check` | Comprueba el formato sin modificar archivos |

> ℹ️ El proyecto todavía no tiene tests configurados.

---

## 📁 Estructura

```
src/
  components/
    layout/           # Header, Footer, MobileNav
    sections/         # Hero, Manifesto, Treatments, Pricing, Testimonials, Cta
    ui/               # Componentes base reutilizables
      Icon.astro
      SectionHeading.astro
      WhatsAppButton.astro
  data/               # Contenido
    services.ts       # Tratamientos (con hanzi)
    plans.ts          # Precios
    testimonials.ts   # Casos (opcional; vacío = sección oculta)
  lib/
    site.ts           # Config del sitio, contacto y navegación
  layouts/
    Layout.astro
  pages/
    index.astro
  styles/
    global.css        # Tokens del design system
```

> 💡 Para cambiar textos, tratamientos o precios normalmente basta con editar
> `src/data/*.ts`. Para datos de contacto, navegación y metadatos, edita
> `src/lib/site.ts`.

---

## 🚀 Despliegue

Proyecto estático apto para **Netlify**, **Vercel**, **GitHub Pages** o hosting tradicional. La configuración de Netlify ya está incluida en `netlify.toml`.

- **Comando de build:** `npm run build`
- **Carpeta de publicación:** `dist`

---

## 📫 Contacto

[![WhatsApp](https://img.shields.io/badge/WhatsApp-634_810_054-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/34634810054)
[![Instagram](https://img.shields.io/badge/Instagram-alvaro__garcia__osteopata-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/alvaro_garcia_osteopata/)
[![TikTok](https://img.shields.io/badge/TikTok-osteopata.lvaro-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@osteopata.lvaro)

---

## 📚 Documentación adicional

- [`DESIGN.md`](./DESIGN.md) — sistema de diseño (referencia obligatoria para UI).
- [`AGENTS.md`](./AGENTS.md) — reglas para agentes de IA.

---

## Autoría

- Desarrollo de la web: [aleixofdezcuevas.es](https://aleixofdezcuevas.es/)
