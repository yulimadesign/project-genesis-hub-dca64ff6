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

export interface SiteContent {
  headline: string;
  supportingLine: string;
  metrics: Metric[];
  bio: string[];
  credibilityCompanies: Company[];
  contactLinks: ContactLink[];
  resumeUrl: string;
  linkedinUrl: string;
  paintingPortfolioUrl: string;
  email: string;
}

export const siteContent: SiteContent = {
  headline:
    "Designing complex product systems with clarity, structure, and measurable momentum.",
  supportingLine:
    "Focused product and UX design for teams that need onboarding, workflows, and user journeys to feel calm, legible, and ready to scale.",
  metrics: [
    { value: "8x faster", label: "content workflow" },
    { value: "27% increase", label: "engagement" },
    { value: "28% reduction", label: "design iteration time" },
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
    { label: "Resume", href: "/resume" },
    { label: "View painting portfolio", href: "https://example.com/painting-portfolio" },
  ],
  resumeUrl: "/resume",
  linkedinUrl: "https://www.linkedin.com/in/yulia-mccoy",
  paintingPortfolioUrl: "https://example.com/painting-portfolio",
  email: "yulia.mccoy.portfolio@example.com",
};