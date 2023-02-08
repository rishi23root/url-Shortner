import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

export default function Index({}: Props) {
	const { status, data } = useSession();

	if (status === "loading") {
		return <h1>loading</h1>;
	} else if (status === "authenticated") {
		return (
			<>
				<h1>welcome {data.user?.name}</h1>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => signOut()}
				>
					signout
				</button>
			</>
		);
	} else {
		return (
			<>
				<h1>{status}</h1>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => signIn()}
				>
					signIn
				</button>
			</>
		);
	}
}
