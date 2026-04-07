"use client";

import { useEffect, useState } from "react";

export function ScrollIndicator() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
		>
			<div
				className={`flex flex-col items-center gap-2 text-fg-subtle ${
					isVisible ? "motion-safe:animate-bounce" : ""
				}`}
			>
				<span className="text-[10px] font-medium uppercase tracking-[0.35em] text-fg-subtle">
					Scroll
				</span>
				<div className="relative h-9 w-px overflow-hidden rounded-full bg-border-strong dark:bg-border">
					<div className="absolute left-0 top-0 h-2 w-full rounded-sm bg-accent/90 motion-safe:animate-scroll-hint motion-reduce:top-1/2 motion-reduce:h-1.5 motion-reduce:-translate-y-1/2 motion-reduce:opacity-40 dark:bg-accent-soft/90" />
				</div>
			</div>
		</div>
	);
}
