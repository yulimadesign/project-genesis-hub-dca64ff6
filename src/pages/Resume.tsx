import { useEffect } from "react";
import SiteShell from "@/components/SiteShell";
import { siteContent } from "@/data/site";

const Resume = () => {
  useEffect(() => {
    document.title = "Resume | Yulia McCoy";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Download Yulia McCoy's product design resume."
    );
  }, []);

  return (
    <SiteShell>
      <section className="page-wrap" style={{ padding: "6rem 0 3rem" }}>
        <div className="surface" style={{ padding: "3rem" }}>
          <p className="eyebrow">Resume</p>
          <h1
            className="display"
            style={{
              margin: "0 0 1rem",
              maxWidth: "16ch",
              fontSize: "var(--step-3)",
              lineHeight: 1,
            }}
          >
            Resume for product design hiring conversations.
          </h1>
          <p style={{ maxWidth: "42rem" }}>
            Download the latest PDF resume for product design, UX design, and
            research-informed workflow design roles.
          </p>
          <a
            href={siteContent.resumeUrl}
            download
            className="pill-cta focus-ring"
            style={{ marginTop: "1.5rem" }}
          >
            Download resume
          </a>

          <div
            className="grid grid-cols-2 gap-8 max-[720px]:grid-cols-1"
            style={{ marginTop: "2rem" }}
          >
            <section>
              <p className="section-label">Focus</p>
              <ul className="m-0 pl-5">
                <li>Senior Product Designer</li>
                <li>Senior UX Designer</li>
                <li>Research-informed systems and workflow design</li>
              </ul>
            </section>

            <section>
              <p className="section-label">Highlights</p>
              <ul className="m-0 pl-5">
                <li>6+ years across startup, e-commerce, and EdTech product teams</li>
                <li>8x faster content workflow improvements</li>
                <li>27% engagement lift and 28% faster iteration cycles</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default Resume;
