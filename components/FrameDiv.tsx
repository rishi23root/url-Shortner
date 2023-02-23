import { useTheme } from "next-themes";
import { useRef, useEffect } from "react";
interface FrameDivProps {
	children: JSX.Element | JSX.Element[];
}

// stay always on center of page and auto layout then data enter
export default function FrameDiv({ children }: FrameDivProps) {
	const { theme } = useTheme();
	const ref = useRef<HTMLDivElement>(null);
	console.log(theme);

	useEffect(() => {
		const div = ref.current;
		if (div) {
			// add or remove class to div
			if (theme === "dark") {
				div.classList.remove("lightFrameDiv");
				div.classList.add("darkFrameDiv");
			}
			if (theme === "light") {
				div.classList.remove("darkFrameDiv");
				div.classList.add("lightFrameDiv");
			}
			// dark:darkFrameDiv
			// ${theme === "dark" ? "darkFrameDiv" : "lightFrameDiv"} "
		}
	}, [theme]);

	return (
		<div
			ref={ref}
			className={`
			lightFrameDiv
			m-auto mx-auto md:w-4/5 p-4 
			border-2 rounded-lg  
			boxShadow
			"`}
		>
			{children}
		</div>
	);
}
