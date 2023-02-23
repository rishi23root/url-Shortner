// @ts-nocheck
import { randomCode } from "@/utils/util";
import { Session } from "next-auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

interface FormCustomProps {
	id?: string;
	toUrl?: string;
	code?: string;
	action?: "Update" | "Create New";
	session: Session;
}

function isValidUrl(url) {
	// Regular expression to match a valid URL with optional http/https prefix
	const urlRegex =
		/^(http[s]?:\/\/)?([\w]*)?.([\w]+)[.]([\w]{2,})(\/)?[\w\/]*$/;

	// Test the input string against the regex
	return urlRegex.test(url);
}

export default function FormCustom({
	id,
	toUrl = "",
	code = "",
	action = "Create New",
	session,
}: FormCustomProps) {
	const [url, setUrl] = useState<string>(toUrl || "");
	// console.log(toUrl, url);
	const [slug, setSlug] = useState<string>(code || randomCode());
	const router = useRouter();
	const [working, setWorking] = useState<boolean>(false);

	function preRequestCheckupStatus() {
		// alert if url is empty or custom code is not 5 characters long
		setUrl(url.trim());
		if (url?.length == 0) {
			toast.warning("URL cannot be empty");
			return false;
		} else if (!isValidUrl(url)) {
			toast.warning("URL is not valid");
			return false;
		} else if (slug?.length != 5) {
			toast.warning("Code must be 5 characters long");
			return false;
		} else {
			return true;
		}
	}

	var formHandler: any;
	if (action == "Create New") {
		formHandler = async (e: any) => {
			console.log("create new");
			if (!preRequestCheckupStatus()) return;

			// create a fetch request to the api
			const res = await fetch("/api/url", {
				method: "POST",
				body: JSON.stringify({
					url: url,
					slug: slug,
					userId: session?.user?.id,
				}),
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			// console.log(data);
			if (data.message) {
				toast.error(data.message);
			} else {
				toast.success("URL shortened successfully");
				// refresh page or reload table data
				// refetch the request to get the new data
				router.replace(router.asPath);
			}
		};
	} else if (action == "Update") {
		formHandler = async (e: any) => {
			if (!preRequestCheckupStatus()) return;

			// console.log({
			// 	id,
			// 	url,
			// 	slug,
			// 	userId: session?.user?.id,
			// });
			// create a fetch request to the api
			const res = await fetch("/api/url", {
				method: "PUT",
				body: JSON.stringify({
					id,
					url,
					slug,
					userId: session?.user?.id,
				}),
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			// console.log(data);
			if (data.message) {
				toast.error(data.message);
			} else {
				toast.success("shortened URL updated");
				// refresh page or reload table data
				// take action accordinly
				router.push(`/url/${slug}`);
			}
		};
	} else {
		new Error("action not define");
	}

	const handlerWrapper = async (e: any) => {
		setWorking(true);
		e.preventDefault();
		toast.info("Creating New Entry...");
		await formHandler(e);
		setWorking(false);
	};

	return (
		<>
			<form
				onSubmit={handlerWrapper}
				className="flex flex-col sm:gap-5 md:gap-10 lg:gap-16 p-10"
			>
				<div className="flex md:gap-5 lg:gap-36  flex-wrap justify-center p-2">
					{/* take url to shorten */}
					<div className="cointainerBtnInput  items-start">
						<label htmlFor="url" className="text-2xl font-bold">
							Redirecting Url
						</label>
						<input
							type="text"
							name="url"
							defaultValue={url}
							onChange={(e) => {
								setUrl(e.target.value);
							}}
							className="border-2 boxShadow text-2xl w-full"
						/>
					</div>
					{/* input Custom code */}
					<div className="cointainerBtnInput items-start">
						<label
							htmlFor="customCode"
							className="text-2xl font-bold"
						>
							Short Code
						</label>
						<input
							type="text"
							name="customCode"
							defaultValue={slug}
							onChange={(e) => {
								setSlug(e.target.value);
							}}
							className="border-2 boxShadow text-2xl w-full"
						/>
					</div>
				</div>

				<div className="flex gap-5 lg:gap-36 flex-wrap justify-center p-2">
					<motion.div
						className="cointainerBtn bg-btnBlue"
						whileTap={{ scale: 0.95 }}
					>
						<button
							type="submit"
							disabled={working}
							className={
								working
									? "w-full h-full"
									: "boxShadow w-full h-full"
							}
						>
							{action}
						</button>
					</motion.div>

					<Link
						href="/checkAll"
						className="cointainerBtn bg-btnGrey boxShadow"
					>
						<motion.div whileTap={{ scale: 0.95 }}>
							<button>Check All</button>
						</motion.div>
					</Link>
				</div>
				{/* <button type="submit">Submit</button> */}
			</form>
		</>
	);
}
