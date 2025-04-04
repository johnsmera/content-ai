import type { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
	return (
    /* flex column space between */
		<div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-2xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300 ease-in-out flex flex-col justify-between">
			{children}
		</div>
	);
};
