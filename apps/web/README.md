# Bazodiac Relationships Web Frontend

React/TypeScript frontend foundation for the Bazodiac Relationships public landing page and future authenticated application.

## Current status

This is a frontend prototype and application foundation. It does not create real accounts, sessions or relationship reports.

The implementation currently includes:

- explanatory English landing page;
- ivory, antique-gold, bronze and cinnabar design system;
- responsive navigation and report sample;
- opportunity/shadow interaction;
- evidence example dialog;
- login and registration prototype flows;
- method, privacy, terms and accessibility pages;
- reduced-motion support.

## Run locally

```bash
npm install
npm run dev
```

A lockfile is not yet committed on this branch. Add and review it before treating the branch as a reproducible release artifact.

## Validate

```bash
npx tsc --noEmit
npm run build
```

## Architecture boundary

The next production step is a typed `RelationshipReport` domain package and an adapter boundary with separate mock and BFF implementations. The UI must not calculate relationship evidence, create mapping rules or infer missing data.

## Known gaps

- no production authentication;
- no dual-consent workflow;
- no BFF client or report-job lifecycle;
- no versioned RelationshipReport schema integration;
- no partial-result or provider-status handling;
- no repository-owned unit, accessibility or E2E test suite;
- dependency and lockfile review required before production use;
- hash routing is prototype-level only.

## Product invariants

- no compatibility score;
- no deterministic relationship claim;
- no diagnostic language;
- shared dynamic remains central;
- Person A and Person B remain symmetrical;
- evidence and limitations remain inspectable;
- insufficient evidence must lead to omission or abstention.

Jira: `BAZ-55`
