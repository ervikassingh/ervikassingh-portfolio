"use client";

import { useReducedMotion } from "framer-motion";

export type SkillStripItem = {
	name: string;
	icon?: string;
	link?: string;
};

type SkillsStripProps = {
	items: SkillStripItem[];
	/** Inside bordered card - no full-bleed rails; fades match card background */
	variant?: "rail" | "embedded";
};

function PillIcon({ src }: { src: string }) {
	return (
		<img
			src={src}
			alt=""
			aria-hidden
			className="h-4 w-4 shrink-0 object-contain opacity-90 brightness-0 dark:invert"
			loading="lazy"
		/>
	);
}

const pillEmbeddedClass =
	"inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-border-strong/90 bg-surface/80 px-3 py-2 text-sm font-normal tracking-wide text-fg-secondary shadow-[inset_0_1px_0_0_rgb(var(--color-fg-on-inverse)/0.45)] transition-colors duration-200 hover:border-border-strong hover:text-fg dark:border-border-inverse/35 dark:bg-surface-elevated/45 dark:text-fg-muted dark:shadow-[inset_0_1px_0_0_rgb(var(--color-fg-on-inverse)/0.03)] dark:hover:border-border-strong/50 dark:hover:text-fg";

const pillRailClass =
	"inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border-strong/90 bg-surface-elevated/80 px-3.5 py-2 text-[13px] font-medium tracking-wide text-fg-muted shadow-[inset_0_1px_0_0_rgb(var(--color-fg-on-inverse)/0.5)] dark:border-border-inverse/45 dark:bg-surface-elevated/45 dark:text-fg-muted dark:shadow-[inset_0_1px_0_0_rgb(var(--color-fg-on-inverse)/0.04)]";

function SkillPill({
	name,
	icon,
	embedded,
}: {
	name: string;
	icon?: string;
	embedded?: boolean;
}) {
	if (embedded) {
		return (
			<span className={pillEmbeddedClass}>
				{icon ? <PillIcon src={icon} /> : null}
				{name}
			</span>
		);
	}
	return (
		<span className={pillRailClass}>
			{icon ? <PillIcon src={icon} /> : null}
			{name}
		</span>
	);
}

const railWrapClass =
	"border-y border-border/80 bg-surface/70 px-6 py-6 dark:border-border/50 dark:bg-surface/50";

export function SkillsStrip({ items, variant = "rail" }: SkillsStripProps) {
	const reduceMotion = useReducedMotion();
	const embedded = variant === "embedded";

	if (items.length === 0) return null;

	if (reduceMotion) {
		const pills = items.map(({ name, icon }, i) => (
			<SkillPill
				key={`${name}-${i}`}
				name={name}
				icon={icon}
				embedded={embedded}
			/>
		));
		if (embedded) {
			return (
				<div
					className="flex flex-wrap gap-2.5 justify-start"
					aria-label="Technologies and tools"
				>
					{pills}
				</div>
			);
		}
		return (
			<div className={railWrapClass} aria-label="Technologies and tools">
				<div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2.5">
					{pills}
				</div>
			</div>
		);
	}

	const edgeFadeMask =
		"[-webkit-mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]";

	return (
		<div
			className={`relative overflow-hidden ${edgeFadeMask} ${
				embedded ? "" : railWrapClass
			}`}
			aria-label="Technologies and tools"
		>
			<div
				className={`flex w-max animate-marquee-slow items-center ${
					embedded ? "gap-3 py-1" : "gap-3 py-5"
				}`}
			>
				{[0, 1].map((loop) => (
					<div
						key={loop}
						className={`flex shrink-0 items-center ${
							embedded ? "gap-3 px-1" : "gap-3 px-3"
						}`}
						aria-hidden={loop === 1}
					>
						{items.map(({ name, icon }, idx) => (
							<SkillPill
								key={`${loop}-${idx}`}
								name={name}
								icon={icon}
								embedded={embedded}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
