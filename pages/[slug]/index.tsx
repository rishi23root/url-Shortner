import { getUrlAndCount } from "@/utils/dbActions";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function RedirectPage({
	isFound,
	slug,
	Url,
}: {
	isFound: boolean;
	slug: any;
	Url: string;
}) {
	const [host, sethost] = useState("");
	const router = useRouter();
	useEffect(() => {
		sethost(
			typeof window !== "undefined" && window.location.origin
				? window.location.origin
				: "",
		);

		// settimeout(() => {
		// setTimeout(() => {
		// }, 500);
		if (isFound) {
			if (!Url.startsWith("http://") || !Url.startsWith("https://"))
				// eslint-disable-next-line react-hooks/exhaustive-deps
				Url = `https://${Url}`;

			router.push(Url);
		}
	}, [Url, isFound, router]);

	if (isFound) {
		return (
			<>
				<Head>
					<title>Redirecting to {Url}</title>
				</Head>
				<div className="flex flex-col items-center justify-center h-screen">
					<div className="flex flex-col items-center justify-center space-y-4">
						<Image
							src="/redirect.gif"
							alt="redirecting"
							width={300}
							height={300}
						/>
						<h1 className="text-2xl font-bold text-gray-700">
							Redirecting to {host}/{slug}: {Url}
						</h1>
					</div>
				</div>
				{/* <script
					dangerouslySetInnerHTML={{
						__html: `window.location = "https://${Url}"`,
					}}
				></script> */}
			</>
		);
	}
	return (
		<>
			<Head>
				<title>Redirecting url not found</title>
			</Head>
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="flex flex-col items-center justify-center space-y-4">
					<Image
						src="/404.gif"
						alt="redirecting"
						width={300}
						height={300}
					/>
					<h1 className="text-2xl font-bold text-gray-700">
						Redirecting url not found
					</h1>
					{/* go back to home page */}
					{/* tailwind button with shodows */}

					<button
						className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						onClick={() => router.push("/")}
					>
						Go back to home page
					</button>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps(context: { query: { slug: any } }) {
	// get the slug from the router
	const { slug } = context.query;
	// get url from the database and redirect the user
	// console.log(slug);

	const url = await getUrlAndCount(slug);
	if (!url) {
		return {
			props: { isFound: false, slug, Url: "" },
		};
	} else {
		return {
			props: { isFound: true, slug, Url: url },
		};
	}
}
