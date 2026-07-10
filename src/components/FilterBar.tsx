"use client";

import { motion } from "framer-motion";
import { FilterCategory, filterOptions } from "@/data/projects";

interface FilterBarProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  counts: Record<FilterCategory, number>;
}

export default function FilterBar({ activeFilter, onFilterChange, counts }: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 w-full max-w-5xl mx-auto py-2">
      {filterOptions.map((option) => {
        const isActive = activeFilter === option.key;

        return (
          <button
            key={option.key}
            onClick={() => onFilterChange(option.key)}
            className={`
              relative px-5 py-2 rounded-full font-medium text-sm transition-all duration-300
              border cursor-pointer
              ${
                isActive
                  ? "bg-[var(--accent)] border-[var(--accent)] text-white shadow-[0_0_20px_rgba(0,112,243,0.3)]"
                  : "bg-[#111] border-[#27272a] text-[#a1a1aa] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }
            `}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
