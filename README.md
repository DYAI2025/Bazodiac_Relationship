# Bazodiac Relationship

Bazodiac Relationship is the product and engineering workspace for a multiperspective relationship-analysis tool that combines:

- BaZi and HeHun relationship signals;
- Wu Xing as a dynamic explanatory layer;
- Da Yun as a long-term timing layer;
- western natal astrology and synastry;
- Zi Wei Dou Shu as an additional life-domain perspective once its rules are explicitly released.

The product does **not** output a deterministic compatibility score. It presents observable, evidence-bound relationship dynamics with two possible expression paths:

- **Shadow** — how a dynamic can become constraining under specific conditions;
- **Opportunity** — how the same dynamic can become useful under different conditions.

## Product principle

> The centre shows the interaction. The sides show its origin. Shadow and opportunity describe conditional expressions, not predetermined outcomes.

## Repository structure

```text
docs/
  product/
    PRD.md
  architecture/
    SYSTEM_ARCHITECTURE.md
    ADR-001-backend-for-frontend.md
    ADR-002-evidence-bound-mapping.md
  api/
    RELATIONSHIP_REPORT_CONTRACT.md
  design/
    UI_UX_DECISIONS.md
  mapping/
    MAPPING_METHOD.md
  prototype/
    CLICK_DUMMY_SPEC.md
  jira/
    TRACEABILITY.md
```

## Current status

This repository currently contains the product foundation, architecture decisions, mapping method, API contract draft and UI prototype specification. Production code and live FuFire integration are not yet implemented.

## System boundary

```text
Browser -> Bazodiac Relationship BFF -> FuFire APIs
```

The browser must never receive private FuFire credentials. Calculation, normalization, evidence aggregation and mapping remain server-side.

## Source and safety model

- Calculation is deterministic and versioned.
- Mapping is rule-based, reviewable and evidence-bound.
- Language generation is a final rendering step only.
- BaZi, Wu Xing, HeHun and Da Yun belong to one dependency family and must not be counted as independent confirmations.
- Zi Wei Dou Shu pair mapping remains `SOURCE_NEEDED` until a reviewed methodology exists.
- Marriage, separation, health, wealth or destiny guarantees are blocked.

## Jira delivery structure

Primary product epic:

- [BAZ-5 — Fusion-Synastrie integrieren](https://dyai2026.atlassian.net/browse/BAZ-5)

New implementation items:

- [BAZ-54 — Mapping Registry v1](https://dyai2026.atlassian.net/browse/BAZ-54)
- [BAZ-55 — Relationship-Dynamics Click-Dummy](https://dyai2026.atlassian.net/browse/BAZ-55)
- [FUF-92 — Relationship BFF and Report Contract](https://dyai2026.atlassian.net/browse/FUF-92)

Backend/API work also depends on the FuFire work under `FUF-3`, `FUF-53` and `FUF-64`.

See [`docs/jira/TRACEABILITY.md`](docs/jira/TRACEABILITY.md) for the full mapping between GitHub authorities and Jira delivery items.

## GitHub

Repository: https://github.com/DYAI2025/Bazodiac_Relationship
