import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHead from "@/components/PageHead";
import Scramble from "@/components/Scramble";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services by Bhavesh Kanoje — Generative AI & LLM systems, agentic automation, computer vision, voice AI, full-stack web & apps, AI-driven analytics.",
};

const process = [
  {
    idx: "01",
    title: "UNDERSTAND",
    desc: "Deep-dive into your problem, data and success metrics — business requirements translated into a technical spec.",
  },
  {
    idx: "02",
    title: "PROTOTYPE",
    desc: "Rapid proof-of-concept with measurable baselines, so you see real results before committing to the full build.",
  },
  {
    idx: "03",
    title: "BUILD + OPTIMIZE",
    desc: "Production engineering — model optimization, robust pipelines, clean APIs, tested and documented.",
  },
  {
    idx: "04",
    title: "DEPLOY + SUPPORT",
    desc: "Cloud deployment with CI/CD, monitoring and handover — plus iteration as your usage grows.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHead
        crumb="SERVICES"
        title="WHAT I CAN"
        titleRed="BUILD FOR YOU"
        sub="Any type of AI work — plus the apps and full-stack products around it. One engineer, the whole pipeline: from model to deployed experience."
        idx="/03"
      />

      <section className="section">
        <div className="wrap" style={{ paddingTop: 36, paddingBottom: 8 }}>
          <Reveal>
            <div className="cellgrid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {services.map((s) => (
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
        </div>
      </section>

      <section className="section" style={{ marginTop: 56 }}>
        <div className="wrap">
          <div className="section-head">
            <h2><Scramble text="PROTOCOL" /></h2>
            <span className="idx">/04</span>
          </div>
          <Reveal>
            <div className="cellgrid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
              {process.map((p) => (
                <div className="cell tick proc-cell" key={p.idx}>
                  <span className="proc-num doto">{p.idx}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ padding: "40px 0 10px", display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact/" className="linebtn solid">START A PROJECT →</Link>
              <Link href="/projects/" className="linebtn">SEE PROOF OF WORK</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
