# UI and UX Decisions

## Status

Accepted product-design foundation, version 0.1.

## 1. Red thread

> The middle explains the interaction; the sides explain where it comes from.

The product is not two individual reports with a compatibility card attached. The relationship centre is the primary object.

## 2. Desktop composition

```text
Person A: 27%
Relationship centre: 46%
Person B: 27%
```

The centre remains visually dominant through scale, typography, contrast and interaction priority.

## 3. Mobile composition

Do not shrink the three-column layout.

Use this sequence:

1. shared dynamic;
2. Person A expression;
3. Person B expression;
4. shadow;
5. opportunity;
6. conditions and counter-hypothesis;
7. evidence.

## 4. Core page sections

1. Relationship snapshot.
2. Filterable dynamics Bento grid.
3. Person A and Person B source panels.
4. Evidence focus and drawer.
5. Convergence map.
6. Braided timing view.
7. Reflection cards.
8. Method and limitation explanation.

## 5. Dynamic card anatomy

Every card contains:

- dynamic title;
- classification;
- Person A expression;
- Person B expression;
- interaction mechanism;
- shadow;
- opportunity;
- enabling or constraining conditions;
- counter-hypothesis;
- evidence chips;
- optional reflection question.

## 6. Shadow and opportunity design

Shadow and opportunity are two expressions of one dynamic, not a moral split and not one person versus the other.

### Shadow visual language

- muted cinnabar or dark terracotta;
- broken diagonal line pattern;
- restrained contrast;
- explicit condition label.

### Opportunity visual language

- muted gold and warm ivory;
- concentric or resolving line pattern;
- explicit enabling-condition label.

Colour must never be the only differentiator.

## 7. Source panels

Person A and Person B use identical module structures:

- Overview;
- Western;
- BaZi;
- Wu Xing;
- ZWDS;
- Timing;
- Evidence.

This symmetry prevents one person from becoming the implicit norm.

## 8. Mutual Evidence Focus

Selecting a central dynamic:

1. focuses the card;
2. highlights related modules for both people;
3. draws one-time SVG connection lines;
4. opens the evidence drawer;
5. exposes source system, rule version and status.

The same information must remain available without animation.

## 9. Convergence map

Outer groups:

- BaZi family;
- Western astrology;
- Zi Wei Dou Shu.

Inner domains:

- communication;
- closeness;
- autonomy;
- activation;
- conflict;
- repair.

Line semantics:

- solid: strong supported signal;
- dashed: indirect or weak signal;
- double: independent-family convergence;
- split: contradiction.

The map must include an accessible textual equivalent.

## 10. Timing view

Keep separate lanes for:

- BaZi / Da Yun;
- western transits;
- ZWDS timing.

Do not mathematically merge the systems. Shared activation windows use a background band only.

## 11. Visual system

### Character

- editorial;
- calm;
- analytical;
- premium;
- culturally restrained;
- not a generic SaaS dashboard;
- not an occult horoscope portal.

### Suggested tokens

```css
--bg-deep: #080c18;
--bg-panel: #0e1525;
--bg-raised: #141c2f;
--text-primary: #f2eadc;
--text-secondary: #aeb6c6;
--line-subtle: rgba(242, 234, 220, 0.12);
--gold-muted: #c5a56a;
--cinnabar-muted: #a84f49;
--western-blue: #7185c8;
--jade-muted: #6f9388;
--focus: #f2d28b;
```

### Avoid

- permanent glow;
- generic purple AI gradients;
- ornamental pseudo-Chinese motifs;
- generated Hanzi;
- starfield kitsch;
- card overload;
- compatibility gauges;
- rotating charts.

## 12. Motion decisions

Motion serves explanation only.

### Allowed

- staged page entrance;
- one-time SVG line draw;
- restrained shadow/opportunity split reveal;
- Bento focus shift;
- accordion details.

### Blocked

- scroll jacking;
- continuous pulsing;
- uncontrolled particles;
- automatic chart rotation;
- flashing status;
- motion that hides content.

All effects require `prefers-reduced-motion` fallbacks.

## 13. Accessibility

- Semantic heading hierarchy.
- Real buttons, not clickable divs.
- Visible keyboard focus.
- Minimum 44x44 touch targets.
- No colour-only meaning.
- Accessible dialog and focus return.
- Screen-reader alternative for the convergence map.
- Immediate static content when motion is reduced.

## 14. Content tone

Use:

- “can become visible as”;
- “under these conditions”;
- “one possible expression”;
- “the systems provide different perspectives”;
- “observe whether this fits your experience”.

Avoid:

- “you are”;
- “this relationship will”;
- “perfect match”;
- “toxic pairing”;
- “destined marriage”;
- “failure risk percentage”.

## 15. MVP design test

The first prototype tests only:

- communication and processing tempo;
- closeness and autonomy;
- conflict and repair.

Success means users understand the dynamic, both perspectives, shadow, opportunity and evidence within five minutes.
