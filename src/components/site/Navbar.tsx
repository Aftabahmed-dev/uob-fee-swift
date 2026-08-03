import { useEffect, useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Fee Submission", href: "#fee" },
  { label: "FAQ", href: "#faq" },
  { label: "Inquiry", href: "#inquiry" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-elegant" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="gradient-brand grid size-11 shrink-0 place-items-center rounded-2xl text-primary-foreground shadow-elegant">
            <GraduationCap className="size-6" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-semibold">
              UoB Smart Fee Portal
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              University of Balochistan
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="lg" className="ml-2 rounded-full" asChild>
            <a href="#fee">Submit Fee</a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {open && (
        <div className="glass border-t border-border/60 px-4 pb-5 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="hero" size="lg" className="mt-2 w-full rounded-xl" asChild>
            <a href="#fee" onClick={() => setOpen(false)}>
              Submit Fee
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}