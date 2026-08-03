import { Timer, CreditCard, ShieldCheck, CalendarClock, Wallet, Smile } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    Icon: Timer,
    title: "No waiting in queues",
    text: "Skip the single bank counter and the hours-long wait outside it.",
  },
  {
    Icon: CreditCard,
    title: "Easy online payment",
    text: "A guided form and a two-tap checkout built for first-time users.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure fee submission",
    text: "Every submission is validated and produces a traceable reference.",
  },
  {
    Icon: CalendarClock,
    title: "Available anytime",
    text: "Submit at midnight or on a holiday — the portal never closes.",
  },
  {
    Icon: Wallet,
    title: "Multiple payment methods",
    text: "Digital wallets and partner banks supported side by side.",
  },
  {
    Icon: Smile,
    title: "Student-friendly interface",
    text: "Clear language, large touch targets and full mobile support.",
  },
];

export function Features() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Why students prefer the smart portal</h2>
          <p className="mt-4 text-muted-foreground">
            Designed around the real problem: thousands of students, one counter, and a semester
            deadline.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} as="article">
              <div className="card-hover h-full rounded-3xl border border-border/70 bg-card p-7 shadow-elegant">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <f.Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm/relaxed text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}