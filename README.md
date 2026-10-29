# ProofPass

TypeScript model for issuing and verifying signed credential envelopes without putting personal data on-chain.

```bash
npx tsx proofpass.ts
```

The demo uses a deterministic hash as a stand-in for a signature; production credentials need standards such as W3C VC and audited signing libraries.

## Privacy model

Only a credential envelope and proof are modeled here. A real implementation should minimize personally identifiable information, support selective disclosure, rotate issuer keys, publish verification methods, and define revocation or status-list behavior.

## Verification flow

The verifier receives an issuer-signed payload, resolves the issuer verification method, checks the proof, validates schema and expiry, and then applies application-specific trust policy. This prototype isolates that flow without claiming standards compliance.
