"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LabLoginForm() {
  const router = useRouter();
  const [passphrase, setPassphrase] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/lab/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passphrase }),
      });
      if (res.ok) {
        router.push("/lab/dash");
      } else {
        const data = await res.json();
        setError(data.error ?? "Something went wrong.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-xs space-y-8">
        <div className="text-center space-y-1">
          <p className="text-accent font-display text-3xl tracking-widest">ML</p>
          <h1 className="text-muted text-xs tracking-[0.25em] uppercase">
            Lab
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Passphrase"
            autoComplete="current-password"
            autoFocus
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
          {error && (
            <p className="text-red-400 text-xs text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || !passphrase}
            className="w-full bg-accent text-[#0C0C0C] font-medium text-sm py-3 rounded hover:opacity-90 disabled:opacity-40 transition-opacity"
          >
            {loading ? "Verifying…" : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
