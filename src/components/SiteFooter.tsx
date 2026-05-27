import { Link } from "react-router-dom";
import { siteContent } from "@/data/site";

const SiteFooter = () => {
  const { email, contactLinks } = siteContent;
  const year = new Date().getFullYear();
  return (
    <footer
      className="site-footer content-wrap"
      id="contact"
      style={{ margin: "3rem auto 2rem", padding: "2.5rem 0 0" }}
    >
      <div
        className="flex items-center justify-between gap-6 flex-wrap pt-6"
        style={{ borderTop: "1px solid hsl(var(--border))" }}
      >
        <div className="flex items-center gap-3">
          <span style={{ fontWeight: 500 }}>
            Yulia McCoy
          </span>
          <span className="muted text-sm">
            © {year} — Senior Product Designer
          </span>
        </div>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 m-0 p-0 list-none text-sm">
          <li>
            <a
              href={`mailto:${email}`}
              className="focus-ring muted hover:text-foreground transition"
            >
              {email}
            </a>
          </li>
          {contactLinks.map((link) => {
            const isInternal = link.href.startsWith("/");
            const isDownload = link.href.endsWith(".pdf");
            const className =
              "focus-ring muted hover:text-foreground transition";
            return (
              <li key={link.label}>
                {isDownload ? (
                  <a href={link.href} download className={className}>
                    {link.label}
                  </a>
                ) : isInternal ? (
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
