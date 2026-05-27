export interface Metric {
  value: string;
  label: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface Company {
  name: string;
  note?: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface SiteContent {
  headline: string;
  headlineHighlight: string;
  headlineSuffix: string;
  supportingLine: string;
  metrics: Metric[];
  services: Service[];
  bio: string[];
  credibilityCompanies: Company[];
  contactLinks: ContactLink[];
  resumeUrl: string;
  linkedinUrl: string;
  paintingPortfolioUrl: string;
  email: string;
}

export const siteContent: SiteContent = {
  headline: "Design is a",
  headlineHighlight: "growth system",
  headlineSuffix: ".",
  supportingLine:
    "I design product experiences that compound—turning research, structure, and measurable iteration into onboarding, workflows, and journeys teams can scale. No vanity screens. No design for design's sake.",
  metrics: [
    { value: "8x", label: "Faster content workflow" },
    { value: "+27%", label: "Engagement uplift" },
    { value: "−28%", label: "Design iteration time" },
    { value: "6+", label: "Years experience" },
  ],
  services: [
    {
      title: "Onboarding & Activation",
      description:
        "First-run flows that frame decisions clearly so new users reach their first success faster.",
    },
    {
      title: "Workflows & Internal Tools",
      description:
        "Dense operational interfaces restructured around real tasks, hierarchy, and team velocity.",
    },
    {
      title: "Product Systems & UX Strategy",
      description:
        "Research-led journeys, IA, and component patterns that turn ambiguity into a scalable structure.",
    },
  ],
  bio: [
    "With 6+ years of experience, Yulia has shaped onboarding, internal tools, and education products across startup, e-commerce, and EdTech environments.",
    "She brings a research-led process and system-level thinking to teams that need ambiguity turned into a clear path forward.",
  ],
  credibilityCompanies: [
    { name: "StartHub", note: "Startup onboarding and activation" },
    { name: "SberMegaMarket", note: "Complex internal content workflows" },
    { name: "Tetrika", note: "Student product experience in EdTech" },
  ],
  contactLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yulia-mccoy" },
    { label: "Resume", href: "/files/yulia-mccoy-resume.pdf" },
    { label: "View painting portfolio", href: "/art" },
  ],
  resumeUrl: "/files/yulia-mccoy-resume.pdf",
  linkedinUrl: "https://www.linkedin.com/in/yulia-mccoy",
  paintingPortfolioUrl: "/art",
  email: "melikhovau77@gmail.com",
};
