import { siteContentColumnClass } from "@/app/styles/classes/site-content-column";
import {
	pageHeroDescriptionClass,
	pageHeroSectionClass,
	pageHeroTitleClass,
} from "@/app/styles/classes/sections";

export type PageHeroProps = {
	title: string;
	description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
	return (
		<section
			aria-labelledby="page-hero-heading"
			className={pageHeroSectionClass}
		>
			<div
				className={`relative ${siteContentColumnClass} pb-10 pt-24 md:pb-12 md:pt-28 lg:pt-32`}
			>
				<h1 id="page-hero-heading" className={pageHeroTitleClass}>
					{title}
				</h1>
				<p className={pageHeroDescriptionClass}>{description}</p>
			</div>
		</section>
	);
}
