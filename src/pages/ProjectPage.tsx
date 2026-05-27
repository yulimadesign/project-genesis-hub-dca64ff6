import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import CaseStudySection from "@/components/CaseStudySection";
import MetricsStrip from "@/components/MetricsStrip";
import ProjectNav from "@/components/ProjectNav";
import SiteShell from "@/components/SiteShell";
import type {
  DesignMove,
  ImpactHighlight,
  OnboardingFlowComparison,
  ProblemInsight,
  ResearchSignal,
} from "@/data/projects";
import { getProjectBySlug, getProjects } from "@/data/projects";

const ProblemInsightsTable = ({ rows }: { rows: ProblemInsight[] }) => (
  <div className="surface overflow-hidden" style={{ borderRadius: "var(--radius-xl)" }}>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr style={{ background: "hsl(var(--coral-soft))" }}>
            <th className="px-5 py-4 text-sm font-medium" scope="col">
              Issue
            </th>
            <th className="px-5 py-4 text-sm font-medium" scope="col">
              Signal
            </th>
            <th className="px-5 py-4 text-sm font-medium" scope="col">
              Business risk
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.issue} className="border-t border-border">
              <th
                className="px-5 py-4 align-top text-base font-medium"
                scope="row"
                style={{ color: "hsl(var(--coral-text))" }}
              >
                {row.issue}
              </th>
              <td className="px-5 py-4 align-top text-sm leading-6 text-muted-foreground">
                {row.signal}
              </td>
              <td className="px-5 py-4 align-top text-sm leading-6 text-muted-foreground">
                {row.businessRisk}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const FlowSteps = ({
  label,
  tone,
  steps,
}: {
  label: string;
  tone: "before" | "after";
  steps: string[];
}) => (
  <div className="surface p-5" style={{ borderRadius: "var(--radius-xl)" }}>
    <div className="mb-5 flex items-baseline justify-between gap-4">
      <h3 className="m-0 text-lg font-medium">{label}</h3>
      <span
        className="rounded-full px-3 py-1 text-sm font-medium"
        style={{
          background: tone === "after" ? "hsl(var(--coral-soft))" : "hsl(var(--secondary))",
          color: tone === "after" ? "hsl(var(--coral-text))" : "hsl(var(--muted-foreground))",
        }}
      >
        {steps.length} steps
      </span>
    </div>
    <ol className="flow-steps m-0 grid list-none gap-3 p-0">
      {steps.map((step, index) => (
        <li
          key={`${label}-${step}`}
          className="flow-step grid gap-2"
          style={{
            ["--step-color" as string]:
              tone === "after" ? "hsl(var(--coral))" : "hsl(var(--tertiary-foreground))",
          }}
        >
          <span className="flow-step-number" aria-hidden>
            {index + 1}
          </span>
          <span className="flow-step-label">{step}</span>
        </li>
      ))}
    </ol>
  </div>
);

const OnboardingComparison = ({ comparison }: { comparison: OnboardingFlowComparison }) => (
  <div className="grid gap-5">
    <div
      className="surface flex flex-wrap items-center justify-between gap-4 p-5"
      style={{
        background: "hsl(var(--coral-soft))",
        borderColor: "hsl(var(--coral-subtle))",
        borderRadius: "var(--radius-xl)",
      }}
    >
      <p className="m-0 text-base font-medium" style={{ color: "hsl(var(--coral-text))" }}>
        Reduced onboarding steps
      </p>
      <p className="m-0 text-3xl font-medium" style={{ color: "hsl(var(--foreground))" }}>
        {comparison.before.length} <span className="text-muted-foreground">to</span>{" "}
        <span style={{ color: "hsl(var(--coral-text))" }}>{comparison.after.length}</span>
      </p>
    </div>
    <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
      <FlowSteps label="Before" tone="before" steps={comparison.before} />
      <FlowSteps label="After" tone="after" steps={comparison.after} />
    </div>
  </div>
);

const ResearchSignalGrid = ({ signals }: { signals: ResearchSignal[] }) => (
  <div className="grid grid-cols-3 gap-3 max-[760px]:grid-cols-1">
    {signals.map((signal) => (
      <article
        key={signal.label}
        className="surface p-5"
        style={{ borderRadius: "var(--radius-xl)" }}
      >
        <p className="m-0 text-3xl font-medium" style={{ color: "hsl(var(--coral-text))" }}>
          {signal.value}
        </p>
        <h3 className="m-0 mt-3 text-base font-medium">{signal.label}</h3>
        <p className="m-0 mt-2 text-sm leading-6 text-muted-foreground">{signal.note}</p>
      </article>
    ))}
  </div>
);

const DesignMoveGrid = ({ moves }: { moves: DesignMove[] }) => (
  <div className="grid gap-3">
    {moves.map((move, index) => (
      <article
        key={move.from}
        className="design-move-card surface grid gap-4 p-5"
        style={{
          borderRadius: "var(--radius-xl)",
        }}
      >
        <div>
          <p className="section-label m-0">Before</p>
          <p className="m-0 mt-2 text-sm leading-6 text-muted-foreground">{move.from}</p>
        </div>
        <div
          className="self-center rounded-full px-3 py-1 text-sm font-medium max-[760px]:w-fit"
          style={{
            background: "hsl(var(--coral-soft))",
            color: "hsl(var(--coral-text))",
          }}
        >
          {index + 1}
        </div>
        <div>
          <p className="section-label m-0" style={{ color: "hsl(var(--coral-text))" }}>
            After
          </p>
          <p className="m-0 mt-2 text-sm leading-6">{move.to}</p>
        </div>
      </article>
    ))}
  </div>
);

const ImpactHighlightGrid = ({ highlights }: { highlights: ImpactHighlight[] }) => (
  <div className="grid grid-cols-3 gap-3 max-[760px]:grid-cols-1">
    {highlights.map((item) => (
      <article
        key={item.label}
        className="surface p-5"
        style={{
          background: "hsl(var(--coral-soft))",
          borderColor: "hsl(var(--coral-subtle))",
          borderRadius: "var(--radius-xl)",
        }}
      >
        <p className="m-0 text-2xl font-medium" style={{ color: "hsl(var(--coral-text))" }}>
          {item.value}
        </p>
        <h3 className="m-0 mt-3 text-base font-medium">{item.label}</h3>
        <p className="m-0 mt-2 text-sm leading-6 text-muted-foreground">{item.note}</p>
      </article>
    ))}
  </div>
);

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
        className="case-hero page-wrap grid items-center gap-8"
      >
        <div className="reveal">
          <p className="eyebrow">Case Study</p>
          <h1 className="case-hero-title display m-0">
            {project.pageTitle}
          </h1>
          <p
            style={{
              margin: "1.5rem 0 0.75rem",
              maxWidth: "36rem",
              fontSize: "var(--step-1)",
              lineHeight: 1.6,
            }}
          >
            {project.summary}
          </p>
          <p className="muted m-0" style={{ maxWidth: "36rem" }}>
            {project.productDescription}
          </p>
        </div>

        <div
          className="case-cover surface overflow-hidden"
          style={{ borderRadius: "var(--radius-xl)", background: "hsl(var(--secondary))" }}
        >
          <img
            src={project.coverImage}
            alt={project.altText}
            loading="eager"
            className="w-full"
            style={{ borderRadius: "var(--radius-lg)" }}
          />
        </div>
      </section>

      <MetricsStrip metrics={project.metrics} />

      <section className="case-outcome content-wrap">
        <p
          className="muted m-0"
          style={{ maxWidth: "42rem", fontSize: "var(--step-1)" }}
        >
          {project.outcomeSentence}
        </p>
      </section>

      <CaseStudySection label="Challenge" title="The problem to solve">
        <p>{project.problemStatement}</p>
        {project.problemInsights && (
          <ProblemInsightsTable rows={project.problemInsights} />
        )}
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
        {project.researchSignals ? (
          <ResearchSignalGrid signals={project.researchSignals} />
        ) : (
          <ul>
            {project.researchMethods.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
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
        {project.onboardingFlowComparison && (
          <OnboardingComparison comparison={project.onboardingFlowComparison} />
        )}
      </CaseStudySection>

      <CaseStudySection
        label="Design Rationale"
        title="Decisions that clarified the product"
      >
        {project.designMoves ? (
          <DesignMoveGrid moves={project.designMoves} />
        ) : (
          <ul>
            {project.designRationale.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
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
        {project.impactHighlights ? (
          <ImpactHighlightGrid highlights={project.impactHighlights} />
        ) : (
          <ul>
            {project.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </CaseStudySection>

      <CaseStudySection label="Final UI" title="Key screens">
        <div className="grid grid-cols-2 gap-3 max-[760px]:grid-cols-1">
          {project.finalScreens.map((screen) => (
            <figure
              key={screen.src}
              className="surface overflow-hidden m-0"
              style={{
                padding: "0.75rem",
                borderRadius: "var(--radius-lg)",
                background: "hsl(var(--secondary))",
              }}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                loading="lazy"
                className="w-full"
                style={{ borderRadius: "var(--radius-md)" }}
              />
              {screen.caption && (
                <figcaption className="muted mt-2 px-1 text-sm leading-5">
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
