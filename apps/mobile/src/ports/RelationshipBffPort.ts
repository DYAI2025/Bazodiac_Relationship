import type { RelationshipAnalysisDossier } from '../domain/types';

export interface RelationshipBffPort {
  getDossier(analysisId: string): Promise<RelationshipAnalysisDossier>;
}
