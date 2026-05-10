"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

type TabId = "buildgrade" | "yardcalc" | "oppmap";

interface Configured {
  vercel: boolean;
  buildgrade: boolean;
  yardcalc: boolean;
  oppmap: boolean;
}

interface AnalyticsData {
  configured: boolean;
  summary?: {
    pageviews?: { value: number };
    visitors?: { value: number };
    bounceRate?: { value: number };
  };
  pages?: {
    data?: Array<{ page: string; pageviews: number }>;
  };
  error?: string;
}

const TABS: { id: TabId; label: string; url: string }[] = [
  { id: "buildgrade", label: "BuildGrade", url: "https://buildgrade.app" },
  { id: "yardcalc", label: "YardCalc", url: "https://yardcalc.app" },
  { id: "oppmap", label: "OppMap", url: "https://oppmap.app" },
];

export default function LabDash({ configured }: { configured: Configured }) {
  const router = useRouter();
  const [tab, setTab] = useState<TabId>("buildgrade");
  const [analytics, setAnalytics] = useState<Partial<Record<TabId, AnalyticsData>>>({});
  const [loading, setLoading] = useState<Partial<Record<TabId, boolean>>>({});

  const fetchAnalytics = useCallback(
    async (project: TabId) => {
      if (analytics[project] || loading[project]) return;
      setLoading((prev) => ({ ...prev, [project]: true }));
      try {
        const res = await fetch(`/api/lab/analytics?project=${project}`);
        const data: AnalyticsData = await res.json();
        setAnalytics((prev) => ({ ...prev, [project]: data }));
      } catch {
        setAnalytics((prev) => ({
          ...prev,
          [project]: { configured: false, error: "Fetch failed." },
        }));
      } finally {
        setLoading((prev) => ({ ...prev, [project]: false }));
      }
    },
    [analytics, loading]
  );

  useEffect(() => {
    fetchAnalytics(tab);
  }, [tab]); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleLogout() {
    await fetch("/api/lab/auth", { method: "DELETE" });
    router.push("/lab");
  }

  function handleRefresh() {
    setAnalytics((prev) => {
      const next = { ...prev };
      delete next[tab];
      return next;
    });
  }

  useEffect(() => {
    if (!analytics[tab] && !loading[tab]) {
      fetchAnalytics(tab);
    }
  }, [analytics, tab]); // eslint-disable-line react-hooks/exhaustive-deps

  const data = analytics[tab];
  const isLoading = loading[tab];
  const currentTab = TABS.find((t) => t.id === tab)!;
  const projectConfigured = configured[tab];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-accent font-display text-xl tracking-widest">ML</span>
          <span className="text-muted text-xs tracking-[0.2em] uppercase">Lab</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-muted text-xs hover:text-foreground transition-colors"
        >
          Sign out
        </button>
      </header>

      {/* Tabs */}
      <nav className="border-b border-border px-6 flex">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-5 py-3 text-sm border-b-2 -mb-px transition-colors ${
              tab === t.id
                ? "border-accent text-foreground"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="px-6 py-8 max-w-4xl mx-auto space-y-8">
        {/* Vercel setup banner */}
        {!configured.vercel && <SetupBanner />}

        {/* Analytics section */}
        {configured.vercel && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs text-muted uppercase tracking-widest">
                Last 30 days
              </h2>
              <button
                onClick={handleRefresh}
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                Refresh
              </button>
            </div>

            {isLoading && <LoadingSkeleton />}

            {!isLoading && !projectConfigured && (
              <p className="text-sm text-muted">
                <code className="text-accent">{tab.toUpperCase()}_PROJECT_ID</code> not set in .env.local.
              </p>
            )}

            {!isLoading && data?.error && (
              <p className="text-sm text-red-400">{data.error}</p>
            )}

            {!isLoading && data?.configured && data.summary && (
              <AnalyticsCards summary={data.summary} />
            )}

            {!isLoading && data?.configured && data.pages?.data && data.pages.data.length > 0 && (
              <TopPages pages={data.pages.data} />
            )}
          </section>
        )}

        {/* Quick links */}
        <section className="flex gap-3 flex-wrap">
          <a
            href={currentTab.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs border border-border rounded px-3 py-2 text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            Open {currentTab.label} ↗
          </a>
          <a
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs border border-border rounded px-3 py-2 text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            Vercel Dashboard ↗
          </a>
        </section>
      </main>
    </div>
  );
}

function AnalyticsCards({
  summary,
}: {
  summary: NonNullable<AnalyticsData["summary"]>;
}) {
  const stats = [
    {
      label: "Pageviews",
      value: summary.pageviews?.value?.toLocaleString() ?? "—",
    },
    {
      label: "Visitors",
      value: summary.visitors?.value?.toLocaleString() ?? "—",
    },
    {
      label: "Bounce Rate",
      value:
        summary.bounceRate?.value != null
          ? `${(summary.bounceRate.value * 100).toFixed(0)}%`
          : "—",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-surface border border-border rounded-lg p-5 space-y-1"
        >
          <p className="text-xs text-muted uppercase tracking-wider">{s.label}</p>
          <p className="text-3xl font-light text-foreground">{s.value}</p>
        </div>
      ))}
    </div>
  );
}

function TopPages({
  pages,
}: {
  pages: Array<{ page: string; pageviews: number }>;
}) {
  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <p className="text-xs text-muted uppercase tracking-wider">Top Pages</p>
      </div>
      <div className="divide-y divide-border">
        {pages.map((p) => (
          <div
            key={p.page}
            className="px-4 py-2.5 flex items-center justify-between"
          >
            <span className="text-sm text-foreground font-mono truncate max-w-xs">
              {p.page}
            </span>
            <span className="text-sm text-muted tabular-nums ml-4">
              {p.pageviews.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="bg-surface border border-border rounded-lg p-5 h-24 animate-pulse"
        />
      ))}
    </div>
  );
}

function SetupBanner() {
  return (
    <div className="border border-border rounded-lg p-5 space-y-3">
      <p className="text-sm text-foreground font-medium">Connect Vercel Analytics</p>
      <p className="text-xs text-muted leading-relaxed">
        Add these to <code className="text-accent">.env.local</code> to unlock analytics:
      </p>
      <pre className="text-xs text-muted bg-[#0a0a0a] border border-border rounded p-3 overflow-x-auto leading-relaxed">
{`VERCEL_API_TOKEN=your_token_here
BUILDGRADE_PROJECT_ID=prj_xxx
YARDCALC_PROJECT_ID=prj_xxx
OPPMAP_PROJECT_ID=prj_xxx`}
      </pre>
      <p className="text-xs text-muted">
        Get your token at{" "}
        <a
          href="https://vercel.com/account/tokens"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          vercel.com/account/tokens
        </a>{" "}
        · Find project IDs in each project&apos;s Settings → General.
      </p>
    </div>
  );
}
