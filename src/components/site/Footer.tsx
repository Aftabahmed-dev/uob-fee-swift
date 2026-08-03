import { GraduationCap } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Fee Submission", href: "#fee" },
  { label: "FAQ", href: "#faq" },
  { label: "Inquiry", href: "#inquiry" },
  { label: "Contact", href: "#contact" },
];

const policies = [
  { label: "Privacy Policy", href: "#faq" },
  { label: "Terms & Conditions", href: "#faq" },
  { label: "Help Center", href: "#inquiry" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-muted/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <span className="gradient-brand grid size-11 shrink-0 place-items-center rounded-2xl text-primary-foreground">
              <GraduationCap className="size-6" />
            </span>
            <span className="min-w-0">
              <span className="block font-display font-semibold">UoB Smart Fee Portal</span>
              <span className="block text-xs text-muted-foreground">University of Balochistan</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm/relaxed text-muted-foreground">
            A frontend prototype showing how digital fee submission can replace long physical bank
            queues for University of Balochistan students.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Policies">
          <h3 className="text-sm font-semibold">Support</h3>
          <ul className="mt-4 space-y-2">
            {policies.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border/70 py-5">
        <p className="mx-auto max-w-7xl px-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} University of Balochistan. All rights reserved. Frontend
          prototype for demonstration purposes only.
        </p>
      </div>
    </footer>
  );
}