# ervikassingh.com

The personal portfolio of Vikas Singh, a senior backend engineer focused on NestJS systems, distributed APIs, and agentic AI.

The site is built with Next.js App Router, TypeScript, Tailwind CSS, Contentlayer, and MDX. It includes a responsive layout, system-aware light and dark themes, animated UI, project case studies, experience, skills, and certifications.

## Routes

- `/` - Introduction, skills, featured projects, and current role
- `/projects` - Project index
- `/projects/[slug]` - Individual project case studies
- `/experience` - Professional experience
- `/skills` - Languages and tools
- `/certifications` - Certifications

## Development

### Prerequisites

- Node.js 18 or newer
- pnpm 10 (the repository declares pnpm 10.13.1)

### Installation

```bash
git clone https://github.com/ervikassingh/ervikassingh-portfolio.git
cd ervikassingh-portfolio
pnpm install
```

### Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Production build

```bash
pnpm build
pnpm start
```

### Formatting

```bash
pnpm fmt
```

## Content

Projects are Contentlayer documents stored in `content/projects/`. Add a new `.mdx` file with frontmatter like this:

```mdx
---
title: Example project
description: A short summary of the project.
published: true
date: 2024-01-01
url: https://example.com
repository: https://github.com/example/project
---

Project details, code samples, and other Markdown content go here.
```

The `title`, `description`, and `published` fields are required. `date`, `url`, and `repository` are optional. Set `published: false` to keep a project out of the public project lists.

Other portfolio data lives in TypeScript modules under `content/`, while reusable UI and layout components live under `app/components/`.

## Project structure

```text
app/          Next.js routes, layouts, and components
content/      Projects and portfolio data
public/       Fonts and static assets
pages/api/    API routes
global.css    Global styles and design tokens
```

## License

This project is available under the terms of the [LICENSE](LICENSE) file.
