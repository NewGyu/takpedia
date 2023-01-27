/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"bukkomi-blue": {
					light: "#0785cd",
					DEFAULT: "#0573b2",
					dark: "#0568a0"
				},
			},
			listStyleType: {
				square: "square"
			}
		},
	},
	plugins: [],
}
