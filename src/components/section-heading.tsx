export function SectionHeading({
  label,
  title,
  body,
  align = "split"
}: {
  label: string;
  title: string;
  body?: string;
  align?: "split" | "center";
}) {
  if (align === "center") {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-[color:var(--accent)]">{label}</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-4xl">
          {title}
        </h2>
        {body ? <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)]">{body}</p> : null}
      </div>
    );
  }

  return (
    <div className="grid gap-5 border-b border-[color:var(--line)] pb-8 md:grid-cols-[0.82fr_1.18fr] md:items-end">
      <div>
        <p className="text-sm font-medium text-[color:var(--accent)]">{label}</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-4xl">
          {title}
        </h2>
      </div>
      {body ? <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)]">{body}</p> : null}
    </div>
  );
}
