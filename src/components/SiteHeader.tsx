import { Link } from "react-router-dom";
import { siteContent } from "@/data/site";

const SiteHeader = () => {
  const { email, resumeUrl } = siteContent;
  return (
    <header className="site-header sticky top-0 z-20 pt-4">
      <div className="page-wrap">
        <div
          className="flex items-center justify-between gap-6 pl-6 pr-2 py-2 max-[720px]:gap-3"
          style={{
            border: "1px solid hsl(220 18% 12% / 0.10)",
            borderRadius: "999px",
            background: "hsl(0 0% 100% / 0.82)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 0.6rem 1.6rem -1rem hsl(220 25% 12% / 0.12)",
          }}
        >
          <Link
            to="/"
            className="focus-ring display text-[1.05rem]"
            style={{ fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            Yulia<span className="coral-text">.</span>McCoy
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-2">
            <ul className="flex items-center gap-1 m-0 p-0 list-none max-[720px]:hidden">
              <li>
                <Link
                  to="/#projects"
                  className="focus-ring muted hover:text-foreground transition-colors px-3 py-2 rounded-full text-sm"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="focus-ring muted hover:text-foreground transition-colors px-3 py-2 rounded-full text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={resumeUrl}
                  className="focus-ring muted hover:text-foreground transition-colors px-3 py-2 rounded-full text-sm"
                >
                  Resume
                </Link>
              </li>
            </ul>
            <a
              href={`mailto:${email}`}
              className="pill-cta focus-ring text-sm"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;