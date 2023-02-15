import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<AnimatePresence>
			<SessionProvider session={session}>
				<ThemeProvider
					themes={["system", "light", "dark"]}
					enableSystem={true}
					attribute="class"
				>
					<ToastContainer />
					<Component {...pageProps} />
				</ThemeProvider>
			</SessionProvider>
		</AnimatePresence>
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
