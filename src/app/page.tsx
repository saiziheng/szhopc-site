import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { about } from "@/data/about";
import { causes } from "@/data/causes";
import { contact } from "@/data/contact";
import { services } from "@/data/services";
import { works } from "@/data/works";

const navItems = [
  { href: "#services", label: "能做什么" },
  { href: "#causes", label: "公益项目" },
  { href: "#about", label: "关于" },
  { href: "#contact", label: "联系" }
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function Home() {
  const enterpriseWorks = works.filter((work) => work.category === "enterprise");
  const causeWorks = works.filter((work) => work.category === "cause");
  const learningWorks = works.filter((work) => work.category === "learning");
  const featuredEnterprise = enterpriseWorks.find((work) => work.featured);

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-white px-5 pb-6 pt-5 sm:px-8 sm:pb-10 lg:px-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between gap-5 pt-2">
          <a href="#" className="text-base font-semibold tracking-normal text-[#18181b]">
            {siteConfig.name}
          </a>
          <nav aria-label="主导航" className="hidden items-center gap-7 text-sm text-[#71717a] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#18181b]">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-md border border-[#e4e4e7] bg-white px-4 py-2 text-sm font-medium text-[#18181b] transition hover:border-[#18181b]"
          >
            联系
          </a>
        </header>

        <div className="mx-auto max-w-4xl pb-6 pt-12 sm:pb-10 sm:pt-16 lg:pt-20">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e4e4e7] bg-[#fafaf9] px-3 py-1 text-xs text-[#3f3f46]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1B4332]" />
            南京 · AI 协作交付现场
          </div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#18181b] sm:text-5xl lg:text-6xl">
            用 AI 接住<br />企业<span className="text-[#1B4332]">真实的</span>麻烦事。
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#3f3f46] sm:text-xl">
            客服、文案、工具、流程——交付的是你能直接用的成品。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1B4332] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2d6a4f]"
            >
              看能做什么
              <ArrowIcon />
            </a>
            <a
              href="#causes"
              className="inline-flex items-center justify-center rounded-md border border-[#e4e4e7] bg-white px-5 py-3 text-sm font-semibold text-[#18181b] transition hover:border-[#1B4332] hover:text-[#1B4332]"
            >
              看公益项目
            </a>
          </div>
        </div>
      </section>

      {/* #services 能做什么 */}
      <section id="services" className="border-t border-[#f4f4f5] bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="section-grid">
            <div>
              <p className="text-sm font-semibold text-[#1B4332]">Services</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#18181b] sm:text-4xl">
                能做什么
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#71717a]">
              三类常见痛点——重复的活、缺的工具、缺的内容。点进去看每一类怎么开始。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group flex flex-col rounded-md border border-[#e4e4e7] bg-[#fafaf9] p-6 transition hover:-translate-y-1 hover:border-[#1B4332] hover:shadow-[0_18px_52px_rgba(30,41,59,0.10)]"
              >
                <h3 className="text-xl font-semibold text-[#18181b]">{service.title}</h3>
                <ul className="mt-5 space-y-4">
                  {service.items.map((item) => (
                    <li key={item.text} className="text-sm leading-6 text-[#3f3f46]">
                      <p>{item.text}</p>
                      {item.tail ? (
                        <p className="mt-1 text-sm text-[#1B4332]">→ {item.tail}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#1B4332]">
                  了解详情
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* #works 作品(分类) */}
      <section id="works" className="border-t border-[#f4f4f5] bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="section-grid">
            <div>
              <p className="text-sm font-semibold text-[#1B4332]">Portfolio</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#18181b] sm:text-4xl">
                作品
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#71717a]">
              先看已经在线的真实作品,最后是正在接入的企业案例。
            </p>
          </div>

          {/* 公益项目 — 文字 list(先建立信任) */}
          {causeWorks.length > 0 ? (
            <div className="mt-12">
              <h3 className="text-base font-semibold text-[#1B4332]">公益项目</h3>
              <ul className="mt-5 divide-y divide-[#e4e4e7] border-y border-[#e4e4e7]">
                {causeWorks.map((work) => (
                  <li key={work.title} className="py-4">
                    {work.href ? (
                      <a
                        href={work.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                      >
                        <div>
                          <span className="text-base font-semibold text-[#18181b] group-hover:text-[#1B4332]">
                            {work.title}
                          </span>
                          <span className="ml-3 text-sm text-[#71717a]">{work.summary}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm text-[#1B4332]">
                          {(work.href ?? "").replace(/^https?:\/\//, "")}
                          <ExternalArrow />
                        </span>
                      </a>
                    ) : (
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                        <span className="text-base font-semibold text-[#18181b]">{work.title}</span>
                        <span className="text-sm text-[#71717a]">{work.summary}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* 学习工具 — 文字 list */}
          {learningWorks.length > 0 ? (
            <div className="mt-12">
              <h3 className="text-base font-semibold text-[#1B4332]">学习工具</h3>
              <ul className="mt-5 divide-y divide-[#e4e4e7] border-y border-[#e4e4e7]">
                {learningWorks.map((work) => (
                  <li key={work.title} className="py-4">
                    {work.href ? (
                      <a
                        href={work.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                      >
                        <div>
                          <span className="text-base font-semibold text-[#18181b] group-hover:text-[#1B4332]">
                            {work.title}
                          </span>
                          <span className="ml-3 text-sm text-[#71717a]">{work.summary}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm text-[#1B4332]">
                          {(work.href ?? "").replace(/^https?:\/\//, "")}
                          <ExternalArrow />
                        </span>
                      </a>
                    ) : (
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                        <span className="text-base font-semibold text-[#18181b]">{work.title}</span>
                        <span className="text-sm text-[#71717a]">{work.summary}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* 企业案例 — 大卡(最后,软背书) */}
          {featuredEnterprise ? (
            <div className="mt-12">
              <h3 className="text-base font-semibold text-[#1B4332]">企业案例</h3>
              <article className="mt-5 overflow-hidden rounded-md border border-[#e4e4e7] bg-white shadow-sm">
                {featuredEnterprise.preview ? (
                  <Image
                    src={featuredEnterprise.preview}
                    alt=""
                    width={1200}
                    height={520}
                    unoptimized
                    className="h-56 w-full object-cover sm:h-72"
                  />
                ) : null}
                <div className="p-6 sm:p-8">
                  <h4 className="text-2xl font-semibold text-[#18181b] sm:text-3xl">
                    {featuredEnterprise.title}
                  </h4>
                  <p className="mt-4 text-base leading-7 text-[#3f3f46]">
                    {featuredEnterprise.summary}
                  </p>
                  {featuredEnterprise.stats ? (
                    <p className="mt-3 text-sm leading-6 text-[#71717a]">
                      {featuredEnterprise.stats}
                    </p>
                  ) : null}
                  <div className="mt-6">
                    {featuredEnterprise.href ? (
                      <a
                        href={featuredEnterprise.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B4332] hover:underline"
                      >
                        看详情
                        <ArrowIcon />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa]">
                        (启动后会公开)
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ) : null}
        </div>
      </section>

      {/* #causes 公益项目 */}
      <section id="causes" className="border-t border-[#f4f4f5] bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="section-grid">
            <div>
              <p className="text-sm font-semibold text-[#1B4332]">Causes</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#18181b] sm:text-4xl">
                公益项目
              </h2>
            </div>
          </div>

          <div className="mt-10 rounded-md border border-[#e4e4e7] bg-[#fafaf9] p-8 sm:p-10">
            <p className="text-xl leading-8 text-[#18181b] sm:text-2xl">{causes.headline}</p>
            <p className="mt-5 text-base leading-7 text-[#71717a]">{causes.hookLine1}</p>
            <div className="mt-8">
              <a
                href={causes.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#18181b] px-5 py-3 text-sm font-semibold text-[#ffffff] transition hover:bg-[#27272a]"
              >
                {causes.ctaLabel}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* #about */}
      <section id="about" className="border-t border-[#f4f4f5] bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="section-grid">
            <div>
              <p className="text-sm font-semibold text-[#1B4332]">About</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#18181b] sm:text-4xl">
                {about.headline}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#71717a]">{about.intro}</p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {about.pillars.map((pillar) => (
              <div
                key={pillar}
                className="rounded-md border border-[#e4e4e7] bg-white p-5"
              >
                <p className="text-base leading-7 text-[#3f3f46]">▸ {pillar}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {about.ctas.map((cta) => {
              const isExternal = cta.href.startsWith("http");
              const baseClass =
                "inline-flex items-center justify-center gap-2 rounded-md border border-[#e4e4e7] bg-white px-5 py-3 text-sm font-semibold text-[#18181b] transition hover:border-[#1B4332] hover:text-[#1B4332]";

              if (isExternal) {
                return (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noreferrer"
                    className={baseClass}
                  >
                    —— {cta.label}
                  </a>
                );
              }

              return (
                <a key={cta.label} href={cta.href} className={baseClass}>
                  —— {cta.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* #contact */}
      <section id="contact" className="border-t border-[#f4f4f5] bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="section-grid">
            <div>
              <p className="text-sm font-semibold text-[#1B4332]">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#18181b] sm:text-4xl">
                联系
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#71717a]">
              企业客户走微信。GitHub 看作品,邮箱备用。
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
            <div className="rounded-md border border-[#e4e4e7] bg-[#fafaf9] p-6 sm:p-8">
              <p className="text-sm font-semibold text-[#1B4332]">微信</p>
              <div className="mt-5 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <Image
                  src={contact.wechat.qrcode}
                  alt="微信二维码"
                  width={180}
                  height={180}
                  unoptimized
                  className="h-44 w-44 rounded-md border border-[#e4e4e7] bg-white"
                />
                <p className="text-base leading-7 text-[#3f3f46]">{contact.wechat.note}</p>
              </div>
            </div>

            <ul className="grid gap-3">
              <li className="rounded-md border border-[#e4e4e7] bg-white p-5">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-baseline justify-between gap-4 text-base font-semibold text-[#18181b] hover:text-[#1B4332]"
                >
                  <span>GitHub</span>
                  <span className="text-sm font-normal text-[#71717a]">
                    {contact.github.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              </li>
              <li className="rounded-md border border-[#e4e4e7] bg-white p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-base font-semibold text-[#18181b]">邮箱</span>
                  <span className="text-sm text-[#71717a]">{contact.email}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
