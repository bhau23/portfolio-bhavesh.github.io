"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "INDEX" },
  { href: "/about/", label: "ABOUT" },
  { href: "/projects/", label: "PROJECTS" },
  { href: "/services/", label: "SERVICES" },
  { href: "/certifications/", label: "CERTS" },
  { href: "/contact/", label: "CONTACT" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nb ${scrolled ? "nb-scrolled" : ""}`}>
        <div className="wrap nb-in">
          <Link href="/" className="nb-brand doto">
            BHAVESH<span className="red">.</span>K
          </Link>
          <nav className="nb-links mono">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(pathname, l.href) ? "on" : ""}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            className="nb-burger mono"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "[ CLOSE ]" : "[ MENU ]"}
          </button>
        </div>
      </header>

      <div className={`nb-overlay ${open ? "show" : ""}`}>
        <nav className="wrap nb-overlay-links">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`doto ${isActive(pathname, l.href) ? "on" : ""}`}
              style={{ transitionDelay: open ? `${0.05 + i * 0.05}s` : "0s" }}
            >
              <span className="mono num">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="wrap nb-overlay-foot mono">
          <span>RAIPUR, IN</span>
          <span className="red">AI / ML ENGINEER</span>
        </div>
      </div>
    </>
  );
}
