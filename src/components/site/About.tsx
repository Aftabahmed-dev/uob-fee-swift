import { Target, BookOpen, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    Icon: Target,
    title: "Our mission",
    text: "To advance knowledge and serve Balochistan through accessible, high-quality higher education.",
  },
  {
    Icon: BookOpen,
    title: "Quality education",
    text: "Faculties across sciences, arts, law and management deliver research-led teaching.",
  },
  {
    Icon: HeartHandshake,
    title: "Commitment to students",
    text: "Student services are being digitised so time goes to studying, not standing in line.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <Reveal>
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            About the University
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">University of Balochistan, Quetta</h2>
          <p className="mt-5 text-muted-foreground">
            Established in 1970, the University of Balochistan is the province&apos;s oldest and
            largest public sector university. It serves tens of thousands of students across
            dozens of departments, institutes and affiliated colleges, and remains the primary
            gateway to higher education for the region.
          </p>
          <p className="mt-4 text-muted-foreground">
            The university is committed to academic excellence, research that addresses local
            challenges, and administrative reform that puts students first. This Smart Fee Portal
            prototype reflects that commitment: a single, transparent digital process replacing an
            overloaded physical counter, so that no student loses a day of class to submit a fee.
          </p>
        </Reveal>

        <Reveal delay={120} className="grid gap-4 self-center">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="card-hover flex gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-elegant"
            >
              <span className="gradient-brand grid size-11 shrink-0 place-items-center rounded-2xl text-primary-foreground">
                <p.Icon className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}