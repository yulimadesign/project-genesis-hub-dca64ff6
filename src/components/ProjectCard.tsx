import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => (
  <article className="surface overflow-hidden transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_1.8rem_3rem_-2.2rem_hsl(220_25%_12%/0.18)]">
    <Link
      to={`/projects/${project.slug}`}
      className="focus-ring grid"
    >
      <div>
        <img
          src={project.coverImage}
          alt={project.altText}
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ aspectRatio: "1 / 1.06" }}
        />
      </div>
      <div className="p-5 pb-6">
        <p
          className="m-0 mb-2 muted uppercase"
          style={{ fontSize: "var(--step--1)", letterSpacing: "0.08em" }}
        >
          Featured Case Study
        </p>
        <h3
          className="display m-0"
          style={{ fontSize: "var(--step-1)", lineHeight: 1.2 }}
        >
          {project.cardTitle}
        </h3>
      </div>
    </Link>
  </article>
);

export default ProjectCard;