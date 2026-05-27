export type FilterCategory =
  | "all"
  | "ai-automation"
  | "ecommerce-retail"
  | "corporate-business"
  | "education"
  | "realestate-resort"
  | "fnb-agriculture"
  | "other";

import rawProjectsData from './projects_portfolio.json';

export interface Project {
  year: number;
  category: string;
  filterCategory: FilterCategory;
  project_name: string;
  domain: string;
  description: string;
  gradient: string;
  accent: string;
  tags?: string[];
  img?: string;
  flag?: boolean;
}

export const filterOptions: { key: FilterCategory; label: string; icon: string }[] = [
  { key: "all", label: "Tất cả", icon: "🌐" },
  { key: "ai-automation", label: "AI & Automation", icon: "🤖" },
  { key: "ecommerce-retail", label: "E-commerce & Retail", icon: "🛒" },
  { key: "corporate-business", label: "Corporate & Business", icon: "🏢" },
  { key: "education", label: "Education", icon: "🎓" },
  { key: "realestate-resort", label: "Real Estate & Resort", icon: "🏨" },
  { key: "fnb-agriculture", label: "F&B & Agriculture", icon: "🍽️" },
];

// Color themes per filter category
const themes: Record<FilterCategory, { gradient: string; accent: string }> = {
  all: { gradient: "from-slate-500/20 to-slate-600/20", accent: "blue" },
  "ai-automation": { gradient: "from-violet-600/25 to-fuchsia-500/20", accent: "violet" },
  "ecommerce-retail": { gradient: "from-amber-500/20 to-orange-500/20", accent: "amber" },
  "corporate-business": { gradient: "from-blue-500/20 to-cyan-500/20", accent: "blue" },
  education: { gradient: "from-emerald-500/20 to-teal-500/20", accent: "emerald" },
  "realestate-resort": { gradient: "from-rose-500/20 to-pink-500/20", accent: "rose" },
  "fnb-agriculture": { gradient: "from-lime-500/20 to-green-500/20", accent: "lime" },
  other: { gradient: "from-indigo-500/20 to-sky-500/20", accent: "indigo" },
};

function mapFilterCategory(category: string): FilterCategory {
  const cat = category.toLowerCase();

  // AI & Automation
  if (cat.includes("ai") || cat.includes("technology") || cat.includes("automation")) return "ai-automation";

  // E-commerce & Retail
  if (
    cat.includes("e-commerce") ||
    cat.includes("ecommerce") ||
    cat.includes("retail") ||
    cat.includes("fmcg") ||
    cat.includes("fashion") ||
    cat.includes("beauty") ||
    cat.includes("lifestyle") ||
    cat.includes("blog & beauty") ||
    cat.includes("supplies") ||
    cat.includes("pet service") ||
    cat.includes("furniture")
  )
    return "ecommerce-retail";

  // Corporate & Business
  if (
    cat.includes("corporate") ||
    cat.includes("business") ||
    cat.includes("investment") ||
    cat.includes("logistics") ||
    cat.includes("industrial") ||
    cat.includes("mining") ||
    cat.includes("construction") ||
    cat.includes("legal") ||
    cat.includes("hr &") ||
    cat.includes("transport") ||
    cat.includes("environmental") ||
    cat.includes("health") ||
    cat.includes("interior")
  )
    return "corporate-business";

  // Education
  if (cat.includes("education") || cat.includes("landing page")) return "education";

  // Real Estate & Resort
  if (cat.includes("real estate") || cat.includes("hospitality")) return "realestate-resort";

  // F&B & Agriculture
  if (cat.includes("f&b") || cat.includes("agriculture")) return "fnb-agriculture";

  return "other";
}

const rawProjects = rawProjectsData;

export const projects: Project[] = rawProjects.map((p: any) => {
  const fc = mapFilterCategory(p.category || "");
  const theme = themes[fc] || themes.other;
  return {
    year: p.year,
    category: p.category,
    project_name: p.project_name,
    domain: p.domain,
    description: p.description,
    tags: p.tags || [],
    img: p.img,
    flag: p.flag || false,
    filterCategory: fc,
    gradient: theme.gradient,
    accent: theme.accent,
  };
});

export const projectStats = {
  total: projects.length,
  years: [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a),
  categories: [...new Set(projects.map((p) => p.filterCategory))],
};
