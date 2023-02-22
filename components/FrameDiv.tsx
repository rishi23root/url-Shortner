import { useTheme } from "next-themes";
interface FrameDivProps {
	children: JSX.Element | JSX.Element[];
}

// stay always on center of page and auto layout then data enter
export default function FrameDiv({ children }: FrameDivProps) {
	const { theme } = useTheme();

	return (
		<div
			className={`
			${theme === "dark" ? "darkFrameDiv" : "lightFrameDiv"} "
			m-auto mx-auto md:w-4/5 p-4 
			border-2 rounded-lg  
			boxShadow
			"`}
		>
			{children}
		</div>
	);
}
