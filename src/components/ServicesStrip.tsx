import type { Service } from "@/data/site";

interface Props {
  services: Service[];
}

const ServicesStrip = ({ services }: Props) => (
  <section
    id="services"
    className="page-wrap"
    style={{ padding: "1.5rem 0 4.5rem", scrollMarginTop: "6rem" }}
  >
    <div style={{ maxWidth: "44rem", marginBottom: "2.5rem" }}>
      <p className="eyebrow">Services</p>
      <h2 className="display" style={{ fontSize: "var(--step-3)", lineHeight: 1.05, margin: 0 }}>
        Product design that drives <span className="coral-text">measurable</span> growth.
      </h2>
      <p className="muted" style={{ marginTop: "1rem", maxWidth: "36rem" }}>
        I partner with founders and product teams to turn complex experiences into systems that produce predictable, measurable results.
      </p>
    </div>

    <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
      {services.map((service, i) => (
        <article
          key={service.title}
          className="surface p-7 reveal"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          <div
            aria-hidden
            style={{
              width: "2.4rem",
              height: "2.4rem",
              borderRadius: "999px",
              background: "var(--gradient-coral)",
              boxShadow: "var(--shadow-coral)",
              marginBottom: "1.25rem",
            }}
          />
          <h3
            className="display m-0 mb-2"
            style={{ fontSize: "var(--step-1)", lineHeight: 1.2 }}
          >
            {service.title}
          </h3>
          <p className="m-0 muted">{service.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default ServicesStrip;
