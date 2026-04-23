import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import CaseStudySection from "@/components/CaseStudySection";
import MetricsStrip from "@/components/MetricsStrip";
import ProjectNav from "@/components/ProjectNav";
import SiteShell from "@/components/SiteShell";
import { getProjectBySlug, getProjects } from "@/data/projects";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const others = project
    ? getProjects().filter((p) => p.slug !== project.slug)
    : [];

  useEffect(() => {
    if (!project) return;
    document.title = `${project.pageTitle} | Yulia McCoy`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", project.summary);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [project]);

  if (!project) return <Navigate to="/404" replace />;

  return (
    <SiteShell>
      <section
        className="page-wrap grid items-center gap-8 max-[900px]:grid-cols-1"
        style={{
          gridTemplateColumns: "minmax(0,1.15fr) minmax(18rem,1fr)",
          padding: "4.5rem 0 3rem",
        }}
      >
        <div>
          <p className="eyebrow">Case Study</p>
          <h1
            className="display m-0"
            style={{ fontSize: "var(--step-4)", lineHeight: 1 }}
          >
            {project.pageTitle}
          </h1>
          <p
            style={{
              margin: "1.5rem 0 0.75rem",
              maxWidth: "36rem",
              fontSize: "var(--step-1)",
            }}
          >
            {project.summary}
          </p>
          <p className="muted m-0" style={{ maxWidth: "36rem" }}>
            {project.productDescription}
          </p>
        </div>

        <div className="surface overflow-hidden" style={{ padding: "1rem" }}>
          <img
            src={project.coverImage}
            alt={project.altText}
            loading="eager"
            className="w-full"
            style={{ borderRadius: "1.2rem" }}
          />
        </div>
      </section>

      <MetricsStrip metrics={project.metrics} />

      <section className="content-wrap" style={{ marginTop: "-1.25rem" }}>
        <p
          className="muted m-0"
          style={{ maxWidth: "42rem", fontSize: "var(--step-1)" }}
        >
          {project.outcomeSentence}
        </p>
      </section>

      <CaseStudySection label="Challenge" title="The problem to solve">
        <p>{project.problemStatement}</p>
      </CaseStudySection>

      <CaseStudySection
        label="Goal and Role"
        title="What success needed to look like"
      >
        <p>{project.goal}</p>
        <p className="muted">
          <strong>Role:</strong> {project.role}
        </p>
      </CaseStudySection>

      <CaseStudySection
        label="Research"
        title="Inputs that shaped the direction"
      >
        <ul>
          {project.researchMethods.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection
        label="Process"
        title="Artifacts that turned ambiguity into structure"
      >
        <ul>
          {project.processArtifacts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection
        label="Design Rationale"
        title="Decisions that clarified the product"
      >
        <ul>
          {project.designRationale.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection label="Solution" title="The final approach">
        <ul>
          {project.solution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection
        label="Impact"
        title="Business and product outcomes"
      >
        <ul>
          {project.impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection label="Final UI" title="Key screens">
        <div className="grid gap-4">
          {project.finalScreens.map((screen) => (
            <figure
              key={screen.src}
              className="surface overflow-hidden m-0"
              style={{ padding: "1rem" }}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                loading="lazy"
                className="w-full"
                style={{ borderRadius: "1.2rem" }}
              />
              {screen.caption && (
                <figcaption className="muted mt-3 px-1">
                  {screen.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        label="Reflection"
        title="What this work reinforced"
      >
        <p>{project.reflection}</p>
      </CaseStudySection>

      <ProjectNav projects={others} />
    </SiteShell>
  );
};

export default ProjectPage;