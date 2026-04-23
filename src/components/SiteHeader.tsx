import { Link } from "react-router-dom";
import { siteContent } from "@/data/site";

const SiteHeader = () => {
  const { email, resumeUrl } = siteContent;
  return (
    <header className="site-header sticky top-0 z-20 pt-4 max-[720px]:static">
      <div className="page-wrap">
        <div
          className="flex items-center justify-between gap-6 px-5 py-4 max-[720px]:flex-col max-[720px]:items-start max-[720px]:rounded-3xl"
          style={{
            border: "1px solid hsl(213 18% 15% / 0.14)",
            borderRadius: "999px",
            background: "hsl(40 100% 99% / 0.78)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 1rem 2rem -1.5rem hsl(220 25% 12% / 0.08)",
          }}
        >
          <Link
            to="/"
            className="focus-ring text-base font-semibold tracking-wide"
          >
            Yulia McCoy
          </Link>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center justify-end gap-5 m-0 p-0 list-none max-[720px]:justify-start max-[720px]:gap-x-4 max-[720px]:gap-y-2">
              <li>
                <Link to="/#projects" className="focus-ring muted hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring muted hover:text-foreground transition-colors"
                >
                  Resume
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="focus-ring muted hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;