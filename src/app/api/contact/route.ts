// ============================================
// API Route: /api/contact — Send Contact Form
// ============================================
// POST endpoint that forwards inquiries via Resend.
// Best-effort rate limit: 3 submissions per IP per minute (see src/lib/rate-limit.ts).

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const RATE_LIMIT = { maxRequests: 3, windowMs: 60_000 };
const TO_EMAIL = "alex@meadowlark-labs.com";
const MAX_NAME = 100;
const MAX_EMAIL = 200;
// RFC 5321 limit; longer local parts are rejected by Resend with a 422.
const MAX_EMAIL_LOCAL_PART = 64;
const MAX_MESSAGE = 3000;

// C0/C1 control characters plus Unicode line/paragraph separators.
const CONTROL_CHARS = /[\u0000-\u001F\u007F-\u009F\u2028\u2029]/g;
// Non-global twin for .test(): a shared /g regex keeps lastIndex between calls.
const HAS_CONTROL_CHARS = /[\u0000-\u001F\u007F-\u009F\u2028\u2029]/;
// Same, but keeps tab, line feed and carriage return for the message body.
const BODY_CONTROL_CHARS =
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F\u2028\u2029]/g;

function singleLine(value: string) {
  return value.replace(CONTROL_CHARS, " ").replace(/\s+/g, " ").trim();
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    // ── Rate limit ──────────────────────────────
    const rl = checkRateLimit(getClientIp(request), RATE_LIMIT);
    if (!rl.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil(rl.resetMs / 1000)) },
        }
      );
    }

    // ── Parse body ──────────────────────────────
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return badRequest("Invalid request.");
    }
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return badRequest("Invalid request.");
    }
    const { name, email, message, org_notes } = body as Record<string, unknown>;

    // ── Honeypot ────────────────────────────────
    // Real visitors never see or fill this field. Reply as if it worked so bots
    // get no signal, but send nothing.
    if (typeof org_notes === "string" && org_notes.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    // ── Validate ────────────────────────────────
    const safeName =
      typeof name === "string" ? singleLine(name).slice(0, MAX_NAME) : "";
    if (!safeName) return badRequest("Name is required.");

    const safeEmail = typeof email === "string" ? email.trim() : "";
    if (
      safeEmail.length > MAX_EMAIL ||
      safeEmail.indexOf("@") > MAX_EMAIL_LOCAL_PART ||
      HAS_CONTROL_CHARS.test(safeEmail) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)
    ) {
      return badRequest("A valid email is required.");
    }

    if (typeof message !== "string" || message.trim().length === 0) {
      return badRequest("Message is required.");
    }
    if (message.length > MAX_MESSAGE) return badRequest("Message is too long.");
    const safeMessage = message.replace(BODY_CONTROL_CHARS, "").trim();
    if (!safeMessage) return badRequest("Message is required.");

    // ── Send email ──────────────────────────────
    const { error } = await getResend().emails.send({
      from: "Meadowlark Labs <alex@dealforgehq.com>",
      replyTo: safeEmail,
      to: TO_EMAIL,
      subject: `New inquiry from ${safeName}`,
      text: [
        `From: ${safeName} <${safeEmail}>`,
        "",
        safeMessage,
        "",
        "---",
        `Timestamp: ${new Date().toISOString()}`,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error.name, error.message);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(
      "[contact] Unexpected error:",
      err instanceof Error ? err.name : "unknown"
    );
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
