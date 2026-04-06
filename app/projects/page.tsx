import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { Card } from "../components/ui/card";
import { Navigation } from "../components/layout/nav";
import { PageHero } from "../components/layout/page-hero";
import { SiteFooter } from "../components/layout/site-footer";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { siteContentColumnClass } from "@/app/styles/classes/layout";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
	const views = (
		await redis.mget<number[]>(
			...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
		)
	).reduce((acc, v, i) => {
		acc[allProjects[i].slug] = v ?? 0;
		return acc;
	}, {} as Record<string, number>);

	const featured = allProjects.find(
		(project) => project.slug === "custom-ai-agent",
	);
	const top2 = allProjects.find((project) => project.slug === "taxicoin");
	const top3 = allProjects.find((project) => project.slug === "mymetafi");

	if (!featured || !top2 || !top3) {
		return null;
	}

	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div>
			<Navigation />
			<PageHero
				title="Projects"
				description="A mix of client delivery, open experiments, and products - smart contracts, indexers, agents, and full-stack apps."
			/>

			<div
				className={`relative z-10 space-y-10 pb-16 pt-10 md:space-y-12 md:pt-14 ${siteContentColumnClass}`}
			>
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
						<Link href={`/projects/${featured.slug}`}>
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-fg-secondary">
										{featured.date ? (
											<time dateTime={new Date(featured.date).toISOString()}>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: "medium",
												}).format(new Date(featured.date))}
											</time>
										) : (
											<span>SOON</span>
										)}
									</div>
									<span className="flex items-center gap-1 text-xs text-fg-subtle">
										<Eye className="w-4 h-4" />{" "}
										{Intl.NumberFormat("en-US", { notation: "compact" }).format(
											views[featured.slug] ?? 0,
										)}
									</span>
								</div>

								<h2
									id="featured-post"
									className="mt-4 font-display text-3xl font-bold text-fg group-hover:text-fg-secondary sm:text-4xl"
								>
									{featured.title}
								</h2>
								<p className="mt-4 leading-6 text-fg-muted duration-150 group-hover:text-fg-secondary">
									{featured.description}
								</p>
								<div className="absolute bottom-4 md:bottom-8">
									<p className="hidden text-fg-secondary hover:text-fg lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>

					<div className="mx-auto flex w-full flex-col gap-8 border-t border-border/80 dark:border-border/40 lg:mx-0 lg:border-t-0">
						{[top2, top3].map((project) => (
							<Card key={project.slug}>
								<Article project={project} views={views[project.slug] ?? 0} />
							</Card>
						))}
					</div>
				</div>
				<div className="hidden h-px w-full bg-border md:block" />

				{/* Small screens: 1 column */}
				<div className="grid grid-cols-1 gap-4 mx-auto md:hidden">
					{sorted.map((project) => (
						<Card key={project.slug}>
							<Article project={project} views={views[project.slug] ?? 0} />
						</Card>
					))}
				</div>

				{/* Medium screens: 2 columns */}
				<div className="hidden md:grid grid-cols-2 gap-4 mx-auto lg:hidden">
					{Array.from({ length: 2 }, (_, columnIndex) => (
						<div key={`col-${columnIndex}`} className="grid grid-cols-1 gap-4">
							{sorted
								.filter((_, i) => i % 2 === columnIndex)
								.map((project) => (
									<Card key={project.slug}>
										<Article
											project={project}
											views={views[project.slug] ?? 0}
										/>
									</Card>
								))}
						</div>
					))}
				</div>

				{/* Large screens: 3 columns */}
				<div className="hidden lg:grid grid-cols-1 gap-4 mx-auto lg:mx-0 lg:grid-cols-3">
					{Array.from({ length: 3 }, (_, columnIndex) => (
						<div
							key={`col-lg-${columnIndex}`}
							className="grid grid-cols-1 gap-4"
						>
							{sorted
								.filter((_, i) => i % 3 === columnIndex)
								.map((project) => (
									<Card key={project.slug}>
										<Article
											project={project}
											views={views[project.slug] ?? 0}
										/>
									</Card>
								))}
						</div>
					))}
				</div>
			</div>
			<SiteFooter />
		</div>
	);
}
