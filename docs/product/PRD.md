# Product Requirements Document

## Product

**Bazodiac Relationship Dynamics**

## Status

Foundation draft, version 0.1.

## 1. Product objective

Create a complete relationship-analysis experience for two consenting people. The product compares their individual charts and presents only relationship dynamics that can be traced to validated source signals.

It combines separate perspectives from:

- BaZi;
- Wu Xing;
- HeHun;
- Da Yun;
- western natal astrology and synastry;
- Zi Wei Dou Shu, initially as individual context only.

The product must not collapse these systems into a single fate or compatibility score.

## 2. User problem

Users do not primarily need more chart symbols. They need a comprehensible answer to:

1. What dynamic becomes visible between us?
2. How can it appear differently for each person?
3. Under which conditions can it become a shadow pattern?
4. Under which conditions can it become an opportunity?
5. Which source systems support or contradict the hypothesis?
6. What can we observe or discuss without treating the analysis as a fixed truth?

## 3. Product promise

> Understand recurring relationship dynamics across multiple traditions without reducing the relationship to a verdict.

## 4. Core principles

- Multiperspective rather than deterministic.
- Evidence before interpretation.
- Conditional shadow and opportunity framing.
- Contradictions remain visible.
- Missing or weak evidence is omitted.
- Calculation and language generation remain separated.
- A user may interpret the result strongly, but the product must not manufacture certainty.

## 5. Primary target users

### Primary

Couples or prospective partners who want a structured reflection on communication, closeness, autonomy, conflict and development.

### Secondary

- coaches and relationship counsellors using the report as a reflective prompt;
- astrology users seeking a combined BaZi and western perspective;
- marriage-reflection customers who want questions rather than predictions.

## 6. Jobs to be done

- Compare two people without declaring one person right or wrong.
- Identify recurring interaction loops.
- Distinguish individual tendencies from pair dynamics.
- Understand where independent systems converge or disagree.
- Translate abstract chart data into practical reflection questions.
- Inspect the evidence behind every visible relationship statement.

## 7. Scope

### MVP

- Two-person intake with explicit consent status.
- Person A and Person B individual summaries.
- BaZi/HeHun relationship signals.
- Western synastry signals.
- Three relationship domains:
  - communication and processing tempo;
  - closeness and autonomy;
  - conflict and repair.
- Shadow and opportunity view for every dynamic.
- Evidence drawer.
- Mapping-rule version and source status.
- Responsive three-column desktop UI and linear mobile UI.
- Mock-data click dummy before live integration.

### Post-MVP

- Full Relationship Ontology.
- Da Yun and western transit timing overlay.
- Zi Wei Dou Shu individual context.
- Reviewed ZWDS pair mapping.
- PDF report.
- User accounts, invitations, withdrawal and deletion workflows.
- Human review and release gates for public products.

### Out of scope for MVP

- Universal compatibility percentage.
- Marriage-success prediction.
- Separation prediction.
- Health, wealth or fertility claims.
- Automatic psychological diagnosis.
- LLM-generated mapping rules.
- Unreviewed ZWDS compatibility logic.

## 8. Core user journey

1. Person A creates a relationship report.
2. Person A enters or invites Person B.
3. Consent and data-quality gates are checked.
4. The backend calculates each system separately.
5. Native system meanings are normalized into relationship signals.
6. The interaction resolver creates candidate pair dynamics.
7. Visibility rules remove weak, unsupported or contradictory-without-context candidates.
8. The user sees the relationship snapshot.
9. The user opens a dynamic and compares Person A, interaction and Person B.
10. The user inspects shadow, opportunity, conditions, counter-hypothesis and evidence.
11. The user optionally opens reflection questions or exports a later PDF.

## 9. Functional requirements

### FR-01 Two-person model

The system stores Person A and Person B as separate subjects with separate data-quality and consent state.

### FR-02 Independent calculation

BaZi, western astrology and ZWDS must be computed independently by versioned engines.

### FR-03 Native interpretation layer

Raw features must first map to system-native meaning objects before they map to the neutral relationship ontology.

### FR-04 Relationship mapping

Only reviewed rules can emit relationship signals.

### FR-05 Interaction resolution

Individual signals alone do not constitute a pair dynamic. A separate interaction rule must combine A, B and direct pair evidence.

### FR-06 Shadow and opportunity

Every visible dynamic contains:

- core pattern;
- expression for Person A;
- expression for Person B;
- interaction mechanism;
- shadow conditions and possible expression;
- opportunity conditions and possible expression;
- counter-hypothesis;
- evidence references.

### FR-07 Dependency-family handling

BaZi, Wu Xing, HeHun and Da Yun are one evidence family. Internal reinforcement may increase salience but must not be counted as four independent confirmations.

### FR-08 Contradiction handling

Cross-system contradictions must remain visible and must not be averaged into a false consensus.

### FR-09 Evidence inspection

Every displayed claim exposes evidence IDs, source system, ruleset version, mapping version and confidence status.

### FR-10 No-result handling

If the method cannot derive a meaningful dynamic, the product displays no claim rather than filler text.

### FR-11 Narrative rendering

An LLM may phrase approved structured dynamics but may not invent mappings, weights, evidence or missing data.

### FR-12 Responsive UI

Desktop uses Person A / relationship centre / Person B. Mobile uses a sequential relationship-first flow.

## 10. Non-functional requirements

### Security and privacy

- FuFire credentials remain server-side.
- Birth data are minimized in logs.
- Person identifiers are pseudonymous downstream.
- Consent, withdrawal, deletion and report retention are explicit.
- No personal birth payload is sent to a language model unless separately approved and minimized.

### Reliability

- Partial module failure produces a partial report, not fabricated fallback data.
- Module status is explicit.
- Request and correlation IDs exist across the BFF and providers.

### Accessibility

- Keyboard navigation.
- Visible focus.
- No information encoded by colour alone.
- Reduced-motion mode.
- Accessible alternatives for graph visualizations.

### Performance

- Primary report shell loads independently from optional narrative expansion and PDF rendering.
- Heavy visualizations are lazy initialized.
- Motion uses transform, opacity or SVG stroke techniques.

## 11. Success criteria

A test user can explain within five minutes:

1. what the visible pair dynamic is;
2. how it differs for A and B;
3. what shadow and opportunity mean;
4. which systems support it;
5. that it is a conditional reflection, not a prediction.

## 12. Kill criteria

The concept requires revision if users consistently:

- demand or infer a single objective compatibility score;
- cannot distinguish internal BaZi reinforcement from independent convergence;
- interpret shadow as inevitable harm;
- cannot explain why a dynamic is shown;
- see the experience as two individual reports with decorative middle cards.

## 13. Dependencies

- FuFire HeHun release gates.
- Western synastry calculation contract.
- Relationship BFF and report schema.
- Mapping Registry v1.
- Reviewed domain rules and golden cases.
- Explicit ZWDS release and source status.

## 14. Open decisions

- Final location and consent workflow.
- Script policy for Chinese text overlays.
- Whether Composite astrology belongs in MVP or post-MVP.
- Retention period for relationship reports.
- Human-review threshold for public narrative output.
- Exact number of visible domains after MVP testing.
