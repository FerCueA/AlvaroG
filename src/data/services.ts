/** Treatments offered. Kept separate from markup so content is easy to edit. */
export interface Service {
	title: string;
	/** Hanzi label (decorative accent). Review with a native speaker. */
	hanzi: string;
	image: string;
	description: string;
}

export const SERVICES: Service[] = [
	{
		title: "Osteopatía",
		hanzi: "正骨",
		image: "/images/osteopatia.jpg",
		description: "Técnica manual para el reequilibrio corporal",
	},
	{
		title: "Acupuntura",
		hanzi: "针灸",
		image: "/images/acupuntura.jpg",
		description: "Estimulación de puntos energéticos para restaurar el flujo del cuerpo",
	},
	{
		title: "Moxibustión",
		hanzi: "艾灸",
		image: "/images/moxibustion.jpg",
		description: "Terapia de calor tradicional para aliviar dolencias",
	},
	{
		title: "Vendaje neuromuscular",
		hanzi: "贴扎",
		image: "/images/vendaje.jpg",
		description: "Soporte muscular sin limitar el movimiento",
	},
	{
		title: "Auriculopuntura",
		hanzi: "耳针",
		image: "/images/auriculopuntura.jpg",
		description: "Estimulación de puntos en la oreja para tratar diferentes dolencias",
	},
];
