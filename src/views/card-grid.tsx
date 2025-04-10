import { Card } from "@/components/card/card";
import { CardContent } from "@/components/card/card-content";
import { CardDescription } from "@/components/card/card-description";
import { CardFooter } from "@/components/card/card-footer";
import { CardImage } from "@/components/card/card-image";
import { CardTitle } from "@/components/card/card-title";
import { Link } from "@/components/link/link";

type Post = {
	content: string;
	created_at: string;
	id: string;
	image_url: string;
	resume: string;
	title: string;
};

type Props = {
	posts: Post[];
};

export const CardGrid = ({ posts }: Props) => {
	const renderHeader = () => {
		return (
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-3xl font-bold text-white-800 py-6">
					Últimas Notícias
				</h2>
				<button
					type="button"
					className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-5x1 font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105 cursor-pointer"
				>
					Visualizar todas
				</button>
			</div>
		);
	};

	const renderCards = () => {
		return (
			<>
				{posts.map((post) => (
					<Card key={post.id}>
						<CardImage src={post.image_url} alt="Tecnologia" />
						<CardContent>
							<CardTitle>{post.title}</CardTitle>

							<CardDescription>{post.resume}</CardDescription>
						</CardContent>
						<CardFooter>
							<Link href="#">Ler mais</Link>
						</CardFooter>
					</Card>
				))}
			</>
		);
	};

	return (
		<div className="p-6">
			{renderHeader()}

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{renderCards()}
			</div>
		</div>
	);
};

export default CardGrid;