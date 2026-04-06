import React from "react";

interface AnimatedTextProps {
	text: string;
	className?: string;
}

export default function AnimatedText({
	text,
	className = "",
}: AnimatedTextProps) {
	return (
		<h1
			className={`animate-title cursor-default whitespace-nowrap bg-gradient-to-br from-display-from via-display-via to-display-to bg-clip-text px-0.5 py-4 text-center font-display text-5xl text-transparent text-edge-outline duration-1000 sm:text-6xl md:text-8xl ${className}`}
		>
			{text.split("").map((char, index) => (
				<span
					key={`${char}-${index}`}
					className="inline-block hover:bg-gradient-to-r hover:from-transparent hover:via-transparent hover:to-transparent hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_2px_rgb(var(--color-fg-muted)/0.45)]"
					style={{
						textShadow: char === " " ? "none" : "0 0 0 currentColor",
					}}
				>
					{char === " " ? "\u00A0" : char}
				</span>
			))}
		</h1>
	);
}
