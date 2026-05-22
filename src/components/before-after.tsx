import type { BeforeAfter } from "@/data/offer";

export function BeforeAfterGrid({ items }: { items: BeforeAfter[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.scene}
          className="fade-item overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)]"
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <div className="border-b border-[color:var(--line)] px-5 py-4">
            <p className="text-sm font-medium text-[color:var(--accent)]">{item.scene}</p>
          </div>
          <div className="grid gap-px bg-[color:var(--line)]">
            <div className="bg-[color:var(--surface-muted)] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--muted)]">
                改前
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.before}</p>
            </div>
            <div className="bg-[color:var(--background)] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--accent)]">
                改后
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--foreground)]">{item.after}</p>
            </div>
          </div>
          <p className="px-5 py-4 text-xs leading-6 text-[color:var(--muted)]">{item.note}</p>
        </article>
      ))}
    </div>
  );
}
