"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Settings,
  Wrench,
  ExternalLink,
  Mail,
  Phone,
  ChevronRight,
  Briefcase
} from "lucide-react";

export default function Home() {
  const heroVariant: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariant: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skills = [
    { category: "Languages & Frontend", icon: <Layout className="w-6 h-6 text-blue-400" />, items: ["PHP", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "ReactJS", "NextJS"] },
    { category: "Backend & Database", icon: <Database className="w-6 h-6 text-emerald-400" />, items: ["MySQL", "MongoDB", "NodeJS", "REST API"] },
    { category: "Tools", icon: <Wrench className="w-6 h-6 text-orange-400" />, items: ["Cursor", "Claude", "Figma", "Postman", "GitLab", "Gemini", "GitHub"] },
  ];

  const projects = [
    {
      title: "Clinic Manager System",
      type: "Web & Mobile App",
      link: "https://clinic-system-manager.vercel.app/",
      tech: ["MongoDB", "ExpressJS", "ReactJS", "NextJS", "React Native"],
      description: "Hệ thống quản lý phòng khám toàn diện với đầy đủ tính năng đặt lịch, thanh toán và báo cáo.",
      highlights: ["Hệ thống đặt lịch thông minh", "Tích hợp thanh toán VNPay", "Dashboard báo cáo doanh thu"],
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30"
    },
    {
      title: "Fudo Vietnam",
      type: "Corporate Website",
      link: "https://fudovietnam.com/",
      tech: ["PHP", "WordPress", "WooCommerce", "REST API", "ACF"],
      description: "Hệ thống thương mại điện tử chuyên nghiệp với tích hợp ERP/POS và đồng bộ dữ liệu thời gian thực.",
      highlights: [
        "Xây dựng Custom REST API đồng bộ tồn kho & đơn hàng với Haravan, iPOS",
        "Tùy chỉnh WooCommerce: checkout, mini cart AJAX, biến thể sản phẩm",
        "Tích hợp Zalo OA cho thông báo đơn hàng tự động",
        "Tối ưu SQL ($wpdb), Transients & Object Cache cho hiệu năng cao"
      ],
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30"
    },
    {
      title: "Nice Golf Tour",
      type: "Tourism & Booking Website",
      link: "https://nicegolftour.com/",
      tech: ["PHP", "WordPress", "Custom Theme", "ACF"],
      description: "Nền tảng đặt tour golf chuyên nghiệp với giao diện sang trọng và trải nghiệm đặt dịch vụ mượt mà.",
      highlights: [
        "Phát triển theme tùy chỉnh từ Figma design",
        "Tích hợp hệ thống đặt tour và quản lý lịch trình",
        "Tối ưu hóa hiệu suất và trải nghiệm người dùng"
      ],
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30"
    },
    {
      title: "Hoàng Hà Pharma",
      type: "E-commerce Website",
      link: "https://hoanghapharma.com.vn/",
      tech: ["PHP", "WordPress", "WooCommerce", "CPT", "ACF"],
      description: "Website thương mại điện tử ngành dược phẩm với cấu trúc sản phẩm phức tạp và yêu cầu bảo mật cao.",
      highlights: [
        "Xây dựng cấu trúc CPT & ACF linh hoạt cho danh mục dược phẩm",
        "Tùy chỉnh WooCommerce theo quy trình đặt hàng ngành dược",
        "Tối ưu hóa bảo mật và hiệu suất hệ thống"
      ],
      color: "from-indigo-500/20 to-purple-500/20",
      border: "border-indigo-500/30"
    },
    {
      title: "Quảng Bình Travel",
      type: "Travel & Tourism Portal",
      link: "https://quangbinhtravel.vn/",
      tech: ["PHP", "WordPress", "Custom Plugin", "ACF"],
      description: "Cổng thông tin và đặt dịch vụ du lịch Quảng Bình với tính năng tìm kiếm tour nâng cao.",
      highlights: [
        "Tối ưu trải nghiệm tìm kiếm và lọc tour cho khách du lịch",
        "Xây dựng hệ thống quản lý nội dung linh hoạt",
        "Responsive design tối ưu cho mọi thiết bị"
      ],
      color: "from-sky-500/20 to-blue-500/20",
      border: "border-sky-500/30"
    },
    {
      title: "Sky World Group",
      type: "Multilingual Corporate Website",
      link: "https://skyworldgroup.vn/vi/",
      tech: ["PHP", "WordPress", "WPML", "Custom Theme", "ACF"],
      description: "Website đa ngôn ngữ cho tập đoàn lớn với cấu trúc phức tạp và yêu cầu hiệu năng quốc tế.",
      highlights: [
        "Triển khai hệ thống đa ngôn ngữ (WPML) cho người dùng quốc tế",
        "Xây dựng theme tùy chỉnh theo brand identity tập đoàn",
        "Tối ưu hóa SEO đa ngôn ngữ và tốc độ tải trang"
      ],
      color: "from-violet-500/20 to-pink-500/20",
      border: "border-violet-500/30"
    },
    {
      title: "Anh Hồng Food",
      type: "Food E-commerce Website",
      link: "https://anhhongfood.com/",
      tech: ["PHP", "WordPress", "WooCommerce", "AJAX"],
      description: "Website thương mại điện tử ngành thực phẩm với giao diện trực quan và quy trình đặt hàng tối ưu.",
      highlights: [
        "Tối ưu quy trình đặt hàng và hiển thị danh mục sản phẩm thực phẩm",
        "Tích hợp AJAX loading cho trải nghiệm mua sắm mượt mà",
        "Xây dựng hệ thống quản lý đơn hàng tùy chỉnh"
      ],
      color: "from-rose-500/20 to-orange-500/20",
      border: "border-rose-500/30"
    },
    {
      title: "IKN",
      type: "Corporate Website",
      link: "https://ikn.vn/",
      tech: ["PHP", "WordPress", "Custom Theme", "ACF"],
      description: "Website doanh nghiệp chuyên nghiệp với hệ thống quản trị nội dung được thiết kế riêng.",
      highlights: [
        "Xây dựng hệ thống CMS tùy chỉnh theo nhu cầu doanh nghiệp",
        "Phát triển theme đạt chuẩn từ thiết kế Figma",
        "Tối ưu hóa hiệu suất và khả năng mở rộng"
      ],
      color: "from-slate-500/20 to-gray-500/20",
      border: "border-slate-500/30"
    },
    {
      title: "Sứ Long Hậu",
      type: "Artisan & Craft E-commerce",
      link: "https://sulonghau.monaweb.dev/",
      tech: ["PHP", "WordPress", "WooCommerce", "Custom Theme"],
      description: "Website thương hiệu gốm sứ mỹ nghệ với yêu cầu cao về trình bày hình ảnh sản phẩm thủ công.",
      highlights: [
        "Thiết kế giao diện trình bày sản phẩm mỹ nghệ ấn tượng",
        "Tích hợp WooCommerce tùy chỉnh cho sản phẩm thủ công",
        "Xây dựng bộ lọc và tìm kiếm sản phẩm nâng cao"
      ],
      color: "from-stone-500/20 to-amber-500/20",
      border: "border-stone-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 selection:text-blue-200 font-sans relative overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-bold font-outfit tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            JB.
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">Giới thiệu</a>
            <a href="#skills" className="hover:text-white transition-colors">Kỹ năng</a>
            <a href="#projects" className="hover:text-white transition-colors">Dự án</a>
            <a href="#experience" className="hover:text-white transition-colors">Kinh nghiệm</a>
          </div>
          <a href="#contact" className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all font-medium text-sm">
            Contact Me
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* HERO SECTION */}
        <motion.section
          className="min-h-[70vh] flex flex-col justify-center items-start pt-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={heroVariant} className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium text-sm mb-6">
            PHP & Fullstack Developer
          </motion.div>
          <motion.h1 variants={heroVariant} className="text-5xl md:text-7xl font-bold font-outfit tracking-tight text-white mb-6 leading-tight max-w-4xl text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Trần Thiên Bảo (Jayden)</span> <br />
            Kiến Tạo Giải Pháp Website Hiệu Quả Và Tối Ưu.
          </motion.h1>
          <motion.p variants={heroVariant} className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
            Tập trung vào khả năng chuyển đổi liền mạch từ Backend PHP truyền thống sang các kiến trúc Fullstack hiện đại với React và Next.js.
          </motion.p>
          <motion.div variants={heroVariant} className="flex gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Xem dự án
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-medium transition-all flex items-center gap-2">
              Liên hệ <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.section>

        {/* ABOUT ME */}
        <motion.section
          id="about"
          className="scroll-mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariant} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white">Giới thiệu</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
              <p className="text-slate-400 leading-relaxed text-lg">
                Với hơn 2 năm kinh nghiệm chuyên sâu về tùy chỉnh WordPress và phát triển hệ thống CMS, tôi luôn cam kết mang đến những <strong>giải pháp kỹ thuật tối ưu nhất</strong> cho khách hàng.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg">
                Sở hữu tư duy giải quyết vấn đề nhanh nhạy, kỹ năng đọc tài liệu chuyên ngành tốt (Chứng chỉ B1, Google AI Certified), tôi dễ dàng nắm bắt các công nghệ mới và liên tục cải thiện kiến trúc linh hoạt cho mỗi dự án.
              </p>
            </motion.div>
            <motion.div variants={itemVariant} className="relative aspect-square md:aspect-[3/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/avatar (3).jpg')" }}></div>
            </motion.div>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          className="scroll-mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-bold font-outfit text-white mb-6">Kỹ Năng</motion.h2>
            <motion.p variants={itemVariant} className="text-slate-400 max-w-2xl mx-auto">Bộ công cụ công nghệ giúp tôi xây dựng và triển khai dự án.</motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariant} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors hover:bg-white/[0.04]">
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-900 text-slate-300 text-xs font-medium rounded-md border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FEATURED PROJECTS */}
        <motion.section
          id="projects"
          className="scroll-mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="mb-16">
            <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-bold font-outfit text-white">Dự Án Nổi Bật</motion.h2>
            <motion.div variants={itemVariant} className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariant} className={`group relative p-8 rounded-3xl bg-gradient-to-br ${project.color} border ${project.border} overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-blue-300 font-medium text-sm">{project.type}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all cursor-pointer">
                      <ExternalLink onClick={() => window.open(project.link, "_blank")} className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 flex-1">{project.description}</p>

                  <div className="space-y-4 mb-8">
                    <p className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Điểm nổi bật:</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                          <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-black/30 backdrop-blur-md text-slate-200 text-xs font-source-code rounded-lg border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* WORK EXPERIENCE */}
        <motion.section
          id="experience"
          className="scroll-mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-bold font-outfit text-white mb-16 text-center">Kinh Nghiệm</motion.h2>

          <motion.div variants={itemVariant} className="max-w-3xl mx-auto relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

            {/* Experience Item */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
              <div className="absolute left-0 w-4 h-4 rounded-full bg-blue-500 md:left-1/2 md:-translate-x-1/2 md:translate-y-0 translate-y-1.5 shadow-[0_0_10px_rgba(59,130,246,1)] z-10" />

              <div className="md:w-[45%] md:text-right pr-6 md:pr-12 md:pb-0 pb-4 ml-6 md:ml-0">
                <h3 className="text-xl font-bold text-white">MONA MEDIA</h3>
                <p className="text-blue-400 font-medium">Junior PHP Developer</p>
                <div className="inline-flex mt-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs text-slate-400">
                  2023 - 2026
                </div>
              </div>

              <div className="md:w-[45%] pl-6 md:pl-12 ml-6 md:ml-0">
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
                  <Briefcase className="w-6 h-6 text-slate-500 mb-4" />
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" /> Chuyển đổi chính xác từ Figma sang giao diện responsive hoàn chỉnh.</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" /> Xây dựng & phát triển các plugin tùy chỉnh đáp ứng nhu cầu doanh nghiệp.</li>
                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" /> Quản lý tác vụ và dự án hiệu quả qua hệ thống PMS.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Item */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="absolute left-0 w-4 h-4 rounded-full bg-white/20 border-2 border-slate-900 md:left-1/2 md:-translate-x-1/2 md:translate-y-0 translate-y-1.5 z-10" />

              <div className="md:w-[45%] md:text-right pr-6 md:pr-12 md:pb-0 pb-4 ml-6 md:ml-0 md:order-1 order-1">
                <h3 className="text-xl font-bold text-white">Đại học Công nghệ Thông tin (UIT)</h3>
                <p className="text-emerald-400 font-medium">Cử nhân Công nghệ thông tin</p>
                <div className="inline-flex mt-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs text-slate-400">
                  GPA: 3.2
                </div>
              </div>

              <div className="md:w-[45%] pl-6 md:pl-12 ml-6 md:ml-0 md:order-2 order-2">
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Đào tạo nền tảng vững chắc về khoa học máy tính, cấu trúc dữ liệu, và quản lý dự án phần mềm.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded border border-emerald-500/20">English B1</span>
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded border border-emerald-500/20">Google AI Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* CONTACT CTA */}
        <motion.section
          id="contact"
          className="scroll-mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={itemVariant} className="p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">Thông Tin Liên Hệ</h2>
              <p className="text-slate-400 mb-10 text-lg">
                Bạn đang tìm kiếm một lập trình viên tận tâm để hiện thực hóa ý tưởng của mình? Hãy kết nối với tôi ngay hôm nay.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="mailto:baotrn.dev@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] w-full sm:w-auto">
                  <Mail className="w-5 h-5" />
                  baotrn.dev@gmail.com
                </a>
                <a href="tel:0774858314" className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-semibold transition-all w-full sm:w-auto">
                  <Phone className="w-5 h-5 text-blue-400" />
                  0774.858.314
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Trần Thiên Bảo. Thiết kế và phát triển với Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
