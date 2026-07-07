import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import Clock from "@/components/Clock";
import { contact, socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bhavesh Kanoje for AI projects, computer vision systems, voice AI and full-stack builds. Based in Raipur, India — working worldwide.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHead
        crumb="CONTACT"
        title="OPEN"
        titleRed="CHANNEL"
        sub="Have a project, a role, or an idea worth exploring? My inbox is open — I usually reply within 24 hours."
        idx="/05"
      />

      <section className="section">
        <div className="wrap" style={{ paddingTop: 36 }}>
          <Reveal>
            <div className="cellgrid contact-grid">
              <div className="cell" style={{ display: "flex", flexDirection: "column", gap: 26 }}>
                <div>
                  <span className="label">EMAIL</span>
                  <div className="contact-big">
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </div>
                <div>
                  <span className="label">PHONE</span>
                  <div className="contact-big">
                    <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
                  </div>
                </div>
                <div>
                  <span className="label">LOCATION</span>
                  <div className="contact-big dim">
                    {contact.location} — WORKING WORLDWIDE
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--faint)", letterSpacing: "0.16em", marginTop: 6 }}>
                    {contact.coords} / <Clock />
                  </div>
                </div>
                <div>
                  <span className="label">ELSEWHERE</span>
                  <div className="tags" style={{ marginTop: 14 }}>
                    {socials.map((s) => (
                      <a className="tag" key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                        {s.label} ↗
                      </a>
                    ))}
                    <a className="tag" href={contact.resume} download>RESUME [PDF] ↓</a>
                  </div>
                </div>
              </div>
              <div className="cell">
                <span className="cell-idx">/ TRANSMIT</span>
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
