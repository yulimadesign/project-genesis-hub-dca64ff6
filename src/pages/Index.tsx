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
      "Research-driven product design that compounds — onboarding, workflows, and journeys built for measurable, scalable growth.";
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
      {/* Hero */}
      <section
        className="home-hero page-wrap"
      >
        <div className="grid gap-8 max-[900px]:gap-8" style={{ maxWidth: "53.75rem" }}>
          <div className="reveal">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{
                background: "hsl(var(--coral-soft))",
                border: "1px solid hsl(var(--coral-subtle))",
                color: "hsl(var(--coral-text))",
                fontSize: "0.8125rem",
                lineHeight: "1.125rem",
                fontWeight: 500,
              }}
            >
              <span
                aria-hidden
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  borderRadius: "999px",
                  background: "hsl(var(--coral))",
                }}
              />
              Product Design & UX Strategy
            </span>
          </div>

          <h1
            className="display reveal reveal-2 m-0"
            style={{
              fontSize: "var(--step-4)",
              lineHeight: 1.125,
              maxWidth: "16ch",
            }}
          >
            {siteContent.headline}{" "}
            <span className="coral-underline">{siteContent.headlineHighlight}</span>
            {siteContent.headlineSuffix}
          </h1>

          <p
            className="muted reveal reveal-3 m-0"
            style={{
              maxWidth: "42.5rem",
              fontSize: "var(--step-1)",
              lineHeight: 1.6,
            }}
          >
            {siteContent.supportingLine}
          </p>

          <div className="mobile-action-stack reveal reveal-4 flex flex-wrap items-center gap-3">
            <Link to="/#projects" className="pill-cta focus-ring">
              View Case Studies
              <span aria-hidden>→</span>
            </Link>
            <a href={`mailto:${siteContent.email}`} className="pill-ghost focus-ring">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <MetricsStrip metrics={siteContent.metrics} />

      {/* Projects */}
      <section
        className="page-wrap"
        id="projects"
        style={{ paddingBottom: "5rem", scrollMarginTop: "6rem" }}
      >
        <div
          className="flex items-end justify-between gap-6 max-[720px]:flex-col max-[720px]:items-start"
          style={{ marginBottom: "2.5rem" }}
        >
          <div style={{ maxWidth: "44rem" }}>
            <p className="eyebrow">Portfolio</p>
            <h2
              className="display m-0"
              style={{ fontSize: "var(--step-2)", lineHeight: 1.22 }}
            >
              Selected <span className="coral-text">work</span>
            </h2>
            <p className="muted" style={{ marginTop: "0.75rem" }}>
              Selected case studies with structure, research depth, and measurable outcomes.
            </p>
          </div>
          <Link to="/#about" className="pill-ghost focus-ring text-sm">
            About Yulia →
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[1000px]:grid-cols-2 max-[720px]:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="content-wrap"
        style={{ paddingBottom: "5rem", scrollMarginTop: "6rem" }}
      >
        <div
          className="about-panel surface grid gap-10"
        >
          <div className="grid gap-4">
            <p className="eyebrow">About</p>
            <h2
              className="display m-0 mb-2"
              style={{ fontSize: "var(--step-2)", lineHeight: 1.22 }}
            >
              A research-led approach to <span className="coral-text">complex products</span>.
            </h2>
            {siteContent.bio.map((paragraph, i) => (
              <p
                key={i}
                className="m-0 muted"
                style={{ maxWidth: "42rem", lineHeight: 1.65 }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <p className="section-label">Selected Experience</p>
            <ul className="grid gap-4 m-0 p-0 list-none">
              {siteContent.credibilityCompanies.map((c) => (
                <li
                  key={c.name}
                  className="grid gap-0.5 pl-4"
                  style={{ borderLeft: "2px solid hsl(var(--coral))" }}
                >
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

      {/* Closing CTA */}
      <section className="content-wrap" style={{ paddingBottom: "2rem" }}>
        <div
          className="home-cta text-center grid place-items-center gap-5 max-[720px]:place-items-start max-[720px]:text-left"
          style={{
            background: "hsl(var(--foreground))",
            borderRadius: "var(--radius-xl)",
            color: "hsl(var(--background))",
          }}
        >
          <p className="eyebrow m-0" style={{ color: "hsl(var(--coral-subtle))" }}>
            Let's Work Together
          </p>
          <h2
            className="display m-0"
            style={{
              fontSize: "var(--step-3)",
              lineHeight: 1.16,
              maxWidth: "22ch",
            }}
          >
            Ready to design a{" "}
            <span style={{ color: "hsl(var(--coral-subtle))" }}>product system</span> that scales?
          </h2>
          <p className="m-0" style={{ maxWidth: "34rem", color: "hsl(var(--background) / 0.72)" }}>
            Let's talk about how research-led product design can drive measurable outcomes for your team.
          </p>
          <a
            href={`mailto:${siteContent.email}`}
            className="pill-cta focus-ring mt-2"
          >
            Start a Conversation →
          </a>
        </div>
      </section>
    </SiteShell>
  );
};

export default Index;
