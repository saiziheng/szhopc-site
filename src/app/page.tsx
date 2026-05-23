import Image from "next/image";
import Link from "next/link";
import { contactLinks, siteConfig, TAGLINE } from "@/config/site";
import { services } from "@/data/services";
import { updates } from "@/data/updates";
import { works } from "@/data/works";

const navItems = [
  { href: "#services", label: "能做什么" },
  { href: "#works", label: "作品" },
  { href: "#updates", label: "公开进展" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "联系" }
];

const aboutPoints = [
  "河海大学在读,用 Codex、Coze、GitHub、Vercel 和 Obsidian 做真实项目。",
  "正在实践学生版 OPC:需求发现、原型开发、内容传播、客户交付、复盘沉淀。",
  "当前主线是 vibe coding 作品集与个人 IP,先把真实小作品做出来、讲清楚、沉淀下来。"
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

export default function Home() {
  return (
    <main>
      <section className="hero-shell relative isolate min-h-[92svh] overflow-hidden px-5 pb-12 pt-5 text-white sm:px-8 lg:px-10">
        <Image
          src="/opc-workbench.svg"
          alt=""
          aria-hidden="true"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,12,18,0.93)_0%,rgba(9,12,18,0.74)_47%,rgba(9,12,18,0.42)_100%)]" />

        <header className="mx-auto flex max-w-6xl items-center justify-between gap-5">
          <a href="#" className="text-base font-semibold tracking-normal text-white">
            {siteConfig.name}
          </a>
          <nav aria-label="主导航" className="hidden items-center gap-7 text-sm text-white/74 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white hover:text-[#111827]"
          >
            联系/关注
          </a>
        </header>

        <div className="mx-auto flex min-h-[calc(92svh-76px)] max-w-6xl items-center">
          <div className="max-w-3xl pb-10 pt-16">
            <h1 className="text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              我是 szh,正在用 AI 协作完成真实项目。
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/84 sm:text-2xl">
              {TAGLINE}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/64 sm:text-lg">
              这里记录作品、公开进展和学生版 OPC 实践:不是商单交付页,而是让真实行动被看见的信任入口。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#f7c95f] px-5 py-3 text-sm font-semibold text-[#17120a] transition hover:bg-[#ffd97a]"
              >
                看能给你做什么
                <ArrowIcon />
              </a>
              <a
                href="#works"
                className="inline-flex items-center justify-center rounded-md border border-white/22 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/55 hover:bg-white/8"
              >
                看作品集
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="section-grid">
            <div>
              <p className="text-sm font-semibold text-[#9c5b20]">Services</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#111827] sm:text-4xl">
                能给你做什么。
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#5c6472]">
              三条承接方向,每条都基于已经在做的真实项目。点进去看具体能交付什么、给谁用、怎么开始。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group flex flex-col rounded-md border border-[#dedbd1] bg-[#f8f7f2] p-6 transition hover:-translate-y-1 hover:border-[#c9a45a] hover:shadow-[0_18px_52px_rgba(30,41,59,0.10)]"
              >
                <h3 className="text-xl font-semibold text-[#111827]">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#263142]">{service.oneLine}</p>
                <p className="mt-4 text-sm leading-6 text-[#5c6472]">
                  <span className="font-semibold text-[#8f4f17]">适合</span>:{service.audience}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#8f4f17]">
                  看一眼
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="bg-[#f8f7f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="section-grid">
            <div>
              <p className="text-sm font-semibold text-[#9c5b20]">Portfolio</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#111827] sm:text-4xl">
                先放真实可点开的作品。
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#5c6472]">
              首版只展示已经能访问或可验证的项目。后续每个作品都继续补上开发过程、复盘和内容素材。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {works.map((work) => (
              <a
                key={work.href}
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="work-card group overflow-hidden rounded-md border border-[#dedbd1] bg-white text-[#111827] shadow-sm transition hover:-translate-y-1 hover:border-[#c9a45a] hover:shadow-[0_18px_52px_rgba(30,41,59,0.12)]"
              >
                <Image
                  src={work.preview}
                  alt=""
                  width={900}
                  height={520}
                  unoptimized
                  className="h-44 w-full object-cover"
                />
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="text-xl font-semibold">{work.title}</h3>
                    <span className="mt-1 rounded-full border border-[#d9d4c7] px-2.5 py-1 text-xs text-[#5c6472] group-hover:border-[#c9a45a]">
                      外链
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#5c6472]">{work.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8f4f17]">
                    打开作品
                    <ArrowIcon />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="updates" className="bg-[#111827] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="section-grid">
            <div>
              <p className="text-sm font-semibold text-[#f7c95f]">Build in public</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                把过程留在台面上。
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/66">
              时间线先放首批占位,后续按项目真实进展更新。重点不是制造热闹,而是让判断、卡点和结果可追踪。
            </p>
          </div>

          <div className="mt-10 divide-y divide-white/12 border-y border-white/12">
            {updates.map((update) => (
              <article key={`${update.date}-${update.title}`} className="grid gap-3 py-6 md:grid-cols-[150px_1fr]">
                <time className="text-sm text-white/46">{update.date}</time>
                <div>
                  <h3 className="text-lg font-semibold text-white">{update.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/64">{update.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-[#9c5b20]">About</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#111827] sm:text-4xl">
              学生版 OPC 实践样本。
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5c6472]">
              我想验证的不是“大学生会不会用 AI 工具”,而是能不能借助 AI 完成从真实需求到可展示作品的最小闭环。
            </p>
          </div>
          <div className="grid gap-3">
            {aboutPoints.map((point) => (
              <div key={point} className="rounded-md border border-[#dedbd1] bg-[#f8f7f2] p-5">
                <p className="text-base leading-7 text-[#263142]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f8f7f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="section-grid">
            <div>
              <p className="text-sm font-semibold text-[#9c5b20]">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#111827] sm:text-4xl">
                关注项目进展,从公开入口联系。
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#5c6472]">
              这里不放私人手机号。想合作 / 想试一次,从下面任一个公开入口找我,或先去服务页看具体怎么开始。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {contactLinks.map((link) => {
              const content = (
                <>
                  <span className="text-sm font-semibold text-[#8f4f17]">{link.label}</span>
                  <span className="mt-3 block text-lg font-semibold text-[#111827]">{link.value}</span>
                </>
              );

              if (link.href) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-[#dedbd1] bg-white p-5 transition hover:-translate-y-1 hover:border-[#c9a45a] hover:shadow-[0_18px_52px_rgba(30,41,59,0.10)]"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={link.label} className="rounded-md border border-[#dedbd1] bg-white p-5">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
