import Link from "next/link";

export const metadata = {
  title: "AI 帮你做工具 | szh OPC",
  description:
    "想要的小工具、内部系统、活动页、Demo,用 AI 协作做出来交给你,能用、能改、能上线。"
};

export default function VibeCodingPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold text-[#1B4332] hover:underline"
        >
          ← 回 szhopc.cn 主页
        </Link>

        <header className="mt-8">
          <h1 className="text-4xl font-semibold leading-tight text-[#18181b] sm:text-5xl">
            AI 帮你做工具
          </h1>
          <p className="mt-6 text-xl leading-8 text-[#3f3f46]">
            想要的小工具、内部系统、活动页、Demo,用 AI 协作做出来交给你,能用、能改、能上线。
          </p>
        </header>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-[#1B4332]">
            —— 我能交付什么 ——
          </h2>
          <ul className="mt-6 space-y-5">
            <li className="rounded-md border border-[#e4e4e7] bg-white p-5">
              <p className="text-base font-semibold text-[#18181b]">
                内部小工具 / 系统
              </p>
              <p className="mt-2 text-sm leading-7 text-[#71717a]">
                替代 Excel + 群里手工对接的内部流程。
              </p>
            </li>
            <li className="rounded-md border border-[#e4e4e7] bg-white p-5">
              <p className="text-base font-semibold text-[#18181b]">
                活动页 / 落地页 / Demo
              </p>
              <p className="mt-2 text-sm leading-7 text-[#71717a]">
                营销活动、产品试点、招募报名。
              </p>
            </li>
            <li className="rounded-md border border-[#e4e4e7] bg-white p-5">
              <p className="text-base font-semibold text-[#18181b]">
                公众号机器人 / 微信群助理 / 数据看板
              </p>
              <p className="mt-2 text-sm leading-7 text-[#71717a]">
                把对外服务接口做成实际能用的东西。
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-[#1B4332]">
            —— 怎么开始 ——
          </h2>
          <ol className="mt-6 space-y-3 text-base leading-7 text-[#3f3f46]">
            <li>1. 加微信备注「工具」/ 邮件聊一次</li>
            <li>2. 30 分钟需求对齐</li>
            <li>3. 报价 + 试做参考</li>
            <li>4. 启动</li>
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-[#1B4332]">
            —— 真实案例 ——
          </h2>
          <div className="mt-6 rounded-md border border-dashed border-[#1B4332] bg-white p-6">
            <p className="text-base leading-7 text-[#3f3f46]">
              案例整理中。已上线作品请回主页「作品」段查看。
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-[#1B4332]">
            —— 想聊一次 ——
          </h2>
          <p className="mt-6 text-base leading-7 text-[#3f3f46]">
            微信:加备注【工具】(回主页{" "}
            <Link
              href="/#contact"
              className="font-semibold text-[#1B4332] hover:underline"
            >
              联系入口
            </Link>
            )
            <br />
            或直接邮件 saizh0329 [at] gmail.com
          </p>
        </section>

        <section className="mt-16 border-t border-[#e4e4e7] pt-10">
          <p className="text-sm font-semibold text-[#1B4332]">
            我还能做什么 → 看其他服务
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              href="/agents"
              className="inline-flex items-center gap-1.5 rounded-md border border-[#1B4332] bg-white px-4 py-2 text-sm font-semibold text-[#1B4332] transition hover:bg-[#1B4332] hover:text-white"
            >
              AI 帮你跑重复活
            </Link>
            <Link
              href="/ai-content"
              className="inline-flex items-center gap-1.5 rounded-md border border-[#1B4332] bg-white px-4 py-2 text-sm font-semibold text-[#1B4332] transition hover:bg-[#1B4332] hover:text-white"
            >
              AI 帮你做内容
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-md border border-[#1B4332] bg-white px-4 py-2 text-sm font-semibold text-[#1B4332] transition hover:bg-[#1B4332] hover:text-white"
            >
              回主页
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
