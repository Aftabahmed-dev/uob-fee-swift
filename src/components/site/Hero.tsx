import { ArrowRight, Megaphone, ShieldCheck, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import heroImage from "@/assets/hero-students.jpg";

export function Hero() {
  return (
    <section id="home" className="gradient-soft relative overflow-hidden pt-28 pb-16 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 size-[26rem] rounded-full bg-secondary/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur">
            <ShieldCheck className="size-4" /> Official Digital Fee Prototype 2026
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] font-bold sm:text-5xl xl:text-6xl">
            University of Balochistan{" "}
            <span className="text-gradient">Smart Fee Submission Portal</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Submit your semester fee online without waiting in long bank queues.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#fee">
                Submit Fee <ArrowRight />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="size-4 text-primary" /> Saves up to 4 hours per student
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-secondary" /> Encrypted &amp; verifiable records
            </span>
          </div>
        </Reveal>

        <Reveal delay={140} className="relative">
          <div className="glass rounded-[2rem] p-3 shadow-float">
            <img
              src={heroImage}
              width={1200}
              height={912}
              alt="University of Balochistan students submitting semester fees online using a laptop and mobile phones"
              className="w-full rounded-[1.5rem]"
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={220} className="relative mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="gradient-brand flex flex-col gap-3 overflow-hidden rounded-3xl px-6 py-5 text-primary-foreground shadow-elegant sm:flex-row sm:items-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold">
            <Megaphone className="size-5" /> Announcements
          </span>
          <p className="text-sm/relaxed opacity-95">
            Admissions, Examination Updates, Scholarship News and University Announcements.
          </p>
        </div>
      </Reveal>
    </section>
  );
}