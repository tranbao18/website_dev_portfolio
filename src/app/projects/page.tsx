"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectStats, FilterCategory } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const staggerContainer: any = {
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

  return (
    <>
      {/* ── Nav (same as Home) ── */}
      <nav className={`topnav ${scrolled ? "scrolled" : ""}`} id="topnav" style={{
        background: scrolled ? undefined : 'rgba(10, 10, 10, 0.82)',
        backdropFilter: scrolled ? undefined : 'blur(18px) saturate(140%)',
        borderBottom: scrolled ? undefined : '1px solid var(--border)',
      }}>
        <div className="topnav-inner">
          <Link href="/" className="logo">
            Bao Tran <span className="logo-accent">.</span>
          </Link>
          <div className="nav-links">
            <a href="/#about">Giới thiệu</a>
            <a href="/#skills">Kỹ năng</a>
            <Link href="/projects" style={{ color: 'var(--accent)' }}>Dự án</Link>
            <a href="/#contact" className="nav-cta">Liên hệ</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* ═══ HERO HEADER ═══ */}
        <section className="section pt-36 pb-12">
          <div className="container">
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={revealVariants}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a1a1aa] mb-8">
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">Trang chủ</Link>
                <span className="text-[#3f3f46]">/</span>
                <span className="text-[var(--accent)]">Dự án</span>
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Case Studies{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
                  & Portfolio
                </span>
              </h1>

              <p className="text-lg text-[#a1a1aa] max-w-2xl leading-relaxed mb-0">
                Hơn 145+ dự án từ E-commerce, hệ thống quản lý đến tích hợp AI Agent. Mỗi dự
                án là một câu chuyện về công nghệ và sáng tạo.
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
              initial="hidden"
              animate="visible"
              variants={{ ...revealVariants, visible: { ...revealVariants.visible, transition: { ...revealVariants.visible.transition, delay: 0.15 } } }}
            >
              {[
                { label: "Dự Án", value: "80+" },
                { label: "Năm Kinh Nghiệm", value: "3+" },
                { label: "Lĩnh Vực", value: "7+" },
                { label: "Thị Trường Quốc Tế", value: "3" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#111111] border border-[#27272a] rounded-2xl p-6 text-center hover:border-[rgba(0,112,243,0.3)] transition-colors"
                >
                  <div
                    className="text-3xl font-semibold bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent mb-1"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#a1a1aa] font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ FILTER + GRID ═══ */}
        <section className="section bg-[#0a0a0a] pt-4 pb-24">
          <div className="container">
            {/* Filter Bar */}
            <motion.div
              className="mb-12"
              initial="hidden"
              animate="visible"
              variants={{ ...revealVariants, visible: { ...revealVariants.visible, transition: { ...revealVariants.visible.transition, delay: 0.25 } } }}
            >
              <FilterBar
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
                counts={counts}
              />
            </motion.div>

            {/* Results count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-[#a1a1aa] font-mono">
                <span className="text-white font-medium">{filtered.length}</span> dự án
                {activeFilter !== "all" && (
                  <> trong <span className="text-[var(--accent)]">{activeFilter}</span></>
                )}
              </p>
              {activeFilter !== "all" && (
                <button
                  onClick={() => handleFilterChange("all")}
                  className="text-xs font-mono text-[var(--accent)] hover:underline transition-colors cursor-pointer"
                >
                  Xóa bộ lọc
                </button>
              )}
            </div>

            {/* Project Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter + currentPage}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              <motion.div
                className="flex flex-col items-center justify-center py-24 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#111] border border-[#27272a] flex items-center justify-center text-3xl mb-6">
                  🔍
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-2"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  Không tìm thấy dự án
                </h3>
                <p className="text-[#a1a1aa] mb-6 text-sm">
                  Không có dự án nào trong danh mục này.
                </p>
                <button
                  onClick={() => handleFilterChange("all")}
                  className="btn btn-primary rounded-full px-7 py-3 text-sm cursor-pointer"
                >
                  Xem tất cả dự án
                </button>
              </motion.div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-16">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111] border border-[#27272a] text-[#a1a1aa] hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-40 disabled:hover:border-[#27272a] disabled:hover:text-[#a1a1aa] transition-colors cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {getPaginationGroup().map((item, i) => (
                  item === "..." ? (
                    <span key={`dots-${i}`} className="w-10 h-10 flex items-center justify-center text-[#3f3f46] font-mono text-sm">...</span>
                  ) : (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(item as number)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full font-medium text-sm transition-all cursor-pointer ${currentPage === item
                        ? "bg-[var(--accent)] text-white border border-[var(--accent)] shadow-[0_0_15px_rgba(0,112,243,0.3)]"
                        : "bg-[#111] border border-[#27272a] text-[#a1a1aa] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        }`}
                    >
                      {item}
                    </button>
                  )
                ))}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111] border border-[#27272a] text-[#a1a1aa] hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-40 disabled:hover:border-[#27272a] disabled:hover:text-[#a1a1aa] transition-colors cursor-pointer disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
