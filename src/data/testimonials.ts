/**
 * Real patient quotes only. Do NOT invent testimonials.
 * Leave the array empty to hide the "Casos" section; add 2–3 entries and it
 * appears automatically between Precios and Reservas.
 */
export interface Testimonial {
	/** The quote, without surrounding quotation marks. */
	quote: string;
	/** First name or initials. */
	author: string;
	/** Optional context, e.g. "Dolor lumbar" or "Las Palmas". */
	context?: string;
}

export const TESTIMONIALS: Testimonial[] = [];
