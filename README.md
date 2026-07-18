# Bazodiac Relationship

Bazodiac Relationship is the product and engineering workspace for a multiperspective, evidence-oriented relationship-reflection tool based on released FuFirE source facts from:

- BaZi, Day Master, Wu Xing, HeHun and Da Yun;
- Western natal astrology and, after a released deterministic contract exists, Western synastry;
- Zi Wei Dou Shu as individual context until reviewed pair rules are available.

The product does **not** generate a psychological diagnosis, fate prediction, marriage or separation verdict, or universal compatibility score. Its core output is a source-traceable relationship-dynamics profile.

> The centre shows the interaction. The sides show its origin. Shadow and opportunity are conditional expressions of one mechanism, not predetermined outcomes.

## Canonical documents

- [AI-native PRD](docs/product/prd_report.md)
- [Machine-readable PRD](docs/product/prd_report.json)
- [BRIDGE-R v1.1 method](docs/mapping/BRIDGE_R_METHOD.md)
- [Evidence-dialectic audit](docs/audit/BRIDGE_R_EVIDENCE_DIALECTIC_AUDIT.md)
- [TDD-first implementation plan](docs/plans/2026-07-17-bridge-r-implementation-plan.md)
- [Requirement traceability](docs/product/TRACEABILITY_MATRIX.md)
- [GitHub–Jira traceability](docs/jira/TRACEABILITY.md)
- [Documentation validation log](docs/audit/DOCUMENT_VALIDATION.md)

Existing foundation documents remain available under `docs/architecture`, `docs/api`, `docs/design` and `docs/prototype`. The canonical PRD and BRIDGE-R v1.1 method supersede older product or mapping prose where they conflict.

## BRIDGE-R v1.1

```text
Birth, Boundary and Consent Gate
  -> Raw Evidence Ledger
  -> Intra-System Native Interpretation
  -> Dyadic Interaction Resolver
  -> Grounded Cross-System Synthesis
  -> Conditional Shadow and Opportunity Explanation
```

A raw chart feature must never jump directly to a psychological type, diagnosis or relationship verdict. Only reviewed `VALIDATED_FOR_REFLECTION` rules may create customer-visible reflective hypotheses. Missing data, provider errors and unreleased rules fail closed through explicit abstention.

## System boundary

```text
Browser -> Bazodiac Relationship BFF -> FuFirE APIs
```

Calculation, provider validation, evidence aggregation, mapping, eligibility and authorization remain server-side. An LLM is optional and non-authoritative; the released base report must remain complete without it.

## Evidence-family rule

BaZi, Wu Xing, HeHun and Da Yun form one dependency family. Repetition inside that family may increase salience conservatively, but it is not independent cross-system confirmation. Cross-system recurrence requires at least two independent eligible families and remains a product label, not proof of truth.

## Current release position

- **Release 0 target:** raw symbolic comparison, HeHun evidence, source status, method limits and Evidence Drawer.
- **Release 1 target:** reviewed reflective dynamics in three domains only after deterministic Western synastry, released Rule Cards, A/B swap and identity-invariance tests, Barnum/decoy controls, deterministic rendering and independent review.
- **Current status:** documentation and method are ready for review; runtime implementation is not complete.

Open blockers include authentication/session authority, consent and deletion lifecycle, retention policy, exact Western synastry contract, Rule Card source authority and validation thresholds.

## Jira

Primary product epic: [BAZ-5 — Fusion-Synastrie integrieren](https://dyai2026.atlassian.net/browse/BAZ-5).

Core delivery items include:

- [BAZ-54 — Mapping Registry v1](https://dyai2026.atlassian.net/browse/BAZ-54)
- [BAZ-55 — Relationship-Dynamics Click-Dummy](https://dyai2026.atlassian.net/browse/BAZ-55)
- [FUF-64 — Beziehungsfusion 2 vorbereiten](https://dyai2026.atlassian.net/browse/FUF-64)
- [FUF-92 — Relationship BFF and Report Contract](https://dyai2026.atlassian.net/browse/FUF-92)

See [GitHub–Jira traceability](docs/jira/TRACEABILITY.md) for dependencies and status policy.
