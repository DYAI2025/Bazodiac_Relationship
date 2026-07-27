# BAZ-64 build manifest

Mode: BUILD_APPLY on feature branch only.

## Create
Root npm workspace metadata; `apps/mobile`; domain and port boundaries; demo dossier; contract and architecture tests; product/API/ADR documentation; deep-reasoning reports.

## Protect
Existing `apps/web` implementation, default branch, provider secrets, production configuration and deployment files.

## Gates
1. JSON parse of package/app configs.
2. architecture boundary script.
3. contract tests.
4. `npm install`, Expo doctor, typecheck and device smoke - blocked/not-run where network or native runtime is unavailable.
5. GitHub branch, commit, draft PR and read-back.

## Rollback
Close draft PR and delete feature branch only after human approval; no default-branch changes.
