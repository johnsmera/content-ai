export const CardDescription = ({ children }: React.PropsWithChildren) => {
	return (
		<p
			className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3"
			style={{
				overflow: "hidden",
				display: "-webkit-box",
				WebkitBoxOrient: "vertical",
				WebkitLineClamp: 3,
			}}
		>
			{children}
		</p>
	);
};
