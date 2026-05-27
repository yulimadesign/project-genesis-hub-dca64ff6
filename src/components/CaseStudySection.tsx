import type { ReactNode } from "react";

interface Props {
  label: string;
  title: string;
  children: ReactNode;
}

const CaseStudySection = ({ label, title, children }: Props) => (
  <section
    className="case-section content-wrap grid gap-8"
  >
    <div className="self-start sticky top-28 max-[900px]:static">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
    </div>
    <div className="grid gap-4 [&_p]:m-0 [&_p]:leading-[1.625] [&_ul]:m-0 [&_ul]:grid [&_ul]:list-none [&_ul]:gap-3 [&_ul]:p-0 [&_li]:m-0 [&_li]:leading-[1.625]">
      {children}
    </div>
  </section>
);

export default CaseStudySection;
