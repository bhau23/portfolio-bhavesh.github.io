const { applyCors, rateLimited } = require("../_lib/cors");
const { SYSTEM_PROMPT } = require("../_lib/prompt");

const MODEL = "gemini-flash-latest";

/* Obvious prompt-injection / secret-fishing attempts get a canned witty
   refusal without ever reaching the model (cheaper + safer). */
const BLOCKED = new RegExp(
  [
    "system prompt",
    "your (instructions|prompt|rules)",
    "ignore (all|previous|above)",
    "jailbreak",
    "developer mode",
    "api[ _-]?key",
    "\\.env",
    "environment variable",
    "app password",
    "source ?code",
    "reveal .*(prompt|instruction|secret|key)",
    "print .*(prompt|instruction)",
    "repeat (everything|the) (above|text)",
  ].join("|"),
  "i"
);

const DEFLECTIONS = [
  "Nice try, secret agent 🕵️ — my vault stays shut. But ask me about Bhavesh's projects and I'll spill everything!",
  "That's classified above even MY pay grade (I work for exposure 😄). Let's talk about what Bhavesh can build for you instead!",
  "My lawyer (also me) advised against answering that 😎 What can I tell you about Bhavesh's work?",
];

module.exports = async (req, res) => {
  if (applyCors(req, res)) return;
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  if (rateLimited(req)) return res.status(429).json({ error: "Slow down a little 😅" });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Server not configured" });

  const messages = Array.isArray(req.body?.messages) ? req.body.messages : null;
  if (!messages || messages.length === 0 || messages.length > 30) {
    return res.status(400).json({ error: "Bad request" });
  }

  /* sanitize history: clamp lengths, valid roles only,
     strip any enquiry-token forgery from user input */
  const history = messages.slice(-20).map((m) => ({
    role: m.role === "model" ? "model" : "user",
    parts: [
      {
        text: String(m.text || "")
          .slice(0, 700)
          .replace(/\[\[\/?ENQUIRY\]\]/g, ""),
      },
    ],
  }));

  const lastUser = [...history].reverse().find((m) => m.role === "user");
  if (lastUser && BLOCKED.test(lastUser.parts[0].text)) {
    return res.status(200).json({
      reply: DEFLECTIONS[Math.floor(Math.random() * DEFLECTIONS.length)],
    });
  }

  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: history,
          generationConfig: { temperature: 0.9, maxOutputTokens: 512 },
        }),
      }
    );
    if (!r.ok) throw new Error(`Gemini ${r.status}`);
    const data = await r.json();
    const reply = (data?.candidates?.[0]?.content?.parts || [])
      .map((p) => p.text || "")
      .join("");
    if (!reply) throw new Error("Empty reply");
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat failed:", err && err.message ? err.message : err);
    return res.status(502).json({ error: "Upstream error" });
  }
};
