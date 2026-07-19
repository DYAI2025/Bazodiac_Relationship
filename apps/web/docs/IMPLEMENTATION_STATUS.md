# Web Frontend Implementation Status

**Date:** 2026-07-19  
**Jira:** BAZ-55  
**Status:** prototype foundation, not production-ready

## Implemented

- componentised React/TypeScript application structure;
- explanatory English landing page;
- ivory, antique-gold, bronze and cinnabar design system;
- relationship-centred 27/46/27 composition;
- interactive Person A, shared dynamic and Person B sample;
- conditional shadow and opportunity view;
- evidence example dialog;
- prototype registration and login boundaries;
- method, privacy, terms and accessibility pages;
- responsive and reduced-motion paths.

## Not implemented

- production authentication and authorisation;
- invitation and dual consent;
- relationship BFF integration;
- report creation and asynchronous job lifecycle;
- provider adapters and module status;
- mapping registry or production relationship rules;
- live evidence index and mapping-version rendering;
- retention, consent withdrawal and deletion propagation;
- PDF generation;
- production analytics, observability and release gates.

## Required next architecture slice

1. Add versioned TypeScript domain types generated from or validated against the approved `RelationshipReport` schema.
2. Add a `RelationshipReportAdapter` with separate mock and BFF implementations.
3. Add report-job, partial-result and explicit error-state UI.
4. Add dual-consent and deletion state machines.
5. Add unit, component, accessibility and browser E2E tests.
6. Replace prototype hash routing after SEO, hosting and protected-route requirements are decided.

## Release boundary

The static frontend foundation may be reviewed internally. Public pilot and production remain blocked until authentication, consent, BFF contracts, reviewed mapping rules, privacy controls and release tests are complete.
