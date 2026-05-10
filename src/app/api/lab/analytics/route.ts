// ============================================
// API Route: /api/lab/analytics — Vercel proxy
// ============================================
// Fetches web analytics for a given project from
// the Vercel REST API. Requires VERCEL_API_TOKEN
// and {PROJECT}_PROJECT_ID env vars.
//
// Vercel analytics API docs:
// https://vercel.com/docs/rest-api/endpoints/web-analytics

import { NextRequest, NextResponse } from "next/server";

const PROJECT_IDS: Record<string, string | undefined> = {
  buildgrade: process.env.BUILDGRADE_PROJECT_ID,
  yardcalc: process.env.YARDCALC_PROJECT_ID,
  oppmap: process.env.OPPMAP_PROJECT_ID,
};

function defaultFrom(): string {
  const d = new Date();
  d.setDate(d.getDate() - 30);
  return d.toISOString().split("T")[0];
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const project = searchParams.get("project") ?? "";
  const from = searchParams.get("from") ?? defaultFrom();
  const to = searchParams.get("to") ?? new Date().toISOString().split("T")[0];

  const projectId = PROJECT_IDS[project];
  if (!project || !projectId) {
    return NextResponse.json(
      { error: `No project ID configured for "${project}".` },
      { status: 400 }
    );
  }

  const apiToken = process.env.VERCEL_API_TOKEN;
  if (!apiToken) {
    return NextResponse.json({ configured: false });
  }

  const base = "https://vercel.com/api/web-analytics/v1";
  const headers = { Authorization: `Bearer ${apiToken}` };
  const qs = `projectId=${projectId}&from=${from}&to=${to}`;

  try {
    const [summaryRes, pagesRes] = await Promise.all([
      fetch(`${base}/summary?${qs}`, { headers, next: { revalidate: 300 } }),
      fetch(`${base}/pages?${qs}&limit=10`, { headers, next: { revalidate: 300 } }),
    ]);

    if (!summaryRes.ok) {
      const text = await summaryRes.text();
      return NextResponse.json(
        { configured: true, error: `Vercel API error (${summaryRes.status}): ${text}` },
        { status: 502 }
      );
    }

    const summary = await summaryRes.json();
    const pages = pagesRes.ok ? await pagesRes.json() : null;

    return NextResponse.json({ configured: true, summary, pages });
  } catch {
    return NextResponse.json(
      { configured: true, error: "Failed to reach Vercel API." },
      { status: 502 }
    );
  }
}
