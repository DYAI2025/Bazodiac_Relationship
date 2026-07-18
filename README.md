# Bazodiac Relationship

Bazodiac Relationship is the product and engineering workspace for a multiperspective, evidence-oriented relationship-reflection tool combining released FuFirE sources from BaZi/HeHun/Wu Xing/Da Yun, Western astrology and later reviewed ZWDS context.

It does **not** output a deterministic compatibility score, diagnosis or prediction. The centre shows the interaction; the sides show its source. Shadow and opportunity are conditional expressions of one mechanism.

## Canonical documents
- [AI-native PRD](docs/product/prd_report.md)
- [Machine-readable PRD](docs/product/prd_report.json)
- [BRIDGE-R v1.1 method](docs/mapping/BRIDGE_R_METHOD.md)
- [Evidence-dialectic audit](docs/audit/BRIDGE_R_EVIDENCE_DIALECTIC_AUDIT.md)
- [Implementation plan](docs/plans/2026-07-17-bridge-r-implementation-plan.md)
- [Requirement traceability](docs/product/TRACEABILITY_MATRIX.md)
- [GitHub–Jira traceability](docs/jira/TRACEABILITY.md)

## System boundary
```text
Browser → Bazodiac Relationship BFF → FuFirE APIs
```

Calculation, evidence, mapping and eligibility remain deterministic and server-side. Language generation is optional and non-authoritative.

## Current status
Documentation and BRIDGE-R v1.1 are ready for review. Runtime implementation is not complete. Authentication, retention, Western synastry, Rule Card source authority and Release-1 validation thresholds remain blockers.
