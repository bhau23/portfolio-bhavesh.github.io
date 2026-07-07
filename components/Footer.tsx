import Link from "next/link";
import { socials, contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-word">
          BHAVESH<span className="red">.</span>K
        </div>
        <div className="footer-cols">
          <div>
            <h4>ABOUT</h4>
            <p className="footer-note">
              AI/ML Engineer building generative AI, computer vision and
              agentic systems with measurable impact. Available for AI builds,
              apps and full-stack products.
            </p>
          </div>
          <div>
            <h4>SITEMAP</h4>
            <ul>
              <li><Link href="/">INDEX</Link></li>
              <li><Link href="/about/">ABOUT</Link></li>
              <li><Link href="/projects/">PROJECTS</Link></li>
              <li><Link href="/services/">SERVICES</Link></li>
              <li><Link href="/certifications/">CERTIFICATIONS</Link></li>
              <li><Link href="/contact/">CONTACT</Link></li>
            </ul>
          </div>
          <div>
            <h4>CONNECT</h4>
            <ul>
              <li><a href={`mailto:${contact.email}`}>EMAIL</a></li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
              <li><a href={contact.resume} download>RESUME [PDF]</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} BHAVESH KANOJE</span>
        <span>DESIGNED & ENGINEERED BY BHAVESH</span>
        <span>{contact.location} / {contact.coords}</span>
      </div>
    </footer>
  );
}
