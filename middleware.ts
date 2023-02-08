import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	console.log(request.url, request.method);

	// check for session cookie

	const response = NextResponse.next();
	// response.cookies.set("vercel", "fast");
	// response.cookies.set({
	// 	name: "vercel",
	// 	value: "fast",
	// 	path: "/test",
	// });

	// check for session cookie

	// for api routes of api/url check if user is even their

	return response;
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [
		"/((?!api|auth|_next/static|_next/image|favicon.ico|path).*)",
		// "/",
		"/api/url/",
		// everything else
	],
};
