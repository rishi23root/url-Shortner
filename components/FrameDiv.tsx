interface FrameDivProps {
	children: JSX.Element | JSX.Element[];
}

// stay always on center of page and auto layout then data enter
export default function FrameDiv({ children }: FrameDivProps) {
	return <div className="border-2 m-auto mx-auto">{children}</div>;
}
