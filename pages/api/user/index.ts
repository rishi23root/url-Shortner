// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { newSigninReq } from "@/utils/dbActions";
import type { NextApiRequest, NextApiResponse } from "next";

type formData = {
	name: string;
	email: string;
	password: string;
};

type returnData = {
	_id?: number;
	url?: string;
	slug?: string;
	count?: number;
	updatedAt?: string;
	createAt?: string;
	message?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<returnData | any>,
) {
	// -> method-post -> create a new url , data={slug, url}
	// -> method-put -> update the url from database , data={slug, url}
	// > method-get -> get the url from database , on query get that much of recent entry
	const { name, email, password } = req.body as formData;
	if (req.method === "POST") {
		const { data, error } = await newSigninReq(name, email, password);
		// const { data, error } = await createUrl(url, slug, userId as string);
		// console.log(data, error);
		if (JSON.stringify(error) !== "{}") {
			res.status(error.code).json({ message: error.message });
			return;
		} else {
			res.status(200).json({ ...data });
			return;
		}
	} else {
		res.status(404).json({ message: "try post method for the request" });
		return;
	}
}
