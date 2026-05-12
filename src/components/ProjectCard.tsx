import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => (
  <article
    className="surface group transition hover:-translate-y-1"
    style={{
      position: "relative",
      padding: "1rem",
      borderRadius: "var(--radius-xl)",
      transitionDuration: "var(--transition-base)",
    }}
  >
    <Link
      to={`/projects/${project.slug}`}
      className="focus-ring grid h-full"
      style={{ gridTemplateRows: "auto 1fr" }}
      aria-label={`View case study: ${project.cardTitle}`}
    >
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "1448 / 1086",
          borderRadius: "var(--radius-lg)",
          background: "hsl(var(--secondary))",
        }}
      >
        <img
          src={project.coverImage}
          alt={project.altText}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div
        className="project-card-body grid gap-3"
        style={{
          padding: "1rem 0.25rem 0.25rem",
        }}
      >
        <p className="eyebrow m-0">Case Study</p>
        <h3
          className="m-0"
          style={{ fontSize: "1.375rem", lineHeight: "1.875rem", fontWeight: 500 }}
        >
          {project.cardTitle}
        </h3>
        <p className="m-0 muted" style={{ fontSize: "0.9375rem", lineHeight: "1.5rem" }}>
          {project.summary}
        </p>

        {project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 self-start">
            {project.metrics.slice(0, 2).map((m) => (
              <div
                key={`${m.value}-${m.label}`}
                className="px-3 py-2"
                style={{
                  background: "hsl(var(--coral-soft))",
                  border: "1px solid hsl(var(--coral-subtle))",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <p
                  className="m-0 coral-text"
                  style={{ fontSize: "1rem", lineHeight: 1.2, fontWeight: 500 }}
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
          style={{ color: "hsl(var(--coral-text))", fontWeight: 500 }}
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
