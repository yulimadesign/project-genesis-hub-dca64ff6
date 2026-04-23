import { Link } from "react-router-dom";
import { siteContent } from "@/data/site";

const SiteFooter = () => {
  const { email, contactLinks } = siteContent;
  return (
    <footer
      className="site-footer surface content-wrap"
      id="contact"
      style={{ margin: "6rem auto 3rem", padding: "3rem" }}
    >
      <div className="grid items-end gap-12 max-[720px]:grid-cols-1" style={{ gridTemplateColumns: "minmax(0,1.8fr) minmax(16rem,1fr)" }}>
        <div className="grid gap-3">
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let’s talk about product design that makes complex work feel obvious.
          </h2>
          <a
            className="focus-ring underline underline-offset-4 decoration-1"
            href={`mailto:${email}`}
            style={{ fontSize: "var(--step-1)" }}
          >
            {email}
          </a>
        </div>

        <ul className="grid gap-3 justify-items-start m-0 p-0 list-none">
          {contactLinks.map((link) => {
            const isInternal = link.href.startsWith("/");
            const className =
              "focus-ring muted hover:text-foreground hover:translate-x-0.5 transition";
            return (
              <li key={link.label}>
                {isInternal ? (
                  <Link to={link.href} className={className}>
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default SiteFooter;