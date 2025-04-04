export const CardFooter = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<div className={`flex justify-end items-center ${className} mb-4 mr-4`}>
			{children}
		</div>
	);
};
