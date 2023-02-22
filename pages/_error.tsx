import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

// </main>
export default function ErrorPage() {
	return (
		<>
			<Head>
				<title>Error page</title>
				<meta name="description" content="redirected to Error page" />
			</Head>

			<div className="text-center text-2xl text-silver">
				404, unable to find what you are trying to find here{" "}
			</div>
			<div className="flex justify-center p-20 text-2xl text-silver">
				<Link
					href="/"
					className="cointainerBtn bg-btnGrey boxShadow"
				>
					<motion.div whileTap={{ scale: 0.95 }}>
						<button>Go Back Home</button>
					</motion.div>
				</Link>
			</div>
		</>
	);
}
