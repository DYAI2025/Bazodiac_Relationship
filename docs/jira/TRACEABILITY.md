# GitHub–Jira Traceability

## Primary product epic

- [BAZ-5 — Fusion-Synastrie integrieren](https://dyai2026.atlassian.net/browse/BAZ-5)

## New delivery items

| Jira | Scope | GitHub authority |
|---|---|---|
| [BAZ-54](https://dyai2026.atlassian.net/browse/BAZ-54) | Mapping Registry v1 | [`docs/mapping/MAPPING_METHOD.md`](../mapping/MAPPING_METHOD.md), [`ADR-002`](../architecture/ADR-002-evidence-bound-mapping.md) |
| [BAZ-55](https://dyai2026.atlassian.net/browse/BAZ-55) | Relationship UI click dummy and frontend foundation | [`docs/prototype/CLICK_DUMMY_SPEC.md`](../prototype/CLICK_DUMMY_SPEC.md), [`docs/design/UI_UX_DECISIONS.md`](../design/UI_UX_DECISIONS.md), [`ADR-003`](../architecture/ADR-003-frontend-foundation-selection.md), [`apps/web`](../../apps/web) |
| [FUF-92](https://dyai2026.atlassian.net/browse/FUF-92) | Relationship BFF and browser report contract | [`docs/api/RELATIONSHIP_REPORT_CONTRACT.md`](../api/RELATIONSHIP_REPORT_CONTRACT.md), [`ADR-001`](../architecture/ADR-001-backend-for-frontend.md) |

## Frontend repositories

| Repository / path | Role | Status |
|---|---|---|
| `DYAI2025/Bazodiac_Relationship/apps/web` | Canonical React/TypeScript frontend foundation | Feature branch; review required |
| `DYAI2025/Bazodiac-relationships-GAIS` | Reference prototype and interaction donor | Separate documentation branch; not production authority |

The two implementations must not be merged wholesale. Reviewed GAIS concepts may be reimplemented as typed modules in `apps/web`.

## Existing related Jira items

### Bazodiac Consumer Product

- [BAZ-27](https://dyai2026.atlassian.net/browse/BAZ-27) — two-profile partner journey
- [BAZ-29](https://dyai2026.atlassian.net/browse/BAZ-29) — HeHun endpoint integration
- [BAZ-30](https://dyai2026.atlassian.net/browse/BAZ-30) — BaZi and Western fusion model
- [BAZ-31](https://dyai2026.atlassian.net/browse/BAZ-31) — pair report, pilot and acceptance tests
- [BAZ-32](https://dyai2026.atlassian.net/browse/BAZ-32) — reflexive interpretation without fate score
- [BAZ-33](https://dyai2026.atlassian.net/browse/BAZ-33) — Western synastry visualization
- [BAZ-34](https://dyai2026.atlassian.net/browse/BAZ-34) — consent, visibility and deletion

### FuFire Platform & API

- [FUF-3](https://dyai2026.atlassian.net/browse/FUF-3) — HeHun go-live gates
- [FUF-18](https://dyai2026.atlassian.net/browse/FUF-18) — HeHun domain validation
- [FUF-19](https://dyai2026.atlassian.net/browse/FUF-19) — versioned two-person ChartSnapshots
- [FUF-20](https://dyai2026.atlassian.net/browse/FUF-20) — dual consent and separate deletion
- [FUF-21](https://dyai2026.atlassian.net/browse/FUF-21) — evidence and safe relationship language
- [FUF-22](https://dyai2026.atlassian.net/browse/FUF-22) — human-review and release gate
- [FUF-23](https://dyai2026.atlassian.net/browse/FUF-23) — acceptance tests and API version
- [FUF-53](https://dyai2026.atlassian.net/browse/FUF-53) — Fusion 2 epic
- [FUF-64](https://dyai2026.atlassian.net/browse/FUF-64) — relationship fusion preparation

## Dependency direction

```text
FUF-3 / FUF-64
      ↓
FUF-92 Relationship BFF contract
      ↓
BAZ-54 Mapping Registry v1
      ↓
BAZ-55 UI click dummy and canonical frontend foundation
      ↓
BAZ-31 pilot and acceptance gates
```

The click dummy can be built with mock data before FUF-92 is complete. Live integration must not proceed until relevant FuFire contracts and mapping rules are versioned and reviewed.

## Governance

- GitHub documentation is the versioned design and contract authority.
- Jira tracks delivery state, ownership, dependencies and acceptance.
- Every implementation pull request includes the relevant Jira key in its title or description.
- Contract or architecture changes require an updated ADR or versioned schema before the Jira item is closed.
- ZWDS pair mapping remains `SOURCE_NEEDED` until a reviewed methodology exists.
