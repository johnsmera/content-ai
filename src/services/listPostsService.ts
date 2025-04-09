import { supabaseSingleton } from "@/libs/supabaseClient";

export const listPostsService = async (page: number, limit: number) => {
	const { data, error } = await supabaseSingleton
		.from("posts")
		.select("*")
		.order("created_at", { ascending: false })
		.range((page - 1) * limit, page * limit - 1);

	if (error) {
		throw new Error(error.message);
	}

	return data;
};
