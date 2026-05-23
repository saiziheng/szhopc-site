import Link from "next/link";

export const metadata = {
  title: "AI 协作内容获客 | szh OPC",
  description: "帮小生意把朋友圈、视频号、海报做成你直接能发的成品。"
};

export default function AiContentPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[#8f4f17] hover:underline">
          ← 回 szhopc.cn
        </Link>
        <h1 className="mt-8 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl">
          AI 协作内容获客
        </h1>
        <p className="mt-6 text-xl leading-8 text-[#263142]">
          帮小生意把朋友圈、视频号、海报做成你直接能发的成品。
        </p>
        <p className="mt-4 text-base leading-7 text-[#5c6472]">
          适合:餐饮 / 美业 / 教培 / 实体零售小店主。
        </p>

        <div className="mt-12 rounded-md border border-dashed border-[#c9a45a] bg-white p-6">
          <p className="text-sm font-semibold text-[#8f4f17]">完整落地页正在搬迁</p>
          <p className="mt-3 text-base leading-7 text-[#263142]">
            原来商家版完整落地页(含案例、流程、FAQ、价格)已在另一分支做好,
            正在迁到本路径并按建议吃掉黑话清洗、微信一键复制、移动端优化。
            想先聊一次的话,从首页底部任一公开入口找我,备注「获客」。
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
