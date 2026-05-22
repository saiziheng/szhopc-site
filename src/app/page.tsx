"use client";

import Image from "next/image";
import Link from "next/link";
import { type ReactNode, useState } from "react";
import { contactLinks, siteConfig, TAGLINE } from "@/config/site";
import { guides } from "@/data/guides";
import { updates } from "@/data/updates";
import { works } from "@/data/works";

type TabId = "works" | "updates" | "guides" | "about" | "contact";

const tabs: Array<{ id: TabId; label: string }> = [
  { id: "works", label: "作品" },
  { id: "updates", label: "公开进展" },
  { id: "guides", label: "指南" },
  { id: "about", label: "About" },
  { id: "contact", label: "联系" }
];

const aboutPoints = [
  "在校学生,正在用 AI 协作、代码、内容和复盘完成真实小产品。",
  "用 AI 跑通需求发现、原型开发、上线验证和复盘表达的完整闭环。",
  "当前重点是作品集与个人 IP:先做出真实作品,再把过程讲清楚,让信任慢慢长出来。"
];

const trustAnchors = [
  { value: "2", label: "真实上线作品" },
  { value: "100%", label: "可点开访问" },
  { value: "持续", label: "build in public" }
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="grid gap-5 border-b border-[color:var(--line)] pb-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
      <div>
        <p className="text-sm font-medium tracking-normal text-[color:var(--accent)]">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-4xl">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)]">{body}</p>
    </div>
  );
}

function WorksPanel() {
  return (
    <div className="stagger-panel">
      <SectionHeading
        eyebrow="Portfolio"
        title="真实作品,比说明更有说服力。"
        body="首版只保留能打开、能验证、能继续复盘的作品。每个条目都指向真实线上结果,后续再补更完整的过程文章。"
      />

      <div className="mt-8 divide-y divide-[color:var(--line)]">
        {works.map((work, index) => (
          <a
            key={work.href}
            href={work.href}
            target="_blank"
            rel="noreferrer"
            className="fade-item group grid gap-5 py-7 outline-none transition md:grid-cols-[1fr_220px] md:items-center"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div>
              <p className="text-sm font-medium text-[color:var(--accent)]">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
                {work.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[color:var(--muted)]">
                {work.summary}
              </p>
              <p className="mt-2 text-xs leading-6 text-[color:var(--muted)]">
                {work.meta.join(" · ")}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] underline-offset-4 group-hover:underline">
                打开作品
                <ArrowIcon />
              </span>
            </div>
            <Image
              src={work.preview}
              alt=""
              width={900}
              height={520}
              unoptimized
              className="h-32 w-full rounded-sm object-cover md:h-28"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

function UpdatesPanel() {
  return (
    <div className="stagger-panel">
      <SectionHeading
        eyebrow="Build in public"
        title="把进展写下来,让判断可追踪。"
        body="公开进展不是流水账,而是记录我为什么做、做到了什么、下一步要验证什么。"
      />

      <div className="mt-8 divide-y divide-[color:var(--line)]">
        {updates.map((update, index) => (
          <article
            key={`${update.date}-${update.title}`}
            className="fade-item grid gap-3 py-6 md:grid-cols-[150px_1fr]"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <time className="text-sm text-[color:var(--muted)]">{update.date}</time>
            <div>
              <h3 className="font-serif text-xl font-semibold text-[color:var(--foreground)]">
                {update.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{update.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function GuidesPanel() {
  return (
    <div className="stagger-panel">
      <SectionHeading
        eyebrow="Guides"
        title="以后把经验整理成可复用指南。"
        body="这里预留指南列表。后续每篇指南会是独立静态路由,例如 /guides/<slug>,首页只负责展示入口。"
      />

      <div className="mt-8 border-y border-[color:var(--line)] py-8">
        {guides.length === 0 ? (
          <div className="max-w-2xl">
            <p className="font-serif text-2xl font-semibold text-[color:var(--foreground)]">
              指南列表暂空。
            </p>
            <p className="mt-3 text-base leading-8 text-[color:var(--muted)]">
              首批指南还没有放上来。等有稳定经验时,只需要在 `src/data/guides.ts`
              加一条数据,再新增对应静态页内容。
            </p>
          </div>
        ) : (
          <div className="divide-y divide-[color:var(--line)]">
            {guides.map((guide) => (
              <a key={guide.slug} href={`/guides/${guide.slug}/`} className="block py-6">
                <h3 className="font-serif text-xl font-semibold">{guide.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  {guide.summary}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AboutPanel() {
  return (
    <div className="stagger-panel">
      <SectionHeading
        eyebrow="About"
        title="在校学生,一人公司实践。"
        body="我不是把自己包装成大公司,而是在真实约束里练习:一个人借助 AI 完成产品、内容、交付和复盘。"
      />

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {aboutPoints.map((point, index) => (
          <div
            key={point}
            className="fade-item border-t border-[color:var(--line)] pt-5"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <p className="text-sm font-medium text-[color:var(--accent)]">0{index + 1}</p>
            <p className="mt-3 text-base leading-8 text-[color:var(--muted)]">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPanel() {
  return (
    <div className="stagger-panel">
      <SectionHeading
        eyebrow="Contact"
        title="想交流项目,或轻量合作,可以从公开入口找我。"
        body="这个站保持信任向,不堆商单话术。真实商单、客户展示和交付入口仍放在 17szh.cn 体系里。"
      />

      <div className="mt-8 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
        {contactLinks.map((link, index) => {
          const row = (
            <div
              className="fade-item grid gap-2 py-5 md:grid-cols-[160px_1fr] md:items-center"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span className="text-sm font-medium text-[color:var(--accent)]">{link.label}</span>
              <span className="font-serif text-xl font-semibold text-[color:var(--foreground)]">
                {link.value}
              </span>
            </div>
          );

          if (link.href) {
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="block outline-none transition hover:text-[color:var(--accent)]"
              >
                {row}
              </a>
            );
          }

          return <div key={link.label}>{row}</div>;
        })}
      </div>
    </div>
  );
}

const panels: Record<TabId, ReactNode> = {
  works: <WorksPanel />,
  updates: <UpdatesPanel />,
  guides: <GuidesPanel />,
  about: <AboutPanel />,
  contact: <ContactPanel />
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("works");

  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-5 border-b border-[color:var(--line)] py-5 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-serif text-xl font-semibold text-[color:var(--foreground)]">
            {siteConfig.name}
          </Link>
          <nav aria-label="主导航" className="-mx-1 flex gap-1 overflow-x-auto" role="tablist">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`${tab.id}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${tab.id}-panel`}
                  className="rounded-sm px-3 py-2 text-sm font-medium text-[color:var(--muted)] outline-none transition hover:text-[color:var(--accent)] aria-selected:bg-[color:var(--accent)] aria-selected:text-white"
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </header>

        <section className="grid gap-10 border-b border-[color:var(--line)] py-12 sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
          <div>
            <p className="text-sm font-medium text-[color:var(--accent)]">{siteConfig.domain}</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.08] text-[color:var(--foreground)] sm:text-6xl lg:text-7xl">
              {TAGLINE}
            </h1>
          </div>
          <div>
            <p className="text-lg leading-9 text-[color:var(--muted)]">
              我是 szh。这里记录 AI 协作开发、真实小产品、公开进展和一人公司实践。
              它不是商单落地页,而是一个持续更新的信任入口。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                onClick={() => setActiveTab("works")}
              >
                看作品
                <ArrowIcon />
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-sm border border-[color:var(--line-strong)] px-5 py-3 text-sm font-medium text-[color:var(--accent)] transition hover:bg-[color:var(--accent-soft)]"
                onClick={() => setActiveTab("contact")}
              >
                联系/合作
              </button>
            </div>
            <dl className="mt-6 flex items-center justify-between gap-2 border-t border-[color:var(--line)] pt-5">
              {trustAnchors.map((anchor) => (
                <div
                  key={anchor.label}
                  aria-label={`${anchor.value} · ${anchor.label}`}
                  className="shrink-0"
                >
                  <div className="flex items-baseline gap-0.5 whitespace-nowrap">
                    <dt className="font-serif text-base font-semibold leading-none text-[color:var(--foreground)]">
                      {anchor.value}
                    </dt>
                    <dd className="text-[10px] leading-none text-[color:var(--muted)]">
                      · {anchor.label}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id={`${activeTab}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeTab}-tab`}
          className="min-h-[420px] flex-1 py-10 sm:py-14"
        >
          {panels[activeTab]}
        </section>
      </div>
    </main>
  );
}
