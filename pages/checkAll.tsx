// @ts-nocheck
import FrameDiv from "@/components/FrameDiv";
import NavTop from "@/components/NavTop";
import NavUser from "@/components/NavUser";
import { getAllUrls } from "@/utils/dbActions";
import { tableData } from "@/utils/types";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import CustomTable from "../components/CustomTable";

export default function checkall({ data }: { data: tableData[] }) {
	return (
		<>
			<Head>
				<title>Check All</title>
				<meta name="description" content="Generated by Check All" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<NavTop />
				<NavUser />
				<FrameDiv>
					<div className="heading">All Urls</div>
					<CustomTable data={data} />
				</FrameDiv>
			</main>
		</>
	);
}

// get server side props and show last 5-10 post
export async function getServerSideProps(context: any) {
	// set session
	const session = await getSession(context);
	const { data, error } = await getAllUrls(session?.user?.id);
	console.log(data);
	if (JSON.stringify(error) !== "{}") {
		return {
			props: {
				data: [],
			}, // will be passed to the page component as props
		};
	}

	return {
		props: {
			data: JSON.parse(JSON.stringify(data)),
		}, // will be passed to the page component as props
	};
}
