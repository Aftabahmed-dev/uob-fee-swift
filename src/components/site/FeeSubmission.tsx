import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, CreditCard, Lock, ReceiptText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DEPARTMENTS, PAYMENT_METHODS, SECTIONS, SEMESTERS } from "./fee-data";
import { Reveal } from "./Reveal";

type FormState = {
  fullName: string;
  fatherName: string;
  cnic: string;
  rollNumber: string;
  department: string;
  section: string;
  semester: string;
  amount: string;
  mobile: string;
  email: string;
};

const initialState: FormState = {
  fullName: "",
  fatherName: "",
  cnic: "",
  rollNumber: "",
  department: "",
  section: "",
  semester: "",
  amount: "24500",
  mobile: "",
  email: "",
};

export function FeeSubmission() {
  const [form, setForm] = useState<FormState>(initialState);
  const [method, setMethod] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (key: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const selectedMethod = useMemo(
    () => PAYMENT_METHODS.find((m) => m.id === method) ?? null,
    [method],
  );

  const onProceed = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 1400);
  };

  const summary = [
    { label: "Student Name", value: form.fullName || "—" },
    { label: "Department", value: form.department || "—" },
    { label: "Roll Number", value: form.rollNumber || "—" },
    { label: "Semester", value: form.semester || "—" },
    { label: "CNIC", value: form.cnic || "—" },
    { label: "Payment Method", value: selectedMethod?.name ?? "—" },
  ];

  return (
    <section id="fee" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-background px-4 py-1.5 text-xs font-semibold text-secondary">
            <ReceiptText className="size-4" /> Fee Submission
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Submit your semester fee</h2>
          <p className="mt-4 text-muted-foreground">
            Fill your details once, pick a payment method, and confirm the summary. Takes under two
            minutes.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <form
            onSubmit={onProceed}
            className="glass rounded-[2rem] p-6 shadow-float sm:p-9"
            aria-label="Semester fee submission form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="fullName"
                label="Student Full Name"
                placeholder="e.g. Ahmed Khan"
                value={form.fullName}
                onChange={set("fullName")}
              />
              <Field
                id="fatherName"
                label="Father Name"
                placeholder="e.g. Abdul Khan"
                value={form.fatherName}
                onChange={set("fatherName")}
              />
              <Field
                id="cnic"
                label="CNIC Number"
                placeholder="54400-1234567-1"
                value={form.cnic}
                onChange={set("cnic")}
              />
              <Field
                id="rollNumber"
                label="Roll Number"
                placeholder="UOB-CS-2026-114"
                value={form.rollNumber}
                onChange={set("rollNumber")}
              />

              <SelectField
                id="department"
                label="Department"
                placeholder="Select department"
                options={[...DEPARTMENTS]}
                value={form.department}
                onChange={set("department")}
              />
              <SelectField
                id="section"
                label="Section"
                placeholder="Select section"
                options={[...SECTIONS]}
                value={form.section}
                onChange={set("section")}
              />
              <SelectField
                id="semester"
                label="Semester"
                placeholder="Select semester"
                options={[...SEMESTERS]}
                value={form.semester}
                onChange={set("semester")}
              />
              <Field
                id="amount"
                label="Fee Amount (PKR)"
                placeholder="24500"
                type="number"
                value={form.amount}
                onChange={set("amount")}
              />
              <Field
                id="mobile"
                label="Student Mobile Number"
                placeholder="03XX-XXXXXXX"
                value={form.mobile}
                onChange={set("mobile")}
              />
              <Field
                id="email"
                label="Email Address"
                type="email"
                placeholder="student@uob.edu.pk"
                value={form.email}
                onChange={set("email")}
              />
            </div>

            <fieldset className="mt-10">
              <legend className="text-lg font-semibold">Payment Method</legend>
              <p className="mt-1 text-sm text-muted-foreground">
                Choose a wallet or partner bank to view your payment summary.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {PAYMENT_METHODS.map((m) => {
                  const active = method === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setMethod(m.id)}
                      className={cn(
                        "card-hover rounded-3xl border bg-card p-5 text-left transition-colors",
                        active
                          ? "border-primary bg-accent shadow-elegant ring-2 ring-primary/30"
                          : "border-border/70 hover:border-primary/40",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-12 place-items-center rounded-2xl font-display text-sm font-bold",
                          active
                            ? "gradient-brand text-primary-foreground"
                            : "bg-muted text-foreground/70",
                        )}
                      >
                        {m.initials}
                      </span>
                      <span className="mt-4 block font-semibold">{m.name}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">{m.type}</span>
                      {active && (
                        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                          <CheckCircle2 className="size-3.5" /> Selected
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {selectedMethod && (
              <div className="reveal mt-10" data-visible="true">
                <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-elegant">
                  <div className="gradient-brand flex items-center justify-between gap-3 px-6 py-4 text-primary-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold">
                      <ReceiptText className="size-5" /> Payment Summary
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                      <ShieldCheck className="size-3.5" /> Ready for Payment
                    </span>
                  </div>

                  <dl className="grid gap-x-8 gap-y-4 px-6 py-6 sm:grid-cols-2">
                    {summary.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-baseline justify-between gap-4 border-b border-dashed border-border/70 pb-2"
                      >
                        <dt className="text-sm text-muted-foreground">{row.label}</dt>
                        <dd className="min-w-0 truncate text-right text-sm font-medium">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="flex flex-col gap-4 border-t border-border/70 bg-muted/40 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Fee Amount</p>
                      <p className="font-display text-3xl font-bold text-primary">
                        PKR {Number(form.amount || 0).toLocaleString()}
                      </p>
                    </div>
                    <Button type="submit" variant="hero" size="xl" disabled={processing}>
                      {processing ? (
                        <>
                          <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Processing…
                        </>
                      ) : (
                        <>
                          <CreditCard /> Proceed to Payment
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <p className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="size-3.5" /> Simulated checkout — no real transaction takes
                  place.
                </p>
              </div>
            )}
          </form>
        </Reveal>
      </div>

      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent className="rounded-3xl border-border/70 sm:max-w-md">
          <div className="py-3 text-center">
            <span className="gradient-brand mx-auto grid size-16 place-items-center rounded-full text-primary-foreground shadow-elegant">
              <CheckCircle2 className="size-8" />
            </span>
            <h3 className="mt-5 text-xl font-bold">Prototype Demo</h3>
            <p className="mt-3 text-sm/relaxed text-muted-foreground">
              Your fee payment request has been submitted successfully.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">(Frontend demonstration only.)</p>
            <Button
              variant="hero"
              size="lg"
              className="mt-6 w-full rounded-xl"
              onClick={() => setSuccess(false)}
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-xl bg-background"
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id} className="h-11 rounded-xl bg-background">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-72">
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}