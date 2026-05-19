# alanchester.com

Personal site for Alan Chester. Static site built with [Astro 4.x](https://astro.build),
[Tailwind CSS](https://tailwindcss.com), and deployed to [Netlify](https://netlify.com).

```
∀ ε > 0, ∃ δ > 0
```

---

## Local development

Requires Node 20+ and npm.

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321). Hot reload is on,
so saves under `src/` update the browser.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload. Best for editing copy and components. |
| `npm run build` | Production build into `./dist`. |
| `npm run preview` | Serves the production build locally (no hot reload). Closer to what Netlify actually ships. |
| `npx astro check` | Type-checks all `.astro` files and the content collection schemas. |

### Testing the theme toggle

Click the sun/moon icon in the nav. The choice persists in `localStorage`
under the key `ac-theme`. To reset to the system default, open DevTools →
Application → Local Storage and delete that key.

To preview light mode while your OS is in dark mode (or vice versa),
open DevTools → Rendering → Emulate CSS media feature `prefers-color-scheme`.
This is useful because the home hero is always dark by design, regardless
of theme.

---

## Project structure

```
src/
  components/      reusable Astro components (brand, nav, cards, theme)
  content/
    blog/          essays (.md / .mdx)
    papers/        white papers (.md / .mdx)
    config.ts      collection schemas
  data/            non-content data (e.g. projects list)
  layouts/         Base, Page, Post wrappers
  pages/           routes (file-based)
  styles/global.css
  utils/           helpers (reading time, etc.)
public/            static assets served from the site root
```

---

## Brand tokens

Defined in `tailwind.config.mjs`. Use Tailwind utility classes referencing
the named colors. Do not hand-roll hex values in components.

| Token    | Hex       | Role |
| -------- | --------- | ---- |
| ink      | `#0B0B0C` | primary text, dark backgrounds |
| graphite | `#2B2B2E` | body copy |
| muted    | `#8A8A8E` | captions, labels, metadata |
| mist     | `#E6E4DE` | dividers, borders |
| paper    | `#F6F4EE` | light mode background |
| accent   | `#1F6B3A` | hunter green. CTA, links, highlights |
| alt      | `#B45A3C` | rust. Sparingly. Errors or one accent per page max |

Typography is IBM Plex Sans (body, headings) and IBM Plex Mono
(eyebrows, labels, code, the equation). Both are bundled locally via
`@fontsource`. No Google Fonts call.

---

## Adding a new post

1. Pick the right collection:
   - **Essay** → `src/content/blog/`
   - **White paper** → `src/content/papers/`
2. Create a new `.md` (or `.mdx`) file. The filename becomes the URL slug:
   `src/content/blog/my-post.md` → `/writing/my-post`.
3. Add the frontmatter:

   ```yaml
   ---
   title: "Your Title"
   subtitle: "One-line subtitle shown under the title."
   date: 2026-05-18
   type: essay   # or 'paper' (must match the collection)
   description: "One sentence shown on cards and in meta tags."
   draft: false  # true = excluded from build
   ---
   ```

4. Write the body in Markdown. Posts render with sensible defaults for
   headings, lists, blockquotes, inline code, and code blocks. No frontmatter
   tweaking needed for the listing pages. They pick up new entries
   automatically.

5. Run `npm run dev` and visit `/writing` to confirm the new card appears.

---

## Theme toggle

The theme is persisted in `localStorage` under the key `ac-theme`. A small
inline script in `<head>` applies the saved theme before paint so there&rsquo;s
no flash. Default behavior: respect `prefers-color-scheme`, fall back to light.

---

## Deployment

`netlify.toml` is configured. First push to a repo connected to Netlify
should deploy with zero further configuration.

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20

---

## Conventions

- TypeScript everywhere (`.astro` files use typed frontmatter).
- Tailwind classes only. No inline `style` attributes.
- Inline SVG for icons. No icon libraries.
- No animation libraries. CSS transitions only.
- No UI component libraries (Shadcn, DaisyUI, etc.).
- Voice: compressed, precise. No em dashes in copy. No superlatives.
