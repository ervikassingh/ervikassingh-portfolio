import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
	sectionActionLinkClass,
	sectionHeadingClass,
} from "@/app/styles/classes/sections";
import { SkillsStrip, type SkillStripItem } from "../ui/skills-strip";

type HomeStackSectionProps = {
	items: SkillStripItem[];
};

export function HomeStackSection({ items }: HomeStackSectionProps) {
	return (
		<div className="w-full">
			<div className="flex items-end justify-between gap-4">
				<h2 id="home-stack-heading" className={sectionHeadingClass}>
					Stack
				</h2>
				<Link href="/skills" className={sectionActionLinkClass}>
					All skills
					<ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5" />
				</Link>
			</div>

			<div className="relative mt-8 overflow-hidden rounded-2xl border border-border-strong/90 bg-surface-elevated/70 backdrop-blur-sm dark:border-border-inverse/45 dark:bg-surface-elevated/35">
				<div className="p-6 md:p-8">
					<SkillsStrip items={items} variant="embedded" />
				</div>
			</div>
		</div>
	);
}
