import Image from "next/image";
import Link from "next/link";

const options = [
  {
    id: "A",
    src: "/hero-bg-A.svg",
    title: "方案 A · 极简纯净",
    desc: "深色渐变 + 暖金光晕一角 + 极少星点。最 Jobs / Apple Pro 风,信息最少。"
  },
  {
    id: "B",
    src: "/hero-bg-B.svg",
    title: "方案 B · 细线工程感",
    desc: "深色 + 细线网格 + 暖金对角线 + 单个细线圆环。Linear / Vercel 风,工程严谨。"
  },
  {
    id: "C",
    src: "/hero-bg-C.svg",
    title: "方案 C · 抽象氛围",
    desc: "深色 + 两个模糊大色块(暖金/深紫蓝) + 贯穿弧线。Vision Pro 风,氛围感强。"
  }
];

const heroCopy = {
  h1: "用 AI 接住企业真实的麻烦事。",
  sub: "客服、文案、工具、流程——交付的是你能直接用的成品。"
};

export default function HeroOptionsPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/90 px-5 py-3 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <p className="text-sm font-semibold text-white">Hero 背景三选一对比页</p>
          <Link href="/" className="text-sm text-white/70 hover:text-white">
            ← 回主页
          </Link>
        </div>
      </div>

      {options.map((opt) => (
        <section key={opt.id} className="relative isolate min-h-[92svh] overflow-hidden border-b border-white/5 px-5 pb-12 pt-16 text-white sm:px-8 lg:px-10">
          <Image
            src={opt.src}
            alt=""
            aria-hidden="true"
            fill
            unoptimized
            sizes="100vw"
            className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,12,18,0.78)_0%,rgba(9,12,18,0.5)_47%,rgba(9,12,18,0.25)_100%)]" />

          <div className="mx-auto max-w-6xl">
            <div className="rounded-md border border-[#1B4332]/40 bg-[#0a0a0a]/70 px-4 py-2 text-sm font-semibold text-[#18181b] backdrop-blur inline-block">
              {opt.title}
            </div>
            <div className="mt-12 max-w-3xl pb-10">
              <h1 className="text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                {heroCopy.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-white/84 sm:text-2xl">
                {heroCopy.sub}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <span className="inline-flex items-center justify-center gap-2 rounded-md bg-[#18181b] px-5 py-3 text-sm font-semibold text-[#ffffff]">
                  看能做什么 →
                </span>
                <span className="inline-flex items-center justify-center rounded-md border border-white/22 px-5 py-3 text-sm font-semibold text-white">
                  看公益项目
                </span>
              </div>
              <p className="mt-12 max-w-2xl text-sm leading-6 text-white/55">
                {opt.desc}
              </p>
            </div>
          </div>
        </section>
      ))}

      <div className="px-5 py-10 text-center text-sm text-white/60 sm:px-8">
        滑完三屏选一个,告诉 cc:「我选 A / B / C」,cc 会立刻替换主页 Hero 背景。
      </div>
    </main>
  );
}
