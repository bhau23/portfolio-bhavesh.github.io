import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHead from "@/components/PageHead";
import Marquee from "@/components/Marquee";
import { experience, skillGroups, skillBars, marqueeItems, contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Bhavesh Kanoje — AI/ML Engineer with research experience at IIST and industry experience across Generative AI, Computer Vision and Agentic AI.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHead
        crumb="ABOUT"
        title="THE ENGINEER"
        titleRed="BEHIND THE MODELS"
        sub="B.Tech (Hons.) in Artificial Intelligence. Oracle Certified Generative AI Professional. Builder of things that see, speak and reason."
        idx="/01"
      />

      {/* ============ BIO ============ */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="cellgrid about-grid">
              <div className="cell tick" style={{ padding: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/bhavesh-profile.jpg"
                  alt="Bhavesh Kanoje — portrait"
                  style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 320 }}
                />
                <div className="photo-caption mono">
                  <span>FIG. 01 — PROFILE</span>
                  <span className="red">RAIPUR, IN / 2026</span>
                </div>
              </div>
              <div className="cell" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
                <span className="label">WHO I AM</span>
                <p className="bio-p">
                  I&apos;m an <strong>AI/ML Engineer</strong> with 2+ years of research and
                  industry experience building production-grade <strong>Generative AI,
                  Computer Vision and NLP systems</strong>. Right now I engineer applied AI
                  at <strong>eQOURSE</strong> — automated data pipelines, SEO performance
                  modeling and lead-scoring systems that directly move business KPIs.
                </p>
                <p className="bio-p">
                  Before that I built <strong>Voice AI and Agentic AI applications</strong> at
                  Reality AI, cutting manual content workflows by ~60%, and researched{" "}
                  <strong>GAN-augmented video anomaly detection</strong> at the Indian
                  Institute of Space Science &amp; Technology — 95% accuracy on benchmarks.
                </p>
                <p className="bio-p">
                  I care about one thing above all: <strong className="red-strong">AI that
                  actually ships</strong> — measured in accuracy points, hours automated and
                  users served. Not just notebooks.
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 8 }}>
                  <a href={contact.resume} download className="linebtn">RESUME [PDF] ↓</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* ============ SKILLS ============ */}
      <section className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="section-head">
            <h2>SKILLS <span className="red">/ ARSENAL</span></h2>
            <span className="idx">/02</span>
          </div>
          <Reveal>
            <div className="cellgrid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {skillGroups.map((g, i) => (
                <div className="cell tick" key={g.title}>
                  <span className="cell-idx">/{String(i + 1).padStart(2, "0")}</span>
                  <h3>{g.title}</h3>
                  <div className="tags" style={{ marginTop: 14 }}>
                    {g.items.map((s) => <span className="tag" key={s}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="cellgrid" style={{ gridTemplateColumns: "1fr", marginTop: 1 }}>
              <div className="cell">
                <span className="cell-idx">/05</span>
                <h3>CORE COMPETENCY LEVELS</h3>
                <div style={{ marginTop: 22, maxWidth: 720 }}>
                  {skillBars.map((b) => (
                    <div className="skillbar" key={b.name}>
                      <div className="sb-head">
                        <span>{b.name}</span>
                        <span className="red">{b.level}/10</span>
                      </div>
                      <div className="sb-blocks">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <span key={i} className={i < b.level ? "f" : ""} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>WHERE I&apos;VE <span className="red">BUILT</span></h2>
            <span className="idx">/03</span>
          </div>
          {experience.map((x, i) => (
            <Reveal key={x.idx} delay={i * 0.05}>
              <div className="xp-row">
                <span className="xp-date">{x.date}</span>
                <div>
                  <div className="xp-role">{x.role}</div>
                  <div className="xp-org">{x.org}</div>
                </div>
                <span className="xp-idx">/{x.idx}</span>
              </div>
              <ul className="xp-detail">
                {x.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ EDUCATION ============ */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2><span className="red">EDU</span>CATION</h2>
            <span className="idx">/04</span>
          </div>
          <Reveal>
            <div className="cellgrid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              <div className="cell tick">
                <span className="cell-idx">2021 — 2025</span>
                <h3>B.TECH (HONOURS) — ARTIFICIAL INTELLIGENCE</h3>
                <p>
                  Chhattisgarh Swami Vivekanand Technical University, Bhilai.
                  Specialized in deep learning, computer vision and generative AI
                  with research honours.
                </p>
              </div>
              <div className="cell tick">
                <span className="cell-idx">2010 — 2021</span>
                <h3>CBSE CLASS XII — PCM + COMPUTER SCIENCE</h3>
                <p>
                  Kendriya Vidyalaya No. 2, Raipur. Physics, chemistry and
                  mathematics with computer science.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
