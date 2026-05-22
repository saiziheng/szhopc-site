import type { ProcessStep } from "@/data/offer";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative grid gap-4 lg:grid-cols-3">
      <div className="pointer-events-none absolute left-0 top-8 hidden h-px w-full bg-[color:var(--line)] lg:block" />
      {steps.map((step) => (
        <article key={step.step} className="relative rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--line-strong)] bg-[color:var(--background)] font-serif text-xl font-semibold text-[color:var(--accent)]">
            {step.step}
          </div>
          <p className="mt-6 text-sm font-medium text-[color:var(--warm-ink)]">{step.time}</p>
          <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{step.body}</p>
        </article>
      ))}
    </div>
  );
}
