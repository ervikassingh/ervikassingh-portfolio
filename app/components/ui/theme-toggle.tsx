"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const isDark = resolvedTheme === "dark";
	const label = isDark ? "Switch to light mode" : "Switch to dark mode";

	return (
		<button
			type="button"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className={`relative cursor-pointer rounded-full p-2 text-fg-subtle transition-colors duration-200 hover:text-fg ${className}`}
			aria-label={label}
			aria-pressed={isDark}
			disabled={!mounted}
		>
			{mounted ? (
				isDark ? (
					<Sun className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden />
				) : (
					<Moon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden />
				)
			) : (
				<span className="block h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden />
			)}
		</button>
	);
}
