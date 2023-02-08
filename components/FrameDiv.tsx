interface FrameDivProps {
	children: JSX.Element | JSX.Element[];
}

// stay always on center of page and auto layout then data enter
export default function FrameDiv({ children }: FrameDivProps) {
	return (
		<div
			className="
			m-auto mx-auto
			md:w-4/5
			my-4
			p-4
			border-2
			rounded-lg
			"
		>
			{children}
		</div>
	);
}
