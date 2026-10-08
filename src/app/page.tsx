import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, CodeXml, Database, Layers, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import avatar from "../../public/avatar (3).jpg";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import FeaturedProject from "@/components/FeaturedProject";
import Reveal from "@/components/Reveal";
import { LoopArrow, Scribble, Sparkle, Spray, WavyBadge } from "@/components/Decor";
import { projects, projectStats } from "@/data/projects";
import { profile, socials } from "@/data/profile";

const STATS = [
  { value: projectStats.totalLabel, label: "Dự án đã triển khai" },
  { value: "3+", label: "Năm kinh nghiệm" },
  { value: "7+", label: "Lĩnh vực" },
];

const SKILL_CARDS: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: string[];
  tone: "blue" | "soft" | "softer";
}[] = [
  {
    icon: CodeXml,
    title: "Frontend & UI Development.",
    subtitle: "Giao diện chuẩn thiết kế, nhanh và responsive",
    items: ["JavaScript, HTML5 & CSS3", "Tailwind CSS", "ReactJS & NextJS", "Zustand"],
    tone: "blue",
  },
  {
    icon: Database,
    title: "Backend & Database.",
    subtitle: "Hệ thống ổn định, bảo mật, dễ mở rộng",
    items: ["PHP & NodeJS", "MySQL, MongoDB & Redis", "REST API", "WordPress"],
    tone: "soft",
  },
  {
    icon: Layers,
    title: "Công cụ & Quy trình.",
    subtitle: "Tăng tốc phát triển với AI và Git",
    items: ["Cursor, Claude & Antigravity", "Figma", "Postman", "GitLab & GitHub"],
    tone: "softer",
  },
];

const TONES = {
  blue: { card: "bg-blue text-white", sub: "text-white/70", icon: "text-white" },
  soft: { card: "bg-blue-soft text-ink", sub: "text-ink/60", icon: "text-blue" },
  softer: { card: "bg-blue-softer text-ink", sub: "text-ink/60", icon: "text-blue" },
};

const WORK = {
  period: "2023 — 2026",
  title: "MONA MEDIA",
  role: "Junior PHP Developer",
  points: [
    "Phát triển các giải pháp thương mại điện tử, CMS và backend tùy chỉnh có khả năng mở rộng bằng PHP và MySQL.",
    "Gỡ lỗi hệ thống, hỗ trợ các thành viên nhóm và quản lý mã nguồn bằng Git.",
    "Chuyển đổi các bản thiết kế Figma thành giao diện động, responsive bằng Tailwind CSS, JavaScript và AJAX.",
    "Thiết kế logic nghiệp vụ, xây dựng API REST và tối ưu hóa hiệu suất hệ thống.",
    "Tối ưu truy vấn cơ sở dữ liệu, quản lý triển khai máy chủ và thực thi các biện pháp bảo mật.",
    "Sử dụng các công cụ AI để nâng cao hiệu quả phát triển.",
  ],
};

const EDUCATION = [
  { period: "2024 — 2025", title: "Đại học Công nghệ Thông tin (UIT)", role: "Cử nhân Công nghệ thông tin", note: "GPA: 3.2" },
  { period: "2021 — 2023", title: "Cao đẳng Công Nghệ Thông Tin", role: "Công nghệ thông tin", note: "GPA: 3.1" },
];

export default function Home() {
  const featured = projects.filter((p) => p.flag);
  const clientHosts = projects
    .filter((p) => p.img && !p.host.endsWith("vercel.app"))
    .slice(0, 14)
    .map((p) => p.host);

  return (
    <>
      <SiteNav />

      <main className="frame">
        {/* ═══ HERO + INTRO ═══ */}
        <section id="hero" className="relative border-t border-line">
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
              <Spray className="inset-y-0 right-0 w-[80%] lg:w-[62%]" shape="farthest-side at 100% 55%" />
            </div>

            {/* "Let's build" sticker */}
            <div className="absolute right-[5%] top-10 hidden h-28 w-48 -rotate-12 items-center justify-center rounded-[50%] border border-ink md:flex">
              <p className="text-center text-xs uppercase leading-snug tracking-wide">
                Let&apos;s build
                <br />
                <span className="inline-block border-b border-ink pb-1">something great</span>
              </p>
            </div>

            <div className="pad relative grid min-h-[560px] items-center py-16 lg:py-20">
              <Reveal className="relative z-10">
                <h1 className="font-display text-[clamp(3rem,10vw,7.5rem)] font-normal leading-[0.98] tracking-[-0.035em]">
                  <span className="block">Full-Stack</span>
                  <span className="block text-blue">Developer &amp;</span>
                  <span className="flex items-center gap-[0.2em]">
                    more <Sparkle className="h-[0.45em] w-[0.45em] text-blue" />
                  </span>
                </h1>
                <a href="#projects" className="btn-square btn-blue mt-10">
                  Xem dự án <ArrowUpRight className="h-4 w-4 stroke-[1.5]" />
                </a>
              </Reveal>
            </div>
          </div>

          {/* Portrait: in flow on mobile, overlapping the hero/intro divider on desktop */}
          <Reveal
            delay={0.15}
            className="relative z-20 mx-auto w-[min(300px,72%)] pb-12 pt-2 lg:absolute lg:right-[8%] lg:top-[250px] lg:w-[330px] lg:p-0"
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-6 translate-y-3 rotate-[7deg] rounded-[28px] bg-night" />
              <Sparkle className="absolute -right-5 top-14 z-10 h-7 w-7 text-blue" />
              <div className="relative -rotate-3 overflow-hidden rounded-[24px] bg-night shadow-[0_30px_60px_-30px_rgba(13,13,18,0.6)]">
                <Image
                  src={avatar}
                  alt={`Chân dung ${profile.name}`}
                  placeholder="blur"
                  loading="eager"
                  sizes="(min-width: 1024px) 330px, 72vw"
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
              </div>
              <Scribble variant="orbit" className="absolute -bottom-14 -left-20 z-10 w-[150%] text-blue" />
            </div>
          </Reveal>

          <div id="about" className="pad relative overflow-hidden border-t border-line pb-16 pt-14 lg:pt-20">
            <Spray className="-bottom-56 left-[18%] h-[440px] w-[600px]" />
            <Reveal className="relative lg:max-w-[44rem]">
              <p className="text-2xl uppercase tracking-tight text-muted md:text-3xl">
                Xin chào, tôi là <span aria-hidden="true">👋</span>
              </p>
              <h2 className="mt-2 text-5xl font-medium tracking-tight md:text-7xl">{profile.name}</h2>
              <p className="mt-10 text-xl font-light leading-[1.7] md:text-[1.7rem] md:leading-[1.65]">
                Tôi là <span className="mark">PHP &amp; Fullstack Developer</span> với hơn{" "}
                <span className="mark">3 năm kinh nghiệm</span> tùy chỉnh CMS và phát triển backend, hiện sống tại TP. Hồ
                Chí Minh.
              </p>
              <p className="mt-6 max-w-[56ch] leading-relaxed text-muted">
                Kỹ năng đọc tài liệu tiếng Anh tốt giúp tôi nhanh chóng làm chủ React, Next.js, Node.js và chuyển đổi
                linh hoạt từ kiến trúc monolithic truyền thống sang modern web stack.
              </p>
            </Reveal>

            <div className="relative mt-12 flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="mb-3 text-sm">Kết nối với tôi</p>
                <div className="flex gap-2">
                  {socials.map((s, i) => (
                    <a
                      key={s.short}
                      href={s.href}
                      data-filled={i === 0}
                      className="social-dot"
                      aria-label={s.label}
                      title={s.label}
                      {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {s.short}
                    </a>
                  ))}
                </div>
              </div>
              <WavyBadge href="#contact" className="w-36 md:mr-[8%] md:w-40">
                Sẵn sàng
                <br />
                hợp tác
              </WavyBadge>
            </div>
          </div>
        </section>

        {/* ═══ STATS ═══ */}
        <section aria-label="Thành tích" className="grid grid-cols-3 border-t border-line">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="px-2 py-10 text-center md:py-14">
              <p className="text-4xl tracking-tight md:text-7xl">{s.value}</p>
              <p className="mt-2 text-xs text-muted md:text-base">{s.label}</p>
            </Reveal>
          ))}
        </section>

        {/* ═══ SKILLS ═══ */}
        <section id="skills" className="pad relative overflow-hidden border-t border-line py-16 md:py-24">
          <Spray className="-bottom-44 -left-44 h-[420px] w-[420px]" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <h2 className="max-w-[13ch] text-4xl leading-[1.1] tracking-tight md:text-6xl">Giải pháp lập trình trọn gói.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <a href="#contact" className="btn-square btn-blue">
                Hợp tác ngay <ArrowUpRight className="h-4 w-4 stroke-[1.5]" />
              </a>
            </Reveal>
          </div>

          <div className="relative mt-12 grid gap-5 md:grid-cols-3">
            {SKILL_CARDS.map((card, i) => {
              const tone = TONES[card.tone];
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={i * 0.08} className={`relative flex flex-col rounded-[28px] p-8 ${tone.card}`}>
                  <Icon className={`h-10 w-10 stroke-[1.25] ${tone.icon}`} />
                  <h3 className="mt-8 text-2xl leading-snug tracking-tight">{card.title}</h3>
                  <p className={`mt-3 text-sm ${tone.sub}`}>{card.subtitle}</p>
                  <ul className="mt-6 space-y-3 text-[0.95rem]">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="h-4 w-4 shrink-0 stroke-[1.5]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/projects"
                    aria-label={`Xem dự án — ${card.title}`}
                    className="mt-10 flex h-9 w-9 items-center justify-center self-end rounded-full bg-paper text-blue transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ═══ PROJECTS ═══ */}
        <section id="projects" className="border-t border-line">
          <div className="pad flex flex-col gap-8 py-14 md:flex-row md:items-end md:justify-between md:py-16">
            <Reveal>
              <h2 className="text-4xl leading-[1.1] tracking-tight md:text-6xl">
                Khám phá những
                <br />
                dự án tiêu biểu <LoopArrow className="ml-2 inline-block h-10 w-20 align-middle md:h-12 md:w-24" />
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/projects" className="btn-square btn-blue">
                Xem tất cả <ArrowUpRight className="h-4 w-4 stroke-[1.5]" />
              </Link>
            </Reveal>
          </div>
          {featured.map((project, i) => (
            <FeaturedProject key={project.domain} project={project} index={i} />
          ))}
        </section>

        {/* ═══ EXPERIENCE ═══ */}
        <section id="experience" className="overflow-hidden bg-blue py-16 text-white md:py-24">
          <div className="pad flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <h2 className="text-4xl leading-[1.1] tracking-tight md:text-6xl">
                Hành trình
                <br />
                sự nghiệp <LoopArrow className="ml-2 inline-block h-10 w-20 align-middle md:h-12 md:w-24" />
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <a href="#contact" className="btn-square btn-outline-light">
                Hợp tác cùng tôi <ArrowUpRight className="h-4 w-4 stroke-[1.5]" />
              </a>
            </Reveal>
          </div>

          <div className="pad mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal className="rounded-[24px] bg-white/10 p-8 md:p-10 lg:row-span-2">
              <p className="text-sm text-white/60">{WORK.period}</p>
              <h3 className="mt-3 text-3xl tracking-tight">{WORK.title}</h3>
              <p className="mt-1 text-white/70">{WORK.role}</p>
              <ul className="mt-8 space-y-4">
                {WORK.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-white/90">
                    <Check className="mt-1 h-4 w-4 shrink-0 stroke-[1.5]" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
            {EDUCATION.map((edu, i) => (
              <Reveal key={edu.title} delay={0.08 * (i + 1)} className="flex flex-col rounded-[24px] bg-white/10 p-8 md:p-10">
                <p className="text-sm text-white/60">{edu.period}</p>
                <h3 className="mt-3 text-2xl tracking-tight">{edu.title}</h3>
                <p className="mt-1 text-white/70">{edu.role}</p>
                <p className="mt-auto pt-8 text-4xl tracking-tight">{edu.note}</p>
              </Reveal>
            ))}
          </div>

          {/* Client domains marquee (list duplicated for a seamless loop) */}
          <div className="mt-16 overflow-hidden md:mt-20">
            <p className="sr-only">Một số khách hàng: {clientHosts.join(", ")}</p>
            <div className="marquee" aria-hidden="true">
              {[...clientHosts, ...clientHosts].map((host, i) => (
                <span key={i} className="flex items-center gap-10 pr-10 text-3xl tracking-tight md:text-5xl">
                  <span className={i % 3 === 1 ? "text-white/40" : "text-white"}>{host}</span>
                  <Sparkle className="h-4 w-4 text-white" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CONTACT ═══ */}
        <section id="contact">
          <div className="pad relative overflow-hidden py-16 text-center md:py-24">
            <Scribble variant="coil" className="absolute -left-16 top-[40%] hidden w-72 rotate-[-55deg] text-blue md:block" />
            <Scribble variant="coil" className="absolute -right-10 top-[58%] hidden w-72 text-blue md:block" />
            <Reveal>
              <h2 className="text-4xl font-medium leading-[1.1] tracking-tight md:text-7xl">
                Bạn có ý tưởng?
                <br />
                Hãy cùng trò chuyện
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 flex justify-center">
              <WavyBadge href={`mailto:${profile.email}`} tone="ink" className="w-36 md:w-40">
                Sẵn sàng
                <br />
                trò chuyện
              </WavyBadge>
            </Reveal>
          </div>

          <div className="grid border-t border-line lg:grid-cols-2">
            <div className="pad py-12 md:py-16 lg:border-r lg:border-line">
              <p className="max-w-[44ch] leading-relaxed text-muted">
                Bạn đang tìm kiếm một lập trình viên để hiện thực hóa ý tưởng của mình? Hãy để lại lời nhắn hoặc liên hệ
                trực tiếp, tôi sẽ phản hồi sớm nhất có thể.
              </p>
              <ul className="mt-10 divide-y divide-line border-y border-line">
                <li>
                  <a href={`mailto:${profile.email}`} className="group flex items-center justify-between gap-4 py-5">
                    <span className="flex items-center gap-4">
                      <Mail className="h-5 w-5 stroke-[1.5] text-blue" />
                      <span className="text-lg">{profile.email}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 stroke-[1.5] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
                <li>
                  <a href={profile.phoneHref} className="group flex items-center justify-between gap-4 py-5">
                    <span className="flex items-center gap-4">
                      <Phone className="h-5 w-5 stroke-[1.5] text-blue" />
                      <span className="text-lg">{profile.phone}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 stroke-[1.5] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
                <li className="flex items-center gap-4 py-5">
                  <MapPin className="h-5 w-5 stroke-[1.5] text-blue" />
                  <span className="text-lg">{profile.location}</span>
                </li>
              </ul>
            </div>
            <div className="pad border-t border-line py-12 md:py-16 lg:border-t-0">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
