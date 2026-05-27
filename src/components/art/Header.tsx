import { Link } from "react-router-dom";
import { artContact } from "@/data/artworks";

const Header = () => (
  <header
    className="sticky top-0 z-30 border-b"
    style={{
      background: "rgba(247, 247, 251, 0.9)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      borderColor: "hsl(var(--border))",
    }}
  >
    <div className="page-wrap">
      <div className="flex min-h-[72px] items-center justify-between gap-5">
        <Link to="/" className="focus-ring text-base font-medium text-foreground">
          Yulia McCoy
        </Link>
        <nav aria-label="Artist portfolio navigation" className="flex items-center gap-1">
          <Link
            to="/#projects"
            className="focus-ring hidden rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Work
          </Link>
          <Link
            to="/artist-portfolio"
            aria-current="page"
            className="focus-ring hidden rounded-full px-3 py-2 text-sm text-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Artist Portfolio
          </Link>
          <Link
            to="/resume"
            className="focus-ring hidden rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Resume
          </Link>
          <a href={`mailto:${artContact.email}`} className="pill-ghost focus-ring text-sm">
            Contact
          </a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
