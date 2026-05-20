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

To preview what the site looks like for a user whose OS preference
differs from yours, open DevTools → Rendering → Emulate CSS media
feature `prefers-color-scheme`. Useful for verifying both themes
without manually toggling.

---

## Previewing the site

Several ways to look at the site before publishing, ordered from
"just me, locally" to "share with everyone."

### 1. Local production preview

The closest local equivalent of what ships. Different from `npm run dev`
in that it serves the actual contents of `./dist`.

```bash
npm run build && npm run preview
```

Opens at [http://localhost:4321](http://localhost:4321). Real bundled
CSS/JS, real `<head>` meta tags, real `og:image`, no hot reload.
Catches things `dev` misses: missing assets, broken `getStaticPaths`,
content-collection validation, MDX errors.

### 2. One-off shareable URL (no setup)

For "send a link to one person" without committing to a full Netlify
project: drop the built `dist/` folder onto [Netlify Drop](https://app.netlify.com/drop)
and get a URL like `https://random-name-abc123.netlify.app` valid for
24 hours.

```bash
npm run build
open https://app.netlify.com/drop  # then drag the dist folder
```

### 3. Netlify CLI deploys (repeatable drafts)

For previewing several variants side by side without connecting GitHub:

```bash
npm install -g netlify-cli
netlify login                           # one-time browser auth
netlify deploy --dir=dist               # draft URL
netlify deploy --dir=dist --prod        # promote to the production URL
```

Each `netlify deploy` returns a fresh draft URL like
`https://6735abc--alanchester-com.netlify.app`.

### 4. Full Netlify + GitHub integration (the production setup)

What makes deploy previews automatic. Once connected:

- **Every PR** → unique URL posted as a comment on the PR
  (`deploy-preview-<n>--alanchester-com.netlify.app`).
- **Every push to `develop`** → staging URL
  (`alanchester-com.netlify.app`).
- **Every push to `main`** → production. Point `alanchester.com` at
  this once the custom domain is ready.

One-time setup (≈3 minutes):

1. Go to [app.netlify.com/start](https://app.netlify.com/start).
2. Pick "Import an existing project" → "Deploy with GitHub".
3. Authorize the Netlify GitHub app for `amcheste/alanchester-com`.
4. Confirm the build settings. Netlify reads `netlify.toml` and
   pre-fills these — no edits needed:
   - Branch to deploy: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy.
6. In **Site settings → Build & deploy → Deploy contexts**, confirm
   "Deploy previews" is enabled for **all pull requests** and
   "Branch deploys" includes **`develop`**.

After step 6, every PR comment carries its own preview URL.

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

There are two kinds of writing. The difference is editorial, and the
**folder is what sets it** (no `type` field to keep in sync):

| Kind | Folder | Tag | What it is |
| --- | --- | --- | --- |
| Essay | `src/content/blog/` | `ESSAY` | Shorter, informal analysis or opinion. |
| Paper | `src/content/papers/` | `PAPER` | Longer, formal/structured research (abstract, numbered sections, references). |

Both feed the same `/writing` feed, sorted newest first. The `ESSAY` /
`PAPER` label is derived from the folder in `src/utils/writing.ts`.

1. Drop a `.md` (or `.mdx`) file in the right folder. The filename becomes
   the URL slug: `src/content/blog/my-post.md` → `/writing/my-post`.
2. Add the frontmatter:

   ```yaml
   ---
   title: "Your Title"
   subtitle: "One-line subtitle shown under the title."
   date: 2026-05-18
   description: "One sentence shown on cards and in meta tags."
   draft: false  # true = excluded from build
   ---
   ```

3. Write the body in Markdown. Posts render with sensible defaults for
   headings, lists, blockquotes, inline code, and code blocks. No frontmatter
   tweaking needed for the listing pages. They pick up new entries
   automatically.

4. Run `npm run dev` and visit `/writing` to confirm the new card appears.

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
