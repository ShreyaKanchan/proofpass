export function issueCredential({ subject, claims, issuer, issuedAt = Date.now() }) {
  if (!subject || !issuer || !claims) throw new Error('subject, issuer, and claims are required');
  return { id: `cred_${issuedAt}_${subject}`, subject, issuer, claims, issuedAt, status: 'active' };
}

export function verifyCredential(credential, policy = {}) {
  const issuerAllowed = !policy.issuers || policy.issuers.includes(credential.issuer);
  const requiredClaims = (policy.requiredClaims ?? []).every((claim) => claim in credential.claims);
  return credential.status === 'active' && issuerAllowed && requiredClaims;
}
