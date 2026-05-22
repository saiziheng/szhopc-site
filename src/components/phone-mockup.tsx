import type { SampleOutput } from "@/data/offer";
import { CheckIcon, PhoneIcon } from "./icons";

export function PhoneMockup({ sample }: { sample: SampleOutput }) {
  return (
    <div className="mock-phone mx-auto w-full max-w-[330px] rounded-[2rem] border border-[color:var(--line-strong)] bg-[color:var(--foreground)] p-2 shadow-[var(--shadow-deep)]">
      <div className="rounded-[1.55rem] bg-[color:var(--surface)] p-3">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-[color:var(--line-strong)]" />
        <div className="rounded-[1.2rem] border border-[color:var(--line)] bg-[color:var(--background)] p-4">
          <div className="flex items-center justify-between gap-3 border-b border-[color:var(--line)] pb-3">
            <div>
              <p className="text-xs font-medium text-[color:var(--accent)]">{sample.channel}</p>
              <p className="mt-1 text-xs text-[color:var(--muted)]">{sample.status}</p>
            </div>
            <span className="rounded-full border border-[color:var(--line)] px-2.5 py-1 text-xs text-[color:var(--accent)]">
              {sample.industry}
            </span>
          </div>
          <div className="py-5">
            <h3 className="font-serif text-[1.7rem] font-semibold leading-tight text-[color:var(--foreground)]">
              {sample.headline}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{sample.body}</p>
            <p className="mt-4 rounded-xl bg-[color:var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[color:var(--accent)]">
              {sample.cta}
            </p>
          </div>
          <div className="space-y-2 border-t border-[color:var(--line)] pt-4">
            {sample.includes.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-[color:var(--muted)]">
                <CheckIcon className="h-3.5 w-3.5 shrink-0 text-[color:var(--accent)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SampleOutputStrip({ samples }: { samples: SampleOutput[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <PhoneMockup sample={samples[0]} />
      <div className="grid gap-3">
        {samples.map((sample) => (
          <div
            key={sample.title}
            className="group rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-5 transition hover:-translate-y-0.5 hover:border-[color:var(--line-strong)] hover:shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                <PhoneIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif text-xl font-semibold leading-tight text-[color:var(--foreground)]">
                    {sample.title}
                  </h3>
                  <span className="rounded-full bg-[color:var(--warm-chip)] px-2.5 py-1 text-xs font-medium text-[color:var(--warm-ink)]">
                    {sample.status}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  {sample.channel} · {sample.includes.join(" / ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
