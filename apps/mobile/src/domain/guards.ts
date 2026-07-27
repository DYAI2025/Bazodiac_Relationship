import type { RelationshipAnalysisDossier } from './types';

export function assertSafeDossier(value: RelationshipAnalysisDossier): RelationshipAnalysisDossier {
  for (const dynamic of value.relationshipDynamics) {
    if (dynamic.currentExpression !== 'NOT_INFERRED') throw new Error('Current-axis position is forbidden');
    if (dynamic.dataQuality < 0 || dynamic.dataQuality > 1) throw new Error('Invalid data quality');
    if (dynamic.derivationConfidence < 0 || dynamic.derivationConfidence > 1) throw new Error('Invalid derivation confidence');
  }
  return value;
}
