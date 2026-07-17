# ADR-002: Use Evidence-Bound Two-Stage Mapping

- Status: Accepted
- Date: 2026-07-17

## Context

BaZi, western astrology and Zi Wei Dou Shu use incompatible native concepts. Directly mapping symbols to psychological labels would create unsupported equivalences and make the final language impossible to audit.

## Decision

Use a mandatory two-stage mapping pipeline:

```text
native source feature
-> reviewed native meaning object
-> neutral relationship signal
-> pair interaction rule
-> visible relationship dynamic
```

Every visible dynamic must reference:

- source feature IDs;
- system and dependency family;
- native-rule version;
- neutral mapping-rule version;
- interaction-rule version;
- data-quality state;
- counter-signals and exclusions.

## Additional decisions

- BaZi, Wu Xing, HeHun and Da Yun are one evidence family.
- Cross-system convergence requires independent families.
- Contradictions are displayed rather than averaged.
- Shadow and opportunity are conditional expressions of one dynamic.
- Weak or unreviewed mappings produce no visible claim.
- An LLM may render approved JSON but may not create or weight mappings.

## Consequences

### Positive

- Full traceability.
- Rules can be reviewed and versioned.
- Hallucinated mappings are structurally blocked.
- Contradictions and uncertainty remain visible.
- The product can explain why a dynamic appears.

### Negative

- Requires a curated rule registry.
- Domain-expert review becomes a release dependency.
- Mapping coverage grows more slowly than free-form prompting.

## Rejected alternatives

### Direct symbol-to-psychology mapping

Rejected because it overclaims equivalence and removes native context.

### LLM-first synthesis

Rejected because the model could invent bridges, weights and evidence.

### Universal compatibility vector

Rejected because it compresses distinct domains and hides contradictions.

## Release gate

A mapping rule is production-ready only after source documentation, exclusions, counter-signals, golden fixtures and expert review are complete.
