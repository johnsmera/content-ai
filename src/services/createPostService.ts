import { supabaseSingleton } from "@/libs/supabaseClient";
import type { Database } from "@/types/supabase";

export type CreatePostServiceInput =
	Database["public"]["Tables"]["posts"]["Insert"];

export const createPostService = async (input: CreatePostServiceInput) => {
	const { data, error } = await supabaseSingleton
		.from("posts")
		.insert([input])
		.select("*")
		.single();

	if (error) {
		throw new Error(error.message);
	}

	return data;
};
