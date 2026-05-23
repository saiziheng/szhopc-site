import type { Faq } from "@/data/offer";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
      {items.map((item) => (
        <details
          key={item.question}
          className="group py-5 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium leading-8 text-[color:var(--foreground)] transition group-open:text-[color:var(--accent)]">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--line-strong)] text-sm text-[color:var(--muted)] transition group-open:rotate-45 group-open:border-[color:var(--accent)] group-open:text-[color:var(--accent)]"
            >
              +
            </span>
          </summary>
          <p className="mt-3 pr-10 text-sm leading-7 text-[color:var(--muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
