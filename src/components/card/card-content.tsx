import type { PropsWithChildren } from "react";

export const CardContent = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex h-full flex-col p-4 max-h-fit">
			{children}
		</div>
	);
};
