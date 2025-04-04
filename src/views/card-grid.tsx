import { Card } from "@/components/card/card";
import { CardContent } from "@/components/card/card-content";
import { CardDescription } from "@/components/card/card-description";
import { CardFooter } from "@/components/card/card-footer";
import { CardImage } from "@/components/card/card-image";
import { CardTitle } from "@/components/card/card-title";
import placeholder from "@/components/card/placeholder-img.jpg";
import { Link } from "@/components/link/link";

export const CardGrid = () => {
	return (
		<div className="p-6">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-3xl font-bold text-white-800 py-6">
					Últimas Notícias
				</h2>
				<button
					type="button"
					className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105 cursor-pointer"
				>
					Visualizar todas
				</button>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				<Card>
					<CardImage src={placeholder} alt="Tecnologia" />
					<CardContent>
						<CardTitle>
							É o fim dos digitadores de código e o início dos pensadores de
							código?
						</CardTitle>

						<CardDescription>
							Programação está saturado de digitadores de código, e o futuro
							pertence aos pensadores de código. A era da inteligência
							artificial está mudando a forma como programamos, e a habilidade
							de pensar criticamente e resolver problemas se torna cada vez mais
							importante.
						</CardDescription>
					</CardContent>
					<CardFooter>
						<Link href="#">Ler mais</Link>
					</CardFooter>
				</Card>

				<Card>
					<CardImage src={placeholder} alt="Tecnologia" />
					<CardContent>
						<CardTitle>
							É o fim dos digitadores de código e o início dos pensadores de
							código?
						</CardTitle>

						<CardDescription>
							Programação está saturado de digitadores de código, e o futuro
							pertence aos pensadores de código.
						</CardDescription>
					</CardContent>
					<CardFooter>
						<Link href="#">Ler mais</Link>
					</CardFooter>
				</Card>

				<Card>
					<CardImage src={placeholder} alt="Tecnologia" />
					<CardContent>
						<CardTitle>
							É o fim dos digitadores de código e o início dos pensadores de
							código?
						</CardTitle>

						<CardDescription>
							Programação está saturado de digitadores de código, e o futuro
							pertence aos pensadores de código. A era da inteligência
							artificial está mudando a forma como programamos, e a habilidade
							de pensar criticamente e resolver problemas se torna cada vez mais
							importante.
						</CardDescription>
					</CardContent>
					<CardFooter>
						<Link href="#">Ler mais</Link>
					</CardFooter>
				</Card>

				<Card>
					<CardImage src={placeholder} alt="Tecnologia" />
					<CardContent>
						<CardTitle>É o fim dos digitadores de código</CardTitle>

						<CardDescription>
							Programação está saturado de digitadores de código, e o futuro
							pertence aos pensadores de código. A era da inteligência
							artificial está mudando a forma como programamos, e a habilidade
							de pensar criticamente e resolver problemas se torna cada vez mais
							importante.
						</CardDescription>
					</CardContent>
					<CardFooter>
						<Link href="#">Ler mais</Link>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};
