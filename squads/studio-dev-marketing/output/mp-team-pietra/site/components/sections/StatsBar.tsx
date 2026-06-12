"use client";

import { useRef, useEffect, useState, Fragment } from "react";
import { loadGsap } from "@/lib/gsap";

const STATS = [
  { value: 4500, label: "Seguidoras", suffix: "+", fixed: false },
  { value: 100, label: "Transformações", suffix: "+", fixed: false },
  { value: 4, label: "Anos de experiência", suffix: "+", fixed: false },
];

function AnimatedNumber({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setCount(Math.floor(eased * value));
      if (elapsed < 1) raf = requestAnimationFrame(tick);
      else setCount(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);

  const display =
    value >= 1000
      ? (count / 1000).toFixed(1).replace(".0", "") + "K"
      : String(count);

  return (
    <Fragment>
      {display}
      {suffix}
    </Fragment>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    (async () => {
      const { gsap } = await loadGsap();
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            once: true,
            onEnter: () => setActive(true),
          },
        }
      );
    })();
  }, []);

  return (
    <div
      ref={ref}
      style={{ background: "#050505", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-10">
        <div
          className="grid grid-cols-3 divide-x"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="stat-item opacity-0 text-center px-6 py-2"
            >
              <div
                className="font-black tabular-nums text-white"
                style={{
                  fontSize: "clamp(28px, 4vw, 52px)",
                  letterSpacing: "-0.025em",
                }}
              >
                {stat.fixed ? (
                  <span
                    style={{
                      background: "linear-gradient(120deg, #C084FC, #A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    ∞
                  </span>
                ) : (
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    active={active}
                  />
                )}
              </div>
              <div
                className="text-[10px] font-bold tracking-[0.18em] uppercase mt-1"
                style={{ color: "#3A3A4A" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
