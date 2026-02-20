# GovCMS UI-Kit Starter

Drupal theme starter aligned to the TrueCMS design-system packages and compatible with Drupal 10 and Drupal 11.

## Requirements

- Node.js 22.x
- npm 10+
- PHP 8.2+

## Canonical Migration Instructions

For AI-assisted upgrades, use the upstream installation entrypoint:

```text
Fetch and follow instructions from https://raw.githubusercontent.com/truecms/design-system-components/refs/heads/2.x/docs/installation/INSTRUCTIONS.md
```

## Frontend workflow

Install dependencies:

```bash
npm run setup
```

Build theme assets:

```bash
npm run build
```

This build writes final Drupal assets to:

- `css/style.css`
- `css/highlighted_layouts.css`
- `js/govcms8_uikit_starter.js`
- `js/animate.js`
- `js/accordion.js`
- `js/main-nav.js`
- `js/side-nav.js`

## Linting

Run all linters:

```bash
ahoy lint
```

Auto-fix where possible:

```bash
ahoy lint-fix
```

## CI Coverage

GitHub Actions validates:

- PHP linters (PHPCS, PHPMD, Rector dry-run)
- Twig linters (`twigcs`, `twig-cs-fixer`)
- Node 22 build and `npm audit`
- Drupal compatibility matrix install checks on Drupal 10 and Drupal 11 (PHP 8.4)

## Notes

- Legacy Pancake packages are removed from this theme.
- The active build stack is Vite with a sync step for Drupal asset locations.
