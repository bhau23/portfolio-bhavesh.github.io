import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHead from "@/components/PageHead";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI/ML projects by Bhavesh Kanoje — generative AI, computer vision, agentic AI, machine learning and full-stack builds with measurable results.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHead
        crumb="PROJECTS"
        title="THE PROJECT"
        titleRed="LAB"
        sub="15+ builds across generative AI, computer vision, agents and full-stack — from space-research pipelines to client-grade production sites. Filter by discipline."
        idx="/02"
      />
      <section className="section">
        <div className="wrap" style={{ paddingTop: 36 }}>
          <Reveal>
            <ProjectsGrid />
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ paddingTop: 32 }}>
              <a
                href="https://github.com/bhau23"
                target="_blank"
                rel="noopener noreferrer"
                className="arrowlink"
              >
                38 REPOS AND COUNTING ON GITHUB ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
