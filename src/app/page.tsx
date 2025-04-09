import { listPostsService } from "@/services/listPostsService";
import { CardGrid } from "@/views/card-grid";

export default async function Home() {
	const posts = await listPostsService(1, 10);

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex justify-center relative overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse" />
				<div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 opacity-20 blur-2xl rounded-full animate-pulse" />
				<div className="absolute top-10 right-10 w-48 h-48 bg-pink-500 opacity-10 blur-2xl rounded-full" />
			</div>

			<CardGrid posts={posts} />
		</div>
	);
}
