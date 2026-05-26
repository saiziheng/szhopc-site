import Link from "next/link";

export const metadata = {
  title: "AI 帮你做内容 | szh OPC",
  description:
    "朋友圈、视频号、海报、公众号文章——交付的是你直接能发的成品,不是教程。"
};

export default function AiContentPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold text-[#1B4332] hover:underline"
        >
          ← 回 business.szhopc.cn 主页
        </Link>

        <header className="mt-8">
          <h1 className="text-4xl font-semibold leading-tight text-[#18181b] sm:text-5xl">
            AI 帮你做内容
          </h1>
          <p className="mt-6 text-xl leading-8 text-[#3f3f46]">
            朋友圈、视频号、海报、公众号文章——交付的是你直接能发的成品,不是教程。
          </p>
        </header>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-[#1B4332]">
            —— 我能交付什么 ——
          </h2>
          <ul className="mt-6 space-y-5">
            <li className="rounded-md border border-[#e4e4e7] bg-white p-5">
              <p className="text-base font-semibold text-[#18181b]">
                朋友圈文案 / 海报
              </p>
              <p className="mt-2 text-sm leading-7 text-[#71717a]">
                活动 / 节日 / 产品推广,成品交付直接发。
              </p>
            </li>
            <li className="rounded-md border border-[#e4e4e7] bg-white p-5">
              <p className="text-base font-semibold text-[#18181b]">
                公众号文 / 营销邮件
              </p>
              <p className="mt-2 text-sm leading-7 text-[#71717a]">
                从选题到成稿。
              </p>
            </li>
            <li className="rounded-md border border-[#e4e4e7] bg-white p-5">
              <p className="text-base font-semibold text-[#18181b]">
                短视频脚本 / 抖音文案
              </p>
              <p className="mt-2 text-sm leading-7 text-[#71717a]">
                口播稿 + 标题 + 标签。
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-[#1B4332]">
            —— 怎么开始 ——
          </h2>
          <ol className="mt-6 space-y-3 text-base leading-7 text-[#3f3f46]">
            <li>1. 加微信备注「内容」/ 邮件聊一次</li>
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
            <p className="text-base leading-7 text-[#3f3f46]">案例整理中。</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-[#1B4332]">
            —— 想聊一次 ——
          </h2>
          <p className="mt-6 text-base leading-7 text-[#3f3f46]">
            微信:加备注【内容】(回主页{" "}
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
              href="/vibe-coding"
              className="inline-flex items-center gap-1.5 rounded-md border border-[#1B4332] bg-white px-4 py-2 text-sm font-semibold text-[#1B4332] transition hover:bg-[#1B4332] hover:text-white"
            >
              AI 帮你做工具
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
