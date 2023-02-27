import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
	return (
		<Html lang="en" className="dark">
			<Head />
			<body className="dark:bg-darkbg bg-lightbg min-h-full">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
