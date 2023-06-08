/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				dark: {
					100: "#08080A",
					200: "#262529",
					300: "#47464b",
					400: "#737072",
					500: "#A19CA1",
				},
			},
		},
	},
	plugins: [],
};
