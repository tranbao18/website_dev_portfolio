import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Spray } from "@/components/Decor";
import SocialIcon from "@/components/SocialIcon";
import { profile, socials } from "@/data/profile";

const FOOTER_LINKS = [
  { href: "/#about", label: "Giới thiệu" },
  { href: "/projects", label: "Dự án" },
  { href: "/#experience", label: "Kinh nghiệm" },
  { href: "/#contact", label: "Liên hệ" },
];

export default function SiteFooter() {
  return (
    <footer>
      <div className="frame relative overflow-hidden border-y border-line">
        <Spray className="-bottom-48 left-1/2 h-[380px] w-[640px] -translate-x-1/2" />

        <div className="pad relative grid gap-12 py-16 md:grid-cols-[1.3fr_1fr] md:py-20">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-ink text-lg text-white">B</span>
              <span className="font-script text-[1.7rem] leading-none">{profile.logo}</span>
            </div>
            <p className="max-w-[17ch] text-3xl font-medium leading-[1.15] tracking-tight md:text-[2.6rem]">
              Cùng nâng tầm doanh nghiệp bằng sản phẩm chất lượng.
            </p>
            <p className="mt-8 leading-relaxed text-muted">{profile.location}</p>
          </div>

          <div className="md:justify-self-end md:pt-24">
            <p className="mb-4">Liên hệ nhanh qua email</p>
            <a
              href={`mailto:${profile.email}`}
              className="group flex w-full max-w-sm items-center justify-between gap-4 border border-ink bg-paper p-1.5 pl-4 text-sm text-muted transition-colors hover:text-ink"
            >
              {profile.email}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink text-white transition-colors group-hover:bg-blue">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <div className="mt-6 flex gap-2 md:justify-end">
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="social-dot"
                  aria-label={s.label}
                  title={s.label}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="frame-inner flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">
          © {new Date().getFullYear()} <span className="text-ink">{profile.name}</span>. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-muted transition-colors hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
