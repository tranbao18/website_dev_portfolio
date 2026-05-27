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
    <div className="flex flex-wrap justify-center gap-3 w-full max-w-4xl mx-auto py-2">
      {filterOptions.map((option) => {
        const isActive = activeFilter === option.key;
        const count = option.key === "all" ? counts.all : (counts[option.key] || 0);

        // We can optionally show count, but the design didn't explicitly have count badges in the pills
        // or wait, looking at the image, there are no count badges on the filter pills. Just text.
        // E.g. "Tất cả", "E-Commerce", "Corporate & Business".
        
        return (
          <button
            key={option.key}
            onClick={() => onFilterChange(option.key)}
            className={`
              px-5 py-2 rounded-full font-medium text-sm transition-all duration-300
              border
              ${
                isActive
                  ? "bg-[#a67c52] border-[#a67c52] text-white shadow-md shadow-[#a67c52]/20"
                  : "bg-white border-slate-200 text-slate-600 hover:border-[#a67c52] hover:text-[#a67c52]"
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
