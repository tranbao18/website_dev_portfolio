"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectLogo } from "@/components/ProjectMedia";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      layout
      variants={itemVariant}
      className="group flex flex-col border border-line bg-paper transition-colors duration-300 hover:border-ink"
    >
      {/* Logo panel */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-tint p-10">
        <ProjectLogo project={project} className="transition-transform duration-700 ease-out group-hover:scale-105" />
        <span className="absolute left-4 top-4 bg-paper px-3 py-1 text-[11px] uppercase tracking-wider text-blue">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col border-t border-line p-6">
        <p className="mb-2 text-xs text-muted">
          {project.year} · {project.host}
        </p>
        <h3 className="mb-3 text-xl leading-snug tracking-tight transition-colors duration-300 group-hover:text-blue">
          {project.project_name}
        </h3>
        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-max items-center gap-2 text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:text-blue hover:decoration-blue"
        >
          Xem website <ArrowUpRight className="h-4 w-4 stroke-[1.5]" />
        </a>
      </div>
    </motion.article>
  );
}
