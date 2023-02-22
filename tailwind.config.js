/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			btnGrey: "#636363",
			btnBlue: "#3498DB",
			purple: "#3f3cbb",
			midnight: "#121063",
			metal: "#565584",
			tahiti: "#3ab7bf",
			silver: "#ecebff",
			"bubble-gum": "#ff77e9",
			bermuda: "#78dcca",
			lightbg: "#e5e5e5",
			darkbg: "#b8b8b8",
		},
	},
	plugins: [],
};
