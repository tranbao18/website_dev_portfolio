"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Deterministic color palette for project thumbnails
const thumbnailColors = [
  { bg: "from-blue-600 to-cyan-500", icon: "text-blue-200" },
  { bg: "from-violet-600 to-purple-500", icon: "text-violet-200" },
  { bg: "from-emerald-600 to-teal-500", icon: "text-emerald-200" },
  { bg: "from-rose-600 to-pink-500", icon: "text-rose-200" },
  { bg: "from-amber-500 to-orange-500", icon: "text-amber-200" },
  { bg: "from-indigo-600 to-blue-500", icon: "text-indigo-200" },
  { bg: "from-fuchsia-600 to-pink-500", icon: "text-fuchsia-200" },
  { bg: "from-sky-500 to-blue-500", icon: "text-sky-200" },
  { bg: "from-lime-500 to-green-500", icon: "text-lime-200" },
  { bg: "from-orange-500 to-red-500", icon: "text-orange-200" },
];

// Year badge style
function yearBadge(year: number) {
  switch (year) {
    case 2026:
      return "bg-violet-500/20 text-violet-300 border-violet-500/30";
    case 2025:
      return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    case 2024:
      return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
    case 2023:
      return "bg-amber-500/20 text-amber-300 border-amber-500/30";
    default:
      return "bg-slate-500/20 text-slate-300 border-slate-500/30";
  }
}

// Generate initials from project name
function getInitials(name: string): string {
  const words = name.split(/[\s\-&:]+/).filter((w) => w.length > 0);
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const itemVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const colorTheme = thumbnailColors[index % thumbnailColors.length];
  const initials = getInitials(project.project_name);
  const siteUrl = project.domain.startsWith("http")
    ? project.domain
    : `https://${project.domain}`;

  return (
    <motion.div
      layout
      variants={itemVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group relative flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden hover:border-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5"
    >
      {/* Thumbnail / Mockup Area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Gradient Background with Initials */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorTheme.bg} opacity-80`}
        />
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }} />
        {/* Faux browser mockup */}
        <div className="absolute inset-4 sm:inset-5 rounded-lg bg-slate-950/60 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/80 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-slate-800/80 text-[10px] text-slate-400 font-mono truncate">
              {project.domain}
            </div>
          </div>
          {/* Content placeholder */}
          <div className="flex flex-col items-center justify-center h-[calc(100%-32px)] p-4">
            <span className={`text-3xl sm:text-4xl font-bold font-outfit ${colorTheme.icon} opacity-90 tracking-tight`}>
              {initials}
            </span>
            <span className="text-[11px] text-white/40 mt-1.5 font-medium tracking-wider uppercase">
              {project.domain}
            </span>
          </div>
        </div>

        {/* Year badge */}
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase border backdrop-blur-md ${yearBadge(project.year)}`}>
          {project.year}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Title */}
        <h3 className="text-lg font-bold font-outfit text-white mb-1.5 group-hover:text-blue-200 transition-colors duration-300 line-clamp-1">
          {project.project_name}
        </h3>

        {/* Category */}
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
          {project.category}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-white/[0.04] text-slate-400 text-[11px] font-medium rounded-md border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm font-medium hover:bg-white/[0.08] hover:border-white/15 hover:text-white transition-all duration-300 group/btn"
        >
          <span>Visit Website</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
        </a>
      </div>
    </motion.div>
  );
}
