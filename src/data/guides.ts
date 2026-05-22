export type Guide = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  body: string;
  listed?: boolean;
};

export const guides: Guide[] = [];

export const guideRoutePlaceholders: Guide[] = [
  {
    slug: "placeholder",
    title: "指南占位页",
    summary: "这是为了验证 /guides/<slug> 静态路由结构保留的占位页,不会展示在首页指南列表。",
    date: "2026-05-22",
    body: "后续发布真实指南时,替换这条占位路由或新增正式数据即可。",
    listed: false
  }
];

export const guideRoutes = [...guides, ...guideRoutePlaceholders];

export function getGuideBySlug(slug: string) {
  return guideRoutes.find((guide) => guide.slug === slug);
}
