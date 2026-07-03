"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const featuredProjects = projects.filter(p => p.flag);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 2500);
    }, 1000);
  };

  return (
    <>
      <nav className={`topnav ${scrolled ? "scrolled" : ""}`} id="topnav" style={{
        background: scrolled ? undefined : 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
        borderBottom: 'none'
      }}>
        <div className="topnav-inner">
          <Link href="/" className="logo" style={{ color: scrolled ? 'var(--fg)' : '#fff' }}>
            <span className="gradient">J</span>ayden
          </Link>
          <ul className="nav-links">
            <li><a href="#about" style={{ color: scrolled ? undefined : 'rgba(255,255,255,0.9)' }}>Giới thiệu</a></li>
            <li><a href="#skills" style={{ color: scrolled ? undefined : 'rgba(255,255,255,0.9)' }}>Kỹ năng</a></li>
            <li><a href="#experience" style={{ color: scrolled ? undefined : 'rgba(255,255,255,0.9)' }}>Kinh nghiệm</a></li>
            <li><a href="#projects" style={{ color: scrolled ? undefined : 'rgba(255,255,255,0.9)' }}>Dự án</a></li>
            <li><a href="#contact" className="btn-nav">Liên hệ</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* ═══ HERO ═══ */}
        <section className="relative w-full min-h-[100dvh] flex items-center pt-24 pb-16 lg:pt-0" id="hero">
          <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left: Content */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="eyebrow mb-6 text-accent tracking-widest text-xs font-mono uppercase">Fullstack Developer</div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]"
                style={{ fontFamily: 'var(--font-outfit)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Trần Thiên Bảo
              </motion.h1>
              <motion.p
                className="text-lg text-[#a1a1aa] mb-8 leading-relaxed max-w-[40ch]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Kiến trúc website tối ưu, giải pháp hệ thống bền vững. Chuyển đổi mượt mà từ PHP nguyên thủy sang kiến trúc Fullstack thế hệ mới.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <a href="#projects" className="btn btn-primary rounded-full px-7 py-3">Xem dự án</a>
                <a href="#contact" className="btn btn-outline rounded-full px-7 py-3">Kết nối với tôi</a>
              </motion.div>
            </motion.div>

            {/* Right: Tech Animation */}
            <motion.div
              className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto lg:mr-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#27272a] border-dashed"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner glowing orbit */}
              <motion.div
                className="absolute inset-12 rounded-full border border-[#0070F3]/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-[#0070F3] rounded-full shadow-[0_0_10px_#0070F3]" />
                <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-[#00e6ff] rounded-full shadow-[0_0_8px_#00e6ff]" />
              </motion.div>
              {/* Core shape */}
              <motion.div
                className="relative z-10 w-32 h-32 bg-[#111111] rounded-2xl border border-[#27272a] shadow-[0_0_40px_rgba(0,112,243,0.15)] flex items-center justify-center overflow-hidden"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0070F3]/10 to-transparent opacity-50" />
                <div className="font-mono text-xl text-[#0070F3] font-medium tracking-tighter">
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "steps(2)" }}
                  >_</motion.span>dev
                </div>
              </motion.div>

              {/* Floating tech elements */}
              <motion.div
                className="absolute top-1/4 -left-4 bg-[#111] border border-[#27272a] px-3 py-1.5 rounded-lg text-xs font-mono text-[#a1a1aa] shadow-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                React.FC
              </motion.div>
              <motion.div
                className="absolute bottom-1/4 right-0 bg-[#111] border border-[#27272a] px-3 py-1.5 rounded-lg text-xs font-mono text-[#a1a1aa] shadow-lg"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                SELECT *
              </motion.div>
              <motion.div
                className="absolute top-10 right-10 bg-[#111] border border-[#27272a] px-3 py-1.5 rounded-lg text-xs font-mono text-[#a1a1aa] shadow-lg"
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                API_ROUTE
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* ═══ GIỚI THIỆU ═══ */}
        <section className="section border-t border-[#27272a]" id="about">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
              <motion.div
                className="md:col-span-4"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                variants={revealVariants}
              >
                <h2 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">Giới thiệu</h2>
                <div className="w-12 h-[1px] bg-accent/50 mb-8" />
              </motion.div>

              <motion.div
                className="md:col-span-8"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                variants={revealVariants}
              >
                <h3 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight text-white" style={{ fontFamily: 'var(--font-outfit)' }}>
                  PHP & Fullstack Developer với tư duy thiết kế hệ thống tối ưu.
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#a1a1aa] text-base leading-relaxed">
                  <p>
                    Với hơn <strong>3 năm kinh nghiệm</strong> chuyên sâu về tùy chỉnh hệ thống CMS và phát triển backend bằng PHP/MySQL, tôi luôn cam kết mang đến những giải pháp kỹ thuật tối ưu, ổn định và có khả năng mở rộng.
                  </p>
                  <p>
                    Kỹ năng đọc tài liệu tiếng Anh tốt giúp tôi nhanh chóng nắm bắt công nghệ mới (React, Next.js, Node.js), dễ dàng tích hợp và chuyển đổi linh hoạt giữa các kiến trúc monolithic truyền thống sang modern web stack.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ KỸ NĂNG ═══ */}
        <section className="section bg-[#111111] border-y border-[#27272a]" id="skills">
          <div className="container">
            <motion.div
              className="mb-12"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">Kỹ năng cốt lõi</h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-white" style={{ fontFamily: 'var(--font-outfit)' }}>Công nghệ & Công cụ</h3>
            </motion.div>

            {/* Asymmetric Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Frontend - Col Span 2 */}
              <motion.div
                className="md:col-span-2 bg-[#0a0a0a] border border-[#27272a] rounded-2xl p-8 relative overflow-hidden"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                variants={{ ...revealVariants, visible: { ...revealVariants.visible, transition: { ...revealVariants.visible.transition, delay: 0 } } }}
              >
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <span className="text-8xl font-mono text-accent">&lt;/&gt;</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-6 relative z-10" style={{ fontFamily: 'var(--font-outfit)' }}>Frontend & UI</h3>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'ReactJS', 'NextJS', 'Zustand'].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-lg text-sm font-medium bg-[#111] text-[#ededed] border border-[#27272a] hover:border-accent hover:text-accent transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Backend - Col Span 1 */}
              <motion.div
                className="md:col-span-1 bg-[#0a0a0a] border border-[#27272a] rounded-2xl p-8 relative overflow-hidden"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                variants={{ ...revealVariants, visible: { ...revealVariants.visible, transition: { ...revealVariants.visible.transition, delay: 0.1 } } }}
              >
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                <h3 className="text-xl font-medium text-white mb-6 relative z-10" style={{ fontFamily: 'var(--font-outfit)' }}>Backend & DB</h3>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {['PHP', 'NodeJS', 'MySQL', 'MongoDB', 'REST API', 'WordPress', 'Redis'].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-lg text-sm font-medium bg-[#111] text-[#ededed] border border-[#27272a]">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Workflow - Col Span 3 (Full width) */}
              <motion.div
                className="md:col-span-3 bg-gradient-to-r from-[#0a0a0a] to-[#111111] border border-[#27272a] rounded-2xl p-8 relative flex flex-col md:flex-row md:items-center justify-between gap-8"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                variants={{ ...revealVariants, visible: { ...revealVariants.visible, transition: { ...revealVariants.visible.transition, delay: 0.2 } } }}
              >
                <div>
                  <h3 className="text-xl font-medium text-white mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>Công cụ & Quy trình</h3>
                  <p className="text-[#a1a1aa] text-sm max-w-md leading-relaxed">
                    Tận dụng sức mạnh của AI và các công cụ quản lý phiên bản để tăng tốc độ phát triển và đảm bảo chất lượng code.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Cursor', 'Antigravity', 'Claude', 'Figma', 'Postman', 'GitLab', 'GitHub'].map(tool => (
                    <span key={tool} className="px-4 py-2 rounded-full text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/20">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ KINH NGHIỆM ═══ */}
        <section className="section" id="experience">
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <p className="eyebrow">Kinh nghiệm</p>
              <h2 className="section-title">Hành trình sự nghiệp</h2>
            </motion.div>
            <motion.div
              className="exp-timeline"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <div className="exp-item">
                <h3>Cao đẳng Công Nghệ Thông Tin</h3>
                <p className="exp-meta"> &middot; 2021 — 2023</p>
                <ul className="exp-details">
                  <li>GPA: 3.1</li>
                </ul>
              </div>
              <div className="exp-item">
                <h3>Đại học Công nghệ Thông tin (UIT)</h3>
                <p className="exp-meta">Cử nhân Công nghệ thông tin &middot; 2024 — 2025</p>
                <ul className="exp-details">
                  <li>GPA: 3.2</li>
                </ul>
              </div>
              <div className="exp-item">
                <h3>MONA MEDIA</h3>
                <p className="exp-meta">Junior PHP Developer &middot; 2023 — 2026</p>
                <ul className="exp-details">
                  <li>Phát triển các giải pháp thương mại điện tử, CMS và backend tùy chỉnh có khả năng mở rộng bằng PHP và MySQL.</li>
                  <li>Gỡ lỗi hệ thống, hỗ trợ các thành viên nhóm và quản lý mã nguồn bằng Git.</li>
                  <li>Chuyển đổi các bản thiết kế Figma thành giao diện người dùng động, đáp ứng bằng cách sử dụng Tailwind CSS, JavaScript và AJAX.</li>
                  <li>Thiết kế logic nghiệp vụ, xây dựng API REST và tối ưu hóa hiệu suất hệ thống.</li>
                  <li>Tối ưu hóa các truy vấn cơ sở dữ liệu, quản lý triển khai máy chủ và thực thi các biện pháp bảo mật hệ thống nghiêm ngặt.</li>
                  <li>Sử dụng các công cụ AI để nâng cao hiệu quả phát triển.</li>
                </ul>
              </div>

            </motion.div>
          </div>
        </section>

        {/* ═══ DỰ ÁN ═══ */}
        <section className="section bg-[#0a0a0a]" id="projects">
          <div className="container">
            <motion.div
              className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <div>
                <h2 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">Dự án chọn lọc</h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-white" style={{ fontFamily: 'var(--font-outfit)' }}>Sản phẩm tiêu biểu</h3>
              </div>
              <Link href="/projects" className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#27272a] hover:border-accent hover:text-accent text-[#a1a1aa] font-medium transition-colors">
                Xem tất cả <span>&rarr;</span>
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
            <div className="mt-10 text-center md:hidden">
              <Link href="/projects" className="inline-flex justify-center items-center gap-2 w-full px-6 py-3 rounded-full border border-[#27272a] hover:border-accent hover:text-accent text-[#a1a1aa] font-medium transition-colors">
                Xem tất cả dự án <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ LIÊN HỆ ═══ */}
        <section className="section bg-[#0a0a0a] border-t border-[#27272a] pb-24" id="contact">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
            <motion.div
              className="contact-info max-w-lg"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">Liên hệ</h2>
              <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white" style={{ fontFamily: 'var(--font-outfit)' }}>Hãy kết nối với tôi</h3>
              <p className="text-[#a1a1aa] mb-12 leading-relaxed">
                Bạn đang tìm kiếm một lập trình viên để hiện thực hóa ý tưởng của mình? Hãy để lại lời nhắn hoặc liên hệ trực tiếp, tôi sẽ phản hồi sớm nhất có thể.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#111] border border-[#27272a] text-accent group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                    <span className="text-xl">&#9993;</span>
                  </div>
                  <a href="mailto:baotrn.dev@gmail.com" className="text-lg font-medium text-[#ededed] hover:text-accent transition-colors">baotrn.dev@gmail.com</a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#111] border border-[#27272a] text-accent group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                    <span className="text-xl">&#9742;</span>
                  </div>
                  <span className="text-lg font-medium text-[#ededed]">0774.858.314</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#111] border border-[#27272a] text-accent group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                    <span className="text-xl">&#9906;</span>
                  </div>
                  <span className="text-lg font-medium text-[#ededed]">TP. Hồ Chí Minh, Việt Nam</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#111111] border border-[#27272a] rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent2" />
              <h3 className="text-2xl font-semibold mb-8 text-white" style={{ fontFamily: 'var(--font-outfit)' }}>Gửi tin nhắn</h3>
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#a1a1aa] mb-2 uppercase tracking-wider">Họ và tên</label>
                  <input type="text" id="name" placeholder="Nguyễn Văn A" required disabled={formStatus !== "idle"}
                    className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-[#3f3f46]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#a1a1aa] mb-2 uppercase tracking-wider">Email</label>
                  <input type="email" id="email" placeholder="example@company.com" required disabled={formStatus !== "idle"}
                    className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-[#3f3f46]" />
                </div>
                <div>
                  <label htmlFor="msg" className="block text-xs font-mono text-[#a1a1aa] mb-2 uppercase tracking-wider">Tin nhắn</label>
                  <textarea id="msg" placeholder="Mô tả dự án hoặc cơ hội bạn muốn trao đổi..." required disabled={formStatus !== "idle"} rows={4}
                    className="w-full bg-[#0a0a0a] border border-[#27272a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-y placeholder:text-[#3f3f46]"></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="w-full py-4 rounded-lg bg-accent hover:bg-accent/90 text-white font-medium transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(0,112,243,0.3)] hover:shadow-[0_0_30px_rgba(0,112,243,0.5)] disabled:opacity-70 disabled:active:scale-100 disabled:hover:bg-accent"
                >
                  {formStatus === "idle" ? "Gửi tin nhắn" : formStatus === "submitting" ? "Đang gửi..." : "Đã gửi thành công!"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

