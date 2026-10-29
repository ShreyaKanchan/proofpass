import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
test("credential payload hashes change when claims change", () => { const hash = value => createHash("sha256").update(value).digest("hex"); assert.notEqual(hash('{"claim":"member"}'), hash('{"claim":"admin"}')); });
