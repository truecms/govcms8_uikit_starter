# TRUECMS Roadmap: govcms8_uikit_starter

Last updated: 2026-04-19

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
- [x] Create pilot branch targeting latest `@truecms/design-system` prerelease.
- [x] Verify migration path with minimal template/library changes.
- [x] Record migration blockers in this file and in `../design-system-components/TRUECMS_ROADMAP.md`.

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
- Merged PR #2 adds Node 22 setup plus frontend `npm ci` / `npm run build` smoke verification inside the clean Drupal install job, asserting the built CSS and JS artefacts exist after installation.
- Merged PR #4 switches the theme to the published unified package prerelease path using `@truecms/design-system@beta` with the audit-safe frontend toolchain (`vite ^8.0.8`, `sass ^1.99.0`).
- The unified package pilot is now merged into `001-upgrade-theme-drupal`; remaining unchecked items are release/governance tasks and runtime UX checks (for example interaction browser testing and full smoke scenarios).
- Post-merge sanity sweep on `2026-04-19` passed on the target branch with `npm install --ignore-scripts`, `npm run build`, and `ahoy lint`.
- Sass deprecation warnings still appear from upstream package sources during build, but they are non-blocking for the Drupal 11-compatible merged line and should be tracked as follow-up package modernisation work.

## Notes
Use `../MULTI_REPO_ROADMAP.md` for cross-repo sequencing updates.
