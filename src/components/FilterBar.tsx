"use client";

import { FilterCategory, filterOptions } from "@/data/projects";

interface FilterBarProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  counts: Record<FilterCategory, number>;
}

export default function FilterBar({ activeFilter, onFilterChange, counts }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2.5" role="group" aria-label="Lọc dự án theo lĩnh vực">
      {filterOptions
        .filter((option) => counts[option.key] > 0)
        .map((option) => {
          const isActive = activeFilter === option.key;

          return (
            <button
              key={option.key}
              type="button"
              onClick={() => onFilterChange(option.key)}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-full border px-5 py-2 text-sm transition-colors duration-300 ${
                isActive ? "border-blue bg-blue text-white" : "border-line text-ink hover:border-ink"
              }`}
            >
              {option.label}
              <sup className={`ml-1 text-[10px] ${isActive ? "text-white/70" : "text-muted"}`}>{counts[option.key]}</sup>
            </button>
          );
        })}
    </div>
  );
}
