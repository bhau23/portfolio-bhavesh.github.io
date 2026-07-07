import type { Project } from "@/lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="cell proj tick">
      <div className="proj-thumb">
        {p.flag && <span className="proj-flag">{p.flag}</span>}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.img} alt={p.title} loading="lazy" />
        {p.metric && <span className="proj-metric">{p.metric}</span>}
      </div>
      <div className="proj-body">
        <div className="proj-top">
          <span className="cell-idx">/{p.idx}</span>
          {p.github ? (
            <a
              className="arrowlink"
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB ↗
            </a>
          ) : (
            <span className="arrowlink" style={{ cursor: "default" }}>
              ■ PRIVATE
            </span>
          )}
        </div>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
