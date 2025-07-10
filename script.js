// Reemplaza esta URL con tu enlace real de Booksy
const booksyURL = "https://booksy.com/es-es/osteopatiayacupuntura";

// Lista de botones que redirigen a Booksy
const botonesReserva = [
  document.getElementById("btn-open-login"),
  document.getElementById("btn-open-login-hero"),
  document.getElementById("btn-open-login-footer"),
];

botonesReserva.forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", () => {
      window.open(booksyURL, "_blank");
    });
  }
});

// Menú responsive (opcional si tienes nav-toggle activo)
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
