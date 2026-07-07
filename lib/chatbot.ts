/**
 * BHAV.AI client — talks to the secure micro-API (server/ folder,
 * deployed on Vercel). No API keys, no system prompt, no secrets
 * live in this bundle anymore.
 */

/* After deploying the server/ folder to Vercel, put your project URL here
   (or set NEXT_PUBLIC_API_BASE in .env.local / the GitHub Action). */
export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "https://bhavesh-portfolio-api.vercel.app";

/* The server instructs the model to emit this block when an enquiry is
   confirmed; the client parses it, submits, and strips it from display. */
export const ENQUIRY_OPEN = "[[ENQUIRY]]";
export const ENQUIRY_CLOSE = "[[/ENQUIRY]]";

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

export async function askBot(history: ChatMsg[]): Promise<string> {
  const res = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: history.slice(-20) }),
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = (await res.json()) as { reply?: string };
  if (!data.reply) throw new Error("Empty reply");
  return data.reply;
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
