import Image, { type StaticImageData } from "next/image";

type CardImageProps = {
	src: string | StaticImageData;
	alt: string;
};

export const CardImage = ({ src, alt }: CardImageProps) => {
	return (
		<div className="relative h-48">
			<Image src={src} alt={alt} fill className="object-cover" priority />
		</div>
	);
};
