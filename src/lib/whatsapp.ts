import { SITE } from "./site";

/**
 * Pre-filled WhatsApp messages. Centralised so the copy stays consistent and
 * there are no duplicated strings across sections.
 */
export const WHATSAPP_MESSAGES = {
	reservation: "Hola Álvaro, me gustaría reservar una sesión. ¿Tienes disponibilidad esta semana?",
	treatment: (title: string) =>
		`Hola Álvaro, me gustaría reservar una sesión de ${title}. ¿Qué horario tienes disponible?`,
	plan: (name: string) =>
		`Hola Álvaro, me interesa el bono de ${name}. ¿Me cuentas la disponibilidad para empezar?`,
} as const;

/** Builds a WhatsApp deep link with a pre-filled, URL-encoded message. */
export function whatsappUrl(message: string = WHATSAPP_MESSAGES.reservation): string {
	return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
