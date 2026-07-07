# BHAVESH.K — Portfolio v3

Personal portfolio of **Bhavesh Kanoje** (AI/ML Engineer), rebuilt in
**Next.js 15 + React 19 + framer-motion** with a Nothing-inspired
industrial UI — pure black, crimson `#ff004f`, dot-matrix (Doto) display
type, matrix grid cells and mono micro-labels.

Live at **https://bhaveshai.in**

## Develop locally

```bash
npm install
npm run dev        # http://localhost:3000 (live reload)
```

## Build (static export)

```bash
npm run build      # outputs the full static site to ./out
```

## Deploy — GitHub Pages

Deployment is automated by `.github/workflows/deploy.yml`: every push to
`master` builds the site and publishes `out/` to GitHub Pages.

> **One-time setup (required):** in the GitHub repo go to
> **Settings → Pages → Build and deployment → Source** and switch it from
> *"Deploy from a branch"* to **"GitHub Actions"**. The custom domain
> (bhaveshai.in) setting stays as it is. Until this switch is made, the
> old branch-based deploy would serve raw source files.

## Structure

```
app/            pages (App Router): / /about /projects /services /certifications /contact
components/     Navbar, Footer, Reveal, Scramble, RoleRotator, Counter, Marquee, Clock, ProjectCard, ProjectsGrid, ContactForm, PageHead
lib/data.ts     all content: projects, services, experience, skills, certs, socials
public/         images, resume PDF, certificate PDFs
```

To update content (projects, experience, certifications, contact info),
edit `lib/data.ts` — no component changes needed.
