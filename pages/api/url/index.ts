// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createUrl, deleteUrl, getAllUrls, getUrl } from "@/utils/dbActions";
import type { NextApiRequest, NextApiResponse } from "next";
import { updateUrl } from "../../../utils/dbActions";

type formData = {
	id?: string;
	url: string;
	slug: string;
	userId?: string;
	limit?: number;
};

type returnData = {
	_id?: number;
	url?: string;
	slug?: string;
	count?: number;
	updatedAt?: string;
	createAt?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<returnData | any>,
) {
	// -> method-post -> create a new url , data={slug, url}
	// -> method-put -> update the url from database , data={slug, url}
	// > method-get -> get the url from database , on query get that much of recent entry
	const { id, url, slug, userId, limit } = req.body as formData;
	if (req.method === "DELETE") {
		// delete the url from database
		const { data, error } = await deleteUrl(id as string);
		console.log(data, error);
		if (JSON.stringify(error) !== "{}") {
			res.status(error.code).json({ message: error.message });
		}
		if (data && JSON.stringify(data) !== "{}") {
			res.status(200).json(data);
		}
		return;
	}

	// if userId is undefined then show error
	if (!userId) {
		res.status(400).json({ message: "userId is required" });
	}

	if (req.method === "GET") {
		// var data: returnData;
		// var error: any = {};
		// if slug is undefined then get the all url from database of that user
		if (!limit && !slug && userId) {
			var { data, error } = (await getAllUrls(userId as string)) as {
				data: returnData;
				error: any;
			};
		} else if (!slug && userId && limit) {
			var { data, error } = (await getAllUrls(
				userId as string,
				limit,
			)) as {
				data: returnData;
				error: any;
			};
		} else {
			var { data, error } = (await getUrl(slug)) as {
				data: returnData;
				error: any;
			};
		}

		// console.log(data, error);
		if (JSON.stringify(error) !== "{}") {
			res.status(error.code).json({ message: error.message });
		} else if (data && JSON.stringify(data) !== "{}") {
			res.status(200).json(data);
		} else {
			res.status(404).json({ message: "not found" });
		}
		return;
	}

	// if slug is undefined show error
	if (!slug && res.writable) {
		res.status(400).json({ message: "slug is required" });
	}

	if (req.method === "POST") {
		const { data, error } = await createUrl(url, slug, userId as string);
		// const { data, error } = await createUrl(url, slug, userId as string);
		// console.log(data, error);
		if (JSON.stringify(error) !== "{}") {
			res.status(error.code).json({ message: error.message });
		}
		res.status(200).json({ ...data });
	} else if (req.method === "PUT") {
		// update the url
		// console.log(id, slug, url);
		const { data, error } = await updateUrl(id as string, slug, url);
		// console.log(data, error);
		if (JSON.stringify(error) !== "{}") {
			res.status(error.code).json({ message: error.message });
		}
		if (data && JSON.stringify(data) !== "{}") {
			res.status(200).json(data);
		}
	}
}
