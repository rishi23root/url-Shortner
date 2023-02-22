import { tableData } from "../utils/types";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import { formatDate } from "../utils/util";
interface CustomTableProps {
	data: tableData[];
	backBtn?: boolean;
}

export default function CustomTable({ data, backBtn }: CustomTableProps) {
	const [width, height] = useWindowSize();
	const { theme } = useTheme();
	const router = useRouter();

	// for solving the hydration issue only
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}

	// use conditioinial rendering for the table data and on mobile screen only
	// full url with slug and count

	return (
		<div className="p-2 w-full">
			<div
				className="table table-auto min-w-full max-w-full text-center  
			"
			>
				{/* head */}
				<div
					className="table-row underline font-bold 
						text-2xl 
						mds:text-sm
						capitalize mb-3"
				>
					<div className="table-cell">s no.</div>
					<div className="table-cell">slug</div>
					{width > 768 && <div className="table-cell">url</div>}
					<div className="table-cell">count</div>
					{width > 768 && <div className="table-cell">updatedAt</div>}
				</div>
				{/* body */}
				{/* <tbody className=""> */}
				<AnimatePresence>
					{data?.map((item, index) => {
						let date: any = new Date(item.updatedAt);
						date = formatDate(date.toString());
						return (
							<motion.div
								key={item.id}
								whileHover={{
									scale: 0.995,
									backgroundColor: "#F3F4F65a",
								}}
								whileTap={{ scale: 0.99 }}
								className="table-row tableEntry hover:shadow-lg relative text-xl "
							>
								<div className="table-cell">{index + 1}</div>
								<div
									onClick={(_) => router.push(item.slug)}
									className="table-cell cursor-pointer"
								>
									{width < 768 && router.pathname}
									{item.slug}
								</div>
								{width > 768 && (
									<div className="table-cell">
										{item.url}{" "}
									</div>
								)}
								<div className="table-cell">{item.count}</div>
								{width > 768 && (
									<div className="table-cell">{date}</div>
								)}

								<button
									onClick={() => {
										router.push(`/url/` + item.slug);
									}}
									className="absolute cursor-pointer right-0 top-0 px-2"
								>
									<svg
										width="25px"
										height="25px"
										viewBox="0 0 24 24"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
											fill={
												theme === "light"
													? "#0000004a"
													: "#ffffff4a"
											}
										/>
									</svg>
								</button>
							</motion.div>
						);
					})}
				</AnimatePresence>
				{/* </tbody> */}
			</div>
			{backBtn && (
				<div className="w-full flex justify-end p-4">
					<motion.button
						onClick={router.back}
						whileTap={{ scale: 0.99 }}
						className="cointainerBtn bg-btnGrey boxShadow"
					>
						Back
					</motion.button>
				</div>
			)}
		</div>
	);
}
