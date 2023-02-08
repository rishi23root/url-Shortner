import { useTheme } from "next-themes";
import Image from "next/image";

export default function NavUser() {
	const { theme, setTheme } = useTheme();
	// setTheme("dark");
	// console.log(theme);
	return (
		<div
			// border-t-2 border-border-2
			className=" m-auto mx-auto
			md:w-4/5
			border-2
			flex 
			justify-between
			items-center
			px-2
			my-2
		
		"
			// D9D9D9
		>
			{/* user prifile with random image and userName */}
			<div className="userProfile">
				{/* user image */}
				<div className="image">
					{/* image */}
					<div className="cointainer
						flex
						justify-center
						items-center
						gap-4
						">
						<Image
							src="/user.jpg"
							alt="user"
							className="w-10 h-10 rounded-full"
							width={50}
							height={50}
						/>
						<div className="userName">Admin</div>
					</div>
				</div>
				{/* user name */}
			</div>
			{/* model to table */}
			user here
		</div>
	);
}
