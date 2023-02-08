interface navTopProps {}

export default function NavTop({}: navTopProps) {
	return (
		<div
			className="
			md:w-4/5 
			flex 
			m-auto 
			justify-between
			items-center
			px-2
			my-4
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
				{/* if on home show something good. */}
				Home
				{/* take form url  */}
				<span className="">/</span>
				Printer
				<span className="">/</span>
				Model
			</div>
		</div>
	);
}
