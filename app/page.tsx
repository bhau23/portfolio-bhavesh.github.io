import Link from "next/link";
import Reveal from "@/components/Reveal";
import Scramble from "@/components/Scramble";
import RoleRotator from "@/components/RoleRotator";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import Clock from "@/components/Clock";
import ProjectCard from "@/components/ProjectCard";
import { projects, services, experience, marqueeItems, contact } from "@/lib/data";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-top">
            <span>AI / ML ENGINEER — PORTFOLIO v3</span>
            <span><Clock /></span>
          </div>

          <h1 className="hero-name">
            <Scramble text="BHAVESH" />
            <br />
            <span className="red"><Scramble text="KANOJE" /></span>
          </h1>

          <RoleRotator />

          <p className="hero-desc">
            AI Engineer with <strong>2+ years</strong> of research &amp; industry experience
            turning LLMs, vision models and multimodal pipelines into production
            systems — currently engineering applied AI at <strong>eQOURSE</strong>.
          </p>

          <div className="hero-actions">
            <Link href="/projects/" className="linebtn solid">VIEW MY WORK →</Link>
            <a href={contact.resume} download className="linebtn">RESUME [PDF] ↓</a>
          </div>

          <div className="hero-meta">
            <span>{contact.location} — {contact.coords}</span>
            <span className="red">B.TECH (HONS.) ARTIFICIAL INTELLIGENCE</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/bhav.png" alt="Bhavesh Kanoje" fetchPriority="high" />
          </div>
          <div className="hero-grid-overlay" />
          <div className="hero-crosses" aria-hidden="true">
            <span className="cross" style={{ top: "30%", left: "30%" }} />
            <span className="cross red" style={{ top: "30%", left: "70%" }} />
            <span className="cross" style={{ top: "70%", left: "30%" }} />
            <span className="cross" style={{ top: "70%", left: "70%" }} />
          </div>
        </div>

        <div className="scroll-cue">
          <span>SCROLL</span>
          <span className="arrow">▼</span>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <Marquee items={marqueeItems} />

      {/* ============ STATS ============ */}
      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="section-head">
            <h2><Scramble text="SYSTEM STATUS" /></h2>
            <span className="idx">/00</span>
          </div>
          <Reveal>
            <div className="cellgrid statgrid">
              <div className="cell stat-cell tick">
                <div className="stat-num"><Counter value={2} /><span className="red">+</span></div>
                <span className="stat-label">YEARS — RESEARCH & INDUSTRY</span>
              </div>
              <div className="cell stat-cell tick">
                <div className="stat-num"><Counter value={97.47} decimals={2} /><span className="red">%</span></div>
                <span className="stat-label">BEST REAL-TIME VISION ACCURACY</span>
              </div>
              <div className="cell stat-cell tick">
                <div className="stat-num"><Counter value={15} /><span className="red">+</span></div>
                <span className="stat-label">AI PROJECTS SHIPPED</span>
              </div>
              <div className="cell stat-cell tick">
                <div className="stat-num"><Counter value={60} /><span className="red">%</span></div>
                <span className="stat-label">WORKFLOW AUTOMATION GAINS</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2><Scramble text="CAPABILITIES" /></h2>
            <span className="idx">/01</span>
          </div>
          <Reveal>
            <div className="cellgrid projgrid">
              {services.slice(0, 3).map((s) => (
                <div className="cell tick" key={s.idx}>
                  <span className="cell-idx">/{s.idx}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="tags" style={{ marginTop: 18 }}>
                    {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ paddingTop: 28 }}>
              <Link href="/services/" className="arrowlink">ALL SERVICES →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>SELECTED <span className="red">WORK</span></h2>
            <span className="idx">/02</span>
          </div>
          <Reveal>
            <div className="cellgrid projgrid">
              {featured.map((p) => <ProjectCard p={p} key={p.idx} />)}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
              <Link href="/projects/" className="linebtn">VIEW ALL 15+ PROJECTS →</Link>
              <a href="https://github.com/bhau23" target="_blank" rel="noopener noreferrer" className="arrowlink">GITHUB — 38 REPOS ↗</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2><Scramble text="TRAJECTORY" /></h2>
            <span className="idx">/03</span>
          </div>
          <Reveal>
            <div>
              {experience.slice(0, 3).map((x) => (
                <div className="xp-row" key={x.idx}>
                  <span className="xp-date">{x.date}</span>
                  <div>
                    <div className="xp-role">{x.role}</div>
                    <div className="xp-org">{x.org}</div>
                  </div>
                  <span className="xp-idx">/{x.idx}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ paddingTop: 28 }}>
              <Link href="/about/" className="arrowlink">FULL STORY + SKILLS →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT STRIP ============ */}
      <section className="section">
        <div className="wrap" style={{ padding: "clamp(48px, 7vw, 90px) var(--gutter)" }}>
          <Reveal>
            <span className="label">GOT AN IDEA THAT NEEDS INTELLIGENCE?</span>
            <h2 className="display" style={{ fontSize: "clamp(34px, 6.5vw, 96px)", margin: "22px 0 34px" }}>
              LET&apos;S BUILD<br /><span className="red">SOMETHING SMART</span>
            </h2>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact/" className="linebtn solid">CONTACT →</Link>
              <a href={contact.resume} download className="linebtn">RESUME [PDF] ↓</a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
