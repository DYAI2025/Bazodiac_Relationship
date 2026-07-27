# ADR-005: Dynamic Polarity is a deterministic domain service

Status: Recommended
Jira: FUF-118 / BAZ-64

## Decision
Chance & Shadow evaluation is not an LLM prompt and not a mobile/web function. It is a versioned deterministic service operating on normalized evidence. Narrative rendering is downstream and non-authoritative.

## Service boundary
`POST /v1/relationship/dynamics/evaluate`

Input: dossier fingerprint, normalized signals, evidence IDs, data quality, requested released ruleset and optional dynamic-family allowlist.

Output: neutral mechanism, Chance, Shadow, supporting/counter evidence, support strength, derivation confidence, quality, status, discard reasons, version hashes and `current_expression=NOT_INFERRED`.

## Prohibited outputs
Compatibility score, success probability, current axis position, diagnosis, blame role or invented evidence.
