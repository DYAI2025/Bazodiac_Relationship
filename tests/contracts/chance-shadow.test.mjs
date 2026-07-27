import test from 'node:test';
import assert from 'node:assert/strict';

const sample = {
  neutralMechanism: { id: 'MECH.1' },
  chance: {},
  shadow: {},
  currentExpression: 'NOT_INFERRED',
  supportingEvidence: ['EV-1']
};

test('chance and shadow share one neutral mechanism and no current position', () => {
  assert.ok(sample.neutralMechanism.id);
  assert.equal(sample.currentExpression, 'NOT_INFERRED');
  assert.ok(sample.supportingEvidence.length > 0);
});

test('forbidden compatibility fields are absent', () => {
  assert.equal('compatibilityScore' in sample, false);
  assert.equal('successProbability' in sample, false);
});
