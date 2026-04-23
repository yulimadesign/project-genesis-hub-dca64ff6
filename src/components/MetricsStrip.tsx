import type { Metric } from "@/data/site";

interface Props {
  metrics: Metric[];
  ariaLabel?: string;
}

const MetricsStrip = ({ metrics, ariaLabel = "Selected outcomes" }: Props) => (
  <section
    className="surface content-wrap"
    aria-label={ariaLabel}
    style={{ margin: "0 auto 4.5rem", padding: "1.25rem" }}
  >
    <ul
      className="grid gap-4 m-0 p-0 list-none max-[720px]:grid-cols-1"
      style={{ gridTemplateColumns: `repeat(${metrics.length}, minmax(0, 1fr))` }}
    >
      {metrics.map((metric) => (
        <li
          key={`${metric.value}-${metric.label}`}
          className="rounded-[1.4rem] p-6"
          style={{
            background: "hsl(40 100% 99% / 0.46)",
            border: "1px solid hsl(213 18% 15% / 0.08)",
          }}
        >
          <p
            className="display m-0 mb-1.5"
            style={{ fontSize: "var(--step-2)", lineHeight: 1.05 }}
          >
            {metric.value}
          </p>
          <p className="m-0 muted">{metric.label}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default MetricsStrip;