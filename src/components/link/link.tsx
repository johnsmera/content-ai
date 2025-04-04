import NextLink from "next/link";
import type { PropsWithChildren } from "react";

export const Link = ({
	children,
}: PropsWithChildren<{
	href: string;
}>) => {
	return (
		<NextLink
			href="#"
			className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white font-medium py-3 px-6 rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900 transition"
		>
			{children}
		</NextLink>
	);
};
