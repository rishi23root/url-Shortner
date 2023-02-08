import Link from "next/link";
import { tableData } from "../utils/types";
import { useRouter } from "next/router";
interface CustomTableProps {
	data: tableData[];
}

export default function CustomTable({ data }: CustomTableProps) {
	const router = useRouter();
	return (
		<div>
			<table className="table-auto">
				{/* head */}
				<thead>
					<tr>
						<th>s no.</th>
						<th>slug</th>
						<th>url</th>
						<th>count</th>
						<th>updatedAt</th>
					</tr>
				</thead>
				{/* body */}
				<tbody>
					{data?.map((item, index) => {
						return (
							<tr
								key={item.id}
								onClick={() => router.push(`/url/` + item.slug)}
							>
								<td>{index + 1}</td>
								<td>{item.slug}</td>
								<td>{item.url}</td>
								<td>{item.count}</td>
								<td>{item.updatedAt}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
