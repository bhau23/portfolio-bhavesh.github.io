/**
 * BHAV.AI client — talks to the secure micro-API (server/ folder,
 * deployed on Vercel). No API keys, no system prompt, no secrets
 * live in this bundle anymore.
 */

/* The deployed micro-API (server/ folder on Vercel). Can be overridden
   with NEXT_PUBLIC_API_BASE in .env.local / the GitHub Action. */
export const API_BASE = (
  process.env.NEXT_PUBLIC_API_BASE ||
  "https://portfolio-bhavesh-github-io.vercel.app"
).replace(/\/+$/, "");

export const THINKING_LINES = [
  "wait buddy, I'm here… ⚡",
  "cooking up something smart 🍳",
  "consulting my neural noodles 🧠",
  "hold on, downloading charm… 99% 😎",
  "beep boop… just kidding, I'm fancier than that 🤖",
  "one sec, polishing this answer ✨",
  "running it past 97.47% of my brain cells 📡",
];

export type ChatMsg = { role: "user" | "model"; text: string };

export async function askBot(
  history: ChatMsg[]
): Promise<{ reply: string; booked: boolean }> {
  const res = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: history.slice(-20) }),
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = (await res.json()) as { reply?: string; booked?: boolean };
  if (!data.reply) throw new Error("Empty reply");
  /* defensive: never show a stray token even if the server missed it */
  const reply = data.reply.replace(/\[\[ENQUIRY\]\][\s\S]*?(\[\[\/ENQUIRY\]\]|$)/g, "").trim();
  return { reply, booked: Boolean(data.booked) };
}

export async function submitEnquiry(fields: {
  name: string;
  email: string;
  service?: string;
  message: string;
  source: string;
}): Promise<void> {
  const res = await fetch(`${API_BASE}/api/enquiry`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
}
