// create randon code
export const randomCode = (start: number = 0, end: number = 5) => {
	const code = Math.random()
		.toString(36)
		.substring(start + 2, end + 2);
	return code;
};
