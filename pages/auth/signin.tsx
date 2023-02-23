// import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { toast } from "react-toastify";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

type Props = {};
export default function Signin({}: Props) {
	const { theme } = useTheme();
	const ref = useRef<HTMLFormElement>(null);
	const [hostname, setHostname] = useState<string>("");
	useEffect(() => {
		setHostname(window.location.hostname);
		const div = ref.current;
		if (div) {
			// add or remove class to div
			if (theme === "dark") {
				div.classList.remove("lightFrameDiv");
				div.classList.add("darkFrameDiv");
			}
			if (theme === "light") {
				div.classList.remove("darkFrameDiv");
				div.classList.add("lightFrameDiv");
			}
			// dark:darkFrameDiv
			// ${theme === "dark" ? "darkFrameDiv" : "lightFrameDiv"} "
		}
	}, [theme]);
	interface IUserInfo {
		email: string;
		password: string;
	}
	const [userInfo, setUserInfo] = useState<IUserInfo>({
		email: "",
		password: "",
	});
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const res = await signIn("credentials", {
			email: userInfo.email,
			password: userInfo.password,
			redirect: false,
		});
		if (res?.error) {
			toast.error(res.error);
		} else {
			toast.success("Login Successfull");
			Router.replace("/");
		}
		// console.log(res);
	};
	return (
		<div className="flex items-center justify-center bg-gray-200 h-screen realative">
			<div className="absolute top-10 left-10 text-6xl">SignIn</div>
			<form
				ref={ref}
				className="flex 
				flex-col
				justify-evenly
				items-center 
				gap-4 
				h-3/5 
				m-auto mx-auto md:w-4/5  
				
				border  
				rounded-md 
				p-8 
				shadow-md 
				"
				onSubmit={handleSubmit}
			>
				<div className="imageCointainer w-full flex justify-center text-4xl">
					{/* <Image
						src="/gold.png"
						alt="logo"
						width={400}
						height={310}
						priority
					/> */}
					{hostname}
				</div>
				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-200"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						className="
						w-80
						h-12
						bg-gray-500 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 
						block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="test@test.com"
						required
						value={userInfo.email}
						onChange={(e) =>
							setUserInfo({
								...userInfo,
								email: e.target.value,
							})
						}
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						className="
						w-80
						h-12
						bg-gray-500 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 
						block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="********"
						required
						value={userInfo.password}
						onChange={(e) =>
							setUserInfo({
								...userInfo,
								password: e.target.value,
							})
						}
					/>
				</div>
				<motion.button
					whileTap={{ scale: 0.9 }}
					whileHover={{ scale: 1.1 }}
					// bg-blue-500
					// hover:bg-blue-700
					className="cointainerBtn bg-btnBlue boxShadow font-bold py-2 px-4 rounded "
					type="submit"
				>
					submit
				</motion.button>
				<motion.div
					// move user to create new entry
					whileTap={{ scale: 0.9 }}
					whileHover={{ scale: 1.1 }}
					className="cointainerBtn bg-btnGrey boxShadow font-bold py-2 px-4 rounded "
					onTap={() => {
						Router.push("/auth/signup");
					}}
				>
					SignUp
				</motion.div>
			</form>
		</div>
	);
}
