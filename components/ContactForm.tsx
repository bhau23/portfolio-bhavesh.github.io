"use client";

import { useState, type FormEvent } from "react";
import { submitEnquiry } from "@/lib/chatbot";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    try {
      await submitEnquiry({
        name: String(fd.get("Name") ?? ""),
        email: String(fd.get("email") ?? ""),
        message: String(fd.get("Message") ?? ""),
        source: "Contact form",
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 6000);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="cf-name">01 / YOUR NAME</label>
        <input id="cf-name" type="text" name="Name" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">02 / YOUR EMAIL</label>
        <input id="cf-email" type="email" name="email" placeholder="jane@company.com" required />
      </div>
      <div className="field">
        <label htmlFor="cf-msg">03 / MESSAGE</label>
        <textarea
          id="cf-msg"
          name="Message"
          rows={6}
          placeholder="Project, timeline, goals…"
          required
        />
      </div>
      <button type="submit" className="linebtn solid" disabled={status === "sending"}>
        {status === "sending" ? "TRANSMITTING…" : "SEND MESSAGE →"}
      </button>
      <span className="form-status" role="status">
        {status === "sent" && "■ MESSAGE RECEIVED — I WILL REPLY WITHIN 24H."}
        {status === "error" && "■ TRANSMISSION FAILED — EMAIL ME DIRECTLY."}
      </span>
    </form>
  );
}
