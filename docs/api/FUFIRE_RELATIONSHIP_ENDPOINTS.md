# Required FuFirE relationship endpoints

## Calculation endpoints
- `POST /v1/geocode` - resolve place and IANA timezone.
- `POST /v1/chronometry/resolve` - data-quality and time-policy evidence.
- `POST /v1/calculate/western` x2 - individual western snapshots.
- existing BaZi/Wu-Xing/HeHun endpoints - individual and pair-native evidence.
- `POST /v1/relationship/synastry` - directed cross-aspects, overlays, axes and evidence records.
- `POST /v1/relationship/composite` - optional Signature/Keepsake composite module.
- `POST /v1/relationship/transits` - optional Keepsake activation windows, never outcome forecasts.

## Chance & Shadow-specific endpoint
### `POST /v1/relationship/dynamics/evaluate`
This endpoint is required because raw aspects and HeHun interactions do not themselves define a safe shared relationship dynamic.

Request fields:
- `dossier_fingerprint`;
- `normalized_signals[]` with source family, evidence IDs, exactness, data quality and direction;
- `ruleset_id` and version/hash;
- optional released `dynamic_family_allowlist`;
- `locale` only for labels, never calculation.

Algorithm:
1. validate evidence references and allowed features;
2. deduplicate aliases and dependent families;
3. calculate each contribution `w=clip(exactness*data_quality*mapping_relevance*layer_coefficient*salience,0,1)`;
4. aggregate support and counterevidence separately using bounded Noisy-OR;
5. evaluate quality, diversity, exclusions and minimum gates;
6. emit or abstain;
7. bind Chance and Shadow to the same neutral mechanism;
8. produce deterministic versioned output.

Response fields:
- `dynamic_id`, `neutral_mechanism_id` and description key;
- `chance` and `shadow` structured content keys;
- `supporting_evidence_ids`, `counter_evidence_ids`, moderators;
- `support_strength`, `counter_strength`, `data_quality`, `derivation_confidence`;
- `status`, `discard_reasons`, limitations;
- rule/mapping/provider versions and hashes;
- `current_expression: NOT_INFERRED`.

## Orchestration endpoints
Recommended public BFF surface:
- `POST /v1/relationship/analyses`
- `GET /v1/relationship/analyses/{analysis_id}`
- `GET /v1/relationship/analyses/{analysis_id}/dossier`
- `POST /v1/relationship/analyses/{analysis_id}/resonance`
- `DELETE /v1/relationship/analyses/{analysis_id}`

Clients must not call private FuFirE providers directly.
