// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/prisma";
import { getUrl } from "@/utils/dbActions";
import type { NextApiRequest, NextApiResponse } from "next";
import { deleteUrl } from "../../../utils/dbActions";

type formData = {
	url?: string;
	slug?: string;
	error?: string;
	message?: string;
};
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<formData>,
) {
	// -> method-get -> get the url from database

	// -> method-delete -> delete the url from database , on query get that much of recent entry

	// get the slug from the url
	const { slug } = req.query as { id: string; slug: string };

	if (req.method === "GET") {
		// search the database for the slug
		const { data, error } = await getUrl(slug as string);
		if (JSON.stringify(error) !== "{}") {
			res.status(error.code).json({ message: error.message });
		}
		if (data && JSON.stringify(data) !== "{}") {
			res.status(200).json(data);
		}
	}
}
