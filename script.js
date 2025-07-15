// Enlace a Booksy
const booksyURL = "https://booksy.com/es-es/osteopatiayacupuntura";

// Abrir Booksy en nueva ventana
function abrirBooksy() {
  window.open(booksyURL, "_blank");
}

// Botones de reserva
["btn-open-login", "btn-open-login-hero", "btn-open-login-footer"].forEach(
  (id) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", abrirBooksy);
  }
);

// IntersectionObserver para activar animaciones
const animados = document.querySelectorAll(
  ".hero-content h1, .hero-content p, .btn-primary, .service-card"
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
animados.forEach((el) => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});

// Toggle del addon lateral móvil
document.addEventListener("DOMContentLoaded", () => {
  const addon = document.getElementById("mobile-addon");
  const toggle = document.getElementById("addon-toggle");
  const panel = document.getElementById("addon-panel");

  if (addon && toggle && panel) {
    toggle.addEventListener("click", () => {
      const isOpen = addon.classList.toggle("open");
      // Accesibilidad
      addon.setAttribute("aria-expanded", isOpen);
      panel.setAttribute("aria-hidden", !isOpen);
    });
  }
});
// Cerrar addon lateral al hacer clic fuera o en un enlace
document.addEventListener("click", (e) => {
  const addon = document.getElementById("mobile-addon");
  const panel = document.getElementById("addon-panel");
  const toggle = document.getElementById("addon-toggle");
  if (!addon || !panel || !toggle) return;

  const isClickInside =
    addon.contains(e.target) ||
    panel.contains(e.target) ||
    toggle.contains(e.target);

  // Si está abierto y el clic NO es dentro de addon o panel, cerramos
  if (addon.classList.contains("open") && !isClickInside) {
    addon.classList.remove("open");
    addon.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
  }
});

// También cerramos al pulsar un enlace dentro del panel
document.querySelectorAll("#addon-panel a").forEach((link) =>
  link.addEventListener("click", () => {
    const addon = document.getElementById("mobile-addon");
    const panel = document.getElementById("addon-panel");
    if (!addon || !panel) return;
    addon.classList.remove("open");
    addon.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
  })
);

// FLECHAS SLIDER PARA SERVICIOS Y BONOS
function setupSliderArrows(sliderSelector, leftSelector, rightSelector) {
  const slider = document.querySelector(sliderSelector);
  const left = document.querySelector(leftSelector);
  const right = document.querySelector(rightSelector);
  if (!slider || !left || !right) return;

  left.addEventListener("click", () => {
    slider.scrollBy({ left: -slider.offsetWidth * 0.8, behavior: "smooth" });
  });
  right.addEventListener("click", () => {
    slider.scrollBy({ left: slider.offsetWidth * 0.8, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupSliderArrows(
    ".service-cards",
    ".section.services .slider-arrow.left",
    ".section.services .slider-arrow.right"
  );
  setupSliderArrows(
    ".bonos-cards",
    ".section.bonos .slider-arrow.left",
    ".section.bonos .slider-arrow.right"
  );
});

// ANIMACIONES AL HACER SCROLL
function animacionesScroll() {
  const animables = document.querySelectorAll(
    ".service-card, .bono-card, .section h2, .hero-content, .contacto-info, .footer-container"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  animables.forEach((el) => {
    el.classList.add("anim-scroll");
    observer.observe(el);
  });
}
document.addEventListener("DOMContentLoaded", animacionesScroll);

// SCROLL TO TOP
const scrollBtn = document.getElementById("scroll-to-top");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// MODO OSCURO (toggle manual, opcional)
// Descomenta para activar el botón de modo oscuro
// const darkBtn = document.createElement('button');
// darkBtn.textContent = '🌙';
// darkBtn.style.position = 'fixed';
// darkBtn.style.bottom = '32px';
// darkBtn.style.left = '32px';
// darkBtn.style.zIndex = '1201';
// darkBtn.className = 'btn-darkmode';
// document.body.appendChild(darkBtn);
// darkBtn.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

// Animación de entrada para sección de contacto
function animarContacto() {
  const contactoSection = document.querySelector(".section.contacto");
  if (!contactoSection) return;
  contactoSection.style.opacity = 0;
  contactoSection.style.transform = "translateY(40px)";
  function mostrarContacto() {
    const rect = contactoSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      contactoSection.style.transition = "opacity 0.7s, transform 0.7s";
      contactoSection.style.opacity = 1;
      contactoSection.style.transform = "translateY(0)";
      window.removeEventListener("scroll", mostrarContacto);
    }
  }
  window.addEventListener("scroll", mostrarContacto);
  // Si ya está visible al cargar
  mostrarContacto();
}
document.addEventListener("DOMContentLoaded", animarContacto);

// Loader minimalista
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader-bg");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("fade-out");
      setTimeout(() => loader.remove(), 500);
    }, 900);
  }
});

// Doble pulsación en móvil para botones flotantes WhatsApp y Teléfono
function dobleToqueFlotantes() {
  function isMobile() {
    return (
      window.innerWidth <= 800 ||
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      )
    );
  }
  [
    {
      selector: ".whatsapp-float",
      action: function (el) {
        window.open(el.href, "_blank");
      },
    },
    {
      selector: ".call-float",
      action: function (el) {
        window.location.href = el.href;
      },
    },
  ].forEach(({ selector, action }) => {
    const btn = document.querySelector(selector);
    if (!btn) return;
    let tocado = false;
    btn.addEventListener("click", function (e) {
      if (!isMobile()) return; // Solo en móvil
      if (!tocado) {
        e.preventDefault();
        btn.classList.add("tooltip-activo");
        setTimeout(() => btn.classList.remove("tooltip-activo"), 2000);
        tocado = true;
        setTimeout(() => (tocado = false), 1800);
      } else {
        // Segunda pulsación: ejecuta acción
        btn.classList.remove("tooltip-activo");
        action(btn);
        tocado = false;
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", dobleToqueFlotantes);

// Ocultar tooltip flotante al pulsar fuera en móvil
function ocultarTooltipFuera() {
  function isMobile() {
    return (
      window.innerWidth <= 800 ||
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      )
    );
  }
  document.addEventListener("touchstart", function (e) {
    if (!isMobile()) return;
    const wBtn = document.querySelector(".whatsapp-float");
    const cBtn = document.querySelector(".call-float");
    if (!wBtn && !cBtn) return;
    if (wBtn.classList.contains("tooltip-activo") && !wBtn.contains(e.target)) {
      wBtn.classList.remove("tooltip-activo");
    }
    if (cBtn.classList.contains("tooltip-activo") && !cBtn.contains(e.target)) {
      cBtn.classList.remove("tooltip-activo");
    }
  });
}
document.addEventListener("DOMContentLoaded", ocultarTooltipFuera);

// Mejoras UX/UI avanzadas
document.addEventListener("DOMContentLoaded", function () {
  // Stagger animation para cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("in-view");
        }, index * 100);
      }
    });
  }, observerOptions);

  // Aplicar animación stagger a cards
  document.querySelectorAll(".service-card, .bono-card").forEach((card) => {
    card.classList.add("anim-scroll");
    staggerObserver.observe(card);
  });

  // Lazy loading mejorado con placeholder
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add("loading");

        img.onload = () => {
          img.classList.remove("loading");
          img.classList.add("loaded");
        };

        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    imageObserver.observe(img);
  });

  // Smooth scroll mejorado
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Prefetch para enlaces importantes
  const importantLinks = document.querySelectorAll(
    'a[href*="wa.me"], a[href*="tel:"]'
  );
  importantLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      // Prefetch DNS para WhatsApp
      if (link.href.includes("wa.me")) {
        const prefetch = document.createElement("link");
        prefetch.rel = "dns-prefetch";
        prefetch.href = "//wa.me";
        document.head.appendChild(prefetch);
      }
    });
  });

  // Performance observer para métricas
  if ("PerformanceObserver" in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          console.log("LCP:", entry.startTime);
        }
      }
    });
    observer.observe({ entryTypes: ["largest-contentful-paint"] });
  }
});

// Mensajes de confirmación para botones flotantes
document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.querySelector(".whatsapp-float");
  const callBtn = document.querySelector(".call-float");

  // Función para mostrar mensaje de confirmación
  function showToast(message, type = "info") {
    // Crear el elemento toast
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <i class="ph ph-check-circle"></i>
        <span>${message}</span>
      </div>
    `;

    // Añadir al DOM
    document.body.appendChild(toast);

    // Mostrar con animación
    setTimeout(() => toast.classList.add("toast-show"), 100);

    // Ocultar después de 3 segundos
    setTimeout(() => {
      toast.classList.remove("toast-show");
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
  }

  // Event listener para WhatsApp
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", (e) => {
      showToast("Chatea conmigo por WhatsApp 💬", "whatsapp");
    });
  }

  // Event listener para llamada
  if (callBtn) {
    callBtn.addEventListener("click", (e) => {
      showToast("Llámame ahora 📞", "phone");
    });
  }
});

// Forzar apertura directa de WhatsApp en todos los botones relevantes

document.addEventListener("DOMContentLoaded", function () {
  function isMobile() {
    // Mejor detección: ancho de pantalla y userAgent
    return (
      window.innerWidth <= 800 ||
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      )
    );
  }
  // Mensaje predefinido para WhatsApp
  const mensajeWhatsapp = encodeURIComponent(
    "¡Hola! Me gustaría pedir información sobre los servicios de osteopatía y medicina china."
  );
  const urlWhatsappMovil = `https://wa.me/34634810054?text=${mensajeWhatsapp}`;
  const urlWhatsappWeb = `https://web.whatsapp.com/send?phone=34634810054&text=${mensajeWhatsapp}`;
  // Botón header
  const btnHeaderWhatsapp = document.querySelector(".btn-booksy");
  if (btnHeaderWhatsapp) {
    btnHeaderWhatsapp.addEventListener("click", function (e) {
      e.preventDefault();
      if (isMobile()) {
        window.location.assign(urlWhatsappMovil);
      } else {
        window.open(urlWhatsappWeb, "_blank");
      }
    });
  }
  // Botón flotante
  const btnFloatWhatsapp = document.querySelector(".whatsapp-float");
  if (btnFloatWhatsapp) {
    btnFloatWhatsapp.addEventListener("click", function (e) {
      e.preventDefault();
      if (isMobile()) {
        window.location.assign(urlWhatsappMovil);
      } else {
        window.open(urlWhatsappWeb, "_blank");
      }
    });
  }
});
