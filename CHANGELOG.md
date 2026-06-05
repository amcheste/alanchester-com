# Changelog

All notable changes to this project are recorded here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and
versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Unreleased changes accumulate at the top. When a release is cut, the
`Unreleased` heading is rewritten to the version and date, and a fresh
empty `Unreleased` section is inserted above it. The
`monthly-dependency-release` workflow does this rewrite automatically;
the same shape works for manual releases.

## [Unreleased]

## [0.2.0] - 2026-06-05

### Added
- Initial alanchester.com site: Astro 4.x + Tailwind static build with light/dark theming and the AεC brand identity (monogram, wordmark, ε/δ equation, dot-grid notebook texture).
- About page with Research Focus, Current Questions, Currently, Background, Philosophy, and Connect sections; color headshot in the Background section.
- Writing section backed by two content collections (`blog` for essays, `papers` for papers) with a shared layout and reading-time helper.
- Projects gallery grouped by five categories: reinforcement-learning, agentic-systems, research-tooling, applied-experiments, identity-tooling.
- Footer with site nav and contact links (email, LinkedIn, GitHub, X).
- Release pipeline (`release.yml`) triggered by `v*.*.*` tags, plus monthly dependency release workflow, SAST, scorecard, labeler, and stale workflows.
