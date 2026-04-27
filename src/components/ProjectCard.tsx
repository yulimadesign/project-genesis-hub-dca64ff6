import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => (
  <article
    className="surface overflow-hidden group transition duration-300 hover:-translate-y-1.5"
    style={{ position: "relative" }}
  >
    <Link
      to={`/projects/${project.slug}`}
      className="focus-ring grid h-full"
      aria-label={`View case study: ${project.cardTitle}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.altText}
          loading="lazy"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
          style={{ aspectRatio: "4 / 3" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, hsl(var(--coral) / 0.18) 100%)",
          }}
        />
      </div>
      <div className="p-6 pb-7 grid gap-3">
        <p className="eyebrow m-0">Case Study</p>
        <h3
          className="display m-0"
          style={{ fontSize: "var(--step-1)", lineHeight: 1.18 }}
        >
          {project.cardTitle}
        </h3>
        <p className="m-0 muted text-sm" style={{ lineHeight: 1.55 }}>
          {project.summary}
        </p>

        {project.metrics.length > 0 && (
          <div className="mt-1 grid grid-cols-2 gap-2">
            {project.metrics.slice(0, 2).map((m) => (
              <div
                key={`${m.value}-${m.label}`}
                className="rounded-xl px-3 py-2"
                style={{
                  background: "hsl(var(--coral) / 0.08)",
                  border: "1px solid hsl(var(--coral) / 0.18)",
                }}
              >
                <p
                  className="display m-0 coral-text"
                  style={{ fontSize: "1.05rem", lineHeight: 1.1 }}
                >
                  {m.value}
                </p>
                <p
                  className="m-0 muted"
                  style={{ fontSize: "0.78rem", lineHeight: 1.3 }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <span
          className="mt-2 inline-flex items-center gap-1.5 text-sm"
          style={{ color: "hsl(var(--coral))", fontWeight: 500 }}
        >
          View Case Study
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  </article>
);

export default ProjectCard;
