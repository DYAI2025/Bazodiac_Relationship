export type ModuleStatus = 'complete' | 'partial' | 'unavailable' | 'blocked' | 'failed' | 'not_requested';
export type DynamicStatus = 'visible' | 'abstained' | 'review_required';
export type DataMode = 'DEMO_DATA' | 'LIVE_DATA';

export interface RelationshipDynamic {
  dynamicId: string;
  title: string;
  domain: string;
  neutralMechanism: { id: string; description: string };
  chance: { description: string };
  shadow: { description: string };
  currentExpression: 'NOT_INFERRED';
  supportingEvidence: string[];
  counterEvidence: string[];
  dataQuality: number;
  derivationConfidence: number;
  status: DynamicStatus;
}

export interface RelationshipAnalysisDossier {
  schemaVersion: string;
  analysisId: string;
  dataMode: DataMode;
  moduleStatus: Record<string, ModuleStatus>;
  relationshipDynamics: RelationshipDynamic[];
  warnings: string[];
  versionManifest: Record<string, string>;
}
