import type { ReactNode } from "react";

interface Props {
  label: string;
  title: string;
  children: ReactNode;
}

const CaseStudySection = ({ label, title, children }: Props) => (
  <section
    className="content-wrap grid gap-8 max-[900px]:grid-cols-1"
    style={{
      gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.4fr)",
      paddingTop: "5rem",
    }}
  >
    <div className="self-start sticky top-28 max-[900px]:static">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
    </div>
    <div className="grid gap-4 [&_p]:m-0 [&_p]:leading-[1.625] [&_ul]:m-0 [&_ul]:pl-5 [&_li]:mb-2 [&_li]:leading-[1.625]">
      {children}
    </div>
  </section>
);

export default CaseStudySection;
