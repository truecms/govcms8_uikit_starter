<!--
Sync Impact Report
- Version change: 0.0.0 (template) → 1.0.0
- Modified principles:
  • N/A (all principles newly defined from template)
- Added sections:
  • Additional Constraints
  • Development Workflow
- Removed sections:
  • None
- Templates requiring updates:
  • .specify/templates/plan-template.md — ✅ updated
  • .specify/templates/spec-template.md — ✅ updated
  • .specify/templates/tasks-template.md — ✅ updated
  • .specify/templates/commands/* — ⚠ not present in repo; references removed where applicable
- Follow-up TODOs:
  • TODO(RATIFICATION_DATE): Original adoption date unknown; set when known
-->

# GovCMS UI‑Kit Starter Theme Constitution

## Core Principles

### I. Drupal 10/11 Compatibility (Non‑Negotiable)
All theme code MUST be compatible with Drupal Core 10 and 11 and PHP 8.4.
Deprecated Drupal 8/9 APIs MUST be removed or upgraded. Twig templates MUST
use current Twig syntax. JavaScript behaviors MUST use `drupal.once` and avoid
`jquery.once`. The theme’s `.info.yml` MUST declare
`core_version_requirement: ^10 || ^11` (retaining `^9` only for transitional
support when explicitly required by a consuming project).
Rationale: Keeps the theme viable on supported core versions and modern PHP.

### II. Lint‑First & Automated Quality Gates
Every change MUST pass local and CI linting before merge:
- Run `ahoy lint` locally before committing.
- GitHub Actions MUST run: `phpcs` (Drupal + PHPCompatibility, theme scope
  only, JS/CSS excluded), `phpmd`, `rector` (dry‑run for CI), `twigcs`, and
  `twig-cs-fixer` (lint mode). Failures block merge.
Rationale: Ensures consistent quality and PHP 8.4 readiness across the theme.

### III. No Layout‑Builder Reliance (Sunset Legacy)
The theme MUST NOT depend on Layout Builder, Field Layout, Panelizer, Panels,
or related page/layout managers. Existing legacy hooks/variables (e.g.
`is_panelized`) MAY remain temporarily for compatibility but MUST NOT grow.
Create migration tasks to remove legacy dependencies. Default behavior must not
require any layout‑builder module.
Rationale: Target a vanilla Drupal 11 site with no layout builders enabled.

### IV. Modern UI‑Kit Stack (Node 22, Zero Vulnerabilities)
Frontend assets MUST use Node v22 (`nvm use 22`). All `@govau/*` dependencies
MUST be replaced by their `@truecms/*` equivalents (major version bump where
needed). `npm audit` MUST report zero vulnerabilities. Package set MUST avoid
deprecated/abandoned packages.
Rationale: Provides a secure, maintained design system baseline.

### V. Simplicity & Backwards‑Compatible Behavior (Theme Scope)
Maintain current end‑user behavior where practical; do not introduce new
features during the compatibility upgrade. Keep changes scoped to the theme
only; do not lint assets or vendor directories; do not add Composer plugins.
Rationale: Minimize upgrade risk and keep focus on compatibility.

## Additional Constraints

- Scope: Theme repository only. No changes outside the theme.
- PHP: Target runtime PHP 8.4; avoid deprecated PHP features; prefer strict
  types in new PHP code (`declare(strict_types=1);`).
- Twig: Prefer `create_attribute()` and `attributes|without(...)` patterns; no
  debug functions (e.g. `kint`, `dump`) in committed templates.
- JS: Use `Drupal.behaviors` with `once()` from `drupal.once`; reduce reliance
  on jQuery where possible.
- Composer: After any `composer.json` change, run `composer update --lock`.
- Node: Use `nvm use 22`; `npm ci` for deterministic installs.

## Development Workflow

1. Environment
   - `nvm use 22` and `composer --version` compatible with PHP 8.4.
2. Local checks
   - `ahoy lint` MUST pass before commit.
   - If `composer.json` changed, run `composer update --lock`.
3. CI checks (GitHub Actions)
   - Run `phpcs`, `phpmd`, `rector --dry-run`, `twigcs`, `twig-cs-fixer`.
   - Failures block merge; no JS/CSS linting via `phpcs` (explicitly excluded).
4. Release/Versioning
   - Theme releases follow semver; compatibility upgrades without behavior
     changes are MINOR; breaking template/CSS class changes are MAJOR.

## Governance

- This Constitution supersedes previous practice docs for the theme.
- Amendments require PR review and update to this file. Include migration notes
  when behavior changes are introduced.
- Compliance Review: Reviewers MUST verify `ahoy lint` passed locally and CI
  checks passed. PRs that introduce layout‑builder reliance or re‑introduce
  deprecated APIs MUST be rejected.
- Versioning Policy: Semantic Versioning. This update establishes v1.0.0 for
  governance documentation.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): original adoption date unknown | **Last Amended**: 2025-11-07
