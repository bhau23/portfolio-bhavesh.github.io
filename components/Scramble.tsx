"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/_\\<>|+■";

export default function Scramble({
  text,
  className,
  speed = 28,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  // start with the real text so layout (and no-JS/SEO) is always correct
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = text.length * 2.4;
    const id = setInterval(() => {
      frame++;
      const solved = Math.floor((frame / total) * text.length * 1.4);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (c === " ") { s += " "; continue; }
        if (i < solved) { s += c; continue; }
        s += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setOut(s);
      if (solved >= text.length) {
        setOut(text);
        clearInterval(id);
      }
    }, speed);
    return () => clearInterval(id);
  }, [inView, text, speed]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {out}
    </span>
  );
}
