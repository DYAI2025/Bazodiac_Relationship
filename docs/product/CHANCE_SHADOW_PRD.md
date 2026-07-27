# Product requirements - Chance & Shadow

## Problem
Most relationship products return judgment, generic prose or a single score. Customers receive an answer but no traceable model for conversation.

## Outcome
Users can identify a small number of well-supported relationship dynamics, understand both expressions of each mechanism, inspect the derivation, and discuss what they recognize without assigning one partner as the defect carrier.

## Primary journey
Consent -> birth context -> analysis job -> partial/full dossier -> dynamics overview -> detail/evidence -> reflection/resonance -> optional PDF/product output.

## Functional requirements
- dual consent and revocation;
- FuFirE provider orchestration through BFF only;
- versioned `RelationshipAnalysisDossier`;
- evidence index and module status;
- deterministic Dynamic Polarity evaluation;
- safe language synthesis;
- progressive disclosure and accessible charts;
- product manifests for Essential, Signature and Keepsake;
- deletion and reprint semantics.

## Quality requirements
- same canonical inputs and versions produce same dossier fingerprint;
- no visible claim without evidence and released rule card;
- partial provider failures remain visible;
- no birth data in client logs or analytics;
- accessible without color-only distinctions or motion.

## Out of scope for MVP
Composite, annual transits, ZWDS pair rules, public score, automated therapeutic recommendations and unreviewed AI interpretation.
