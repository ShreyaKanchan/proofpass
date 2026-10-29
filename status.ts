export type CredentialStatus = "active" | "revoked" | "expired";
export function isUsable(status: CredentialStatus, expiresAt: number, now = Date.now()) { return status === "active" && expiresAt > now; }
