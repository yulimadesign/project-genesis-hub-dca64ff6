import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MetricsStrip from "@/components/MetricsStrip";
import ProjectCard from "@/components/ProjectCard";
import SiteShell from "@/components/SiteShell";
import { getProjects } from "@/data/projects";
import { siteContent } from "@/data/site";

const Index = () => {
  const location = useLocation();
  const projects = getProjects();

  useEffect(() => {
    document.title = "Yulia McCoy | Senior Product Designer Portfolio";
    const desc =
      "A focused portfolio for research-driven product design, measurable outcomes, and complex systems made clear.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", desc);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  return (
    <SiteShell>
      <section
        className="page-wrap grid items-start gap-8 max-[900px]:grid-cols-1"
        style={{
          gridTemplateColumns: "minmax(0,1.5fr) minmax(18rem,0.95fr)",
          padding: "4.5rem 0 3rem",
        }}
      >
        <div>
          <p className="eyebrow">Senior Product Designer Portfolio</p>
          <h1
            className="display m-0"
            style={{
              maxWidth: "11ch",
              fontSize: "clamp(3.1rem, 2.2rem + 3.9vw, 5rem)",
              lineHeight: 0.98,
            }}
          >
            {siteContent.headline}
          </h1>
          <p
            className="muted"
            style={{
              margin: "1.5rem 0 0",
              maxWidth: "34rem",
              fontSize: "var(--step-1)",
            }}
          >
            {siteContent.supportingLine}
          </p>
        </div>

        <div className="surface" style={{ padding: "1.3rem", marginTop: "3.2rem" }}>
          <p className="section-label">Featured Work</p>
          <div className="grid gap-2.5">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="focus-ring flex items-center justify-between rounded-2xl px-4 py-3.5 transition hover:translate-x-0.5 hover:text-foreground"
                style={{
                  background: "hsl(0 0% 100% / 0.52)",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                <span>{project.cardTitle}</span>
                <span className="text-primary">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MetricsStrip metrics={siteContent.metrics} />

      <section
        className="page-wrap"
        id="projects"
        style={{ paddingBottom: "4.5rem", scrollMarginTop: "6rem" }}
      >
        <div style={{ maxWidth: "44rem", marginBottom: "2rem" }}>
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Selected case studies that show structure, research depth, and measurable
            outcomes.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="content-wrap" style={{ paddingBottom: "1.5rem" }}>
        <div
          className="surface grid gap-8 max-[900px]:grid-cols-1"
          style={{
            gridTemplateColumns: "minmax(0,1.4fr) minmax(16rem,0.9fr)",
            padding: "2rem",
          }}
        >
          <div className="grid gap-4">
            <p className="section-label">Profile</p>
            {siteContent.bio.map((paragraph, i) => (
              <p
                key={i}
                className="m-0 muted"
                style={{ maxWidth: "42rem" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <p className="section-label">Selected Experience</p>
            <ul className="grid gap-3 m-0 p-0 list-none">
              {siteContent.credibilityCompanies.map((c) => (
                <li key={c.name} className="grid gap-0.5">
                  <strong>{c.name}</strong>
                  {c.note && (
                    <span
                      className="muted"
                      style={{ fontSize: "var(--step--1)" }}
                    >
                      {c.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default Index;
