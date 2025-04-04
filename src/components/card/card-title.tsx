import type { PropsWithChildren } from "react";

export const CardTitle = ({ children }: PropsWithChildren) => {
	return (
		<h2
			className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 line-clamp-2"
			style={{
				overflow: "hidden",
				display: "-webkit-box",
				WebkitBoxOrient: "vertical",
				WebkitLineClamp: 3,
			}}
		>
			{children}
		</h2>
	);
};
