import { Navigation } from "../components/layout/nav";
import { SiteFooter } from "../components/layout/site-footer";
import { SitePageShell } from "../components/layout/site-page-shell";
import { ExperienceClient } from "./experience-client";

export default function ExperiencePage() {
	return (
		<SitePageShell>
			<Navigation />
			<ExperienceClient />
			<SiteFooter />
		</SitePageShell>
	);
}
