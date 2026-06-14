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
        <a
          href="https://ymccoy.com/art"
          className="focus-ring text-base font-medium text-foreground"
        >
          Yulia McCoy
        </a>
        <nav aria-label="Artist portfolio navigation" className="flex items-center gap-1">
          <a href={`mailto:${artContact.email}`} className="pill-ghost focus-ring text-sm">
            Contact
          </a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
