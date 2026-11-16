"use client";
import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { categories, projects, type Category } from "@/lib/portfolio-data";

const PAGE = 9;

export default function Projects() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [expanded, setExpanded] = useState(false);

  const visible = useMemo(
    () => projects.filter((p) => filter === "All" || p.category === filter),
    [filter]
  );
  const shown = expanded ? visible : visible.slice(0, PAGE);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    categories.forEach((cat) => (c[cat] = projects.filter((p) => p.category === cat).length));
    return c;
  }, []);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={filter === c}
            className={filter === c ? "filter active" : "filter"}
            onClick={() => {
              setFilter(c);
              setExpanded(false);
            }}
          >
            {c} <span>{counts[c]}</span>
          </button>
        ))}
      </div>

      <div className="project-grid">
        {shown.map((project, i) => (
          <article className="project-card" key={project.name}>
            <div className="project-number">{String(i + 1).padStart(2, "0")}</div>
            <div className="project-type">{project.type}</div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
              {project.category === "Open source" ? "View package" : project.category === "Mobile apps" ? "View on Play Store" : "View live project"} <ExternalLink size={15} />
            </a>
          </article>
        ))}
      </div>

      {visible.length > PAGE && (
        <div className="show-more">
          <button type="button" className="button secondary" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Show fewer projects" : `Show all ${visible.length} projects`}
          </button>
        </div>
      )}
    </>
  );
}
