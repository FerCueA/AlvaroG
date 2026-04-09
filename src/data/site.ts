export const siteInfo = {
  name: "Álvaro García",
  disciplines: "OSTEOPATÍA · QUIROMASAJE · MEDICINA CHINA",
  heroDescription:
    "Tratamientos personalizados de osteopatía, quiromasaje y medicina china para aliviar dolor, recuperar movilidad y mejorar tu bienestar, en consulta o a domicilio en Las Palmas.",
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
    description: "Tratamiento manual para aliviar dolor, mejorar la movilidad y reequilibrar el cuerpo.",
  },
  {
    title: "Acupuntura",
    image: "/images/acupuntura.jpg",
    description: "Aplicación en puntos específicos para aliviar molestias y apoyar la recuperación.",
  },
  {
    title: "Moxibustión",
    image: "/images/moxibustion.jpg",
    description: "Terapia de calor tradicional para calmar molestias y favorecer el equilibrio corporal.",
  },
  {
    title: "Vendaje Neuromuscular",
    image: "/images/vendaje.jpg",
    description: "Soporte terapéutico que ayuda a descargar la zona sin limitar el movimiento.",
  },
  {
    title: "Auriculopuntura",
    image: "/images/auriculopuntura.jpg",
    description: "Estimulación de puntos en la oreja como apoyo en dolor, estrés y otros desequilibrios.",
  },
] as const;

export const pricingPlans = [
  {
    name: "Sesión individual",
    price: "45€",
    desc: "Sesión individual adaptada a tu caso para valorar y empezar el tratamiento.",
  },
  {
    name: "Bono 2 sesiones",
    price: "80€",
    desc: "Perfecto para molestias concretas que necesitan continuidad entre sesiones.",
  },
  {
    name: "Bono 3 sesiones",
    price: "120€",
    desc: "La opción más equilibrada para trabajar el problema con seguimiento y continuidad real.",
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
    desc: "Pensado para procesos más completos o tratamientos mantenidos en el tiempo.",
  },
] as const;

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
