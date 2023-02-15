import Link from "next/link";
import { tableData } from "../utils/types";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
interface CustomTableProps {
	data: tableData[];
}

export default function CustomTable({ data }: CustomTableProps) {
	const router = useRouter();
	return (
		<div className="p-2">
			<table className="table-auto min-w-full text-center ">
				{/* head */}
				<thead className="underline text-2xl capitalize">
					<tr>
						<th>s no.</th>
						<th>slug</th>
						<th>url</th>
						<th>count</th>
						<th>updatedAt</th>
					</tr>
				</thead>
				{/* body */}
				<tbody className="text-xl cursor-pointer">
					{data?.map((item, index) => {
						return (
							<motion.tr
								key={item.id}
								onClick={() => router.push(`/url/` + item.slug)}
								whileHover={{
									scale: 0.995,
									backgroundColor: "#F3F4F6",
								}}
								whileTap={{ scale: 0.99 }}
							>
								<td>{index + 1}</td>
								<td>{item.slug}</td>
								<td>{item.url}</td>
								<td>{item.count}</td>
								<td>{item.updatedAt}</td>
							</motion.tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
