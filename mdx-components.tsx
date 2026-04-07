import type { ComponentType, PropsWithChildren } from "react";
import { mdxRootHeadingClassNames } from "@/app/components/mdx/mdx-element-classes";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(
	components: Record<string, ComponentType> = {},
): Record<string, ComponentType> {
	return {
		h1: ({ children }: PropsWithChildren) => (
			<h1 className={mdxRootHeadingClassNames.h1}>{children}</h1>
		),
		h2: ({ children }: PropsWithChildren) => (
			<h2 className={mdxRootHeadingClassNames.h2}>{children}</h2>
		),
		...components,
	};
}
