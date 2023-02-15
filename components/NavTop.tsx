import Link from "next/link";
import { useRouter } from "next/router";

interface navTopProps {}

export default function NavTop({}: navTopProps) {
	// extract breadcrubs from url
	const { pathname } = useRouter();
	return (
		<div
			className="
			md:w-9/12
			flex 
			m-auto 
			justify-between
			items-center
			px-2
			py-4
			pt-8
			"
		>
			{/* logo */}
			{/* breadcrums */}
			<div
				className="logoItself
					text-3xl
				"
			>
				{/* logo */}
				PrinterHelp
			</div>
			<div className="breadCrumbs flex gap-1">
				{/* breadcrums */}
				{pathname !== "/" ? (
					<Link
						href={"/"}
						className="text-2xl cursor-pointer hover:underline"
					>
						Home
					</Link>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}
