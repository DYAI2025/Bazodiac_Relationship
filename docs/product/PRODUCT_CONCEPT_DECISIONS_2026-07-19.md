# Bazodiac Relationships — Product Concept Decisions

Status: `PARTIALLY_DEFINED`
Date: 2026-07-19
Jira: `BAZ-5`, `BAZ-55`
Branch: `feature/BAZ-55-react-landing-foundation`

## 1. Product definition

Bazodiac Relationships is a paid, account-based web application that processes real birth data for two people and presents structured relationship-reflection results based on released provider calculations and reviewed interpretation rules.

The product is intended to provide:

- an explanatory public landing page;
- account registration and login;
- entry of two persons' birth data;
- transparent presentation of calculation sources and methods;
- an interactive web report;
- a multi-page PDF export;
- optional handoff to Etsy/Sizhu and Product Factory/Sizhu for personalized products.

The product must not output a single compatibility score, diagnosis, deterministic personality judgment, or prediction of relationship success or failure.

## 2. Public landing page purpose

The public landing page must:

1. explain the product in accessible language;
2. establish trust through methodological transparency;
3. show a clearly labelled sample report;
4. explain that results are perspectives for reflection rather than verdicts;
5. lead users to account creation, login, report purchase, and report creation.

The public website ends at registration or login. The authenticated application begins after successful authentication.

## 3. Primary user action and account model

The primary public action is account creation followed by creation of the first relationship report.

Recommended product flow:

```text
Landing page
→ Create account or log in
→ Start relationship report
→ Enter Person A
→ Enter Person B
→ Configure report
→ Purchase
→ Calculate
→ View interactive report
→ Export PDF
→ Optional product handoff
```

A technical user account may own multiple relationship reports. “Relationship account” may be used as user-facing language, but the underlying account should not be limited to one relationship.

## 4. Target audience

Primary market hypothesis:

- adults, initially focused on approximately 18–35 years;
- interested in relationships, self-reflection, and systemic patterns;
- open to archetypal or symbolic perspectives;
- not necessarily strongly esoteric;
- seeking deeper reflection rather than proof, ranking, or a score.

Typical situations include curiosity, uncertainty, recurring conflict, closeness/autonomy questions, separation anxiety, hope, and confirmation seeking.

The age range is a market hypothesis and requires validation through interviews, comprehension tests, conversion data, and observed purchase behaviour.

## 5. Intended user outcome

The product should help users develop a multiperspective language for possible interaction patterns.

Each approved relationship dynamic should contain:

1. Core Dynamic
2. Person A Perspective
3. Person B Perspective
4. Possible Shadow
5. Possible Opportunity
6. Intensifying Conditions
7. Moderating Conditions
8. Counter-Hypothesis
9. Reflection Questions
10. Evidence and Provenance

All relationship-level claims must remain conditional and should be compared with lived experience.

## 6. Product language boundary

Allowed pattern:

> Under certain conditions, this difference may become visible as…

> One possible expression of this interaction could be…

> You may want to compare this hypothesis with situations in which…

Blocked pattern:

- fixed personality labels;
- blame assigned to one person;
- diagnosis;
- fate or outcome prediction;
- relationship success probability;
- “toxic pairing”, “perfect match”, or equivalent verdict language.

## 7. MVP conflict and release options

A product sold as a pair-matching or relationship-dynamics analysis requires an explicit pair-mapping layer.

If Release 1 only displays separate native outputs for Person A and Person B, it is not yet a complete relationship analysis.

Two release options remain:

### Option A — Two-Person Source Atlas

Includes separate provider results for both people and direct provider pair outputs where contractually available. It does not claim a synthesized relationship dynamic.

### Option B — Relationship MVP

Includes at least one reviewed and versioned relationship-dynamic family with:

- explicit pair mapping;
- conditions and exclusions;
- counter-signals;
- Evidence IDs;
- shadow and opportunity;
- reflection questions;
- abstention when evidence is insufficient.

Current recommendation: Option B is the smallest release that fully supports the Bazodiac Relationships product promise. Option A may be used as an earlier technical or paid preview only if it is marketed honestly as a two-person source atlas.

## 8. Data model: sex, gender, orientation, relationship context

These dimensions must not be collapsed into one field.

### Calculation sex

May be collected only when a released provider contract or traditional calculation requires it. The UI must explain the technical purpose.

### Gender identity

Optional and only justified by a real product need, such as preferred language.

### Sexual orientation

Out of scope for the MVP unless a specific, reviewed product purpose is established. If the calculation is identical regardless of orientation, the field should not be collected.

### Relationship configuration

A separate optional field may support report language, for example:

- romantic partners;
- dating;
- former partners;
- friendship;
- family;
- other.

Relationship configuration must not silently alter calculation logic.

## 9. Person B data and consent decision

Desired product mode: one account holder may enter both persons' birth data without requiring Person B to create an account.

This is a product decision, not yet a confirmed legal basis.

Required safeguards and open decisions:

- legal basis for processing Person B data;
- data minimization;
- pseudonym or initials instead of full legal name;
- no public sharing by default;
- clear account-holder responsibility statement;
- retention and deletion rules;
- legal and privacy review before production.

Potential future modes:

- Private Reflection Mode: one account holder, no Person B access;
- Shared Relationship Mode: invited Person B, shared access, explicit visibility and withdrawal rules.

Status: `LEGAL_REVIEW_REQUIRED`.

## 10. Questionnaire as an independent evidence source

A future questionnaire may capture self-report and observed relationship behaviour. It must not be designed to confirm astrological outputs.

Evidence classes remain separate:

```text
Calculated feature
Traditional interpretation
User self-report
Partner observation
Product mapping
```

All classes may map into a shared neutral relationship ontology, but provenance must remain visible. Agreement, disagreement, and missing evidence must not be averaged into false certainty.

Example neutral signals:

- COMMUNICATION_TEMPO
- NEED_FOR_AUTONOMY
- CONFLICT_ESCALATION
- REPAIR_INITIATION
- EMOTIONAL_EXPRESSION
- DECISION_STYLE

A contradiction between calculated interpretation and self-report should remain visible rather than being resolved by the LLM.

## 11. Reflection framework

The product may adapt a RAIN-like process, but it must not misrepresent an established external method.

Preferred product sequence:

- Recognize the interaction;
- Allow the present experience without treating it as fixed;
- Investigate triggers, conditions, exceptions, and needs;
- Non-identify: treat the pattern as something occurring between the people, not as either person's identity.

A product-specific adaptation should be named and documented as such.

## 12. System scope and evidence boundaries

The system must keep these layers separate:

1. native calculation;
2. provider contract;
3. normalized feature;
4. reviewed native meaning;
5. neutral relationship signal;
6. explicit pair interaction rule;
7. dependency-family aggregation;
8. contradiction, visibility, and abstention;
9. approved structured dynamic;
10. optional controlled narrative.

BaZi, Wu Xing derived from BaZi, HeHun, and Da Yun are one dependent evidence family and must not be counted as four independent confirmations.

Western natal data are not pair evidence without a defined synastry contract.

ZWDS pair mapping remains `SOURCE_NEEDED` until a reviewed methodology, corpus, counter-signals, and fixtures exist.

## 13. Languages and cultural presentation

Initial product languages:

- English;
- German.

Chinese technical terms may include original Simplified Chinese characters where appropriate. Hanzi must be accurate and must not be decorative pseudo-Chinese text.

## 14. Current MVP scope

### Included target scope

- public English and German landing experience;
- registration and login;
- paid report creation flow;
- Person A and Person B data capture;
- date, place, timezone, and known/unknown birth time;
- only provider-required calculation-sex input;
- released provider integration;
- separate native source views;
- at least one reviewed relationship-dynamic family;
- interactive web report;
- PDF export;
- labelled sample report;
- shadow, opportunity, conditions, counter-hypothesis, and reflection questions;
- evidence and provenance view;
- report deletion;
- optional product-shop handoff.

### Explicitly out of scope until separately approved

- one overall compatibility score;
- deterministic or diagnostic claims;
- ZWDS pair dynamics without reviewed pair methodology;
- collection of sexual orientation without a necessary product purpose;
- questionnaire results treated as proof of astrology;
- automatic public report links;
- production counselling or therapy claims;
- production release without privacy, security, and legal review.

## 15. Open product decisions

### Account and ownership

- Can one account own multiple reports? Recommended: yes.
- Is Person A always the account holder?
- Can a private report become a shared report?
- Who may delete a shared report?

### Commerce

- When does payment occur?
- One-time purchase or subscription?
- How are partial or failed reports handled?
- Refund, retry, or credit policy?

### Data lifecycle

- Retention duration for birth data and reports?
- Raw-data export?
- PDF availability after web-report deletion?
- Recalculation under new mapping versions?

### Provider and mapping scope

- Which FuFirE endpoints are Release 1 authority?
- Which Western synastry contract is released?
- Which HeHun outputs qualify as direct pair evidence?
- Which relationship-dynamic family is implemented first?

### Questionnaire

- One respondent or both?
- Shared or private answers?
- Editable answers?
- Compare self-report, partner observation, and calculated interpretation?

### Safety boundary

- Product behaviour when users report violence, coercion, or fear?
- Which advice is blocked in those contexts?
- Which external support language is required?

## 16. Release gates

| Surface | Current decision |
|---|---|
| Product concept | `PARTIALLY_DEFINED` |
| Landing-page purpose | `DEFINED` |
| Target audience | `HYPOTHESIS_REQUIRES_VALIDATION` |
| Account boundary | `PARTIALLY_DEFINED` |
| Two-person native source report | `PLANNABLE` |
| Pair-matching report without mapping | `BLOCKED` |
| First reviewed dynamic family | `MISSING` |
| Questionnaire | `RESEARCH_HYPOTHESIS` |
| Person B legal basis | `LEGAL_REVIEW_REQUIRED` |
| ZWDS pair mapping | `SOURCE_NEEDED` |
| Public pilot | `BLOCKED` |
| Production | `BLOCKED` |

## 17. Next smallest valuable decision

Select whether the first paid release is:

1. an honestly labelled Two-Person Source Atlas; or
2. a Relationship MVP containing one fully reviewed relationship-dynamic family.

Recommended decision: build the Relationship MVP around one narrow dynamic family, while keeping all other provider outputs as separate source views until their pair mappings are reviewed.
