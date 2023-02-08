import prisma from "prisma/index";
import { randomCode } from "./util";

// get url redirecting url
export const getUrlAndCount = async (slug: string) => {
	// and update the count
	try {
		const data = await prisma.urlTable.update({
			where: {
				slug,
			},
			data: {
				count: {
					increment: 1,
				},
			},
			select: {
				url: true,
			},
		});
		return data?.url;
	} catch (error) {
		return null;
	}
};

// // get url by short url
// // get url
export const getUrl = async (slug: string) => {
	// get url info from db
	try {
		const data = await prisma.urlTable.findFirst({
			where: {
				slug,
			},
			select: {
				id: true,
				url: true,
				slug: true,
				count: true,
				updatedAt: true,
			},
		});
		// console.log(data);
		return { data, error: {} };
	} catch (error: any) {
		error.code = 202;
		error.message = "code not found\n" + error.message;
		return { data: {}, error };
	}
};

// // get all urls - or limit to 10
export const getAllUrls = async (
	userId: string,
	limit: number = 100,
	skip: number = 0,
) => {
	// const ifLimit = limit>0 ? { take: limit } : {};
	try {
		const data = await prisma.urlTable.findMany({
			where: {
				userId,
			},
			select: {
				id: true,
				url: true,
				slug: true,
				count: true,
				updatedAt: true,
			},
			orderBy: {
				updatedAt: "desc",
			},
			take: limit,
			skip: skip,
		});
		// if (limit) {
		// 	data = data.slice(0, limit);
		// }
		// console.log(data);
		return { data, error: {} };
	} catch (error: any) {
		error.code = 202;
		// console.log(error.me);
		// error.message = "code not found\n" + error.message;

		return { data: {}, error };
	}
};

// // create new url with short url
export const createUrl = async (url: string, slug: string, userId: string) => {
	try {
		const data = await prisma.urlTable.create({
			data: {
				url,
				slug,
				user: {
					connect: {
						id: userId,
					},
				},
			},
		});
		// console.log(data);

		return { data, error: {} };
	} catch (error: any) {
		// code: "P2002";
		// console.log(error);
		// console.log(error.code, error.message);
		if (error.code === "P2025") {
			error.message = "user not present";
		} else {
			// console.log(error.messsage);
			error.message = "Code Already In Use";
		}

		error.code = 409;
		return { data: {}, error };
	}
};
// // update to db
export const updateUrl = async (id: string, slug: string, url: string) => {
	// console.log(id, slug, url);
	try {
		// create a new url with new slug
		const data = await prisma.urlTable.update({
			where: {
				id,
			},
			data: {
				slug,
				url,
			},
		});
		return { data, error: {} };
	} catch (error: any) {
		if ((error.code = "P2025")) {
			error.message = "shortUrl does not exist";
		}
		// console.log(error.code);
		// console.log(error.message);
		error.code = 409;
		// error.message = "code not found";
		// error.message = "code not found\n" + error.message;

		return { data: {}, error };
	}
};
// // delete url by short url
export const deleteUrl = async (id: string) => {
	try {
		const data = await prisma.urlTable.delete({
			where: {
				id,
			},
		});
		return { data, error: {} };
	} catch (error: any) {
		error.code = 202;
		error.message = "code not found";
		//  + error.message;
		return { data: {}, error };
	}
};

// user signup and login

// login
export const loginReq = async (email: string, password: string) => {
	try {
		const data = await prisma.user.findFirst({
			where: {
				email,
				password,
			},
			select: {
				id: true,
				email: true,
				name: true,
			},
		});
		return { data, error: {} };
	} catch (error: any) {
		error.code = 202;
		error.message = "user not found";
		return { data: {}, error };
	}
};

// register
export const signinReq = async (email: string, password: string) => {
	const name = email.split("@")[0];
	try {
		const data = await prisma.user.create({
			data: {
				name,
				email,
				password,
			},
		});
		return { data, error: {} };
	} catch (error: any) {
		error.code = 202;
		error.message = "already exist";
		return { data: {}, error };
	}
};
