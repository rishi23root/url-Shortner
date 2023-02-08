import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "next-themes";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<ThemeProvider themes={["system", "light", "dark"]}>
				<ToastContainer />
				<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	);
}

// export default function App({
// 	Component,
// 	pageProps: { session, pageProps },
// }: AppProps) {
// 	return (
// 		<SessionProvider session={session}>
// 			<Component {...pageProps} />
// 		</SessionProvider>
// 	);
// }
