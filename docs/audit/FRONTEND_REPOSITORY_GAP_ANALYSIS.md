# Frontend Repository Gap Analysis

**Date:** 2026-07-19  
**Jira:** BAZ-55  
**Evidence:** uploaded repository snapshots, source inspection, local dependency installation, TypeScript checks, builds, static validation and DOM interaction checks. Browser E2E remained unavailable in the analysis environment.

## Executive result

The React/TypeScript landing-page implementation has the higher potential as the foundation for the complete Bazodiac Relationships application.

The GAIS repository is the richer standalone click-dummy and remains useful as a reference prototype, but it is not the recommended production base.

## Rubric comparison

| Dimension | GAIS | React/TypeScript foundation |
|---|---:|---:|
| One-shot target fit | 67.6% | 70.3% |
| Full-app readiness | 23.6% | 37.7% |
| Overall rubric | 51.5% | 58.3% |

These percentages are architecture-rubric scores, not production telemetry.

## GAIS findings

### Strengths

- broader interaction and walkthrough concepts;
- substantial prototype documentation;
- directly runnable static pages;
- useful evidence-focus, convergence and timing ideas.

### Critical gaps

- React/Vite root and static prototype form two competing frontend architectures;
- normal build omits the actual static product path;
- renderer and sample-content structures are inconsistent;
- remote fonts conflict with an honest offline boundary;
- some sample language is too deterministic or blame-oriented;
- large monolithic HTML, CSS and JavaScript files increase change risk.

## React/TypeScript findings

### Strengths

- coherent React/TypeScript implementation model;
- page, section, component and data separation;
- coherent build artifact;
- safer content baseline;
- closer alignment with the current visual direction;
- lower migration cost for typed contracts, adapters and tests.

### Critical gaps

- still a marketing and interaction prototype, not the full application;
- no approved `RelationshipReport` domain integration;
- no BFF client, report job or partial module state;
- no production authentication, invitation or dual consent;
- no retention, withdrawal or deletion flow;
- no repository-owned unit, accessibility or browser E2E release gate;
- prototype routing is not a production routing decision.

## Decision

1. Store and evolve the canonical frontend under `apps/web` in `DYAI2025/Bazodiac_Relationship`.
2. Preserve `DYAI2025/Bazodiac-relationships-GAIS` as a separate reference repository.
3. Reimplement only reviewed GAIS concepts as typed components.
4. Do not merge GAIS code wholesale.

## First vertical application slice

```text
Account
→ Person A profile
→ invitation and consent for Person B
→ report job
→ one partial RelationshipReport
→ one reviewed visible dynamic
→ evidence drawer
→ withdrawal and deletion
```

This slice must prove authentication, authorisation, consent, BFF contract handling, explicit partial status, evidence provenance and deletion before the report surface expands.

## Verification boundary

- **Locally verified during comparison:** dependency installation, TypeScript checks, builds and selected DOM interactions.
- **Source-inspected:** visual composition, responsive intent and architecture boundaries.
- **Unverified:** real browser E2E, production hosting, live authentication, BFF integration and report calculation.
