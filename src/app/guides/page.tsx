import Link from "next/link";
import { guides } from "@/data/guides";

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] px-5 py-10 text-[color:var(--foreground)] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-medium text-[color:var(--accent)]">
          返回首页
        </Link>
        <h1 className="mt-8 font-serif text-5xl font-semibold leading-tight">指南</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)]">
          这里预留给后续可复用经验。首批指南还没有发布。
        </p>

        <div className="mt-10 border-y border-[color:var(--line)]">
          {guides.length === 0 ? (
            <p className="py-8 text-base text-[color:var(--muted)]">暂无指南。</p>
          ) : (
            guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}/`} className="block py-7">
                <time className="text-sm text-[color:var(--muted)]">{guide.date}</time>
                <h2 className="mt-2 font-serif text-2xl font-semibold">{guide.title}</h2>
                <p className="mt-2 text-base leading-8 text-[color:var(--muted)]">
                  {guide.summary}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
