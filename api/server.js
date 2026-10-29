import http from "node:http";
const server = http.createServer((_, response) => { response.setHeader("content-type", "application/json"); response.end(JSON.stringify({ service: "proofpass-verifier", standards: ["W3C VC"], status: "demo" })); });
server.listen(8791, () => console.log("ProofPass API listening on :8791"));
