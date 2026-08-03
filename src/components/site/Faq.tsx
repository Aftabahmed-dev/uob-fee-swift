import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "How do I submit my fee?",
    a: "Open the Fee Submission section, fill in your student details, choose your department, section and semester, pick a payment method and confirm the summary. In this prototype the final step shows a demo confirmation instead of charging you.",
  },
  {
    q: "Which banks are supported?",
    a: "The prototype demonstrates HBL and UBL as partner banks, alongside the EasyPaisa and JazzCash wallets. A production rollout would add every bank holding a university collection account.",
  },
  {
    q: "Can I pay using EasyPaisa?",
    a: "Yes. EasyPaisa is shown as a first-class payment option so students without a bank account can still submit their semester fee from a mobile phone.",
  },
  {
    q: "How do I verify payment?",
    a: "After submission you receive a reference number on screen and by email. Verification would be matched against the bank statement by the treasurer's office within one working day.",
  },
  {
    q: "Who do I contact for issues?",
    a: "Use the Inquiry form below or contact the Treasurer's Office during office hours. Include your roll number and reference number so your case can be traced quickly.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-muted-foreground">
            Everything students usually ask at the counter — answered before you leave home.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border/70 bg-card px-5 shadow-elegant"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm/relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}