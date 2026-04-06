"use client";

import type { PropsWithChildren } from "react";
import { cardShellClass } from "@/app/styles/classes/cards";

export function Card({
	children,
	className = "",
}: PropsWithChildren<{ className?: string }>) {
	return <div className={`${cardShellClass} ${className}`}>{children}</div>;
}
