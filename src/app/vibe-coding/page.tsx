import Link from "next/link";

export const metadata = {
  title: "vibe coding 承接 | szh OPC",
  description: "你想要的网站、Demo、工具,我用 AI 协作做出来并上线。"
};

export default function VibeCodingPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[#8f4f17] hover:underline">
          ← 回 szhopc.cn
        </Link>
        <h1 className="mt-8 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl">
          vibe coding 承接
        </h1>
        <p className="mt-6 text-xl leading-8 text-[#263142]">
          你想要的网站、Demo、工具,我用 AI 协作做出来并上线。
        </p>
        <p className="mt-4 text-base leading-7 text-[#5c6472]">
          适合:学生项目 / 个人产品 / 早期验证 / 课程作业升级版。
        </p>

        <div className="mt-12 rounded-md border border-dashed border-[#c9a45a] bg-white p-6">
          <p className="text-sm font-semibold text-[#8f4f17]">承接细节整理中</p>
          <p className="mt-3 text-base leading-7 text-[#263142]">
            已经做出来的真实作品在首页「作品」段可点。承接范围、周期、价格区间正在沉淀。
            想先聊一次的话,从首页底部任一公开入口找我,备注「vibe coding」。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#works"
              className="inline-flex items-center gap-2 rounded-md border border-[#dedbd1] bg-white px-5 py-3 text-sm font-semibold text-[#111827] transition hover:border-[#c9a45a]"
            >
              先看已有作品
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#f7c95f] px-5 py-3 text-sm font-semibold text-[#17120a] transition hover:bg-[#ffd97a]"
            >
              去联系入口
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
