# Relationship Report Contract

## Status

Draft API contract, version 0.1.

## 1. Browser endpoints

```http
POST   /api/relationship/reports
GET    /api/relationship/reports/{reportId}
GET    /api/relationship/reports/{reportId}/themes
GET    /api/relationship/reports/{reportId}/themes/{themeId}
GET    /api/relationship/reports/{reportId}/themes/{themeId}/evidence
POST   /api/relationship/reports/{reportId}/interpret
POST   /api/relationship/reports/{reportId}/pdf
DELETE /api/relationship/reports/{reportId}
```

## 2. Create-report request

```json
{
  "schemaVersion": "bazodiac.relationship-input.v1",
  "persons": {
    "a": {
      "displayLabel": "Person A",
      "birth": {
        "datetimeLocal": "1990-05-12T09:15:00",
        "timezone": "Europe/Berlin",
        "location": {
          "lat": 48.137,
          "lon": 11.575,
          "displayName": "Munich, Germany",
          "confirmed": true
        },
        "birthTimeKnown": true
      }
    },
    "b": {
      "displayLabel": "Person B",
      "birth": {
        "datetimeLocal": "1988-11-23T16:45:00",
        "timezone": "Europe/Zurich",
        "location": {
          "lat": 47.376,
          "lon": 8.541,
          "displayName": "Zurich, Switzerland",
          "confirmed": true
        },
        "birthTimeKnown": true
      }
    }
  },
  "consent": {
    "secondPersonConsentConfirmed": true,
    "consentTextVersion": "relationship-consent-v1"
  },
  "systems": {
    "baziHehun": true,
    "westernSynastry": true,
    "zwds": false,
    "dayun": false,
    "westernTransits": false
  },
  "presentation": {
    "locale": "de-DE",
    "scriptPolicy": "CN_SIMPLIFIED"
  }
}
```

## 3. Report response

```json
{
  "schemaVersion": "bazodiac.relationship-report.v1",
  "reportId": "rel_123",
  "status": "PARTIAL",
  "createdAt": "2026-07-17T18:00:00Z",
  "persons": {
    "a": {
      "subjectId": "sub_a",
      "displayLabel": "Person A",
      "dataQuality": {}
    },
    "b": {
      "subjectId": "sub_b",
      "displayLabel": "Person B",
      "dataQuality": {}
    }
  },
  "moduleStatus": [],
  "individualProfiles": {},
  "relationshipDynamics": [],
  "timing": {},
  "evidenceIndex": {},
  "versions": {
    "bff": "0.1.0",
    "ontology": "relationship-ontology.v1",
    "mappingRegistry": "mapping-registry.v1"
  }
}
```

## 4. Relationship dynamic

```json
{
  "id": "REL_DYNAMIC_001",
  "domain": "CONFLICT_PROCESSING",
  "classification": "COMPLEMENTARITY_WITH_FRICTION",
  "title": "Different processing tempo",
  "corePattern": {
    "summary": "One person seeks early dialogue while the other first needs internal processing.",
    "evidenceIds": ["EV_A_12", "EV_B_07", "PAIR_03"]
  },
  "personA": {
    "summary": "Seeks visible clarification early.",
    "signalIds": ["SIG_A_03"]
  },
  "personB": {
    "summary": "Needs distance and internal clarity first.",
    "signalIds": ["SIG_B_09"]
  },
  "interaction": {
    "mechanism": "Early pressure can increase withdrawal; unbounded withdrawal can increase contact anxiety.",
    "triggerIds": ["HIGH_STRESS", "TIME_PRESSURE"]
  },
  "shadow": {
    "conditions": ["NO_PAUSE_AGREEMENT"],
    "possibleExpression": "PRESSURE_WITHDRAWAL_LOOP"
  },
  "opportunity": {
    "conditions": ["DEFINED_RESTART_TIME"],
    "possibleExpression": "DIALOGUE_PLUS_REFLECTION"
  },
  "counterHypothesis": {
    "summary": "The pattern may be situational or changed by learned communication."
  },
  "systemSupport": {
    "baziFamily": "STRONG",
    "western": "MEDIUM",
    "zwds": "NOT_AVAILABLE",
    "timing": "INACTIVE"
  },
  "quality": {
    "dataCompleteness": "HIGH",
    "sourceConfidence": "REVIEWED",
    "mappingConfidence": "MEDIUM"
  },
  "status": "VISIBLE"
}
```

## 5. Module status

```json
{
  "module": "WESTERN_SYNASTRY",
  "status": "PROVIDER_ERROR",
  "reasonCode": "UPSTREAM_TIMEOUT",
  "retryable": true
}
```

Allowed status values:

- `COMPLETE`
- `PARTIAL`
- `MISSING_INPUT`
- `SOURCE_NEEDED`
- `PROVIDER_ERROR`
- `BLOCKED`

## 6. Error envelope

```json
{
  "error": {
    "code": "WESTERN_SYNASTRY_PROVIDER_TIMEOUT",
    "message": "The western relationship calculation is currently unavailable.",
    "requestId": "req_123",
    "retryable": true,
    "affectedModule": "WESTERN_SYNASTRY"
  }
}
```

## 7. Contract rules

- No claim without evidence IDs.
- No cross-system label when only one independent family completed.
- Missing birth time disables time-dependent fields rather than estimating them.
- No raw provider secrets or internal errors in client responses.
- No compatibility percentage.
- No deterministic marriage or separation claim.
- No ZWDS pair output before its mapping status is released.

## 8. Idempotency and retention

- `POST /reports` should accept an idempotency key.
- Report retention must be explicit and configurable.
- Deletion must remove report state, caches and generated derivatives.

## 9. Observability headers

Recommended:

```text
X-Request-Id
X-Report-Id
X-Contract-Version
```

## 10. Required contract tests

- valid complete request;
- consent missing;
- unconfirmed location;
- unknown birth time;
- one provider timeout;
- invalid provider schema;
- missing evidence reference;
- cross-system claim with one family only;
- deletion propagation;
- narrative output with blocked deterministic claim.
