// ============================================
// API Route: /api/lab/auth — Admin Session
// ============================================
// POST: verify passphrase, issue session cookie
// DELETE: clear session cookie (logout)

import { NextRequest, NextResponse } from "next/server";
import {
  COOKIE_NAME,
  SESSION_MAX_AGE_S,
  createSessionToken,
} from "@/lib/lab-auth";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const RATE_LIMIT = { maxRequests: 5, windowMs: 15 * 60_000 }; // 5 per 15 min

export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip = getClientIp(req);
  const rl = checkRateLimit(ip, RATE_LIMIT);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many attempts. Try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil(rl.resetMs / 1000)) },
      }
    );
  }

  const body = await req.json().catch(() => ({}));
  const { passphrase } = body as { passphrase?: string };

  const expected = process.env.ADMIN_PASSPHRASE;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!expected || !secret) {
    return NextResponse.json({ error: "Not configured." }, { status: 503 });
  }

  if (!passphrase || passphrase !== expected) {
    return NextResponse.json({ error: "Incorrect passphrase." }, { status: 401 });
  }

  const token = await createSessionToken(secret);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: SESSION_MAX_AGE_S,
    path: "/",
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
  return res;
}
