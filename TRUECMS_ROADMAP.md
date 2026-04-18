# TRUECMS Roadmap: govcms8_uikit_starter

Last updated: 2026-02-20

## Current Priority
High priority after `design-system-components` release readiness.

## Cross-Repo Role
- Priority Drupal consumer validating migration quality in real theme workflows.
- Receives package outputs from `design-system-components`.
- Signals readiness for eventual Pancake deprecation gate.

## Actionable Execution Queue

### M1. Complete existing modernization backlog
- [ ] Execute open tasks from `specs/001-upgrade-theme-drupal/tasks.md`.
- [x] Keep lint and CI reliable (`ahoy lint`, GHA checks).
- [x] Keep compiled assets policy intact.

### M2. Unified package pilot
- [ ] Create pilot branch targeting latest `@truecms/design-system` prerelease.
- [ ] Verify migration path with minimal template/library changes.
- [ ] Record migration blockers in this file and in `../design-system-components/TRUECMS_ROADMAP.md`.

### M3. Release and communication
- [ ] Publish migration guide for adopters.
- [ ] Publish support policy for Drupal 11 now, Drupal 12 plan.
- [ ] Prepare release/tag once verification gates pass.

## Verification Gates
- [x] `ahoy lint` passes.
- [x] Drupal 10/11 compatibility checks pass.
- [x] Frontend dependency audit policy passes for release path.

## Verification Notes
- Branch `001-upgrade-theme-drupal` includes modern stack migration commit `2ea6e64` (Vite build, Pancake removal, TrueCMS dependency alignment).
- Local validation completed: `npm ci --ignore-scripts`, `npm run build`, `npm audit --audit-level=high`, `ahoy lint`.
- Drupal compatibility validation completed on `2026-02-20` by installing this theme into clean `drupal/recommended-project` codebases for both `^11` and `^10`.
- CI now includes a Drupal compatibility matrix job (`10` and `11`) on PHP 8.4 to continuously validate composer-level installation compatibility.
- Follow-up stacked PR #2 (`feature/drupal-smoke-build-ci`) adds Node 22 setup plus frontend `npm ci` / `npm run build` smoke verification inside the clean Drupal install job, asserting the built CSS and JS artefacts exist after installation.
- Upstream producer progress for unified single-install adoption is tracked in `../design-system-components/TRUECMS_ROADMAP.md` (PR #21), but the actual GovCMS unified-package pilot remains blocked until an updated `@truecms/design-system` prerelease is published.
- Remaining unchecked items are release/pilot/governance tasks and runtime UX checks (for example interaction browser testing and full smoke scenarios).

## Notes
Use `../MULTI_REPO_ROADMAP.md` for cross-repo sequencing updates.
