# CLAUDE.md

This file is read by Claude Code at the start of every session in this repo.

---

## About This Repo

[alanchester.com](https://alanchester.com) — Alan Chester's personal site. A
static Astro + Tailwind site that frames the personal brand around the
`∀ ε > 0, ∃ δ > 0` philosophy. Houses essays, white papers, and a project
gallery. No consulting signals, no employer references, no career-transition
framing. Voice: compressed, precise, calibrated. No em dashes in copy.

**Stack.** Astro 4.x (SSG), Tailwind CSS (custom theme, no plugins),
content collections for `blog` and `papers`, IBM Plex Sans + Mono via
`@fontsource`. Deploys to Netlify (config in `netlify.toml`).

**Working in this repo.**
- `npm run dev` for the local server (port 4321)
- `npm run build` for the production build
- `npx astro check` for the type checker
- Add a new post: drop a `.md` (or `.mdx`) into `src/content/blog/` (essay)
  or `src/content/papers/` (paper). Filename becomes the URL slug.
- Brand tokens live in `tailwind.config.mjs`. Never hand-roll hex values
  in components — use the named colors (`ink`, `paper`, `accent`, etc.).
- IBM Plex Mono ships no Greek subset, so `ε` / `δ` glyphs in the
  Monogram and Equation render in IBM Plex Sans (loaded via the
  `greek-*.css` font subsets). Don't "fix" this back to mono.

---

## Developer Preferences

### Editor
- Primary: Vim
- AI editor: Cursor

### Shell
- zsh, minimal prompt

### Git & GitHub Workflow
- **Branch model:** `main` = latest release. `develop` = integration branch.
- Always branch from `develop`, never commit directly
- PRs always target `develop`
- `main` is only updated via CLI merge (`git merge --no-ff origin/develop`) by `/publish-release` — **never via a GitHub PR**. GitHub's merge button squash-merges by default, dropping ancestry and causing conflicts on the next release.
- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`

### Scripting Standards
- Shell scripts must pass `shellcheck`
- Use `set -euo pipefail`
- Scripts should be idempotent

---

## Brand

This repo descends from [`amcheste/repo-template`](https://github.com/amcheste/repo-template), which is brand-aligned with [`@amcheste/brand`](https://github.com/amcheste/alanchester-brand). Badge colors (Hunter Green `#1F4D3A`, Ink `#0B0B0C`) match the brand by default.

When generating prose, follow the brand voice rules at [`voice.md`](https://github.com/amcheste/alanchester-brand/blob/main/docs/voice.md): no em dashes in prose, calibrated hedges over weak ones, lowercase eyebrows, numerical specificity. Hunter green is reserved for data, pivots, and the δ; don't use it as decoration.

For deeper brand integration (palette adoption, mark embedding, full theming sweep), paste [`docs/theming-prompt.md`](https://github.com/amcheste/alanchester-brand/blob/main/docs/theming-prompt.md) from the brand repo into a Claude Code session in this repo.

---

## Learned Preferences

<!-- Claude Code will suggest additions here as patterns emerge across sessions -->
