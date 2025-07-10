// Enlace a Booksy
const booksyURL = "https://booksy.com/es-es/osteopatiayacupuntura";

// Abrir Booksy
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
