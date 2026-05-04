// ============================================
// In-memory sliding window rate limiter
// ============================================

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

const PRUNE_INTERVAL = 5 * 60 * 1000;
let lastPrune = Date.now();

function pruneStale(windowMs: number) {
  const now = Date.now();
  if (now - lastPrune < PRUNE_INTERVAL) return;
  lastPrune = now;
  const cutoff = now - windowMs;
  for (const [key, entry] of store) {
    entry.timestamps = entry.timestamps.filter((t) => t > cutoff);
    if (entry.timestamps.length === 0) store.delete(key);
  }
}

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetMs: number;
}

export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  pruneStale(config.windowMs);

  const entry = store.get(identifier) ?? { timestamps: [] };
  const cutoff = now - config.windowMs;
  entry.timestamps = entry.timestamps.filter((t) => t > cutoff);

  if (entry.timestamps.length >= config.maxRequests) {
    const oldestInWindow = entry.timestamps[0];
    return {
      allowed: false,
      remaining: 0,
      resetMs: oldestInWindow + config.windowMs - now,
    };
  }

  entry.timestamps.push(now);
  store.set(identifier, entry);

  return {
    allowed: true,
    remaining: config.maxRequests - entry.timestamps.length,
    resetMs: config.windowMs,
  };
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "127.0.0.1";
}
