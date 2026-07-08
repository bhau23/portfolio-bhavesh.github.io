"use client";

import { useEffect, useRef, useState } from "react";
import MatrixAvatar from "@/components/MatrixAvatar";
import { askBot, THINKING_LINES, type ChatMsg } from "@/lib/chatbot";

const GREETING: ChatMsg = {
  role: "model",
  text: "Yo! I'm **BHAV.AI** 🤖 — Bhavesh's digital twin (the funnier one). Ask me about his projects, services, or say **\"I want to hire him\"** and I'll register your enquiry right here. No boring forms, promise 😄",
};

const QUICK = [
  "What services do you offer?",
  "Show me your best projects",
  "I want to hire Bhavesh",
  "Tell me about yourself",
];

/* tiny markdown: **bold** + line breaks + list dashes */
function renderMd(text: string) {
  const html = text
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>");
  return { __html: html };
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<ChatMsg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [thinkLine, setThinkLine] = useState(THINKING_LINES[0]);
  const [booked, setBooked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* memory lives only while the page is open — refresh or new chat wipes it.
     The full running conversation is sent to Gemini each turn, so within a
     session the bot remembers everything discussed (chain of thought). */
  useEffect(() => {
    if (window.location.hash === "#chat") setOpen(true);
  }, []);

  /* autoscroll */
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy, open]);

  function newChat() {
    setMsgs([GREETING]);
    setBooked(false);
    setInput("");
  }

  /* rotate thinking quotes while busy */
  useEffect(() => {
    if (!busy) return;
    const id = setInterval(() => {
      setThinkLine(THINKING_LINES[Math.floor(Math.random() * THINKING_LINES.length)]);
    }, 1800);
    return () => clearInterval(id);
  }, [busy]);

  async function send(raw?: string) {
    const text = (raw ?? input).trim();
    if (!text || busy) return;
    setInput("");
    const history: ChatMsg[] = [...msgs, { role: "user", text }];
    setMsgs(history);

    setBusy(true);
    try {
      /* the server handles enquiry detection + email sending itself */
      const { reply, booked: didBook } = await askBot(history);
      if (didBook) setBooked(true);
      setMsgs([...history, { role: "model", text: reply }]);
    } catch {
      setMsgs([
        ...history,
        {
          role: "model",
          text: "Oof, my circuits tripped 😅 Try again in a moment — or the **Contact** page never crashes, I checked.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <span className={`cb-hint mono ${open ? "hide" : ""}`} aria-hidden="true">
        ASK ME ANYTHING<span className="red blink">_</span>
      </span>
      <button
        className={`cb-launcher ${open ? "hide" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Chat with BHAV.AI — ask me anything"
      >
        <MatrixAvatar size={72} />
        <span className="cb-ping" />
      </button>

      <div className={`cb-panel ${open ? "open" : ""}`} role="dialog" aria-label="BHAV.AI chatbot">
        <div className="cb-head">
          <div className="cb-head-id">
            <MatrixAvatar size={38} />
            <div>
              <div className="cb-name doto">BHAV<span className="red">.</span>AI</div>
              <div className="cb-status mono">
                <span className="cb-dot" /> ONLINE — HUMAN-ISH
              </div>
            </div>
          </div>
          <div className="cb-head-actions">
            <button className="cb-close mono" onClick={newChat} title="Start a new chat">[ NEW ]</button>
            <button className="cb-close mono" onClick={() => setOpen(false)} title="Close">[ X ]</button>
          </div>
        </div>

        <div className="cb-msgs" ref={scrollRef}>
          {msgs.map((m, i) => (
            <div key={i} className={`cb-msg ${m.role === "user" ? "user" : "bot"}`}>
              <span className="cb-tag mono">{m.role === "user" ? "YOU" : "BHAV.AI"}</span>
              <div className="cb-bubble" dangerouslySetInnerHTML={renderMd(m.text)} />
            </div>
          ))}

          {booked && (
            <div className="cb-booked mono">■ ENQUIRY REGISTERED — REPLY WITHIN 24H</div>
          )}

          {busy && (
            <div className="cb-msg bot">
              <span className="cb-tag mono">BHAV.AI</span>
              <div className="cb-bubble cb-thinking">
                <span className="mono">{thinkLine}</span>
                <span className="cb-dots"><i /><i /><i /></span>
              </div>
            </div>
          )}

          {msgs.length <= 1 && !busy && (
            <div className="cb-quick">
              {QUICK.map((q) => (
                <button key={q} className="cb-chip mono" onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          className="cb-inputrow"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything…"
            aria-label="Message BHAV.AI"
            maxLength={600}
          />
          <button type="submit" className="cb-send mono" disabled={busy || !input.trim()}>
            SEND →
          </button>
        </form>
      </div>
    </>
  );
}
