# Piyush Kumar's Portfolio

Personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run lint
npm run build
```

## Optional environment variables

```env
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_HOST_URL=https://piyush45.vercel.app
```

`GEMINI_API_KEY` enables the portfolio chatbot. The chatbot context is limited to verified resume information.

## Add a project or writing entry

### Projects shown on the home page

Edit the list in [src/data/selectedWork.ts](src/data/selectedWork.ts).

Each object has this shape:

```ts
{
  slug: 'your-project-slug',
  company: 'Your Company',
  name: 'Project Name',
  tagline: 'Short subtitle',
  summary: 'Longer description shown on the card.',
  period: 'Jan 2025 — Present',
  status: 'Production work',
  stack: ['Python', 'TypeScript', 'Next.js'],
  visual: 'orchestration',
}
```

- `slug` is used in the URL, so keep it unique.
- `summary` is the description visitors read on the home page.
- `stack` controls the technology pills shown under each project.
- `visual` picks the card graphic style: use `orchestration` or `simulation`.

Add a new object to the `selectedWork` array to show a new project.

### Writing items shown on the Writing section

Edit the list in [src/data/writings.ts](src/data/writings.ts).

Example:

```ts
{
  title: 'My new article title',
  summary: 'Short summary that appears in the writing list.',
  href: 'https://example.com/article',
  publication: 'Example publication',
  topics: ['AI', 'Product', 'Engineering'],
}
```

Add a new object to the `writings` array to show another article.

### Blog posts from markdown files

If you want to add a full blog post instead of a homepage writing card, create or edit a markdown file in the [blogs](blogs) folder. The site reads these files via [src/data/blogPosts.ts](src/data/blogPosts.ts).

Each blog file can include frontmatter such as:

```md
---
title: My article title
date: 2026-08-30
readTime: 5 min read
tags: [AI, Engineering]
author: Piyush Kumar
excerpt: Short description for the post card and metadata.
---
```

This is the main place for long-form writing and blog pages.

### Project detail pages

If you want a dedicated project/experience detail page, that content is driven by the data in [src/data/experiences.ts](src/data/experiences.ts) and rendered by [src/app/projects/[slug]/page.tsx](src/app/projects/[slug]/page.tsx).

For the homepage project cards, the main content you usually edit is [src/data/selectedWork.ts](src/data/selectedWork.ts).
