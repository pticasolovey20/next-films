/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "330px",
			sm: "540px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1400px",
		},

		extend: {
			colors: {
				dark: {
					100: "#08080A",
					200: "#171717",
					300: "#262529",
					400: "#47464b",
					500: "#737072",
					600: "#A19CA1",
				},
			},
		},
	},
	plugins: [],
};
