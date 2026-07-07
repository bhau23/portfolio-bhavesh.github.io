import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHead from "@/components/PageHead";
import { certifications, achievements } from "@/lib/data";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Certifications and achievements of Bhavesh Kanoje — Oracle Certified Generative AI Professional, AWS Data Analytics, NPTEL, hackathon winner and more.",
};

export default function CertificationsPage() {
  return (
    <main>
      <PageHead
        crumb="CERTIFICATIONS"
        title="CREDENTIALS,"
        titleRed="VERIFIED"
        sub="Industry certifications and competition wins that back up the project work."
        idx="/04"
      />

      <section className="section">
        <div className="wrap" style={{ paddingTop: 36 }}>
          <Reveal>
            <div className="cellgrid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {certifications.map((c) => (
                <div className="cell tick" key={c.idx}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span className="cell-idx">/{c.idx}</span>
                    <span className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--red)" }}>
                      {c.issuer}
                    </span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  {c.link && (
                    <div style={{ marginTop: 16 }}>
                      <a className="arrowlink" href={c.link} target="_blank" rel="noopener noreferrer">
                        VIEW CERTIFICATE ↗
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ marginTop: 56 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>COMPETITION <span className="red">RECORD</span></h2>
            <span className="idx">/05</span>
          </div>
          <Reveal>
            <div className="cellgrid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {achievements.map((a) => (
                <div className="cell tick" key={a.idx}>
                  <span className="cell-idx">/{a.idx}</span>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ padding: "40px 0 10px" }}>
              <Link href="/projects/" className="arrowlink">
                CREDENTIALS ARE NICE — SHIPPED WORK IS BETTER →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
