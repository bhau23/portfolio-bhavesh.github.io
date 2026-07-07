"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects, filters } from "@/lib/data";

export default function ProjectsGrid() {
  const [active, setActive] = useState("all");

  const visible = projects.filter(
    (p) => active === "all" || p.cats.includes(active)
  );

  return (
    <div>
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`fchip ${active === f.key ? "on" : ""}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
            <span style={{ marginLeft: 8, opacity: 0.6 }}>
              [{f.key === "all"
                ? projects.length
                : projects.filter((p) => p.cats.includes(f.key)).length}]
            </span>
          </button>
        ))}
      </div>
      <motion.div className="cellgrid projgrid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.idx}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: "var(--bg)" }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
