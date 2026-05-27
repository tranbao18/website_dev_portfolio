"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const itemVariant: any = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: { duration: 0.3 },
  },
};

// We will use a placeholder image service based on project name if project doesn't have an image field.
function getPlaceholderImage(projectName: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(projectName)}&background=random&color=fff&size=512&font-size=0.4`;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const siteUrl = project.domain.startsWith("http")
    ? project.domain
    : `https://${project.domain}`;

  // Use actual image if it exists in data, otherwise placeholder
  const imageUrl = project.img || getPlaceholderImage(project.project_name);

  return (
    <motion.div
      layout
      variants={itemVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group relative flex flex-col rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      {/* Thumbnail Area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img 
          src={imageUrl} 
          alt={project.project_name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Floating Category Badge top-left */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[11px] font-semibold text-slate-700 tracking-wider">
          {project.category}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="text-xl font-bold font-sans text-slate-900 mb-3 group-hover:text-[#a67c52] transition-colors duration-300">
          {project.project_name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Action Button */}
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-max px-6 py-2.5 rounded-full bg-[#a67c52] text-white text-sm font-medium hover:bg-[#8b6540] transition-colors duration-300 group/btn"
        >
          <span>Xem chi tiết</span>
          <span className="opacity-80 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </motion.div>
  );
}
