import Image from "next/image";
import Link from "next/link";
import placeholder from "./placeholder-img.jpg";

export const Card = () => {
	return (
		<div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-2xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
			<div className="relative h-48">
				<Image
					src={placeholder}
					alt="Card Image"
					fill
					className="object-cover"
				/>
			</div>
			<div className="p-6">
				<h2
					className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 line-clamp-2"
					style={{ overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2 }}
				>
					Devs bons não são apenas bons por codar
				</h2>
				<p
					className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3"
					style={{ overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}
				>
					Pensamento crítico, resiliência e criatividade. A capacidade de
					resolver problemas complexos e pensar fora da caixa.
				</p>
				<Link
					href="#"
					className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white font-medium py-3 px-6 rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900 transition"
				>
					Read More
				</Link>
			</div>
		</div>
	);
};
