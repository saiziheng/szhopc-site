import Link from "next/link";

export const metadata = {
  title: "智能体定制 | szh OPC",
  description: "把你重复的工作压成一个能自己跑的 AI 智能体。"
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[#8f4f17] hover:underline">
          ← 回 szhopc.cn
        </Link>
        <h1 className="mt-8 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl">
          智能体定制
        </h1>
        <p className="mt-6 text-xl leading-8 text-[#263142]">
          把你重复的工作压成一个能自己跑的 AI 智能体。
        </p>
        <p className="mt-4 text-base leading-7 text-[#5c6472]">
          适合:想把流程 / 客服 / 内容生产自动化的人或小团队。
        </p>

        <div className="mt-12 rounded-md border border-dashed border-[#c9a45a] bg-white p-6">
          <p className="text-sm font-semibold text-[#8f4f17]">承接细节整理中</p>
          <p className="mt-3 text-base leading-7 text-[#263142]">
            交付范围、案例、价格区间正在沉淀。想先聊一次的话,从首页底部任一公开入口找我,
            备注「智能体」,我会先看你的场景再回。
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#f7c95f] px-5 py-3 text-sm font-semibold text-[#17120a] transition hover:bg-[#ffd97a]"
          >
            去联系入口
          </Link>
        </div>
      </div>
    </main>
  );
}
