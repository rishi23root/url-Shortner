// @ts-nocheck
import { randomCode } from "@/utils/util";
import { Session } from "next-auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

interface FormCustomProps {
	id?: string;
	toUrl?: string;
	code?: string;
	action?: "Update" | "Create New";
	session: Session;
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

	function preRequestCheckupStatus() {
		// alert if url is empty or custom code is not 5 characters long
		if (url?.length == 0) {
			toast.warning("URL cannot be empty");
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
			e.preventDefault();

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
				router.reload();
			}
		};
	} else if (action == "Update") {
		formHandler = async (e: any) => {
			e.preventDefault();

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
			console.log(data);
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
	return (
		<>
			<form onSubmit={formHandler} className="flex flex-col gap-2">
				{/* take url to shorten */}
				<div className="cointainerBtnInput">
					<label htmlFor="url">URL</label>
					<input
						type="text"
						name="url"
						defaultValue={url}
						onChange={(e) => {
							setUrl(e.target.value);
						}}
						className="border-2"
					/>
				</div>
				{/* input Custom code */}
				<div className="cointainerBtnInput">
					<label htmlFor="customCode">Custom Code</label>
					<input
						type="text"
						name="customCode"
						defaultValue={slug}
						onChange={(e) => {
							setSlug(e.target.value);
						}}
						className="border-2"
					/>
				</div>

				<div className="cointainerBtn">
					<button type="submit">{action}</button>
				</div>

				<div className="cointainerBtn">
					<Link href="/checkAll">
						<button>Check All</button>
					</Link>
				</div>
				{/* <button type="submit">Submit</button> */}
			</form>
		</>
	);
}
