type RateLimitEntry = {
  count: number;
  firstRequest: number;
};

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 6;
const ipStore = new Map<string, RateLimitEntry>();

function cleanStaleEntries() {
  const now = Date.now();
  for (const [ip, entry] of ipStore.entries()) {
    if (now - entry.firstRequest > WINDOW_MS) {
      ipStore.delete(ip);
    }
  }
}

setInterval(cleanStaleEntries, 60 * 1000).unref();

export function isRateLimited(ip: string) {
  const normalized = ip || 'unknown';
  const now = Date.now();
  const entry = ipStore.get(normalized);

  if (!entry) {
    ipStore.set(normalized, { count: 1, firstRequest: now });
    return false;
  }

  if (now - entry.firstRequest > WINDOW_MS) {
    ipStore.set(normalized, { count: 1, firstRequest: now });
    return false;
  }

  entry.count += 1;
  if (entry.count > MAX_REQUESTS) {
    return true;
  }

  return false;
}

export function getRateLimitInfo(ip: string) {
  const entry = ipStore.get(ip || 'unknown');
  if (!entry) return { count: 0, resetMs: 0 };
  const elapsed = Date.now() - entry.firstRequest;
  return { count: entry.count, resetMs: Math.max(WINDOW_MS - elapsed, 0) };
}
