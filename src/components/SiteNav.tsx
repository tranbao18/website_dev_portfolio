"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const SECTIONS = [
  { id: "hero", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "skills", label: "Kỹ năng" },
  { id: "projects", label: "Dự án" },
  { id: "experience", label: "Kinh nghiệm" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

// Hand-drawn ellipse that circles the active link
function ActiveRing() {
  return (
    <motion.svg
      layoutId="nav-ring"
      viewBox="0 0 100 40"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -left-3 -top-2 h-[calc(100%+16px)] w-[calc(100%+24px)] text-blue"
      transition={{ type: "spring", stiffness: 380, damping: 32 }}
    >
      <path
        d="M8 22C6 10 30 3 55 4C80 5 97 12 95 22C93 32 70 37 48 36C24 35 5 30 9 18C12 9 30 5 44 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </motion.svg>
  );
}

export default function SiteNav({ page = "home" }: { page?: "home" | "projects" }) {
  const onHome = page === "home";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>(onHome ? "hero" : "projects");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (!onHome) return;
      let current: SectionId = "hero";
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  const hrefFor = (id: SectionId) => {
    if (id === "projects" && !onHome) return "/projects";
    if (id === "hero") return onHome ? "#hero" : "/";
    return onHome ? `#${id}` : `/#${id}`;
  };
  const contactHref = onHome ? "#contact" : "/#contact";

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-paper/90 shadow-[0_1px_0_var(--line)] backdrop-blur-md" : "bg-paper"
      }`}
    >
      <nav className="frame-inner flex h-[76px] items-center justify-between gap-6">
        <Link href="/" className="font-script text-[1.9rem] leading-none text-ink" aria-label="Trang chủ">
          {profile.logo}
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {SECTIONS.map(({ id, label }) => (
            <li key={id} className="relative">
              <a
                href={hrefFor(id)}
                className={`relative px-1 text-[0.95rem] transition-colors ${active === id ? "text-blue" : "text-ink hover:text-blue"}`}
                aria-current={active === id ? "true" : undefined}
              >
                {active === id && <ActiveRing />}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={contactHref} className="btn-square btn-outline hidden sm:inline-flex">
            Liên hệ <ArrowUpRight className="h-4 w-4 stroke-[1.5]" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Đóng menu" : "Mở menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="frame-inner border-t border-line pb-6 lg:hidden">
          <ul className="flex flex-col">
            {SECTIONS.map(({ id, label }) => (
              <li key={id} className="border-b border-line">
                <a
                  href={hrefFor(id)}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 text-lg ${active === id ? "text-blue" : "text-ink"}`}
                >
                  {label}
                  <ArrowUpRight className="h-4 w-4 stroke-[1.5]" />
                </a>
              </li>
            ))}
          </ul>
          <a href={contactHref} onClick={() => setOpen(false)} className="btn-square btn-blue mt-6 w-full justify-center sm:hidden">
            Liên hệ <ArrowUpRight className="h-4 w-4 stroke-[1.5]" />
          </a>
        </div>
      )}
    </header>
  );
}
