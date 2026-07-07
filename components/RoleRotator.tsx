"use client";

import { useEffect, useState } from "react";
import { roles } from "@/lib/data";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#_|";

export default function RoleRotator() {
  const [display, setDisplay] = useState(roles[0]);

  useEffect(() => {
    let idx = 0;
    let cancel = false;

    function scrambleTo(text: string) {
      let frame = 0;
      const total = 22;
      const id = setInterval(() => {
        if (cancel) { clearInterval(id); return; }
        frame++;
        const solved = Math.floor((frame / total) * text.length * 1.3);
        let s = "";
        for (let i = 0; i < text.length; i++) {
          const c = text[i];
          if (c === " ") { s += " "; continue; }
          s += i < solved ? c : CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        setDisplay(s);
        if (solved >= text.length) {
          setDisplay(text);
          clearInterval(id);
        }
      }, 34);
    }

    const rotate = setInterval(() => {
      idx = (idx + 1) % roles.length;
      scrambleTo(roles[idx]);
    }, 3200);

    return () => { cancel = true; clearInterval(rotate); };
  }, []);

  return (
    <span className="hero-role">
      <span className="red">&gt;&nbsp;</span>
      {display}
      <span className="red blink">_</span>
    </span>
  );
}
