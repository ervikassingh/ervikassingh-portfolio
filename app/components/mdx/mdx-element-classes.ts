/**
 * Shared MDX typography classes (semantic tokens). Used by Contentlayer `Mdx` and root `mdx-components`.
 */
export const mdxElementClassNames = {
	h1: "mt-2 scroll-m-20 font-display text-4xl font-bold tracking-tight text-fg",
	h2: "mt-10 scroll-m-20 border-b border-border pb-1 font-display text-3xl font-semibold tracking-tight text-fg first:mt-0",
	h3: "mt-8 scroll-m-20 font-display text-2xl font-semibold tracking-tight text-fg",
	h4: "mt-8 scroll-m-20 font-display text-xl font-semibold tracking-tight text-fg",
	h5: "mt-8 scroll-m-20 font-display text-lg font-semibold tracking-tight text-fg",
	h6: "mt-8 scroll-m-20 font-display text-base font-semibold tracking-tight text-fg",
	a: "font-medium text-link underline underline-offset-4",
	p: "leading-7 text-fg-secondary [&:not(:first-child)]:mt-6",
	ul: "my-6 ml-6 list-disc text-fg-secondary",
	ol: "my-6 ml-6 list-decimal text-fg-secondary",
	li: "mt-2",
	blockquote:
		"mt-6 border-l-2 border-quote-border pl-6 italic text-quote-fg [&>*]:text-quote-muted",
	img: "rounded-md border border-border dark:border-border-strong",
	hr: "my-4 border-border dark:border-border-strong md:my-8",
	tr: "m-0 border-t border-table-border p-0 even:bg-table-stripe dark:even:bg-surface-elevated/40",
	th: "border border-border px-4 py-2 text-left font-bold dark:border-border-strong [&[align=center]]:text-center [&[align=right]]:text-right",
	td: "border border-border px-4 py-2 text-left dark:border-border-strong [&[align=center]]:text-center [&[align=right]]:text-right",
	pre: "mt-6 mb-4 overflow-x-auto rounded-lg bg-code-block py-4",
	code: "relative rounded border border-border bg-code-inline-bg/60 py-[0.2rem] px-[0.3rem] font-mono text-sm text-code-inline-fg dark:border-border-strong dark:bg-code-inline-bg/10",
} as const;

/** Root `mdx-components.tsx` (App Router) — slimmer heading scale. */
export const mdxRootHeadingClassNames = {
	h1: "mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-center",
	h2: "text-fg",
} as const;
