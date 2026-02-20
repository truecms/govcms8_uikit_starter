# GovCMS UI-Kit Starter

Drupal theme starter aligned to the TrueCMS design-system packages and compatible with Drupal 10 and Drupal 11.

## Requirements

- Node.js 22.x
- npm 10+
- PHP 8.2+

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

## Notes

- Legacy Pancake packages are removed from this theme.
- The active build stack is Vite with a sync step for Drupal asset locations.
