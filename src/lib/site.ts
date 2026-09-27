/**
 * Site-wide configuration and constants.
 * Single source of truth for identity, contact details and navigation.
 */

export interface NavItem {
	href: string;
	label: string;
	icon: string;
}

export const SITE = {
	name: "Álvaro García",
	discipline: "Osteopatía · Quiromasaje · Medicina china",
	location: "Las Palmas de Gran Canaria",
	phone: "+34634810054",
	phoneDisplay: "634 810 054",
	whatsappNumber: "34634810054",
	socials: {
		instagram: "https://www.instagram.com/alvaro_garcia_osteopata/",
		tiktok: "https://www.tiktok.com/@osteopata.lvaro",
	},
	author: {
		name: "aleixofdezcuevas.es",
		url: "https://aleixofdezcuevas.es/",
	},
	meta: {
		title: "Terapias Naturales en Las Palmas",
		description:
			"Osteopatía, acupuntura y terapias naturales a domicilio en Las Palmas de Gran Canaria.",
	},
	availability: {
		response: "Respuesta por WhatsApp el mismo día",
		coverage: "A domicilio en Las Palmas de Gran Canaria",
		/** Opcional: añadir horario real, p. ej. "Mañanas y tardes". Vacío = no se muestra. */
		hours: "",
	},
} as const;

/** `tel:` link for the contact number. */
export const PHONE_TEL = `tel:${SITE.phone}`;

/** Primary navigation, shared by the desktop header and the mobile nav. */
export const NAV_ITEMS: NavItem[] = [
	{ href: "#inicio", label: "Inicio", icon: "home" },
	{ href: "#tratamientos", label: "Tratamientos", icon: "sparkles" },
	{ href: "#precios", label: "Precios", icon: "tag" },
	{ href: "#contacto", label: "Contacto", icon: "map-pin" },
];
