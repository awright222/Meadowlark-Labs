// ============================================
// API Route: /api/contact — Send Contact Form
// ============================================
// POST endpoint that forwards inquiries via Resend.
// Rate-limited to 3 submissions per IP per minute.

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const RATE_LIMIT = { maxRequests: 3, windowMs: 60_000 };
const TO_EMAIL = "alex@meadowlark-labs.com";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    // ── Rate limit ──────────────────────────────
    const clientIp = getClientIp(request);
    const rl = checkRateLimit(clientIp, RATE_LIMIT);
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
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    // ── Validate ────────────────────────────────
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    if (message.length > 3000) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    const safeName = name.trim().slice(0, 100);
    const safeEmail = email.trim().slice(0, 200);
    const safeMessage = message.trim();

    // ── Send email ──────────────────────────────
    const { error } = await getResend().emails.send({
      from: "Meadowlark Labs <alex@meadowlark-labs.com>",
      replyTo: safeEmail,
      to: TO_EMAIL,
      subject: `New inquiry from ${safeName}`,
      text: [
        `From: ${safeName} <${safeEmail}>`,
        "",
        safeMessage,
        "",
        "---",
        `IP: ${clientIp}`,
        `Timestamp: ${new Date().toISOString()}`,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
