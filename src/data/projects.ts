import type { Metric } from "./site";

export interface FinalScreen {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProblemInsight {
  issue: string;
  signal: string;
  businessRisk: string;
}

export interface OnboardingFlowComparison {
  before: string[];
  after: string[];
}

export interface ResearchSignal {
  value: string;
  label: string;
  note: string;
}

export interface DesignMove {
  from: string;
  to: string;
}

export interface ImpactHighlight {
  value: string;
  label: string;
  note: string;
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
  problemInsights?: ProblemInsight[];
  onboardingFlowComparison?: OnboardingFlowComparison;
  goal: string;
  role: string;
  researchMethods: string[];
  researchSignals?: ResearchSignal[];
  processArtifacts: string[];
  designRationale: string[];
  designMoves?: DesignMove[];
  solution: string[];
  impact: string[];
  impactHighlights?: ImpactHighlight[];
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
    problemInsights: [
      {
        issue: "Slow activation",
        signal: "Mentors needed 10-12 minutes to become bookable.",
        businessRisk: "Delayed supply reduced conversion and marketplace liquidity.",
      },
      {
        issue: "Low completion",
        signal: "Only 42% reached a bookable state.",
        businessRisk: "Fewer active mentors meant fewer paid sessions.",
      },
      {
        issue: "Early overload",
        signal: "Pricing, availability, and long forms arrived too soon.",
        businessRisk: "Drop-off happened at a critical monetization step.",
      },
    ],
    onboardingFlowComparison: {
      before: [
        "Profile",
        "Role",
        "Stage",
        "Motivation",
        "Social media",
        "Availability",
        "Pricing",
        "Timezone",
        "Calendar",
        "Review",
      ],
      after: ["Profile", "Pricing", "Calendar", "Availability"],
    },
    goal:
      "Reduce early confusion, help users understand what each step unlocks, and move them into a successful first session with less hesitation.",
    role:
      "End-to-end product design covering research synthesis, flow design, wireframes, UI direction, and validation.",
    researchMethods: [
      "Interviewed new users to understand where confidence dropped during account setup.",
      "Reviewed onboarding analytics to isolate where completion rates fell between steps.",
      "Ran usability tests on early flow concepts to compare comprehension and pace.",
    ],
    researchSignals: [
      {
        value: "42%",
        label: "Reached bookable state",
        note: "The original setup lost most mentors before supply became available.",
      },
      {
        value: "10-12m",
        label: "Time to activation",
        note: "Too much work happened before users understood the value of setup.",
      },
      {
        value: "3",
        label: "Highest-friction moments",
        note: "Pricing, calendar, and availability carried the most hesitation.",
      },
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
    designMoves: [
      {
        from: "A long setup checklist",
        to: "Four intent-led steps with visible progress.",
      },
      {
        from: "Early form-heavy decisions",
        to: "Context before each high-commitment choice.",
      },
      {
        from: "Hidden activation value",
        to: "Clear confirmation once a mentor became bookable.",
      },
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
    impactHighlights: [
      {
        value: "10 -> 4",
        label: "Onboarding steps",
        note: "The setup path became shorter and easier to understand.",
      },
      {
        value: "Clearer",
        label: "Activation moment",
        note: "Users could see when they were ready to be booked.",
      },
      {
        value: "Lower",
        label: "Support burden",
        note: "The flow needed less manual explanation from the team.",
      },
    ],
    finalScreens: [
      {
        src: "/projects/starthub/key-screen-01.png",
        alt: "StartHub onboarding step one on a laptop, asking users to select their areas of expertise.",
        caption: "Step 1: expertise selection with clear progress and focused choices.",
      },
      {
        src: "/projects/starthub/key-screen-02.png",
        alt: "StartHub onboarding step two on a laptop, setting price per session.",
        caption: "Step 2: pricing setup structured around duration and discounts.",
      },
      {
        src: "/projects/starthub/key-screen-03.png",
        alt: "StartHub onboarding step three on a laptop, connecting a calendar.",
        caption: "Step 3: calendar connection with readable provider states.",
      },
      {
        src: "/projects/starthub/key-screen-04.png",
        alt: "StartHub onboarding step four on a laptop, setting availability.",
        caption: "Step 4: availability setup with grouped scheduling blocks.",
      },
    ],
    reflection:
      "The project reinforced that onboarding quality is often less about adding more instruction and more about sequencing information in the order people can actually use it.",
    coverImage: "/projects/starthub/cover.png",
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
    problemInsights: [
      {
        issue: "Fragmented workflow",
        signal: "Creation, review, and publishing lived across disconnected states.",
        businessRisk: "Teams lost time switching context and rebuilding the same logic.",
      },
      {
        issue: "Manual decisions",
        signal: "Operators had to remember templates, defaults, and next actions.",
        businessRisk: "Content quality depended too heavily on individual expertise.",
      },
      {
        issue: "Weak handoff visibility",
        signal: "Review status and ownership were hard to scan at volume.",
        businessRisk: "Bottlenecks slowed campaign and product content launches.",
      },
    ],
    goal:
      "Build a clearer internal tool that would reduce operational friction, speed up content production, and support more consistent outputs.",
    role:
      "Product designer responsible for research, workflow modeling, interface design, and alignment around system behavior.",
    researchMethods: [
      "Interviewed operational stakeholders to understand the real bottlenecks across content creation and approval.",
      "Analyzed task flows to surface repeated manual steps and avoidable switching costs.",
      "Tested workflow concepts with internal users to see where structure improved speed versus where it added friction.",
    ],
    researchSignals: [
      {
        value: "8x",
        label: "Faster workflow",
        note: "Reusable patterns removed repeated manual setup work.",
      },
      {
        value: "3",
        label: "Core workflow states",
        note: "Creation, review, and publishing became easier to separate and scan.",
      },
      {
        value: "High",
        label: "Content volume",
        note: "The tool had to stay readable under dense operational load.",
      },
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
    designMoves: [
      {
        from: "One dense operational surface",
        to: "A staged workspace organized by workflow state.",
      },
      {
        from: "Manual content setup",
        to: "Reusable defaults and clearer content patterns.",
      },
      {
        from: "Hidden review ownership",
        to: "Visible status, owners, and next actions.",
      },
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
    impactHighlights: [
      {
        value: "8x",
        label: "Faster content flow",
        note: "Repeatable patterns reduced setup and production time.",
      },
      {
        value: "Cleaner",
        label: "Handoffs",
        note: "Teams could see ownership and review state faster.",
      },
      {
        value: "Stronger",
        label: "System foundation",
        note: "The workflow became easier to scale across content types.",
      },
    ],
    finalScreens: [
      {
        src: "/projects/sbermegamarket/key-screen-01.png",
        alt: "SberMegaMarket content management categories screen shown on an iMac.",
        caption: "Content management workspace for assigning executors and deadlines.",
      },
      {
        src: "/projects/sbermegamarket/key-screen-02.png",
        alt: "SberMegaMarket sales dashboard shown on a MacBook Pro.",
        caption: "Operational dashboard with sales, news, buyer inquiries, and order summaries.",
      },
    ],
    reflection:
      "This work underscored how much internal tools benefit from product-quality design when the real challenge is sustained operational clarity, not just visual polish.",
    coverImage: "/projects/sbermegamarket/cover.png",
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
    problemInsights: [
      {
        issue: "Soft hierarchy",
        signal: "Important lessons, progress, and actions competed for attention.",
        businessRisk: "Students missed the next step and engagement softened.",
      },
      {
        issue: "Low progress visibility",
        signal: "Progress existed, but it did not feel motivating at a glance.",
        businessRisk: "The product lost a key driver of repeat learning behavior.",
      },
      {
        issue: "Slow iteration",
        signal: "Stakeholders revised concepts without a shared priority model.",
        businessRisk: "Design cycles took longer before decisions felt aligned.",
      },
    ],
    goal:
      "Make the dashboard easier to scan, easier to act on, and better aligned to how students understand momentum in a learning product.",
    role:
      "Product designer leading research interpretation, dashboard structuring, interface design, and iterative refinement with stakeholders.",
    researchMethods: [
      "Reviewed product data to identify which dashboard elements correlated with active use and continued engagement.",
      "Conducted usability sessions to understand how students interpreted progress, urgency, and next actions.",
      "Compared dashboard concepts with stakeholders to reduce iteration churn before final UI refinement.",
    ],
    researchSignals: [
      {
        value: "+27%",
        label: "Engagement lift",
        note: "Clearer priorities helped students return to meaningful actions.",
      },
      {
        value: "-28%",
        label: "Iteration time",
        note: "A clearer priority model reduced revision loops.",
      },
      {
        value: "3",
        label: "Decision zones",
        note: "Progress, next lesson, and practice actions became the core structure.",
      },
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
    designMoves: [
      {
        from: "Disconnected dashboard modules",
        to: "A priority-led layout around student decisions.",
      },
      {
        from: "Progress hidden in supporting details",
        to: "Progress surfaced as a motivational signal.",
      },
      {
        from: "Equal-weight content blocks",
        to: "Clear action zones for lessons, practice, and next steps.",
      },
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
    impactHighlights: [
      {
        value: "+27%",
        label: "Engagement",
        note: "Students had a clearer path back into learning activity.",
      },
      {
        value: "-28%",
        label: "Iteration time",
        note: "A shared framework helped the team decide faster.",
      },
      {
        value: "Clearer",
        label: "Next action",
        note: "The dashboard translated progress into a visible next step.",
      },
    ],
    finalScreens: [
      {
        src: "/projects/tetrika/key-screen-01.png",
        alt: "Tetrika library screen shown on a MacBook Pro.",
        caption: "Library view with filters, favorites, and learning content cards.",
      },
      {
        src: "/projects/tetrika/key-screen-02.png",
        alt: "Tetrika schedule screen shown on an iPad Pro.",
        caption: "Weekly schedule with clear lesson blocks and day-by-day planning.",
      },
      {
        src: "/projects/tetrika/key-screen-03.png",
        alt: "Tetrika student progress dashboard shown on an iPad Pro.",
        caption: "Progress dashboard that makes goals, lessons, and next actions visible.",
      },
    ],
    reflection:
      "The strongest student dashboards do not just report information. They translate progress into a next step that feels manageable and worth doing.",
    coverImage: "/projects/tetrika/cover.png",
    altText:
      "Tetrika dashboard card with educational interface blocks and typographic overlays.",
  },
];

export const getProjects = () => [...projects].sort((a, b) => a.order - b.order);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
