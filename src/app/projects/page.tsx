"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Sparkle, Spray } from "@/components/Decor";
import { projects, projectStats, filterOptions, FilterCategory } from "@/data/projects";

const STATS = [
  { label: "Dự án", value: projectStats.totalLabel },
  { label: "Năm kinh nghiệm", value: "3+" },
  { label: "Lĩnh vực", value: "7+" },
  { label: "Thị trường quốc tế", value: "3" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const gridTop = useRef<HTMLDivElement>(null);
  const itemsPerPage = 12;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
  };

  // Calculate filter counts
  const counts = useMemo(() => {
    const c: Record<FilterCategory, number> = {
      all: projects.length,
      "ai-automation": 0,
      "ecommerce-retail": 0,
      "corporate-business": 0,
      education: 0,
      "realestate-resort": 0,
      "fnb-agriculture": 0,
      other: 0,
    };
    projects.forEach((p) => {
      c[p.filterCategory] = (c[p.filterCategory] || 0) + 1;
    });
    return c;
  }, []);

  // Filtered projects
  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.filterCategory === activeFilter);
  }, [activeFilter]);

  // Paginated projects
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProjects = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  // Reset page when filter changes
  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    gridTop.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getPaginationGroup = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const activeLabel = filterOptions.find((o) => o.key === activeFilter)?.label;
  const pageButton = "flex h-10 w-10 cursor-pointer items-center justify-center border text-sm transition-colors";

  return (
    <>
      <SiteNav page="projects" />

      <main className="frame">
        {/* ═══ HERO HEADER ═══ */}
        <section className="relative overflow-hidden border-t border-line">
          <Spray className="inset-y-0 right-0 w-[70%]" shape="farthest-side at 100% 50%" />
          <motion.div
            className="pad relative py-16 md:py-24"
            initial="hidden"
            animate="visible"
            variants={revealVariants}
          >
            {/* Breadcrumb */}
            <div className="mb-10 flex items-center gap-2 text-sm text-muted">
              <Link href="/" className="transition-colors hover:text-blue">Trang chủ</Link>
              <span>/</span>
              <span className="text-blue">Dự án</span>
            </div>

            <h1 className="text-[clamp(2.75rem,8vw,6.5rem)] font-normal leading-[0.98] tracking-[-0.035em]">
              <span className="block">Case Studies</span>
              <span className="flex items-center gap-[0.2em] text-blue">
                &amp; Portfolio <Sparkle className="h-[0.4em] w-[0.4em]" />
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed md:text-xl">
              Hơn {projectStats.totalLabel.replace("+", "")} dự án từ E-commerce, hệ thống quản lý đến tích hợp AI Agent.
              Mỗi dự án là một câu chuyện về công nghệ và sáng tạo.
            </p>
          </motion.div>
        </section>

        {/* Stats Row */}
        <section aria-label="Thống kê" className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-8 text-center md:py-10 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i >= 2 ? "border-t border-line md:border-t-0" : ""
              } ${i === 2 ? "md:border-l" : ""}`}
            >
              <div className="text-4xl tracking-tight md:text-5xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* ═══ FILTER + GRID ═══ */}
        <section className="pad border-t border-line py-12 md:py-16">
          <div ref={gridTop} className="scroll-mt-24">
            <FilterBar
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              counts={counts}
            />
          </div>

          {/* Results count */}
          <div className="mb-8 mt-10 flex items-center justify-between">
            <p className="text-sm text-muted">
              <span className="text-ink">{filtered.length}</span> dự án
              {activeFilter !== "all" && (
                <> trong <span className="text-blue">{activeLabel}</span></>
              )}
            </p>
            {activeFilter !== "all" && (
              <button
                type="button"
                onClick={() => handleFilterChange("all")}
                className="cursor-pointer text-sm text-blue underline-offset-4 hover:underline"
              >
                Xóa bộ lọc
              </button>
            )}
          </div>

          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + currentPage}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {paginatedProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.domain}-${project.year}`}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <h3 className="mb-2 text-xl">Không tìm thấy dự án</h3>
              <p className="mb-6 text-sm text-muted">Không có dự án nào trong danh mục này.</p>
              <button
                type="button"
                onClick={() => handleFilterChange("all")}
                className="btn-square btn-blue cursor-pointer"
              >
                Xem tất cả dự án
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav aria-label="Phân trang" className="mt-14 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                aria-label="Trang trước"
                className={`${pageButton} border-line hover:border-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line`}
              >
                <ChevronLeft className="h-5 w-5 stroke-[1.5]" />
              </button>

              {getPaginationGroup().map((item, i) => (
                item === "..." ? (
                  <span key={`dots-${i}`} className="flex h-10 w-10 items-center justify-center text-sm text-muted">...</span>
                ) : (
                  <button
                    type="button"
                    key={i}
                    onClick={() => goToPage(item as number)}
                    aria-current={currentPage === item ? "page" : undefined}
                    className={`${pageButton} ${
                      currentPage === item ? "border-blue bg-blue text-white" : "border-line hover:border-ink"
                    }`}
                  >
                    {item}
                  </button>
                )
              ))}

              <button
                type="button"
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                aria-label="Trang sau"
                className={`${pageButton} border-line hover:border-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line`}
              >
                <ChevronRight className="h-5 w-5 stroke-[1.5]" />
              </button>
            </nav>
          )}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
