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
        <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end" id="hero">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4"
            />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/50 to-black/20" />
          </div>

          <div className="relative z-10 w-full px-8 pb-16 sm:px-12 sm:pb-24 lg:px-20 lg:pb-32 max-w-7xl mx-auto">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-4"
                style={{ fontFamily: 'var(--font-newsreader)' }}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              >
                Trần Thiên Bảo <br />
                <em className="text-[#c98b5a] not-italic font-normal">(Jayden)</em>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-white/80 max-w-xl mb-8 leading-relaxed font-light"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              >
                Kiến tạo giải pháp website hiệu quả và tối ưu. Chuyển đổi liền mạch từ Backend PHP truyền thống sang các kiến trúc Fullstack hiện đại.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              >
                <a href="#projects" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#1f2a1d] font-semibold hover:bg-white/90 transition-colors shadow-lg">Xem dự án</a>
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all">Kết nối với tôi</a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══ GIỚI THIỆU ═══ */}
        <section className="section" id="about">
          <div className="container about-grid">
            <motion.div
              className="about-image-wrap"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#2a241e] relative overflow-hidden flex items-center justify-center">
                {/* Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />
                
                {/* Glowing Core */}
                <motion.div
                  className="absolute w-64 h-64 bg-[#a67c52]/20 rounded-full blur-[70px]"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* 3D Wireframe Spheres */}
                <div className="relative w-56 h-56 z-10 flex items-center justify-center perspective-[1000px]">
                  <motion.div
                    className="absolute inset-0 border border-[#a67c52]/30 rounded-full"
                    animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-6 border border-white/10 rounded-full"
                    animate={{ rotateX: [360, 0], rotateY: [0, 360], rotateZ: [0, 180] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-12 border border-[#c98958]/40 rounded-full border-dashed"
                    animate={{ rotateZ: [0, -360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Center Icon */}
                  <motion.div
                    className="relative w-20 h-20 bg-gradient-to-tr from-[#a67c52] to-[#c98958] rounded-2xl shadow-[0_0_30px_rgba(166,124,82,0.5)] flex items-center justify-center backdrop-blur-md border border-white/20"
                    animate={{ 
                      y: [-12, 12, -12],
                      rotateZ: [0, 4, 0, -4, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-white font-mono font-bold text-3xl tracking-tighter">&lt;/&gt;</span>
                  </motion.div>
                </div>

                {/* Floating Tech Logos */}
                {[
                  { icon: 'mongodb', top: '15%', left: '15%', delay: 0, duration: 8, scale: 1.2 },
                  { icon: 'mysql', top: '25%', left: '75%', delay: 1, duration: 9, scale: 1.1 },
                  { icon: 'php', top: '75%', left: '15%', delay: 2, duration: 7, scale: 1.3 },
                  { icon: 'nodedotjs', top: '65%', left: '80%', delay: 0.5, duration: 8.5, scale: 1.15 },
                  { icon: 'react', top: '10%', left: '50%', delay: 1.5, duration: 7.5, scale: 1.25 },
                  { icon: 'nextdotjs', top: '45%', left: '10%', delay: 2.5, duration: 9, scale: 1.2 },
                  { icon: 'tailwindcss', top: '85%', left: '50%', delay: 0.8, duration: 8, scale: 1.1 },
                  { icon: 'html5', top: '55%', left: '85%', delay: 1.2, duration: 7.2, scale: 1.05 },
                  { icon: 'css', top: '35%', left: '25%', delay: 2.2, duration: 8.8, scale: 1.05 },
                  { icon: 'javascript', top: '80%', left: '75%', delay: 1.8, duration: 7.8, scale: 1.15 },
                ].map((item, i) => (
                  <motion.div
                    key={item.icon}
                    className="absolute z-20"
                    style={{ top: item.top, left: item.left, scale: item.scale }}
                    animate={{
                      y: [0, -25, 0],
                      x: [0, i % 2 === 0 ? 10 : -10, 0],
                    }}
                    transition={{
                      duration: item.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-black/20 backdrop-blur-lg rounded-2xl p-3 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                      <img src={`https://cdn.simpleicons.org/${item.icon}`} alt={item.icon} className="w-full h-full object-contain drop-shadow-xl" />
                    </div>
                  </motion.div>
                ))}

                {/* Floating Particles */}
                {[
                  { top: '20%', left: '30%', delay: 0.5, dur: 4 },
                  { top: '40%', left: '70%', delay: 1.2, dur: 5 },
                  { top: '10%', left: '80%', delay: 2.1, dur: 6 },
                  { top: '80%', left: '20%', delay: 0.8, dur: 4.5 },
                  { top: '60%', left: '10%', delay: 3.0, dur: 7 },
                  { top: '75%', left: '85%', delay: 1.5, dur: 5.5 },
                  { top: '35%', left: '45%', delay: 2.4, dur: 6.2 },
                  { top: '90%', left: '60%', delay: 0.2, dur: 4.8 },
                  { top: '15%', left: '15%', delay: 1.8, dur: 5.1 },
                  { top: '50%', left: '90%', delay: 2.7, dur: 6.5 },
                  { top: '85%', left: '40%', delay: 0.9, dur: 4.2 },
                  { top: '5%',  left: '50%', delay: 1.1, dur: 5.8 },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white/60 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    style={{ left: p.left, top: p.top }}
                    animate={{
                      y: [0, -50, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                      duration: p.dur,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: p.delay,
                    }}
                  />
                ))}
              </div>
            </motion.div>
            <motion.div
              className="about-text"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <p className="eyebrow">Giới thiệu</p>
              <h2>PHP &amp; Fullstack Developer</h2>
              <p>
                Với hơn <strong>2 năm kinh nghiệm</strong> chuyên sâu về tùy chỉnh WordPress và phát triển hệ thống CMS, tôi luôn cam kết mang đến những giải pháp kỹ thuật tối ưu nhất cho khách hàng.
              </p>
              <p>
                Sở hữu tư duy giải quyết vấn đề nhanh nhạy, kỹ năng đọc tài liệu chuyên ngành tốt, tôi dễ dàng nắm bắt các công nghệ mới và liên tục cải thiện kiến trúc linh hoạt cho mỗi dự án.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ KỸ NĂNG ═══ */}
        <section className="section" id="skills" style={{ background: "var(--surface)" }}>
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <p className="eyebrow">Kỹ năng</p>
              <h2 className="section-title">Công nghệ &amp; công cụ làm việc</h2>
            </motion.div>
            <div className="skills-grid">
              <motion.div
                className="skill-category"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                variants={{ ...revealVariants, visible: { ...revealVariants.visible, transition: { ...revealVariants.visible.transition, delay: 0 } } }}
              >
                <div className="skill-cat-icon">&lt;/&gt;</div>
                <h3>Languages &amp; Frontend</h3>
                <div className="skill-pills">
                  <span className="skill-pill">JavaScript</span>
                  <span className="skill-pill">HTML5</span>
                  <span className="skill-pill">CSS3</span>
                  <span className="skill-pill">Tailwind CSS</span>
                  <span className="skill-pill">ReactJS</span>
                  <span className="skill-pill">NextJS</span>
                </div>
              </motion.div>
              <motion.div
                className="skill-category"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                variants={{ ...revealVariants, visible: { ...revealVariants.visible, transition: { ...revealVariants.visible.transition, delay: 0.1 } } }}
              >
                <div className="skill-cat-icon">&#9681;</div>
                <h3>Backend &amp; Database</h3>
                <div className="skill-pills">
                  <span className="skill-pill">MySQL</span>
                  <span className="skill-pill">MongoDB</span>
                  <span className="skill-pill">PHP</span>
                  <span className="skill-pill">NodeJS</span>
                  <span className="skill-pill">REST API</span>
                </div>
              </motion.div>
              <motion.div
                className="skill-category"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                variants={{ ...revealVariants, visible: { ...revealVariants.visible, transition: { ...revealVariants.visible.transition, delay: 0.2 } } }}
              >
                <div className="skill-cat-icon">&#9881;</div>
                <h3>Tools</h3>
                <div className="skill-pills">
                  <span className="skill-pill">Cursor</span>
                  <span className="skill-pill">Antigravity</span>
                  <span className="skill-pill">Claude</span>
                  <span className="skill-pill">Figma</span>
                  <span className="skill-pill">Postman</span>
                  <span className="skill-pill">GitLab</span>
                  <span className="skill-pill">Gemini</span>
                  <span className="skill-pill">GitHub</span>
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
        <section className="section" id="projects" style={{ background: "var(--surface)" }}>
          <div className="container">
            <motion.div
              className="section-header flex justify-between items-end"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <div>
                <p className="eyebrow">Dự án</p>
                <h2 className="section-title">Những sản phẩm tiêu biểu</h2>
              </div>
              <Link href="/projects" className="btn btn-outline hidden sm:inline-flex mb-2">Xem tất cả dự án</Link>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {featuredProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
            <div className="mt-12 text-center sm:hidden">
              <Link href="/projects" className="btn btn-outline w-full justify-center">Xem tất cả dự án</Link>
            </div>
          </div>
        </section>

        {/* ═══ LIÊN HỆ ═══ */}
        <section className="section" id="contact">
          <div className="container contact-grid">
            <motion.div
              className="contact-info"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <p className="eyebrow">Liên hệ</p>
              <h2>Hãy kết nối với tôi</h2>
              <p>
                Bạn đang tìm kiếm một lập trình viên tận tâm để hiện thực hóa ý tưởng của mình? Hãy kết nối với tôi ngay hôm nay.
              </p>
              <div className="contact-item">
                <div className="contact-icon">&#9993;</div>
                <a href="mailto:baotrn.dev@gmail.com">baotrn.dev@gmail.com</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#9742;</div>
                <span>0774.858.314</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#9906;</div>
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </div>
            </motion.div>
            <motion.div
              className="contact-form-card"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={revealVariants}
            >
              <h3>Gửi tin nhắn</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Họ và tên</label>
                  <input type="text" id="name" placeholder="Nguyễn Văn A" required disabled={formStatus !== "idle"} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="example@company.com" required disabled={formStatus !== "idle"} />
                </div>
                <div className="form-group">
                  <label htmlFor="msg">Tin nhắn</label>
                  <textarea id="msg" placeholder="Mô tả dự án hoặc cơ hội bạn muốn trao đổi..." required disabled={formStatus !== "idle"}></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={formStatus !== "idle"}
                  style={formStatus === "success" ? { background: 'linear-gradient(135deg, #8B9A46, #A5B452)' } : {}}
                >
                  {formStatus === "idle" ? "Gửi tin nhắn" : formStatus === "submitting" ? "Đang gửi..." : "Đã gửi! Cảm ơn bạn ✦"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

