# ADR-001: Use a Relationship Backend-for-Frontend

- Status: Accepted
- Date: 2026-07-17

## Context

The relationship experience consumes multiple calculation domains and sensitive birth data. Direct browser-to-FuFire integration would expose credentials, couple the UI to provider contracts and make partial failures, consent, deletion and evidence handling inconsistent.

## Decision

Use a dedicated Bazodiac Relationship Backend-for-Frontend.

```text
Browser -> Relationship BFF -> FuFire and released calculation providers
```

The BFF owns:

- authentication and authorization;
- dual-consent enforcement;
- provider credentials;
- request orchestration;
- response-schema validation;
- normalization;
- evidence aggregation;
- mapping-rule execution;
- partial-result handling;
- report retention and deletion;
- stable frontend contract.

## Consequences

### Positive

- Credentials remain server-side.
- The frontend receives one stable contract.
- Provider changes are isolated behind adapters.
- Partial failures remain visible by module.
- Consent and deletion can be enforced centrally.
- Mapping and evidence are not duplicated in the browser.

### Negative

- Additional service and operational responsibility.
- Requires explicit versioning and observability.
- Introduces a network and orchestration layer.

## Rejected alternatives

### Direct frontend aggregation

Rejected because it exposes implementation details and creates inconsistent security and mapping behaviour.

### One monolithic provider endpoint

Rejected for the first phase because BaZi, western astrology and ZWDS have different maturity, source and release states. One failure must not invalidate every module.

## Guardrails

- No private provider keys in frontend code.
- No raw provider response forwarded without validation.
- No silent fallback to fixtures.
- No cross-system claim when the required module failed.
