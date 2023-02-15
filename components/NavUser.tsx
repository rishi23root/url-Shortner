import { useTheme } from "next-themes";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";

const itemVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 18,
			delay: 0.2,
			duration: 5,
		},
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.5 } },
};

export default function NavUser({ name }: { name: string }) {
	const { theme, setTheme } = useTheme();
	const router = useRouter();
	const [model, setmodel] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isThemeOpen, setIsThemeOpen] = useState(false);
	const modleRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<div
				// border-t-2 border-border-2
				className="m-auto mx-auto
					md:w-8/12
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
				<div className="userProfile cursor-pointer">
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
								{name?.toUpperCase()}
							</div>
						</div>
					</div>
					{/* user name */}
				</div>
				{/* model to table */}
				<motion.div
					className="burgericon cursor-pointer "
					onClick={() => setmodel(!model)}
					whileTap={{ scale: 0.9 }}
				>
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
								fillOpacity="0.8"
							/>
							<path
								d="M0 11.5C0 11.0353 0 10.803 0.0384294 10.6098C0.196243 9.81644 0.816438 9.19624 1.60982 9.03843C1.80302 9 2.03534 9 2.5 9H56.5C56.9647 9 57.197 9 57.3902 9.03843C58.1836 9.19624 58.8038 9.81644 58.9616 10.6098C59 10.803 59 11.0353 59 11.5C59 11.9647 59 12.197 58.9616 12.3902C58.8038 13.1836 58.1836 13.8038 57.3902 13.9616C57.197 14 56.9647 14 56.5 14H48.5521H9.52604H2.5C2.03535 14 1.80302 14 1.60982 13.9616C0.816438 13.8038 0.196243 13.1836 0.0384294 12.3902C0 12.197 0 11.9647 0 11.5Z"
								fillOpacity="0.8"
							/>
							<path
								d="M0 20.5C0 20.0353 0 19.803 0.0384294 19.6098C0.196243 18.8164 0.816438 18.1962 1.60982 18.0384C1.80302 18 2.03534 18 2.5 18H56.5C56.9647 18 57.197 18 57.3902 18.0384C58.1836 18.1962 58.8038 18.8164 58.9616 19.6098C59 19.803 59 20.0353 59 20.5C59 20.9647 59 21.197 58.9616 21.3902C58.8038 22.1836 58.1836 22.8038 57.3902 22.9616C57.197 23 56.9647 23 56.5 23H48.5521H9.52604H2.5C2.03535 23 1.80302 23 1.60982 22.9616C0.816438 22.8038 0.196243 22.1836 0.0384294 21.3902C0 21.197 0 20.9647 0 20.5Z"
								fillOpacity="0.8"
							/>
						</svg>
					</div>
				</motion.div>
			</div>

			{/* model */}
			{model && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					ref={modleRef}
					className={
						"modelCointainer w-full h-screen fixed top-0 left-0 z-50 "
					}
				>
					<motion.div
						initial={{
							x: "100%",
						}}
						animate={{
							x: 0,
						}}
						transition={{
							type: "spring",
							damping: 18,
						}}
						className="
							fixed 
							h-screen 
							p-4 
							overflow-y-auto 
							w-3/4 right-0 top-0 
							z-50 
							flex flex-col justify-center 
							gap-7
							bg-silver 
							dark:bg-purple 
							"
					>
						<div
							className="helperhead  p-4 items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400 
							flex
							"
						>
							<div className="w-1/2 flex justify-start items-center">
								<svg
									fill={theme !== "light" ? "white" : "black"}
									width="80px"
									height="80px"
									viewBox="0 0 1920 1920"
									className="mr-2 
										rotate-180
									"
								>
									<path
										d="M615.177 345 0 960.292l615.177 615.177 81.25-81.25-476.467-476.466H1920V902.83H219.96l476.467-476.58z"
										fillRule="evenodd"
									/>
								</svg>
								<span className="text-3xl">Helper Menu</span>
							</div>

							{/* close btn */}
							<button
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white
									flex
									justify-end
									w-1/2	
								"
								onClick={() => setmodel(false)}
							>
								<svg
									className="w-10 h-10 items-end"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span className="sr-only">Close menu</span>
							</button>
						</div>

						{/* other data insde at center */}

						{/* home route */}
						<div
							onClick={() => {
								setmodel(!model);
								router.push("/");
							}}
							className="actionBtn 
								cursor-pointer 
								text-center border 
								text-3xl p-4 
								rounded-sm 
								shadow-xl 
								"
						>
							Move to Home
						</div>

						{/* theme */}
						<div className="actionBtn text-center border text-3xl p-4 rounded-sm shadow-xl">
							<AnimatePresence initial={true}>
								<motion.nav
									initial={false}
									animate={isThemeOpen ? "open" : "closed"}
									transition={{
										type: "spring",
										bounce: 0,
										duration: 0.3,
										delayChildren: 0.3,
										staggerChildren: 0.2,
										delay: 0.3,
									}}
								>
									<motion.button
										whileTap={{ scale: 0.97 }}
										onClick={() => {
											setIsOpen(!isOpen);
											setIsThemeOpen(!isThemeOpen);
										}}
										className={`${
											isThemeOpen
												? "underline pb-5 font-bold"
												: ""
										} " flex items-center justify-center gap-5 w-full p-2"`}
									>
										Theme
										<motion.div
											variants={{
												open: { rotate: 180 },
												closed: { rotate: 0 },
											}}
											transition={{
												duration: 0.3,
												delay: 0.1,
											}}
										>
											<svg
												width="15"
												height="15"
												viewBox="0 0 20 20"
												fill={
													theme !== "light"
														? "white"
														: "black"
												}
											>
												<path d="M0 7 L 20 7 L 10 16" />
											</svg>
										</motion.div>
									</motion.button>
									{/* options */}
									<AnimatePresence initial={false}>
										{isThemeOpen && (
											<motion.ul
												variants={{
													open: {
														transition: {
															type: "spring",
															bounce: 0,
															duration: 0.5,
															delayChildren: 0.3,
															staggerChildren: 0.05,
														},
													},
													closed: {
														transition: {
															type: "spring",
															bounce: 0,
															duration: 0.3,
														},
													},
												}}
												animate={{
													height: isThemeOpen
														? "auto"
														: 0,
												}}
												className="gap-6 flex flex-col items-center rounded-3xl"
												key="isThemeOpen"
											>
												<motion.li
													variants={itemVariants}
													className="border cursor-pointer w-1/2 p-2 rounded-xl"
													whileTap={{ scale: 0.97 }}
													onClick={() =>
														setTheme("dark")
													}
													key={1}
												>
													🌙 Dark
												</motion.li>
												<motion.li
													variants={itemVariants}
													className="border cursor-pointer w-1/2 p-2 rounded-xl"
													whileTap={{ scale: 0.97 }}
													onClick={() =>
														setTheme("light")
													}
													key={2}
												>
													🌞 Light
												</motion.li>
												{/* <motion.li
												variants={itemVariants}
												className="border cursor-pointer w-1/2 p-2 rounded-xl"
												whileTap={{ scale: 0.9 }}
												onClick={() =>
													setTheme("system")
												}
											>
												⚙️ System
											</motion.li> */}
											</motion.ul>
										)}
									</AnimatePresence>
								</motion.nav>
							</AnimatePresence>
						</div>

						{/* logout */}
						<div
							onClick={() => {
								setmodel(!model);
								toast.warning("Logged Out");
								signOut();
							}}
							className="actionBtn cursor-pointer text-center border text-3xl p-4 rounded-sm shadow-xl"
						>
							LogOut
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div></div>
							<Link
								href="https://www.printerhelp.store"
								className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
							>
								CheckOut our website
								<svg
									className="w-4 h-4 ml-2"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									></path>
								</svg>
							</Link>
						</div>
					</motion.div>
				</motion.div>
			)}
		</>
	);
}
