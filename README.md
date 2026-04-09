# Landing Page de Álvaro García

Sitio web corporativo desarrollado con `Astro` para la marca personal de **Álvaro García**, enfocado en la captación de reservas para servicios de **osteopatía, quiromasaje y medicina china** en Las Palmas de Gran Canaria.

El proyecto está planteado como una **landing page estática, visual y mobile-first**, con foco en conversión mediante **WhatsApp**, una estética orgánica y una estructura fácil de mantener.

---

## Índice

- [Landing Page de Álvaro García](#landing-page-de-álvaro-garcía)
  - [Índice](#índice)
  - [1. Resumen del proyecto](#1-resumen-del-proyecto)
    - [Estado actual](#estado-actual)
  - [2. Objetivos del sitio](#2-objetivos-del-sitio)
  - [3. Stack técnico y dependencias](#3-stack-técnico-y-dependencias)
  - [4. Requisitos previos](#4-requisitos-previos)
  - [5. Instalación y comandos de trabajo](#5-instalación-y-comandos-de-trabajo)
    - [5.1 Instalación](#51-instalación)
    - [5.2 Desarrollo local](#52-desarrollo-local)
    - [5.3 Build de producción](#53-build-de-producción)
    - [5.4 Vista previa de la build](#54-vista-previa-de-la-build)
    - [5.5 Scripts disponibles](#55-scripts-disponibles)
  - [6. Estructura del proyecto](#6-estructura-del-proyecto)
    - [6.1 Componentes principales](#61-componentes-principales)
  - [7. Organización del contenido y estilos](#7-organización-del-contenido-y-estilos)
    - [7.1 Contenido centralizado](#71-contenido-centralizado)
    - [7.2 Sistema visual centralizado](#72-sistema-visual-centralizado)
  - [8. Despliegue](#8-despliegue)
  - [9. Mantenimiento recomendado](#9-mantenimiento-recomendado)
  - [10. Autoría](#10-autoría)

---

## 1. Resumen del proyecto

Esta web presenta los servicios de Álvaro García de forma clara, elegante y pensada para móvil. La navegación es directa y la conversión se apoya en llamadas a la acción simples, especialmente la reserva por WhatsApp.

### Estado actual

- Landing page estática con `Astro`
- Diseño orgánico y visual tipo spa / bienestar
- Secciones de tratamientos y precios adaptadas a móvil
- Información y estilos centralizados para facilitar mantenimiento

---

## 2. Objetivos del sitio

Los objetivos principales del proyecto son:

1. **Presentar la marca personal** de forma profesional.
2. **Explicar tratamientos y precios** con claridad.
3. **Facilitar la reserva inmediata** por WhatsApp.
4. **Ofrecer una buena experiencia móvil** sin sacrificar rendimiento.
5. **Permitir cambios rápidos** en textos, tarifas, estilos y datos de contacto.

---

## 3. Stack técnico y dependencias

Estas son las dependencias actualmente definidas en `package.json`:

| Tecnología | Uso principal |
| :-- | :-- |
| `astro` | Framework principal del sitio |
| `tailwindcss` | Utilidades de estilos |
| `@tailwindcss/vite` | Integración de Tailwind con Vite |
| `gsap` | Librería instalada para animación avanzada |
| `lenis` | Librería instalada para scroll suave |

> Aunque algunas librerías estén instaladas, el proyecto actual prioriza una experiencia ligera y un rendimiento alto.

---

## 4. Requisitos previos

Antes de arrancar el proyecto, asegúrate de tener instalado:

- `Node.js` **22.12.0** o superior
- `npm`

---

## 5. Instalación y comandos de trabajo

Ejecuta todos los comandos desde la raíz del proyecto.

### 5.1 Instalación

```bash
npm install
```

### 5.2 Desarrollo local

```bash
npm run dev
```

### 5.3 Build de producción

```bash
npm run build
```

### 5.4 Vista previa de la build

```bash
npm run preview
```

### 5.5 Scripts disponibles

| Comando | Descripción |
| :-- | :-- |
| `npm run dev` | Inicia el entorno de desarrollo |
| `npm run build` | Genera la versión final en `dist/` |
| `npm run preview` | Previsualiza la build local |
| `npm run astro` | Ejecuta comandos de Astro |

---

## 6. Estructura del proyecto

```text
/
├── public/
│   ├── _redirects
│   └── images/
├── src/
│   ├── components/
│   │   ├── Cta.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── MobileNav.astro
│   │   ├── Pricing.astro
│   │   └── Services.astro
│   ├── data/
│   │   └── site.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       ├── global.css
│       └── theme.css
├── astro.config.mjs
├── netlify.toml
├── package.json
├── README.md
└── tsconfig.json
```

### 6.1 Componentes principales

- `Hero.astro`: portada principal y CTA inicial
- `Services.astro`: tratamientos y presentación de servicios
- `Pricing.astro`: precios y bonos
- `Cta.astro`: bloque final de conversión
- `Footer.astro`: contacto, redes y pie de página

---

## 7. Organización del contenido y estilos

La estructura actual separa claramente **contenido**, **presentación** y **layout**.

### 7.1 Contenido centralizado

El archivo `src/data/site.ts` actúa como fuente principal para:

- datos de contacto
- mensajes de WhatsApp
- textos repetidos
- tratamientos
- planes de precios

Esto permite modificar información clave sin duplicarla en varios componentes.

### 7.2 Sistema visual centralizado

Los estilos están organizados en dos capas:

- `src/styles/theme.css`: variables de color y guía visual global
- `src/styles/global.css`: tipografías, utilidades, fondos, formas y comportamientos globales

---

## 8. Despliegue

El proyecto está preparado para desplegarse en **Netlify**.

Configuración actual en `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** `22`

---

## 9. Mantenimiento recomendado

Para mantener el proyecto ordenado y fácil de escalar:

1. **Actualiza `README.md`** cuando cambie la estructura.
2. **Revisa `package.json`** al añadir o eliminar dependencias.
3. **Centraliza siempre los textos reutilizables** en `src/data/site.ts`.
4. **Evita duplicar colores o estilos** fuera de `theme.css` y `global.css`.
5. **Comprueba la build** antes de publicar:

```bash
npm run build
```

---

## 10. Autoría

- Desarrollo web: [aleixofdezcuevas.es](https://aleixofdezcuevas.es/)
- Proyecto para la marca personal de **Álvaro García**

