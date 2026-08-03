import { useEffect, useRef, useState } from "react";
import { Building2, Users, Landmark, Headphones } from "lucide-react";

const stats = [
  { label: "Departments", value: 42, suffix: "+", Icon: Building2 },
  { label: "Students", value: 28000, suffix: "+", Icon: Users },
  { label: "Online Banks", value: 12, suffix: "", Icon: Landmark },
  { label: "Support Hours", value: 24, suffix: "/7", Icon: Headphones },
];

function useCounter(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setValue(Math.round(target * progress));
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [target, active]);
  return value;
}

function StatCard({ stat, active }: { stat: (typeof stats)[number]; active: boolean }) {
  const value = useCounter(stat.value, active);
  return (
    <div className="card-hover glass rounded-3xl p-6 text-center shadow-elegant">
      <span className="gradient-brand mx-auto grid size-12 place-items-center rounded-2xl text-primary-foreground">
        <stat.Icon className="size-6" />
      </span>
      <p className="mt-4 font-display text-3xl font-bold sm:text-4xl">
        {value.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-20">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8"
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}