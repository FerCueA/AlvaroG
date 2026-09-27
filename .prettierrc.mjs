/** @type {import("prettier").Config} */
export default {
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	tailwindStylesheet: "./src/styles/global.css",
	overrides: [{ files: "*.astro", options: { parser: "astro" } }],
	useTabs: true,
	tabWidth: 2,
	printWidth: 100,
	semi: true,
	singleQuote: false,
	trailingComma: "all",
};
