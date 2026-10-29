import { createHash } from "node:crypto";
type Credential = { subject: string; claim: string; issuer: string };
const digest = (value: string) => createHash("sha256").update(value).digest("hex");
export function issue(c: Credential) { const payload = JSON.stringify(c); return { payload, proof: digest(payload + ":issuer-demo-key") }; }
export function verify(envelope: ReturnType<typeof issue>) { return digest(envelope.payload + ":issuer-demo-key") === envelope.proof; }
const credential = issue({ subject: "did:demo:alice", claim: "course-complete", issuer: "did:demo:academy" });
console.log({ credential, valid: verify(credential) });
