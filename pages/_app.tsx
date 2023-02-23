import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	const Router = useRouter();

	useEffect(() => {
		NProgress.configure({ showSpinner: false });
		Router.events.on("routeChangeStart", (url) => {
			NProgress.start();
		});

		Router.events.on("beforeHistoryChange", (url) => {
			NProgress.done(false);
		});
	}, [Router.events]);

	return (
		<AnimatePresence>
			<SessionProvider session={session} refetchInterval={5 * 60}>
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
