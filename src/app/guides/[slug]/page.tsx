import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, guideRoutes } from "@/data/guides";

export const dynamicParams = false;

export function generateStaticParams() {
  return guideRoutes.map((guide) => ({
    slug: guide.slug
  }));
}

export default function GuideDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[color:var(--background)] px-5 py-10 text-[color:var(--foreground)] sm:px-8 lg:px-10">
      <article className="mx-auto max-w-3xl">
        <Link href="/guides/" className="text-sm font-medium text-[color:var(--accent)]">
          返回指南列表
        </Link>
        <time className="mt-10 block text-sm text-[color:var(--muted)]">{guide.date}</time>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight">{guide.title}</h1>
        <p className="mt-6 text-xl leading-9 text-[color:var(--muted)]">{guide.summary}</p>
        <div className="mt-10 border-t border-[color:var(--line)] pt-8 text-base leading-8 text-[color:var(--foreground)]">
          {guide.body}
        </div>
      </article>
    </main>
  );
}
