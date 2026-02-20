# Production Releases

## Versioning rule

This repository uses Drupal-major-aligned release versioning for GitHub tags/releases.

- Drupal 11 release line starts at `11.0.0`.
- All ongoing releases for this line increment patch only: `11.0.1`, `11.0.2`, `11.0.3`, ...
- Do not use `v` prefix in tags.

When a new supported Drupal major line is adopted, start a new major version:

- Drupal 12 line starts at `12.0.0`.

## Branch and release source

- Release from the default stable branch for this line (`2.x`).
- Ensure pull requests targeting this line are merged before release cut.

## Pre-release checklist

1. Confirm release version is next patch in the active line (`11.0.x`).
2. Confirm CI is green on the release commit.
3. Run local validation:
   - `npm run build`
   - `npm audit --audit-level=high`
   - `ahoy lint`
4. Confirm Drupal compatibility checks for 10/11 are passing in GitHub Actions.
5. Prepare release notes from `.github/RELEASE_TEMPLATE.md`.

## Release creation procedure (GitHub)

1. Open GitHub release creation for this repository.
2. Create tag using the release version (example: `11.0.0`) and target branch `2.x`.
3. Use `.github/RELEASE_TEMPLATE.md` as the release notes structure.
4. Publish release after final review.

## Guardrail

- Do not create or publish tags/releases until explicit approval is given.
