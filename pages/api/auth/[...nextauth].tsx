import NextAuth, { Awaitable, NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";
import { loginReq } from "@/utils/dbActions";

const nextOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Username and Password",
			credentials: {
				// email: { label: "email", type: "email", placeholder: "admin@admin.com" },
				// password: { label: "Password", type: "admin" },
			},
			authorize: async (credentials) => {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				// console.log(email, password);
				// Add logic here to look up the user from the credentials supplied
				// if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
				//     // Any object returned will be saved in `user` property of the JWT
				//     return new Error("Invalid username or password")
				// }

				const { data, error } = await loginReq(email, password);
				if (JSON.stringify(error) !== "{}") {
					throw new Error(error);
					// 	throw new Error("Invalid Username or Password");
				} else {
					console.log(data);
					return data as { id: string; name: string; email: string };
				}
				// if (
				// 	username === process.env.ADMIN_USERNAME &&
				// 	password === process.env.ADMIN_PASSWORD
				// ) {
				// 	console.log("success");
				// 	return {
				// 		id: "1",
				// 		name: "Admin",
				// 		email: "admin@localhost",
				// 		// generate gandomm 2 digit number
				// 		image: `https://avatars.githubusercontent.com/u/10163${Math.floor(
				// 			Math.random() * 100,
				// 		)}?v=4`,
				// 	};
				// } else {
				// 	// console.log('fail value')
				// 	throw new Error("Invalid Username or Password");
				// }
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/auth/signin",
		// signOut: "/auth/signout",
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			user && (token.user = user);
			return token;
		},
		session: async ({
			session,
			token,
		}: {
			session: Session;
			token: any;
		}) => {
			session.user = token.user;
			// console.log("session", session);
			// console.log("token", token);
			return session;
		},
	},
};

export default NextAuth(nextOptions);
