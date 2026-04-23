import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface Props {
  projects: Project[];
}

const ProjectNav = ({ projects }: Props) => (
  <nav
    className="content-wrap"
    aria-label="Other featured projects"
    style={{ marginTop: "6rem" }}
  >
    <p className="section-label">Continue Browsing</p>
    <div className="grid grid-cols-2 gap-4 max-[720px]:grid-cols-1">
      {projects.map((project) => (
        <Link
          key={project.slug}
          to={`/projects/${project.slug}`}
          className="surface focus-ring grid gap-1.5 p-6 transition hover:-translate-y-0.5 hover:border-primary/30"
        >
          <span
            className="display"
            style={{ fontSize: "var(--step-1)", lineHeight: 1.2 }}
          >
            {project.cardTitle}
          </span>
          <span className="muted">{project.summary}</span>
        </Link>
      ))}
    </div>
  </nav>
);

export default ProjectNav;