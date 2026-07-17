# Click-Dummy Specification

## Objective

Build a locally runnable HTML prototype that demonstrates the Bazodiac Relationship information architecture before live calculation or BFF integration.

## Deliverables

```text
prototype/
  index.html
  styles.css
  app.js
  README.md
```

No build step, external API, secret or real astrology calculation is required.

## Demo model

Use clearly labelled fictional data for two people:

- Person A: faster external processing and early dialogue orientation;
- Person B: slower internal processing and initial distance orientation.

Every source module must display `DEMO`, `MOCK_DATA` or `NOT_CALCULATED`.

## Primary layout

Desktop:

```text
Person A 27% | Relationship centre 46% | Person B 27%
```

Mobile:

```text
Shared pattern -> A -> B -> Shadow -> Opportunity -> Evidence
```

## Required sections

1. Fixed header and Demo status.
2. Relationship snapshot.
3. Filter chips for resonance, complementarity, friction, ambivalence and contradiction.
4. At least five dynamics cards.
5. Symmetrical person panels.
6. Shadow and opportunity split.
7. Evidence drawer.
8. Convergence map.
9. Braided timing illustration.
10. Reflection accordions.
11. “How to read this report” dialog.

## Required interactions

- section navigation;
- active navigation state;
- dynamic filtering;
- dynamic selection;
- related source-module highlighting;
- SVG connection lines;
- evidence drawer;
- expandable mock JSON;
- modal focus trapping and Escape behaviour;
- reflection accordions;
- mobile navigation;
- tooltips;
- reduced-motion behaviour.

## Core sample dynamic

### Different processing tempo

**Person A:** seeks early dialogue and visible clarification.

**Person B:** first needs internal processing and temporal distance.

**Interaction:** pressure for immediate clarification can increase withdrawal; unbounded withdrawal can increase the experience of contact loss.

**Shadow:** pressure-withdrawal loop under high stress, time pressure and missing pause agreements.

**Opportunity:** dialogue plus reflection when distance and restart time are explicitly agreed.

**Counter-hypothesis:** the pattern may be situational, learned or absent in structured low-stress contexts.

## Visual direction

- deep ink navy background;
- warm ivory typography;
- muted cinnabar for shadow;
- muted gold for opportunity;
- western blue and restrained jade for source-family accents;
- editorial typography;
- thin borders;
- asymmetrical Bento grid;
- no mystical background imagery;
- no generated Chinese text;
- no compatibility gauge.

## Motion

Allowed:

- staged entrance;
- one-time line draw;
- restrained card focus transition;
- shadow/opportunity reveal.

Blocked:

- continuous pulsing;
- particles over content;
- rotating charts;
- scroll jacking;
- inaccessible hidden states.

## Mock data contract

```js
const relationshipReport = {
  schemaVersion: "bazodiac.relationship-report.v1",
  reportId: "demo-report-001",
  status: "DEMO",
  persons: { a: {}, b: {} },
  individualSystems: {},
  relationshipDynamics: [],
  timing: {},
  evidence: {},
  moduleStatus: []
};
```

Future adapter:

```js
async function loadRelationshipReport(reportId) {
  return relationshipReport;
}
```

The future implementation replaces only this boundary with a BFF call.

## Acceptance criteria

- Opens by double-clicking `index.html`.
- No console errors.
- All visible controls work.
- The centre is visibly dominant.
- Person A and Person B are symmetrical.
- Shadow and opportunity are conditional, not moral labels.
- Evidence is inspectable.
- Mock data cannot be mistaken for calculated data.
- No compatibility percentage or deterministic statement appears.
- Desktop, tablet and mobile layouts work.
- Keyboard and reduced-motion paths work.
