import { useTheme } from "next-themes";
import Image from "next/image";

export default function NavUser({ name }: { name: string }) {
	const { theme, setTheme } = useTheme();
	// setTheme("light");
	// console.log(theme);
	// open and close sidebar
	return (
		<div
			// border-t-2 border-border-2
			className=" m-auto mx-auto
			md:w-4/5
			flex 
			justify-between
			items-center
			px-4
			py-5
			my-2
		"
			// D9D9D9
		>
			{/* user prifile with random image and userName */}
			<div className="userProfile">
				{/* user image */}
				<div className="image">
					{/* image */}
					<div
						className="cointainer
						flex
						justify-center
						items-center
						gap-4
						"
					>
						<Image
							src="/user.jpg"
							alt="user"
							className="w-12 h-12 rounded-full"
							width={50}
							height={50}
						/>
						<div
							className="userName
							text-xl 
						"
						>
							{name.toUpperCase()}
						</div>
					</div>
				</div>
				{/* user name */}
			</div>
			{/* model to table */}
			<div className="burgericon">
				{/* icon */}
				<div onClick={() => {}}>
					<svg
						width="59"
						height="23"
						viewBox="0 0 59 23"
						fill={theme == "dark" ? "white " : " #3E3E3E"}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 2.5C0 2.03534 0 1.80302 0.0384294 1.60982C0.196243 0.816438 0.816438 0.196243 1.60982 0.0384294C1.80302 0 2.03534 0 2.5 0L56.5 0C56.9647 0 57.197 0 57.3902 0.0384294C58.1836 0.196243 58.8038 0.816438 58.9616 1.60982C59 1.80302 59 2.03534 59 2.5C59 2.96466 59 3.19698 58.9616 3.39018C58.8038 4.18356 58.1836 4.80376 57.3902 4.96157C57.197 5 56.9647 5 56.5 5H48.5521H9.52604H2.5C2.03535 5 1.80302 5 1.60982 4.96157C0.816438 4.80376 0.196243 4.18356 0.0384294 3.39018C0 3.19698 0 2.96466 0 2.5Z"
							fill-opacity="0.8"
						/>
						<path
							d="M0 11.5C0 11.0353 0 10.803 0.0384294 10.6098C0.196243 9.81644 0.816438 9.19624 1.60982 9.03843C1.80302 9 2.03534 9 2.5 9H56.5C56.9647 9 57.197 9 57.3902 9.03843C58.1836 9.19624 58.8038 9.81644 58.9616 10.6098C59 10.803 59 11.0353 59 11.5C59 11.9647 59 12.197 58.9616 12.3902C58.8038 13.1836 58.1836 13.8038 57.3902 13.9616C57.197 14 56.9647 14 56.5 14H48.5521H9.52604H2.5C2.03535 14 1.80302 14 1.60982 13.9616C0.816438 13.8038 0.196243 13.1836 0.0384294 12.3902C0 12.197 0 11.9647 0 11.5Z"
							fill-opacity="0.8"
						/>
						<path
							d="M0 20.5C0 20.0353 0 19.803 0.0384294 19.6098C0.196243 18.8164 0.816438 18.1962 1.60982 18.0384C1.80302 18 2.03534 18 2.5 18H56.5C56.9647 18 57.197 18 57.3902 18.0384C58.1836 18.1962 58.8038 18.8164 58.9616 19.6098C59 19.803 59 20.0353 59 20.5C59 20.9647 59 21.197 58.9616 21.3902C58.8038 22.1836 58.1836 22.8038 57.3902 22.9616C57.197 23 56.9647 23 56.5 23H48.5521H9.52604H2.5C2.03535 23 1.80302 23 1.60982 22.9616C0.816438 22.8038 0.196243 22.1836 0.0384294 21.3902C0 21.197 0 20.9647 0 20.5Z"
							fill-opacity="0.8"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
