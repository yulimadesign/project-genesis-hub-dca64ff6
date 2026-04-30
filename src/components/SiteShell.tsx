import type { ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

interface Props {
  children: ReactNode;
}

const SiteShell = ({ children }: Props) => (
  <div className="relative min-h-screen">
    <SiteHeader />
    <main id="main">{children}</main>
    <SiteFooter />
  </div>
);

export default SiteShell;
