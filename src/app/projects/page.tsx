"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Layers, TrendingUp } from "lucide-react";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectStats, FilterCategory } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans relative overflow-x-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/15 blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/15 blur-[150px]" />
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      {/* Top Navigation Bar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xl font-bold font-outfit tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              JB.
            </span>
          </a>

          <a
            href="/#contact"
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all font-medium text-sm"
          >
            Contact Me
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-24">
        {/* Hero Header */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium text-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Layers className="w-4 h-4" />
            Case Studies & Portfolio
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-outfit tracking-tight text-white mb-5 leading-[1.1] text-balance">
            Dự Án{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Tiêu Biểu
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            Hơn{" "}
            <span className="text-white font-semibold">{projectStats.total}+</span>{" "}
            dự án từ E-commerce, hệ thống quản lý đến tích hợp AI Agent. Mỗi dự
            án là một câu chuyện về công nghệ và sáng tạo.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {[
              { label: "Dự Án", value: `${projectStats.total}+`, icon: "📦" },
              { label: "Năm Kinh Nghiệm", value: `${projectStats.years.length}+`, icon: "⚡" },
              { label: "Lĩnh Vực", value: `${projectStats.categories.length}+`, icon: "🎯" },
              { label: "Thị Trường Quốc Tế", value: "3", icon: "🌏" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <span className="text-xl">{stat.icon}</span>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-outfit text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className="sticky top-16 sm:top-20 z-40 py-4 -mx-4 sm:-mx-6 px-4 sm:px-6 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={counts}
          />
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="flex items-center gap-2 mb-6 text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <TrendingUp className="w-4 h-4" />
          <span>
            Hiển thị{" "}
            <span className="text-white font-semibold">{filtered.length}</span>{" "}
            dự án
            {activeFilter !== "all" && (
              <>
                {" "}
                trong danh mục{" "}
                <button
                  onClick={() => setActiveFilter("all")}
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2 cursor-pointer"
                >
                  xem tất cả
                </button>
              </>
            )}
          </span>
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((project, index) => (
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Không tìm thấy dự án
            </h3>
            <p className="text-slate-400 mb-6">
              Không có dự án nào trong danh mục này.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all cursor-pointer"
            >
              Xem tất cả dự án
            </button>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-slate-500 text-sm">
        <p>
          © {new Date().getFullYear()} Trần Thiên Bảo. Thiết kế và phát triển
          với Next.js & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
