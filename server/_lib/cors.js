const ALLOWED_ORIGINS = [
  "https://bhaveshai.in",
  "https://www.bhaveshai.in",
  "http://localhost:3000",
  "http://localhost:3001",
];

/** Applies CORS headers. Returns true if the request was a handled preflight. */
function applyCors(req, res) {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return true;
  }
  return false;
}

/** Very light per-instance rate limit: max N hits per IP per minute. */
const hits = new Map();
function rateLimited(req, max = 12) {
  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  const now = Date.now();
  const windowStart = now - 60_000;
  const list = (hits.get(ip) || []).filter((t) => t > windowStart);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear(); // avoid unbounded growth
  return list.length > max;
}

module.exports = { applyCors, rateLimited };
