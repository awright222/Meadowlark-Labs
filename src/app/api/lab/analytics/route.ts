// ============================================
// API Route: /api/lab/analytics — Vercel proxy
// ============================================
// Fetches recent production deployments for a project
// from the Vercel REST API.
// Docs: https://vercel.com/docs/rest-api/endpoints/deployments

import { NextRequest, NextResponse } from "next/server";

const PROJECT_IDS: Record<string, string | undefined> = {
  buildgrade: process.env.BUILDGRADE_PROJECT_ID,
  yardcalc: process.env.YARDCALC_PROJECT_ID,
  oppmap: process.env.OPPMAP_PROJECT_ID,
  dealforge: process.env.DEALFORGE_PROJECT_ID,
};

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const project = searchParams.get("project") ?? "";

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

  try {
    const res = await fetch(
      `https://api.vercel.com/v6/deployments?projectId=${projectId}&limit=5&target=production`,
      {
        headers: { Authorization: `Bearer ${apiToken}` },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { configured: true, error: `Vercel API error (${res.status}): ${text}` },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ configured: true, deployments: data.deployments ?? [] });
  } catch {
    return NextResponse.json(
      { configured: true, error: "Failed to reach Vercel API." },
      { status: 502 }
    );
  }
}
