import Link from "next/link";
import { tableData } from "../utils/types";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
interface CustomTableProps {
	data: tableData[];
	backBtn?: boolean;
}

export default function CustomTable({ data, backBtn }: CustomTableProps) {
	const { theme } = useTheme();
	const formatDate = (dateString: string) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateString).toLocaleDateString(
			undefined,
			options as any,
		);
	};
	return (
		<div className="p-2">
			<table className="table-auto min-w-full text-center ">
				{/* head */}
				<thead className="underline text-2xl capitalize mb-3">
					<tr>
						<th>s no.</th>
						<th>slug</th>
						<th>url</th>
						<th>count</th>
						<th>updatedAt</th>
					</tr>
				</thead>
				{/* body */}
				<tbody className="text-xl cursor-auto">
					{data?.map((item, index) => {
						return (
							<motion.tr
								key={item.id}
								whileHover={{
									scale: 0.995,
									backgroundColor: "#F3F4F65a",
								}}
								whileTap={{ scale: 0.99 }}
								className="tableEntry hover:shadow-lg relative"
							>
								<td>{index + 1}</td>
								<td>
									<Link href={item.slug}>{item.slug}</Link>
								</td>
								<td>{item.url} </td>
								<td>{item.count}</td>
								<td>{formatDate(item.updatedAt)}</td>
								<Link
									href={`/url/` + item.slug}
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
								</Link>
							</motion.tr>
						);
					})}
				</tbody>
			</table>
			{backBtn && (
				<div className="w-full flex justify-end p-4">
					<motion.button
						onClick={() => {
							router.back();
						}}
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
