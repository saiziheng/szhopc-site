import { contactLinks, siteConfig, TAGLINE, wechat } from "@/config/site";
import {
  audiences,
  caseStudies,
  deliverables,
  painPoints,
  pilotRules
} from "@/data/offer";
import { works } from "@/data/works";

const PILOT_NAME = "小生意 AI 获客内容试点";

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
  body?: string;
}) {
  return (
    <div className="grid gap-5 border-b border-[color:var(--line)] pb-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
      <div>
        <p className="text-sm font-medium text-[color:var(--accent)]">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-4xl">
          {title}
        </h2>
      </div>
      {body ? (
        <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)]">{body}</p>
      ) : null}
    </div>
  );
}

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center justify-center gap-2 rounded-sm bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 ${className}`}
    >
      申请一次免费诊断
      <ArrowIcon />
    </a>
  );
}

function WeChatCard() {
  return (
    <div className="rounded-sm border border-[color:var(--line-strong)] bg-[color:var(--accent-soft)] p-6">
      <p className="text-sm font-medium text-[color:var(--accent)]">微信(优先)</p>
      <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-sm border border-dashed border-[color:var(--line-strong)] bg-[color:var(--background)] text-center text-xs leading-5 text-[color:var(--muted)]">
          {wechat.qrcode ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={wechat.qrcode} alt="微信二维码" className="h-full w-full object-contain" />
          ) : (
            <span>微信二维码<br />待补素材</span>
          )}
        </div>
        <div>
          <p className="font-serif text-2xl font-semibold text-[color:var(--foreground)]">
            {wechat.id}
          </p>
          <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{wechat.note}</p>
          <p className="mt-4 text-sm leading-7 text-[color:var(--foreground)]">
            加我微信,说一句你做什么生意、最想解决哪个获客问题,我先免费帮你看一版。
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-4 border-b border-[color:var(--line)] py-5">
          <span className="font-serif text-xl font-semibold text-[color:var(--foreground)]">
            {siteConfig.name}
          </span>
          <PrimaryCta />
        </header>

        {/* Hero */}
        <section className="border-b border-[color:var(--line)] py-12 sm:py-16">
          <div className="stagger-panel">
            <p className="text-sm font-medium text-[color:var(--accent)]">{PILOT_NAME}</p>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] text-[color:var(--foreground)] sm:text-5xl lg:text-6xl">
              {TAGLINE}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[color:var(--muted)]">
              适合餐饮、直播、民宿、饰品、二手车、本地服务。第一批免费 / 低价试点,快速产出朋友圈文案、短视频脚本、客户咨询话术和简单获客页面。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta />
              <a
                href="#offer"
                className="inline-flex items-center justify-center rounded-sm border border-[color:var(--line-strong)] px-5 py-3 text-sm font-medium text-[color:var(--accent)] transition hover:bg-[color:var(--accent-soft)]"
              >
                看能帮你做什么
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {audiences.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-[color:var(--line)] px-3 py-1.5 text-sm text-[color:var(--muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 痛点 */}
        <section id="pain" className="scroll-mt-8 border-b border-[color:var(--line)] py-12 sm:py-16">
          <div className="stagger-panel">
            <SectionHeading
              eyebrow="你是不是也这样"
              title="生意不差,就差把它说清楚、发出去。"
              body="下面这些事，每天都在悄悄漏掉客户。不用全做，先解决最卡的一个。"
            />
            <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-3">
              {painPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="fade-item bg-[color:var(--background)] p-6"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <p className="text-sm font-medium text-[color:var(--accent)]">0{index + 1}</p>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-[color:var(--foreground)]">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 交付 */}
        <section id="offer" className="scroll-mt-8 border-b border-[color:var(--line)] py-12 sm:py-16">
          <div className="stagger-panel">
            <SectionHeading
              eyebrow="第一步给你什么"
              title={deliverables.headline}
              body={deliverables.note}
            />
            <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2">
              {deliverables.items.map((item, index) => (
                <div
                  key={item}
                  className="fade-item flex items-baseline gap-3 bg-[color:var(--background)] p-5"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <span className="font-serif text-lg font-semibold text-[color:var(--accent)]">
                    0{index + 1}
                  </span>
                  <span className="text-base leading-7 text-[color:var(--foreground)]">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">{deliverables.more}</p>
          </div>
        </section>

        {/* 适合对象 + 试点规则 */}
        <section id="pilot" className="scroll-mt-8 border-b border-[color:var(--line)] py-12 sm:py-16">
          <div className="stagger-panel grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-[color:var(--accent)]">适合谁</p>
              <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-[color:var(--foreground)] sm:text-3xl">
                靠内容和客户跑生意的小老板。
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {audiences.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-[color:var(--line)] bg-[color:var(--accent-soft)] px-3 py-1.5 text-sm text-[color:var(--accent)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-[color:var(--line)] p-6">
              <p className="text-sm font-medium text-[color:var(--accent)]">{pilotRules.title}</p>
              <p className="mt-3 text-base leading-8 text-[color:var(--foreground)]">
                {pilotRules.intro}
              </p>
              <ul className="mt-4 space-y-3">
                {pilotRules.rules.map((rule) => (
                  <li key={rule} className="flex gap-3 text-sm leading-7 text-[color:var(--muted)]">
                    <span aria-hidden="true" className="text-[color:var(--accent)]">·</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-[color:var(--line)] pt-4 text-sm leading-7 text-[color:var(--muted)]">
                {pilotRules.note}
              </p>
            </div>
          </div>
        </section>

        {/* 案例占位 + 信任证明 */}
        <section id="cases" className="scroll-mt-8 border-b border-[color:var(--line)] py-12 sm:py-16">
          <div className="stagger-panel">
            <SectionHeading eyebrow="案例" title="真实试点案例,做一个换一个样张。" body={caseStudies.note} />
            <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-3">
              {caseStudies.placeholders.map((item, index) => (
                <div
                  key={item.title}
                  className="fade-item bg-[color:var(--background)] p-6"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <span className="inline-block rounded-sm bg-[color:var(--accent-soft)] px-2 py-1 text-xs font-medium text-[color:var(--accent)]">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-semibold leading-tight text-[color:var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[color:var(--muted)]">{item.status}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-[color:var(--line)] pt-8">
              <p className="text-sm leading-7 text-[color:var(--muted)]">
                顺带证明一下「东西真能做出来」——这是我已经上线、可以直接打开的作品:
              </p>
              <div className="mt-4 divide-y divide-[color:var(--line)]">
                {works.map((work) => (
                  <a
                    key={work.href}
                    href={work.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col gap-1 py-4 transition hover:text-[color:var(--accent)] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-serif text-lg font-semibold text-[color:var(--foreground)] group-hover:text-[color:var(--accent)]">
                      {work.title}
                    </span>
                    <span className="text-sm text-[color:var(--muted)]">{work.summary}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 联系 */}
        <section id="contact" className="scroll-mt-8 py-12 sm:py-16">
          <div className="stagger-panel">
            <SectionHeading
              eyebrow="开始一次免费诊断"
              title="加微信,先聊清楚你现在最缺什么。"
              body="缺客户、缺内容,还是缺一个能展示生意的页面？说一句你做什么，我先帮你看一版，不收费、不绑定。"
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <WeChatCard />
              <div className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
                {contactLinks.map((link) => {
                  const row = (
                    <div className="grid gap-1 py-4 sm:grid-cols-[88px_1fr] sm:items-center">
                      <span className="text-sm font-medium text-[color:var(--accent)]">
                        {link.label}
                      </span>
                      <span className="text-base text-[color:var(--foreground)]">{link.value}</span>
                    </div>
                  );
                  return link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block transition hover:text-[color:var(--accent)]"
                    >
                      {row}
                    </a>
                  ) : (
                    <div key={link.label}>{row}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-[color:var(--line)] py-8 text-sm text-[color:var(--muted)]">
          <p>
            {siteConfig.domain} · {PILOT_NAME}
          </p>
          <p className="mt-1">用 AI 帮小生意把获客这件事做顺。</p>
        </footer>
      </div>
    </main>
  );
}
