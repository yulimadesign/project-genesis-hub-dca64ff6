import type { Metric } from "./site";

export interface FinalScreen {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  order: number;
  cardTitle: string;
  pageTitle: string;
  summary: string;
  productDescription: string;
  metrics: Metric[];
  outcomeSentence: string;
  problemStatement: string;
  goal: string;
  role: string;
  researchMethods: string[];
  processArtifacts: string[];
  designRationale: string[];
  solution: string[];
  impact: string[];
  finalScreens: FinalScreen[];
  reflection: string;
  coverImage: string;
  altText: string;
}

export const projects: Project[] = [
  {
    slug: "starthub-user-onboarding",
    order: 1,
    cardTitle: "StartHub — User Onboarding",
    pageTitle:
      "Structuring startup onboarding so new users could move with confidence",
    summary:
      "A startup onboarding redesign that used research and decision framing to make first-run flows easier to understand and easier to complete.",
    productDescription:
      "StartHub is a product onboarding experience for early-stage teams setting up their workspace and first core workflows.",
    metrics: [
      { value: "Faster activation", label: "clearer first-run decisions" },
      { value: "Higher completion", label: "onboarding flow performance" },
    ],
    outcomeSentence:
      "By restructuring the flow around user intent, the onboarding journey became easier to scan, easier to trust, and much more resilient for new users.",
    problemStatement:
      "New users were entering a multi-step onboarding path without enough context, which made setup feel dense and unpredictable. Teams were stalling before they could reach value.",
    goal:
      "Reduce early confusion, help users understand what each step unlocks, and move them into a successful first session with less hesitation.",
    role:
      "End-to-end product design covering research synthesis, flow design, wireframes, UI direction, and validation.",
    researchMethods: [
      "Interviewed new users to understand where confidence dropped during account setup.",
      "Reviewed onboarding analytics to isolate where completion rates fell between steps.",
      "Ran usability tests on early flow concepts to compare comprehension and pace.",
    ],
    processArtifacts: [
      "Journey map showing uncertainty spikes across the original onboarding sequence.",
      "Step-by-step flow model clarifying when guidance, choice, and confirmation were actually needed.",
      "Before-and-after wireframes to simplify decision density and make progress legible.",
    ],
    designRationale: [
      "Reframed each step around the question the user was trying to answer, not the system requirement the product needed to collect.",
      "Reduced visual competition so the primary action and supporting context were never fighting for attention.",
      "Added clearer state cues so users could understand where they were and what came next.",
    ],
    solution: [
      "A guided onboarding flow with clearer sequencing, lighter UI, and stronger progress language.",
      "Context modules that explained why each setup choice mattered before asking for action.",
      "Confirmation moments that gave users confidence before moving deeper into the product.",
    ],
    impact: [
      "Improved onboarding clarity for first-time users navigating a new product model.",
      "Reduced the amount of explanation required from the team during activation support.",
      "Created a stronger first impression of the product as structured and trustworthy.",
    ],
    finalScreens: [
      {
        src: "/projects/starthub/final-01.svg",
        alt: "StartHub onboarding checklist and workspace setup screen.",
        caption: "Progress-first onboarding with lighter cognitive load.",
      },
      {
        src: "/projects/starthub/final-02.svg",
        alt: "StartHub step detail screen with contextual guidance and simplified actions.",
        caption: "Decision framing that explains the why before the action.",
      },
    ],
    reflection:
      "The project reinforced that onboarding quality is often less about adding more instruction and more about sequencing information in the order people can actually use it.",
    coverImage: "/projects/starthub/cover.svg",
    altText:
      "StartHub onboarding concept card with interface panels and typography.",
  },
  {
    slug: "sbermegamarket-content-creation-app",
    order: 2,
    cardTitle: "SberMegaMarket — Content Creation App",
    pageTitle:
      "Designing an internal content tool that turned operational complexity into a repeatable workflow",
    summary:
      "An internal content creation tool redesign focused on system thinking, production speed, and clearer handoffs for teams managing high-volume merchandising content.",
    productDescription:
      "SberMegaMarket's content creation app supports internal teams building and maintaining structured product and campaign content at scale.",
    metrics: [
      { value: "8x faster", label: "content workflow" },
      { value: "Cleaner handoff", label: "fewer production bottlenecks" },
    ],
    outcomeSentence:
      "The new system turned a fragmented operational flow into a structured workspace that helped teams move faster without losing consistency.",
    problemStatement:
      "Teams were managing high-volume content work through a workflow that was fragmented, hard to scan, and expensive to repeat. Creating or updating content required too many manual decisions and too much back-and-forth.",
    goal:
      "Build a clearer internal tool that would reduce operational friction, speed up content production, and support more consistent outputs.",
    role:
      "Product designer responsible for research, workflow modeling, interface design, and alignment around system behavior.",
    researchMethods: [
      "Interviewed operational stakeholders to understand the real bottlenecks across content creation and approval.",
      "Analyzed task flows to surface repeated manual steps and avoidable switching costs.",
      "Tested workflow concepts with internal users to see where structure improved speed versus where it added friction.",
    ],
    processArtifacts: [
      "Workflow maps identifying repeated handoff pain points and state ambiguity.",
      "Content creation framework showing where templates, defaults, and review states could remove manual work.",
      "UI explorations comparing flexible creation against guided, systemized workflows.",
    ],
    designRationale: [
      "Prioritized repeatability so the tool could support high-volume use without demanding expert memory every time.",
      "Grouped actions by workflow state to reduce context switching across creation, review, and publishing.",
      "Used stronger hierarchy to make the system readable even when screens carried dense operational content.",
    ],
    solution: [
      "A modular content workspace with clearer stages, reusable patterns, and better default behavior.",
      "Simplified creation surfaces that balanced flexibility with guardrails for consistency.",
      "Improved visibility into review state and next actions across the workflow.",
    ],
    impact: [
      "Reduced the time needed to create and structure content through a more guided workflow.",
      "Helped teams work with higher confidence and less operational drift.",
      "Created a stronger internal product foundation for future system scaling.",
    ],
    finalScreens: [
      {
        src: "/projects/sbermegamarket/final-01.svg",
        alt: "SberMegaMarket content creation dashboard with workflow lanes and task modules.",
        caption: "A clearer command surface for a dense internal process.",
      },
      {
        src: "/projects/sbermegamarket/final-02.svg",
        alt: "SberMegaMarket content editor with metadata panels and system defaults.",
        caption: "Guided creation patterns that accelerate repeat work.",
      },
    ],
    reflection:
      "This work underscored how much internal tools benefit from product-quality design when the real challenge is sustained operational clarity, not just visual polish.",
    coverImage: "/projects/sbermegamarket/cover.svg",
    altText:
      "SberMegaMarket internal workflow card with interface panes and editorial typography.",
  },
  {
    slug: "tetrika-student-dashboard",
    order: 3,
    cardTitle: "Tetrika — Student Dashboard",
    pageTitle:
      "Improving a student dashboard so learning progress felt more visible and more motivating",
    summary:
      "A student-facing dashboard redesign that clarified progress, strengthened engagement signals, and made next steps easier to act on.",
    productDescription:
      "Tetrika's student dashboard helps learners understand upcoming lessons, progress, and the key actions that keep them moving forward.",
    metrics: [
      { value: "27% increase", label: "engagement" },
      { value: "28% reduction", label: "design iteration time" },
    ],
    outcomeSentence:
      "By making progress, priorities, and action paths more legible, the dashboard supported stronger engagement without adding complexity.",
    problemStatement:
      "Students were landing in a dashboard that contained useful information, but the hierarchy was too soft to help them understand what mattered most right now. Progress existed, but it did not feel visible or motivating enough.",
    goal:
      "Make the dashboard easier to scan, easier to act on, and better aligned to how students understand momentum in a learning product.",
    role:
      "Product designer leading research interpretation, dashboard structuring, interface design, and iterative refinement with stakeholders.",
    researchMethods: [
      "Reviewed product data to identify which dashboard elements correlated with active use and continued engagement.",
      "Conducted usability sessions to understand how students interpreted progress, urgency, and next actions.",
      "Compared dashboard concepts with stakeholders to reduce iteration churn before final UI refinement.",
    ],
    processArtifacts: [
      "Hierarchy studies testing which dashboard modules should lead versus recede.",
      "Task-priority frameworks connecting student intent to the most useful next action.",
      "Iteration comparisons showing how clearer structure reduced revision loops.",
    ],
    designRationale: [
      "Made progress more explicit so students could quickly read momentum and unfinished work.",
      "Reduced low-priority visual noise to keep the main actions consistently visible.",
      "Organized the dashboard around student decisions rather than around disconnected content blocks.",
    ],
    solution: [
      "A clearer student dashboard with stronger progress framing and more intentional action zones.",
      "Modules tuned to help students understand status, upcoming work, and next steps at a glance.",
      "A refined visual hierarchy that supported motivation without overwhelming the interface.",
    ],
    impact: [
      "Increased engagement through a dashboard that better translated data into motivation.",
      "Reduced design iteration time by creating a clearer decision framework during concept development.",
      "Improved the product's ability to guide students toward the next meaningful action.",
    ],
    finalScreens: [
      {
        src: "/projects/tetrika/final-01.svg",
        alt: "Tetrika student dashboard with progress cards and next lesson panels.",
        caption: "Progress-forward structure designed for quick comprehension.",
      },
      {
        src: "/projects/tetrika/final-02.svg",
        alt: "Tetrika dashboard detail view with assignments, streaks, and learning guidance.",
        caption: "A more motivating hierarchy for continuing learning work.",
      },
    ],
    reflection:
      "The strongest student dashboards do not just report information. They translate progress into a next step that feels manageable and worth doing.",
    coverImage: "/projects/tetrika/cover.svg",
    altText:
      "Tetrika dashboard card with educational interface blocks and typographic overlays.",
  },
];

export const getProjects = () => [...projects].sort((a, b) => a.order - b.order);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);