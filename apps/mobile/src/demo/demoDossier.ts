import { assertSafeDossier } from '../domain/guards';
import type { RelationshipAnalysisDossier } from '../domain/types';

export const demoDossier = assertSafeDossier({
  schemaVersion: '0.1.0-demo',
  analysisId: 'demo-relationship',
  dataMode: 'DEMO_DATA',
  moduleStatus: { baziHehun: 'partial', westernSynastry: 'partial', composite: 'not_requested' },
  relationshipDynamics: [{
    dynamicId: 'communication-processing-tempo',
    title: 'Unterschiedliches Verarbeitungstempo',
    domain: 'communication',
    neutralMechanism: {
      id: 'MECH.DIFFERENT_PROCESSING_TEMPO',
      description: 'Zwischen euch kann ein unterschiedliches Tempo entstehen, in dem Erfahrungen verarbeitet und angesprochen werden.'
    },
    chance: { description: 'Unterschiedliche Tempi können frühe Impulse und vertiefte Reflexion miteinander verbinden.' },
    shadow: { description: 'Dasselbe Muster kann als Druck auf der einen und Rückzug auf der anderen Seite erlebt werden.' },
    currentExpression: 'NOT_INFERRED',
    supportingEvidence: ['DEMO-EV-001', 'DEMO-EV-002'],
    counterEvidence: ['DEMO-EV-003'],
    dataQuality: 0.8,
    derivationConfidence: 0.7,
    status: 'visible'
  }],
  warnings: ['Demo fixture only; no birth data was processed.'],
  versionManifest: { dossier: '0.1.0-demo', mapping: '0.1.0-demo', dynamicPolarity: '0.1.0-demo' }
} satisfies RelationshipAnalysisDossier);
