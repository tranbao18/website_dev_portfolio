"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectStats, FilterCategory } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
    <div className="min-h-screen bg-[#fcfbf7] text-[#1a1a1a] font-sans relative overflow-x-hidden">
      {/* Grid Pattern Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #e2e0d3 1px, transparent 1px), linear-gradient(to bottom, #e2e0d3 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Top Navigation Bar */}
      <nav className="relative z-50 w-full pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className="text-3xl font-bold font-newsreader tracking-tight text-[#1a1a1a]">
              Jayden
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="/" className="hover:text-[#a67c52] transition-colors">Trang chủ</a>
            <a href="/#about" className="hover:text-[#a67c52] transition-colors">Giới thiệu</a>
            <a href="/#skills" className="hover:text-[#a67c52] transition-colors">Kỹ năng</a>
            <a href="/#experience" className="hover:text-[#a67c52] transition-colors">Kinh nghiệm</a>
            <a href="/projects" className="text-[#a67c52] border-b border-[#a67c52]">Dự Án</a>
          </div>

          <a
            href="/#contact"
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-[#a67c52] text-white hover:bg-[#8b6540] transition-all font-medium text-sm"
          >
            Liên hệ
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-24">
        {/* Hero Header */}
        <motion.div
          className="mb-16 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Breadcrumb */}
          <div className="text-sm font-medium text-[#a67c52] mb-4">
            <a href="/" className="hover:underline">Trang chủ</a> <span className="mx-2 text-slate-400">/</span> <span>Dự án</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl mb-6 leading-tight">
            <span className="font-playfair font-bold text-[#1a1a1a]">Case Studies </span>
            <span className="font-playfair font-normal italic text-[#a67c52]">& Portfolio</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed mb-12">
            Hơn 145+ dự án từ E-commerce, hệ thống quản lý đến tích hợp AI Agent. Mỗi dự
            án là một câu chuyện về công nghệ và sáng tạo.
          </p>

          {/* Stats Row Container */}
          <motion.div
            className="flex flex-wrap md:flex-nowrap justify-center bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { label: "Dự Án", value: `80+` },
              { label: "Năm Kinh Nghiệm", value: `3+` },
              { label: "Lĩnh Vực", value: `7+` },
              { label: "Thị Trường Quốc Tế", value: "3" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center p-6 sm:p-8 flex-1 border-b md:border-b-0 md:border-r border-slate-100 last:border-0 min-w-[50%] md:min-w-0"
              >
                <div className="text-3xl font-bold font-sans text-[#a67c52] mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            counts={counts}
          />
        </motion.div>

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
                key={`${project.id || project.domain}-${project.year}`}
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Không tìm thấy dự án
            </h3>
            <p className="text-slate-500 mb-6">
              Không có dự án nào trong danh mục này.
            </p>
            <button
              onClick={() => handleFilterChange("all")}
              className="px-6 py-2.5 rounded-full bg-[#a67c52] text-white font-medium hover:bg-[#8b6540] transition-colors cursor-pointer"
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
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:border-[#a67c52] hover:text-[#a67c52] disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {getPaginationGroup().map((item, i) => (
              item === "..." ? (
                <span key={`dots-${i}`} className="w-10 h-10 flex items-center justify-center text-slate-400">...</span>
              ) : (
                <button
                  key={i}
                  onClick={() => setCurrentPage(item as number)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-medium transition-colors ${currentPage === item
                    ? "bg-[#a67c52] text-white border border-[#a67c52]"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-[#a67c52] hover:text-[#a67c52]"
                    }`}
                >
                  {item}
                </button>
              )
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:border-[#a67c52] hover:text-[#a67c52] disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/60 py-8 text-center text-slate-500 text-sm">
        <p>
          © {new Date().getFullYear()} Trần Thiên Bảo (Jayden). Tất cả dự án được thực hiện với ❤️ và sự tận tâm.
        </p>
      </footer>
    </div>
  );
}
