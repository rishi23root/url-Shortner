/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			border: '#D9D9D9',
			'white': '#ffffff',
			'purple': '#3f3cbb',
			'midnight': '#121063',
			'metal': '#565584',
			'tahiti': '#3ab7bf',
			'silver': '#ecebff',
			'bubble-gum': '#ff77e9',
			'bermuda': '#78dcca',
		},
	},
	plugins: [],
};
