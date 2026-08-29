Resume & Globe Edit Guide

Purpose
- Quick guide to understand where resume entries and the interactive globe live, and how to change company locations shown on the globe.

Files to edit
- [src/components/ExperienceGlobe.tsx](src/components/ExperienceGlobe.tsx) — globe markers, arcs, and the small floating labels/polaroids. Change coordinates here.
- [src/components/CobeGlobe.tsx](src/components/CobeGlobe.tsx) — globe rendering component; reads `markers` and `arcs` props (no change usually required).
- [src/data/experiences.ts](src/data/experiences.ts) — resume data (company, role, period, tech stack, description). Edit resume content here.
- [src/components/ResumeViewer.tsx](src/components/ResumeViewer.tsx) — PDF preview / download UI (rarely needed for textual edits).

Change a company location on the globe
1. Open [src/components/ExperienceGlobe.tsx](src/components/ExperienceGlobe.tsx).
2. Find the `markers` array near the top. Each marker looks like:

```ts
{
  location: [35.6762, 139.6503] as [number, number], // [lat, lon]
  size: 0.075,
  id: 'dentsu',
}
```

3. Edit the `location` pair to the new `[latitude, longitude]`. Keep the `id` unchanged — the `id` links the marker to the floating label defined in the `roles` array.
4. Save and restart (or reload) the dev server.

Notes about `roles` and `id` matching
- `roles` is an array of objects with `id`, `company`, and `code`. The `id` must match a marker `id`. The globe uses CSS anchors named `--cobe-{id}` to position the small label box — don't rename an `id` without updating both places.

Example: change Dentsu coordinates
- Original marker (in `markers`):
```ts
{
  location: [35.6762, 139.6503] as [number, number],
  size: 0.075,
  id: 'dentsu',
}
```
- If you want to move it to latitude 34.6937, longitude 135.5023, change to:
```ts
{
  location: [34.6937, 135.5023] as [number, number],
  size: 0.075,
  id: 'dentsu',
}
```

Add a new company/marker
1. In `markers`, add a new object with `location`, `size`, and a unique `id`.
2. In `roles`, add a matching `{ id: '<your-id>', company: 'Your Company', code: 'XX' }` entry so the floating label appears.
3. If you want an arc from the origin, the `arcs` constant is computed from `markers` and the `origin` variable; set `origin` to the desired [lat,lon] to change arc start.

Syncing globe markers with resume entries
- The resume content (job title, dates, descriptions) lives in [src/data/experiences.ts](src/data/experiences.ts). That file does not currently contain lat/lon coordinates — the globe uses the hard-coded `markers` in `ExperienceGlobe.tsx`.
- To keep things consistent, update both `experiences.ts` (for the textual resume) and `ExperienceGlobe.tsx` (for visual map coordinates) with the same company names/ids.
- If you prefer a single source of truth, you can add coordinates to `experiences.ts` (e.g., `locationCoords: [lat, lon]`) and update `ExperienceGlobe.tsx` to import `experiences` and build `markers` from it.

Testing locally
- Start the dev server:

```bash
npm install
npm run dev
```

- Open http://localhost:3000 and navigate to the page that renders the globe (home or the resume/experience page). Rotate the globe to verify marker placement.

Finding coordinates
- Use Google Maps: right-click a location and choose “What’s here?” to get latitude/longitude, or use an online lat/lon finder (latlong.net).
- Format: `[latitude, longitude]` (both numbers). Keep decimal points.

Quick checklist
- Edit `markers` `location` values in [src/components/ExperienceGlobe.tsx](src/components/ExperienceGlobe.tsx).
- Keep `id` consistent with `roles` and any manual resume text updates.
- Update `src/data/experiences.ts` for textual resume changes.
- Restart dev server and verify.

Changing images and logos (per-section)
- Experience / company logos:
  - File: `src/data/experiences.ts` — each entry has a `logo` field. By default this repo uses short text codes like `DE`, `SA`, `EG`, `HF`.
  - To use an image, add the image file to the `public/` folder (for example `public/logos/dentsu.png`) and set the `logo` field to the path relative to `public/` (for example `logos/dentsu.png`).
  - `src/components/ExperienceOrgLogo.tsx` will render either a local image, a remote URL, or fallback to the text code. Example:

```ts
// experiences.ts
{
  company: 'Dentsu',
  logo: 'logos/dentsu.png', // file placed at public/logos/dentsu.png
  ...
}
```

- Resume PDF / preview image:
  - File: `src/components/ResumeViewer.tsx` uses constants `RESUME_PDF` and `RESUME_PREVIEW` which point to files in `public/`.
  - Replace `public/piyush-kumar-resume.pdf` and `public/piyush-kumar-resume-preview.png` with your new files (keep same filenames), or update the constants in `ResumeViewer.tsx` to point to new paths.

- Hero, project, and blog images:
  - Project and blog images are stored under `public/projects/` and `public/blogs-images/` respectively. Replace the files there or update the data source that references them (e.g., `src/data/selectedWork.ts` or blog frontmatter).

Notes and tips
- Supported image types: `png`, `jpg`, `jpeg`, `webp`, `avif`, `svg`, `gif`.
- If you use an external image URL, set `logo` to the full URL; `ExperienceOrgLogo` will render it and mark it unoptimized for Next's image optimizer.
- Keep `logo` values consistent with how `ExperienceOrgLogo` expects them: local relative path without a leading slash (the component prefixes with `/` internally).

Would you like me to update one company's `logo` value to a real image file and add the image under `public/logos/`? If yes, tell me which company and provide the image path or remote URL.

Replace the `PK` initials with your headshot (hero cover)
- File: `src/components/HeroCover.tsx` — the right-side identity mark displays the initials `PK` inside a `span`.
- To replace with a headshot image:
  1. Add your image to `public/` (for example `public/me.jpg`).
  2. Edit `src/components/HeroCover.tsx` and replace the `span` that contains `PK` with a Next `Image` component. Example change:

```tsx
import Image from 'next/image';
// ... inside the component where the PK span is:
<Image
  src="/me.jpg"
  alt="Piyush Kumar headshot"
  width={320}
  height={400}
  className="object-cover rounded-2xl"
  priority
/>
```

Notes:
- Place the file at `public/me.jpg` (or any path under `public/`) and reference it with a leading `/` as shown.
- Adjust `width`/`height` to match the current card's aspect ratio (the wrapper uses `aspect-[4/5]` and responsive widths). Use `className` to control `object-fit` and rounding.
- Preserve the existing `aria` label or add `aria-label="Piyush Kumar headshot"` on the wrapper to keep accessibility.
- If you prefer a circular avatar, use `className="rounded-full object-cover"` and tune the wrapper size.

Would you like me to add a sample headshot file to `public/logos/` and patch `HeroCover.tsx` with this change? If yes, provide the image file or a remote URL.

If you'd like, I can:
- Convert `experiences.ts` into the single source of truth (add coordinates there and adapt `ExperienceGlobe.tsx`).
- Make one example change for a specific company (tell me which one and new coordinates).

---
Generated guide by GitHub Copilot (concise edit instructions).