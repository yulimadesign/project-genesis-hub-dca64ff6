import { useEffect, useRef, useState } from "react";
import type { Metric } from "@/data/site";

interface Props {
  metrics: Metric[];
  ariaLabel?: string;
}

/** Parses "+27%", "−28%", "8x", "6+" into [prefix, number, suffix] for animation. */
const parseMetric = (raw: string): { prefix: string; number: number | null; suffix: string } => {
  const match = raw.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: raw, number: null, suffix: "" };
  return { prefix: match[1] ?? "", number: parseFloat(match[2]), suffix: match[3] ?? "" };
};

const AnimatedNumber = ({ raw, animate }: { raw: string; animate: boolean }) => {
  const { prefix, number, suffix } = parseMetric(raw);
  const [value, setValue] = useState(number == null ? null : 0);

  useEffect(() => {
    if (!animate || number == null) return;
    const duration = 1100;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(parseFloat((number * eased).toFixed(number % 1 === 0 ? 0 : 1)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate, number]);

  if (number == null) return <>{raw}</>;
  const display = Number.isInteger(number) ? Math.round(value ?? 0) : (value ?? 0).toFixed(1);
  return (
    <>
      {prefix}
      {display}
      {suffix}
    </>
  );
};

const MetricsStrip = ({ metrics, ariaLabel = "Selected outcomes" }: Props) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="content-wrap"
      aria-label={ariaLabel}
      style={{ margin: "0 auto 5rem" }}
    >
      <ul
        className="grid gap-5 m-0 p-0 list-none max-[900px]:grid-cols-2 max-[480px]:grid-cols-1"
        style={{
          gridTemplateColumns: `repeat(${metrics.length}, minmax(0, 1fr))`,
        }}
      >
        {metrics.map((metric, i) => (
          <li
            key={`${metric.value}-${metric.label}`}
            className="surface reveal"
            style={{
              animationDelay: `${i * 0.08}s`,
              minHeight: "9rem",
              padding: "2rem",
              borderRadius: "var(--radius-xl)",
              background: "hsl(var(--secondary))",
            }}
          >
            <p
              className="m-0 mb-2 flex items-baseline"
              style={{
                fontSize: "2.5rem",
                lineHeight: "3rem",
                fontWeight: 500,
              }}
            >
              <span className="coral-text">
                <AnimatedNumber raw={metric.value} animate={visible} />
              </span>
              <span className="metric-arrow" aria-hidden>↑</span>
            </p>
            <p className="m-0 muted text-sm">{metric.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MetricsStrip;
