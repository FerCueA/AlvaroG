/** Pricing plans. Kept separate from markup so content is easy to edit. */
export interface Plan {
	name: string;
	price: string;
	popular: boolean;
	desc: string;
	perks?: string[];
}

export const PLANS: Plan[] = [
	{
		name: "Sesión individual",
		price: "40 €",
		popular: false,
		desc: "Una sesión completa para empezar tu recuperación.",
	},
	{
		name: "Bono 2 sesiones",
		price: "70 €",
		popular: false,
		desc: "Ideal para trabajar un problema concreto en profundidad.",
	},
	{
		name: "Bono 3 sesiones",
		price: "105 €",
		popular: true,
		desc: "El plan más elegido. Permite un abordaje completo y una recuperación real, con seguimiento entre sesiones.",
		perks: [
			"3 sesiones personalizadas",
			"Evaluación inicial incluida",
			"Seguimiento entre sesiones",
			"A domicilio en Las Palmas",
			"Ahorra 15 € respecto a sesiones sueltas",
		],
	},
	{
		name: "Bono 5 sesiones",
		price: "175 €",
		popular: false,
		desc: "Para un tratamiento continuado y resultados duraderos.",
	},
];
