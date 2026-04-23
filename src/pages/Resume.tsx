import { useEffect } from "react";
import SiteShell from "@/components/SiteShell";

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
      "Resume snapshot and availability for product design roles."
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
            Resume snapshot for product design hiring conversations.
          </h1>
          <p style={{ maxWidth: "42rem" }}>
            This route is a lightweight resume destination for the MVP so navigation
            can open in a new tab without waiting on a final PDF export. Replace it
            later with a hosted PDF if preferred.
          </p>

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