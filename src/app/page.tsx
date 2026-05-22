import { BeforeAfterGrid } from "@/components/before-after";
import { ArrowIcon, CheckIcon, MessageIcon, SparkIcon } from "@/components/icons";
import { SampleOutputStrip, PhoneMockup } from "@/components/phone-mockup";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { contactLinks, siteConfig, TAGLINE, wechat } from "@/config/site";
import {
  audiences,
  beforeAfter,
  deliverables,
  faqs,
  painPoints,
  pilotRules,
  processSteps,
  sampleOutputs,
  trustPoints
} from "@/data/offer";
import { works } from "@/data/works";
import type { ReactNode } from "react";

const PILOT_NAME = "小生意 AI 获客内容试点";

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`primary-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[color:var(--accent)] px-5 py-3 text-sm font-medium shadow-[var(--shadow-button)] transition hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 focus:ring-offset-[color:var(--background)] ${className}`}
    >
      申请一次免费诊断
      <ArrowIcon />
    </a>
  );
}

function SecondaryCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[color:var(--line-strong)] bg-[color:var(--surface)] px-5 py-3 text-sm font-medium text-[color:var(--accent)] transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-soft)]"
    >
      {children}
    </a>
  );
}

function ProofStrip() {
  const items = [
    { value: "2", label: "真实上线作品" },
    { value: "100%", label: "可点开访问" },
    { value: "0", label: "虚假案例/证言" }
  ];

  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="bg-[color:var(--surface)] px-4 py-4">
          <p className="font-serif text-3xl font-semibold text-[color:var(--accent)]">{item.value}</p>
          <p className="mt-1 text-xs leading-5 text-[color:var(--muted)]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function WeChatCard() {
  return (
    <div className="rounded-sm border border-[color:var(--line-strong)] bg-[color:var(--surface)] p-5 shadow-[var(--shadow-soft)] sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
          <MessageIcon />
        </div>
        <div>
          <p className="text-sm font-medium text-[color:var(--accent)]">微信优先</p>
          <p className="mt-1 text-xs text-[color:var(--muted)]">扫码加我,聊聊你的获客问题。</p>
        </div>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-[9rem_1fr] sm:items-center">
        <div className="flex aspect-square w-36 items-center justify-center rounded-sm border border-dashed border-[color:var(--line-strong)] bg-[color:var(--background)] p-3 text-center text-xs leading-5 text-[color:var(--muted)]">
          {wechat.qrcode ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={wechat.qrcode} alt="微信二维码" className="h-full w-full object-contain" />
          ) : (
            <span>
              微信二维码
              <br />
              待补素材
            </span>
          )}
        </div>
        <div>
          {wechat.id ? (
            <p className="font-serif text-2xl font-semibold text-[color:var(--foreground)]">{wechat.id}</p>
          ) : (
            <p className="font-serif text-2xl font-semibold text-[color:var(--foreground)]">扫码加我微信</p>
          )}
          <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{wechat.note}</p>
          <p className="mt-4 text-sm leading-7 text-[color:var(--foreground)]">
            加我微信,说一句你做什么生意、最近最想解决哪个获客问题,我先免费帮你看一版。
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionShell({
  id,
  children,
  tone = "plain"
}: {
  id: string;
  children: ReactNode;
  tone?: "plain" | "surface" | "accent";
}) {
  const toneClass =
    tone === "surface"
      ? "bg-[color:var(--surface)]"
      : tone === "accent"
        ? "bg-[color:var(--accent)] text-white"
        : "";

  return (
    <section id={id} className={`scroll-mt-24 border-b border-[color:var(--line)] py-14 sm:py-16 lg:py-20 ${toneClass}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[color:var(--background)] text-[color:var(--foreground)]">
      <header className="sticky top-0 z-20 border-b border-[color:var(--line)] bg-[color:var(--background-translucent)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <a href="#top" className="font-serif text-xl font-semibold text-[color:var(--foreground)]">
            {siteConfig.name}
          </a>
          <nav aria-label="主导航" className="hidden items-center gap-6 text-sm text-[color:var(--muted)] md:flex">
            <a className="transition hover:text-[color:var(--accent)]" href="#samples">
              样张
            </a>
            <a className="transition hover:text-[color:var(--accent)]" href="#process">
              流程
            </a>
            <a className="transition hover:text-[color:var(--accent)]" href="#faq">
              FAQ
            </a>
          </nav>
          <PrimaryCta className="min-h-10 px-4 py-2 text-xs sm:text-sm" />
        </div>
      </header>

      {/* 01 Hero */}
      <section id="top" className="relative border-b border-[color:var(--line)]">
        <div className="hero-texture absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <div className="stagger-panel">
            <p className="text-sm font-medium text-[color:var(--accent)]">{PILOT_NAME}</p>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.1] text-[color:var(--foreground)] sm:text-5xl lg:text-6xl">
              {TAGLINE}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[color:var(--muted)]">
              适合餐饮、直播、民宿、饰品、二手车、本地服务。先免费 / 低价做一版内容样张,让你能发出去、能回复客户、能判断有没有用。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta />
              <SecondaryCta href="#samples">看手机样张</SecondaryCta>
            </div>
            <div className="mt-8 max-w-xl">
              <ProofStrip />
            </div>
          </div>
          <div className="fade-item lg:justify-self-end">
            <PhoneMockup sample={sampleOutputs[0]} />
          </div>
        </div>
      </section>

      {/* 02 Pain */}
      <SectionShell id="pain">
        <div className="stagger-panel">
          <SectionHeading
            label="为什么需要"
            title="不是生意不行,是每天都有客户在表达里漏掉。"
            body="小老板最缺的通常不是复杂系统,而是一套能把产品、活动和咨询接住的内容表达。"
          />
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-5">
            {painPoints.map((point, index) => (
              <article key={point.title} className="fade-item bg-[color:var(--surface)] p-5" style={{ animationDelay: `${index * 50}ms` }}>
                <p className="font-serif text-xl font-semibold text-[color:var(--accent)]">0{index + 1}</p>
                <h3 className="mt-4 font-serif text-lg font-semibold leading-tight text-[color:var(--foreground)]">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 03 Deliverables */}
      <SectionShell id="offer" tone="surface">
        <div className="stagger-panel">
          <SectionHeading label="交付内容" title={deliverables.headline} body={deliverables.note} />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {deliverables.groups.map((group) => (
              <article key={group.title} className="rounded-sm border border-[color:var(--line)] bg-[color:var(--background)] p-6 shadow-[var(--shadow-soft)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                  <SparkIcon />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-[color:var(--foreground)]">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{group.body}</p>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-[color:var(--foreground)]">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">{deliverables.more}</p>
        </div>
      </SectionShell>

      {/* 04 Visual samples */}
      <SectionShell id="samples">
        <div className="stagger-panel">
          <SectionHeading
            label="产出可视化"
            title="先让你看到“做出来长什么样”。"
            body="下面是样张占位,不是已成交案例。真实试点完成后,再用脱敏截图和效果记录替换。"
          />
          <div className="mt-10">
            <SampleOutputStrip samples={sampleOutputs} />
          </div>
        </div>
      </SectionShell>

      {/* 05 Before / After */}
      <SectionShell id="before-after" tone="surface">
        <div className="stagger-panel">
          <SectionHeading
            label="Before / After"
            title="同一件事,换一种说法,客户更容易接住。"
            body="这些是文案样张,用来展示改写方向:更具体、更像真人、更有下一步。"
          />
          <div className="mt-8">
            <BeforeAfterGrid items={beforeAfter} />
          </div>
        </div>
      </SectionShell>

      {/* 06 Audiences */}
      <SectionShell id="audience">
        <div className="stagger-panel">
          <SectionHeading
            label="适合对象"
            title="靠内容、咨询和老客转介绍跑生意的小老板。"
            body="行业不需要完全一样,只要你现在有产品或服务,并且愿意把它更清楚地发出去。"
          />
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience.name} className="bg-[color:var(--surface)] p-6">
                <h3 className="font-serif text-xl font-semibold text-[color:var(--foreground)]">{audience.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{audience.scenario}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 07 Process */}
      <SectionShell id="process" tone="surface">
        <div className="stagger-panel">
          <SectionHeading
            label="3 步开始"
            title="先诊断,再做样张,最后用真实反馈微调。"
            body="流程尽量轻,不让小老板被工具、表单和术语卡住。"
          />
          <div className="mt-8">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </SectionShell>

      {/* 08 Pilot rules */}
      <SectionShell id="pilot">
        <div className="stagger-panel grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-[color:var(--accent)]">试点规则</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-4xl">
              第一批不卖课,也不推你买软件。
            </h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">{pilotRules.note}</p>
          </div>
          <div className="rounded-sm border border-[color:var(--line-strong)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow-soft)]">
            <h3 className="font-serif text-2xl font-semibold text-[color:var(--foreground)]">{pilotRules.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{pilotRules.intro}</p>
            <ul className="mt-5 space-y-3">
              {pilotRules.rules.map((rule) => (
                <li key={rule} className="flex gap-3 text-sm leading-7 text-[color:var(--foreground)]">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      {/* 09 Trust */}
      <SectionShell id="trust" tone="surface">
        <div className="stagger-panel">
          <SectionHeading
            label="信任"
            title="先把能验证的事摆出来。"
            body="不编造客户证言、不写虚假结果。现阶段只展示真实上线作品、试点规则和样张占位。"
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {trustPoints.map((point) => (
              <article key={point.title} className="rounded-sm border border-[color:var(--line)] bg-[color:var(--background)] p-6">
                <h3 className="font-serif text-xl font-semibold text-[color:var(--foreground)]">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 10 Works proof */}
      <SectionShell id="works">
        <div className="stagger-panel">
          <SectionHeading
            label="真实作品证明"
            title="已有 2 个上线作品,证明我能把东西做出来。"
            body="它们不是商业案例,而是能力证明:需求收集、页面实现、上线访问、持续迭代。"
          />
          <div className="mt-8 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
            {works.map((work) => (
              <a
                key={work.href}
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-4 py-6 transition hover:text-[color:var(--accent)] sm:grid-cols-[0.75fr_1.25fr_auto] sm:items-center"
              >
                <h3 className="font-serif text-2xl font-semibold text-[color:var(--foreground)] group-hover:text-[color:var(--accent)]">
                  {work.title}
                </h3>
                <div>
                  <p className="text-sm leading-7 text-[color:var(--muted)]">{work.summary}</p>
                  <p className="mt-2 text-xs text-[color:var(--muted)]">{work.meta.join(" · ")}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
                  打开
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 11 FAQ */}
      <SectionShell id="faq" tone="surface">
        <div className="stagger-panel">
          <SectionHeading label="FAQ" title="小老板通常会先问这些。" body="先把边界说清楚,避免你以为这是卖课、软件或复杂系统。" />
          <div className="mt-8 divide-y divide-[color:var(--line)] rounded-sm border border-[color:var(--line)] bg-[color:var(--background)]">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group p-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold text-[color:var(--foreground)]">
                  {faq.question}
                  <span className="text-[color:var(--accent)] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[color:var(--muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 12 Contact */}
      <SectionShell id="contact">
        <div className="stagger-panel">
          <SectionHeading
            label="开始一次免费诊断"
            title="加微信,先聊清楚你现在最缺什么。"
            body="缺客户、缺内容,还是缺一个能展示生意的页面？说一句你做什么,我先帮你看一版。"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <WeChatCard />
            <div className="rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
              <p className="text-sm font-medium text-[color:var(--accent)]">其他入口</p>
              <div className="mt-4 divide-y divide-[color:var(--line)]">
                {contactLinks.map((link) => {
                  const row = (
                    <div className="grid gap-1 py-4 sm:grid-cols-[88px_1fr] sm:items-center">
                      <span className="text-sm font-medium text-[color:var(--accent)]">{link.label}</span>
                      <span className="break-words text-base text-[color:var(--foreground)]">{link.value}</span>
                    </div>
                  );
                  return link.href ? (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="block transition hover:text-[color:var(--accent)]">
                      {row}
                    </a>
                  ) : (
                    <div key={link.label}>{row}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <footer className="border-t border-[color:var(--line)] py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 text-sm text-[color:var(--muted)] sm:px-8 lg:px-10">
          <p>
            {siteConfig.domain} · {PILOT_NAME}
          </p>
          <p>用 AI 帮小生意把获客这件事做顺。</p>
        </div>
      </footer>
    </main>
  );
}
