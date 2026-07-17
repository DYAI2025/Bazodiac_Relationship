# Mapping Method

## Status

Method foundation, version 0.1.

## 1. Purpose

Define how incompatible native systems can contribute to one relationship product without being falsely equated.

The method is intentionally two-stage:

```text
native raw feature
-> native meaning object
-> neutral relationship signal
-> pair interaction rule
-> visible dynamic
-> conditional shadow and opportunity
```

Direct mappings from an astrological symbol to a psychological type are not allowed.

## 2. Method boundaries

### Allowed

- versioned deterministic source features;
- reviewed native interpretation rules;
- neutral relationship hypotheses;
- pair interaction rules;
- visible uncertainty and counter-signals;
- conditional language;
- omission when evidence is insufficient.

### Blocked

- symbol equals personality type;
- astrology-generated Big Five or HEXACO scores;
- unreviewed Clash equals conflict-style claims;
- LLM-created mappings;
- averaging contradictions into a false consensus;
- counting dependent BaZi modules as independent votes;
- deterministic relationship or marriage outcomes.

## 3. Organising layers

The product uses a simplified three-layer information architecture inspired by lifespan personality models, without claiming psychometric validity:

1. **Basic orientations** — relatively stable tendencies.
2. **Relationship strategies** — context-dependent patterns of interaction.
3. **Current phase** — time-bound activation and change context.

## 4. Relationship Ontology v1

### MVP-visible dimensions

- `COMMUNICATION_DIRECTNESS`
- `PROCESSING_TEMPO`
- `CLOSENESS_ORIENTATION`
- `AUTONOMY_ORIENTATION`
- `CONFLICT_APPROACH`
- `CONFLICT_WITHDRAWAL`
- `REPAIR_ORIENTATION`
- `MUTUAL_ACTIVATION`
- `EVERYDAY_COORDINATION`
- `CHANGE_AND_TIMING`

### Internal classifications

- `RESONANCE`
- `COMPLEMENTARITY`
- `ASYMMETRY`
- `FRICTION`
- `AMBIVALENCE`
- `CONTRADICTION`

## 5. Mapping rule contract

```json
{
  "ruleId": "MAP_BAZI_001",
  "version": "1.0.0",
  "status": "EXPERT_REVIEW_REQUIRED",
  "sourceSystem": "BAZI",
  "sourceFamily": "BAZI_FAMILY",
  "sourceScope": "PERSON",
  "requiredFeatures": [],
  "nativeMeaning": {
    "concept": "PLACEHOLDER",
    "sourceRefs": []
  },
  "targetSignals": [
    {
      "dimension": "COMMUNICATION_DIRECTNESS",
      "direction": "INCREASES",
      "strength": "MEDIUM"
    }
  ],
  "conditions": [],
  "counterSignals": [],
  "exclusionConditions": [],
  "confidence": {
    "sourceQuality": "LOW",
    "expertConsensus": "MISSING",
    "mappingConfidence": "LOW"
  },
  "allowedClaims": [
    "may indicate",
    "can become visible as",
    "suggests a possible tendency"
  ],
  "blockedClaims": [
    "proves",
    "always causes",
    "means the person is"
  ]
}
```

## 6. Native meaning requirement

A raw system feature cannot emit a neutral relationship signal directly.

Example:

```text
BaZi source feature
-> reviewed BaZi-native concept
-> possible communication signal
```

This intermediate layer preserves the native method and exposes where interpretation enters the pipeline.

## 7. Interaction rules

Individual signals are not pair dynamics. A pair dynamic requires an explicit interaction rule.

### Resonance

Both people show a similar orientation.

- opportunity: rapid mutual recognition;
- shadow: mutual amplification.

### Complementarity

The orientations differ and can perform different useful functions.

- opportunity: functional balance;
- shadow: polarisation or fixed roles.

### Asymmetry

One person repeatedly carries more of a relationship function.

- opportunity: efficient division of labour;
- shadow: dependency or overload.

### Friction

Two strategies block each other under specific conditions.

- opportunity: conscious negotiation;
- shadow: escalating interaction loop.

### Contradiction

Independent system families produce incompatible hypotheses.

- do not average;
- display both perspectives;
- increase context-dependence warning;
- invite observation rather than decision.

## 8. Shadow and opportunity resolver

Shadow and opportunity are not separate predictions. They are two conditional expressions of the same dynamic.

```text
core dynamic + constraining conditions -> possible shadow
core dynamic + enabling conditions -> possible opportunity
```

Every output must declare its conditions.

Example:

```text
Direct early dialogue + slower internal processing

Under high stress and no pause agreement:
  pressure-withdrawal loop

With an explicit pause and restart time:
  dialogue plus reflection
```

## 9. Evidence-family aggregation

The following form one dependency family:

- BaZi;
- Wu Xing;
- HeHun;
- Da Yun.

Internal family evidence can strengthen salience with a capped bonus. It cannot count as four independent confirmations.

Independent families are:

- `BAZI_FAMILY`
- `WESTERN_ASTROLOGY`
- `ZWDS`

`CROSS_SYSTEM_CONVERGENCE` requires at least two independent families with compatible direction and context.

## 10. Visibility rules

A dynamic is visible only when one of the following is true:

1. Direct pair evidence exists from a released pair engine.
2. Several reviewed, related rules within one family create strong internal evidence.
3. At least two independent families converge on the same neutral dimension.

A dynamic is omitted when:

- the signal is isolated and weak;
- the mapping rule is unreviewed;
- required birth data are missing;
- provenance is missing;
- contradictions cannot be explained;
- the hypothesis originates only from generative text.

## 11. LLM role

### The LLM may

- phrase approved dynamic JSON;
- explain technical terms;
- present Person A and Person B perspectives;
- formulate reflection questions;
- reduce repetition.

### The LLM may not

- invent or choose mapping rules;
- calculate weights;
- add evidence;
- estimate missing data;
- resolve contradictions;
- create compatibility scores;
- make deterministic claims.

## 12. Required workflow for a production rule

1. Define the native feature.
2. Record its calculation conditions.
3. Document native meaning and sources.
4. Document exclusions and counter-indicators.
5. Map to no more than two neutral dimensions.
6. Assign conservative direction and strength.
7. Add allowed and blocked claims.
8. Add shadow and opportunity examples.
9. Add a golden test fixture.
10. Complete domain expert review.
11. Version and release the rule.

## 13. Initial registry scope

Build Mapping Registry v1 only for:

1. communication and processing tempo;
2. closeness and autonomy;
3. conflict and repair.

Each system should contribute a small set of high-quality rule cards before the ontology expands.

## 14. Explicit research gap

The current research does not provide a sufficient ZWDS relationship mapping method. ZWDS pair rules remain `SOURCE_NEEDED` and must not be inferred from generic palace or star descriptions.
