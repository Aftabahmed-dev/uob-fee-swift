import { useState, type FormEvent } from "react";
import { Send, MessagesSquare } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEPARTMENTS } from "./fee-data";
import { Reveal } from "./Reveal";

export function Inquiry() {
  const [department, setDepartment] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Inquiry submitted", {
        description: "Prototype demo — no message was actually sent.",
      });
      e.currentTarget?.reset?.();
      setDepartment("");
    }, 900);
  };

  return (
    <section id="inquiry" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-4 py-1.5 text-xs font-semibold text-primary">
            <MessagesSquare className="size-4" /> Student Inquiry
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Have a question?</h2>
          <p className="mt-4 text-muted-foreground">
            Send your query to the Treasurer&apos;s Office and get a response within one working
            day.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <form
            onSubmit={onSubmit}
            className="grid gap-5 rounded-3xl border border-border/70 bg-card p-6 shadow-elegant sm:grid-cols-2 sm:p-8"
          >
            <div className="space-y-2">
              <Label htmlFor="iq-name">Student Name</Label>
              <Input id="iq-name" required placeholder="Full name" className="h-11 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="iq-email">Email</Label>
              <Input
                id="iq-email"
                type="email"
                required
                placeholder="you@example.com"
                className="h-11 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="iq-phone">Phone</Label>
              <Input
                id="iq-phone"
                required
                placeholder="03XX-XXXXXXX"
                className="h-11 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="iq-dept">Department</Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger id="iq-dept" className="h-11 rounded-xl">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {DEPARTMENTS.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="iq-subject">Subject</Label>
              <Input
                id="iq-subject"
                required
                placeholder="Fee challan not verified"
                className="h-11 rounded-xl"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="iq-message">Message</Label>
              <Textarea
                id="iq-message"
                required
                rows={5}
                placeholder="Describe your issue in detail…"
                className="rounded-xl"
              />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" variant="hero" size="xl" disabled={sending} className="w-full">
                {sending ? (
                  <>
                    <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Sending…
                  </>
                ) : (
                  <>
                    Submit Inquiry <Send />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}