import test from 'node:test';
import assert from 'node:assert/strict';
import { issueCredential, verifyCredential } from '../src/credential.js';

test('issues and verifies a credential under a policy', () => {
  const credential = issueCredential({ subject: 'alice', issuer: 'issuer-1', claims: { degree: 'CS' }, issuedAt: 1 });
  assert.equal(verifyCredential(credential, { issuers: ['issuer-1'], requiredClaims: ['degree'] }), true);
});

test('rejects revoked or unauthorized credentials', () => {
  const credential = issueCredential({ subject: 'alice', issuer: 'issuer-1', claims: {}, issuedAt: 1 });
  credential.status = 'revoked';
  assert.equal(verifyCredential(credential, { issuers: ['issuer-2'] }), false);
});
