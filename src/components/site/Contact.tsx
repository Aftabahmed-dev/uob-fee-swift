import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    Icon: MapPin,
    title: "University Address",
    lines: ["University of Balochistan", "Sariab Road, Quetta, Balochistan, Pakistan"],
  },
  { Icon: Phone, title: "Phone Number", lines: ["+92 81 921 1255", "+92 81 921 1277"] },
  {
    Icon: Mail,
    title: "Official Email",
    lines: ["info@uob.edu.pk", "treasurer@uob.edu.pk"],
  },
  {
    Icon: Clock,
    title: "Office Hours",
    lines: ["Monday – Thursday: 8:30 AM – 4:00 PM", "Friday: 8:30 AM – 12:30 PM"],
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Contact the university</h2>
          <p className="mt-4 text-muted-foreground">
            Visit the Treasurer&apos;s Office on campus or reach us through the details below.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {items.map((item) => (
              <div
                key={item.title}
                className="card-hover flex gap-4 rounded-3xl border border-border/70 bg-card p-5 shadow-elegant"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <item.Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <div className="gradient-soft relative flex h-full min-h-80 items-center justify-center overflow-hidden rounded-3xl border border-border/70 shadow-elegant">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,color-mix(in_oklab,var(--primary)_12%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--primary)_12%,transparent)_1px,transparent_1px)] [background-size:44px_44px]"
              />
              <div className="glass relative rounded-2xl px-6 py-5 text-center">
                <MapPin className="mx-auto size-7 text-primary" />
                <p className="mt-2 font-semibold">Campus Map</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Sariab Road, Quetta — map placeholder
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}