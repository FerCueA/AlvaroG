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
const scrollBtn = document.createElement("button");
scrollBtn.className = "scroll-to-top";
scrollBtn.innerHTML = '<i class="ph ph-arrow-up"></i>';
document.body.appendChild(scrollBtn);
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
