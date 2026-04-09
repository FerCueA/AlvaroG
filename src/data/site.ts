export const siteInfo = {
  name: "Álvaro García",
  disciplines: "OSTEOPATÍA · QUIROMASAJE · MEDICINA CHINA",
  heroDescription:
    "Osteopatía, acupuntura y terapias naturales en Las Palmas con una experiencia calmada, orgánica y enfocada en aliviar el cuerpo de verdad.",
  locationShort: "16 C. Arguineguín · Las Palmas de Gran Canaria",
  locationLong: "16 C. Arguineguín, Las Palmas de Gran Canaria, Canarias",
  homeServiceNote: "A domicilio · consultar precio según distancia",
  replyNote: "Respuesta rápida por WhatsApp",
  phoneDisplay: "634 810 054",
  phoneHref: "tel:+34634810054",
  whatsappNumber: "34634810054",
  defaultWhatsappMessage:
    "Hola Álvaro, me gustaría reservar una sesión. ¿Tienes disponibilidad esta semana?",
  instagram: "https://www.instagram.com/alvaro_garcia_osteopata/",
  tiktok: "https://www.tiktok.com/@osteopata.lvaro",
} as const;

export const heroNotes = [siteInfo.locationShort, siteInfo.homeServiceNote, siteInfo.replyNote] as const;

export const heroStats = [
  { value: "+1000", label: "pacientes tratados", tone: "bg-white/90" },
  { value: "12 años", label: "de experiencia", tone: "bg-[#ebe4db]" },
  { value: "100%", label: "a domicilio", tone: "bg-[#e7ebec]" },
] as const;

export const services = [
  {
    title: "Osteopatía",
    image: "/images/osteopatia.jpg",
    description: "Técnica manual para el reequilibrio corporal",
  },
  {
    title: "Acupuntura",
    image: "/images/acupuntura.jpg",
    description: "Estimulación de puntos energéticos para restaurar el flujo del cuerpo",
  },
  {
    title: "Moxibustión",
    image: "/images/moxibustion.jpg",
    description: "Terapia de calor tradicional para aliviar dolencias",
  },
  {
    title: "Vendaje Neuromuscular",
    image: "/images/vendaje.jpg",
    description: "Soporte muscular sin limitar el movimiento",
  },
  {
    title: "Auriculopuntura",
    image: "/images/auriculopuntura.jpg",
    description: "Estimulación de puntos en la oreja para tratar diferentes dolencias",
  },
] as const;

export const pricingPlans = [
  {
    name: "Sesión individual",
    price: "45€",
    desc: "Una sesión completa para empezar tu recuperación.",
  },
  {
    name: "Bono 2 sesiones",
    price: "80€",
    desc: "Ideal para trabajar un problema concreto en profundidad.",
  },
  {
    name: "Bono 3 sesiones",
    price: "120€",
    desc: "El plan más elegido. Permite un abordaje completo y una recuperación real, con seguimiento entre sesiones.",
    tag: "BONO RECOMENDADO",
    perks: [
      "3 sesiones personalizadas",
      "Evaluación inicial incluida",
      "Seguimiento entre sesiones",
    ],
  },
  {
    name: "Bono 5 sesiones",
    price: "180€",
    desc: "Para un tratamiento continuado y resultados duraderos.",
  },
] as const;

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
