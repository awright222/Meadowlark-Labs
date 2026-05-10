// =============================================
// Lab auth — edge-compatible cookie utilities
// Uses Web Crypto API (works in Edge + Node.js)
// =============================================

export const COOKIE_NAME = "_lab";
export const SESSION_MAX_AGE_S = 60 * 60 * 12; // 12 hours

const enc = new TextEncoder();

async function getKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function bufToB64url(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function b64urlToBuf(s: string): ArrayBuffer {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
}

export async function createSessionToken(secret: string): Promise<string> {
  const ts = Date.now().toString();
  const key = await getKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(ts));
  return `${ts}.${bufToB64url(sig)}`;
}

export async function verifySessionToken(
  token: string,
  secret: string
): Promise<boolean> {
  try {
    const dot = token.lastIndexOf(".");
    if (dot < 0) return false;
    const ts = token.slice(0, dot);
    const sigB64 = token.slice(dot + 1);
    const age = Date.now() - parseInt(ts, 10);
    if (isNaN(age) || age < 0 || age > SESSION_MAX_AGE_S * 1000) return false;
    const key = await getKey(secret);
    return await crypto.subtle.verify(
      "HMAC",
      key,
      b64urlToBuf(sigB64),
      enc.encode(ts)
    );
  } catch {
    return false;
  }
}
