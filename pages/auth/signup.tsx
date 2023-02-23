// import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

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
		name: string;
		email: string;
		password: string;
	}

	const [userInfo, setUserInfo] = useState<IUserInfo>({
		name: "",
		email: "",
		password: "",
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		toast.info("Adding New User !!");
		console.log(userInfo);
		const res = await fetch("/api/user/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userInfo),
		});
		const data = await res.json();
		// notify according to response
		if (res.status === 200) {
			toast.success("User Added Successfully");
			Router.replace("/auth/signin");
		} else {
			toast.error(data.message);
		}
	};

	return (
		<div className="flex items-center justify-center bg-gray-200 h-screen realative">
			<div className="absolute top-10 left-10 text-6xl">SignUp</div>
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
						htmlFor="name"
						className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-200"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						className="
						w-80
						h-12
						bg-gray-500 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 
						block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="john"
						required
						value={userInfo.name}
						onChange={(e) =>
							setUserInfo({
								...userInfo,
								name: e.target.value,
							})
						}
					/>
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
				<button
					// bg-blue-500
					// hover:bg-blue-700
					className="cointainerBtn bg-btnBlue font-bold py-2 px-4 rounded "
					type="submit"
				>
					submit
				</button>
			</form>
		</div>
	);
}
