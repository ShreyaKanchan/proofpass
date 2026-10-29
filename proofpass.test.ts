import { strict as assert } from "node:assert";
import { issue, verify } from "./proofpass";

const credential = issue({ subject: "did:demo:test", claim: "member", issuer: "did:demo:issuer" });
assert.equal(verify(credential), true);
assert.equal(verify({ ...credential, payload: credential.payload.replace("member", "admin") }), false);
console.log("ProofPass tests passed");
