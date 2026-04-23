import type { ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

interface Props {
  children: ReactNode;
}

const SiteShell = ({ children }: Props) => (
  <div className="relative min-h-screen">
    <a
      className="absolute left-4 -top-12 px-4 py-3 rounded-full bg-foreground text-background transition-all focus-visible:top-4 z-30"
      href="#main"
    >
      Skip to content
    </a>
    <SiteHeader />
    <main id="main">{children}</main>
    <SiteFooter />
  </div>
);

export default SiteShell;