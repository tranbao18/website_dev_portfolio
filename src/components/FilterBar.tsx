"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FilterCategory, filterOptions } from "@/data/projects";

interface FilterBarProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  counts: Record<FilterCategory, number>;
}

export default function FilterBar({ activeFilter, onFilterChange, counts }: FilterBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    // Add 1px tolerance for rounding issues
    setShowRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      // Check again after animation completes
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <div className="relative group/filter flex items-center -mx-2 px-2 sm:mx-0 sm:px-0">
      {/* Left Scroll Button (Desktop) */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-20 h-full pr-6 pl-2 sm:pl-0 flex items-center justify-center bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent cursor-pointer hidden sm:flex"
          aria-label="Scroll left"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 border border-white/10 flex items-center justify-center backdrop-blur-md transition-all shadow-lg text-white">
            <ChevronLeft className="w-4 h-4 ml-[-2px]" />
          </div>
        </button>
      )}

      {/* Scrollable filter container */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-2 overflow-x-auto scrollbar-hide py-2 w-full"
      >
        {filterOptions.map((option) => {
          const isActive = activeFilter === option.key;
          const count = option.key === "all" ? counts.all : (counts[option.key] || 0);

          return (
            <motion.button
              key={option.key}
              onClick={() => onFilterChange(option.key)}
              className={`
                relative flex items-center gap-2.5 px-5 py-2.5 sm:py-3 rounded-xl font-medium text-sm
                whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0
                border
                ${
                  isActive
                    ? "bg-white/[0.08] border-white/20 text-white shadow-lg shadow-blue-500/10"
                    : "bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/[0.05] hover:border-white/10 hover:text-slate-200"
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Active indicator glow */}
              {isActive && (
                <motion.div
                  layoutId="activeFilterGlow"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <span className="relative z-10 text-base">{option.icon}</span>
              <span className="relative z-10">{option.label}</span>
              <span
                className={`
                  relative z-10 ml-0.5 px-2 py-0.5 rounded-md text-xs font-semibold tabular-nums
                  ${isActive ? "bg-blue-500/20 text-blue-300" : "bg-white/5 text-slate-500"}
                `}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Right Scroll Button (Desktop) */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-20 h-full pl-6 pr-2 sm:pr-0 flex items-center justify-center bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent cursor-pointer hidden sm:flex"
          aria-label="Scroll right"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 border border-white/10 flex items-center justify-center backdrop-blur-md transition-all shadow-lg text-white">
            <ChevronRight className="w-4 h-4 ml-[2px]" />
          </div>
        </button>
      )}

      {/* Fade edges for mobile indication */}
      {showRight && <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none sm:hidden z-10" />}
      {showLeft && <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none sm:hidden z-10" />}
    </div>
  );
}
