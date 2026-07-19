# ADR-003 — Frontend Foundation Selection

**Status:** Accepted for implementation review  
**Date:** 2026-07-19  
**Jira:** BAZ-55

## Context

Two independently generated frontend snapshots were evaluated against the Bazodiac Relationships target architecture:

1. `DYAI2025/Bazodiac-relationships-GAIS` — a rich static interaction prototype behind a minimal React/Vite redirect shell.
2. The uploaded React/TypeScript landing-page implementation — a componentised frontend with a coherent build artifact.

The target is not merely a marketing page. The frontend must later support authentication, two-person consent, report jobs, partial module results, evidence provenance, report deletion and a stable Relationship BFF contract.

## Decision

The React/TypeScript implementation becomes the canonical frontend foundation and is stored under `apps/web` in `DYAI2025/Bazodiac_Relationship`.

The GAIS repository remains a reference prototype and interaction donor. It is not merged wholesale into the canonical application.

## Reasons

- one coherent implementation model rather than a React shell plus a separate static application;
- clearer page, section, component and data boundaries;
- stronger type-safety foundation;
- coherent production build output;
- lower migration cost for a typed `RelationshipReport` contract and BFF adapter;
- safer baseline content language;
- closer alignment with the current ivory, antique-gold, bronze and cinnabar design direction.

## Preserved GAIS concepts

The following may be reimplemented as typed modules after review:

- multi-sample walkthrough;
- mutual evidence focus;
- richer evidence and source-module navigation;
- convergence and timing visualisations;
- accessibility checklist and validation ideas.

## Rejected alternatives

### Continue GAIS as production base

Rejected because the normal build omits the actual static product path, the renderer and sample-content contracts are inconsistent, and the code is concentrated in large monolithic files.

### Merge both repositories wholesale

Rejected because it would import duplicate architecture, unsafe copy and untyped state into the cleaner application foundation.

### Rewrite both from zero

Rejected because the React/TypeScript implementation already provides a useful and reversible base.

## Invariants

- no compatibility score, diagnosis or prediction;
- the shared relationship dynamic is the primary object;
- Person A and Person B remain symmetrical;
- shadow and opportunity are conditional expressions of one mechanism;
- production claims require evidence IDs, mapping version and provenance;
- missing or conflicting evidence must remain visible or lead to abstention;
- LLM output may phrase approved structures but may not invent rules, weights or evidence.

## Consequences

Positive:

- future work has one canonical frontend location;
- API and domain typing can be introduced incrementally;
- GAIS concepts remain available without becoming production dependencies.

Negative:

- some richer GAIS interactions must be rewritten rather than copied;
- the canonical frontend is still only a prototype foundation;
- authentication, consent, BFF integration, tests and production routing remain open.

## Rollback

The change is isolated to a feature branch. If the foundation proves unsuitable, the branch can be closed without changing `main`; the GAIS repository remains intact.

## Review trigger

Review this decision after the first vertical slice proves:

`account → invite/consent → report job → one visible dynamic → evidence → deletion`.
