import type { ReactNode } from "react";
import Particles from "../ui/particles";

type SitePageShellProps = {
	children: ReactNode;
	/** When set, renders the background particle canvas (home page only). */
	particleQuantity?: number;
};

export function SitePageShell({
	children,
	particleQuantity,
}: SitePageShellProps) {
	const showParticles =
		typeof particleQuantity === "number" && particleQuantity > 0;

	return (
		<div className="relative flex min-h-screen flex-col overflow-x-clip bg-surface">
			{showParticles ? (
				<Particles
					className="fixed inset-0 z-0 animate-fade-in"
					quantity={particleQuantity}
				/>
			) : null}
			{children}
		</div>
	);
}
