import { ArrowIcon, CheckIcon, MessageIcon } from "@/components/icons";
import { PhoneMockup } from "@/components/phone-mockup";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig, TAGLINE, wechat } from "@/config/site";
import { beforeAfter, pilotRules, processSteps, sampleOutputs } from "@/data/offer";
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
    { value: "100%", label: "可点开访问" }
  ];

  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2">
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
  // Jobs 5 段戏剧化结构,选 sample[0] 餐饮 + beforeAfter[0] 餐饮活动,在 Act 2 用同一场景把痛点 / 交付包 / 改写效果一次说清。
  const featuredSample = sampleOutputs[0];
  const featuredBeforeAfter = beforeAfter[0];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[color:var(--background)] text-[color:var(--foreground)]">
      <header className="sticky top-0 z-20 border-b border-[color:var(--line)] bg-[color:var(--background-translucent)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <a href="#top" className="font-serif text-xl font-semibold text-[color:var(--foreground)]">
            {siteConfig.name}
          </a>
          <nav aria-label="主导航" className="hidden items-center gap-6 text-sm text-[color:var(--muted)] md:flex">
            <a className="transition hover:text-[color:var(--accent)]" href="#example">
              看例子
            </a>
            <a className="transition hover:text-[color:var(--accent)]" href="#process">
              流程
            </a>
            <a className="transition hover:text-[color:var(--accent)]" href="#works">
              作品
            </a>
            <a className="transition hover:text-[color:var(--accent)]" href="#contact">
              联系
            </a>
          </nav>
          <PrimaryCta className="min-h-10 px-4 py-2 text-xs sm:text-sm" />
        </div>
      </header>

      {/* Act 1 · ONE LINE — Hero */}
      <section id="top" className="relative border-b border-[color:var(--line)]">
        <div className="hero-texture absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <div className="stagger-panel">
            <p className="text-sm font-medium text-[color:var(--accent)]">{PILOT_NAME}</p>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.1] text-[color:var(--foreground)] sm:text-5xl lg:text-6xl">
              {TAGLINE}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[color:var(--muted)]">
              先免费帮你做一版能直接发的朋友圈、短视频脚本和客户回复话术。你拿去发、拿去回客户,判断到底有没有用。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta />
              <SecondaryCta href="#example">看一个真实例子</SecondaryCta>
            </div>
            <div className="mt-8 max-w-xl">
              <ProofStrip />
            </div>
          </div>
          <div className="fade-item lg:justify-self-end">
            <PhoneMockup sample={featuredSample} />
          </div>
        </div>
      </section>

      {/* Act 2 · ONE EXAMPLE — 一个具体场景把痛点+交付+改写一次说清 */}
      <SectionShell id="example" tone="surface">
        <div className="stagger-panel">
          <SectionHeading
            label="看一个真实场景"
            title="朋友圈帖子,改前 vs 改后。"
            body="不堆五条痛点和三种交付包。直接用一个餐饮老板的真实场景,让你看到「我能拿到什么」。"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="fade-item">
              <PhoneMockup sample={featuredSample} />
              <p className="mt-4 text-center text-xs leading-6 text-[color:var(--muted)]">
                {featuredSample.channel} · {featuredSample.includes.join(" / ")}
              </p>
            </div>
            <div className="fade-item">
              <article className="overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--background)] shadow-[var(--shadow-soft)]">
                <div className="border-b border-[color:var(--line)] px-5 py-4">
                  <p className="text-sm font-medium text-[color:var(--accent)]">{featuredBeforeAfter.scene}</p>
                </div>
                <div className="grid gap-px bg-[color:var(--line)]">
                  <div className="bg-[color:var(--surface-muted)] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--muted)]">改前</p>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{featuredBeforeAfter.before}</p>
                  </div>
                  <div className="bg-[color:var(--background)] p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--accent)]">改后</p>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--foreground)]">{featuredBeforeAfter.after}</p>
                  </div>
                </div>
                <p className="px-5 py-4 text-xs leading-6 text-[color:var(--muted)]">{featuredBeforeAfter.note}</p>
              </article>
              <p className="mt-5 text-base leading-8 text-[color:var(--foreground)]">
                同一家餐饮店,同一个周末套餐——把「给谁、什么场景、下一步做什么」说完整,客户才接得住。我交付的就是这种能直接发的内容,不是一份 AI 报告。
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Act 3 · ONE PROMISE — 3 步开始 + 试点期前 5 个免费 */}
      <SectionShell id="process">
        <div className="stagger-panel">
          <SectionHeading
            label="3 步开始"
            title="试点期前 5 个免费,先做样张再判断。"
            body="不卖课、不推软件。先 10 分钟诊断,做一版你能直接发的样张,你试用后我们一起微调。"
          />
          <div className="mt-10">
            <ProcessSteps steps={processSteps} />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.4fr_1fr] lg:items-stretch">
            <div className="flex flex-col justify-center rounded-sm border border-[color:var(--line-strong)] bg-[color:var(--accent-soft)] p-6">
              <p className="text-sm font-medium text-[color:var(--accent)]">名额锚定</p>
              <p className="mt-3 font-serif text-5xl font-semibold leading-none text-[color:var(--accent)]">
                前 5 个
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                试点期免费,只换 3 件事——名额满后转低价。
              </p>
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
              <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">{pilotRules.note}</p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Act 4 · ONE TRUST — 真实作品证明 */}
      <SectionShell id="works" tone="surface">
        <div className="stagger-panel">
          <SectionHeading
            label="我能把东西做出来"
            title="2 个真实上线作品,直接点开看。"
            body="不写虚假证言、不编客户案例。先用真实作品证明能力——需求收集、页面实现、上线访问、持续迭代。"
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

      {/* Act 5 · ONE ACTION — 加微信,聊 10 分钟 */}
      <SectionShell id="contact">
        <div className="stagger-panel">
          <SectionHeading
            label="开始一次免费诊断"
            title="加我微信,聊 10 分钟。"
            body="说一句你做什么生意、最近最想解决的获客问题,我先免费帮你看一版。"
            align="center"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <WeChatCard />
            <p className="mt-6 text-center text-xs leading-6 text-[color:var(--muted)]">
              不方便加微信也可以邮件:saizh0329 [at] gmail.com
            </p>
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
