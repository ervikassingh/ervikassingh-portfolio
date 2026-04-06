import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Header } from "./header";
import { ReportView } from "./view";

import { Mdx } from "@/app/components/mdx";
import { SiteFooter } from "@/app/components/layout/site-footer";
import { siteContentColumnClass } from "@/app/styles/classes/site-content-column";
import "./mdx.css";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	return (
		<>
			<Header project={project} />
			<ReportView slug={project.slug} />

			<article
				className={`relative z-10 border-t border-border/80 py-12 dark:border-border/60 ${siteContentColumnClass}`}
			>
				<div className="prose prose-stone prose-quoteless max-w-none font-inter dark:prose-invert lg:prose-lg">
					<Mdx code={project.body.code} />
				</div>
			</article>
			<SiteFooter />
		</>
	);
}
