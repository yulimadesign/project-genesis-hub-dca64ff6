import { Link } from "react-router-dom";
import { siteContent } from "@/data/site";

const SiteHeader = () => {
  const { email, resumeUrl } = siteContent;
  return (
    <header
      className="site-header sticky top-0 z-20"
      style={{
        background: "rgba(247, 247, 251, 0.86)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid hsl(var(--border))",
      }}
    >
      <div className="page-wrap">
        <div
          className="flex items-center justify-between gap-6 max-[720px]:gap-3"
          style={{ minHeight: "72px" }}
        >
          <Link
            to="/"
            className="focus-ring text-[1rem]"
            style={{ color: "hsl(var(--foreground))", fontWeight: 500 }}
          >
            Yulia McCoy
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-2">
            <ul className="flex items-center gap-1 m-0 p-0 list-none max-[720px]:hidden">
              <li>
                <Link
                  to="/#projects"
                  className="focus-ring hover:text-coral transition-colors px-3 py-2 rounded-full text-sm"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="focus-ring hover:text-coral transition-colors px-3 py-2 rounded-full text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={resumeUrl}
                  className="focus-ring hover:text-coral transition-colors px-3 py-2 rounded-full text-sm"
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
