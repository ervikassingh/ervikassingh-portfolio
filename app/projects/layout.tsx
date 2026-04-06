import type { ReactNode } from "react";
import { SitePageShell } from "../components/layout/site-page-shell";

export default function ProjectsLayout({
	children,
}: {
	children: ReactNode;
}) {
	return <SitePageShell>{children}</SitePageShell>;
}
