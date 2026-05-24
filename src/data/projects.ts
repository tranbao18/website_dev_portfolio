export type FilterCategory =
  | "all"
  | "ai-automation"
  | "ecommerce-retail"
  | "corporate-business"
  | "education"
  | "realestate-resort"
  | "fnb-agriculture"
  | "other";

export interface Project {
  year: number;
  category: string;
  filterCategory: FilterCategory;
  project_name: string;
  domain: string;
  description: string;
  gradient: string;
  accent: string;
  tags: string[];
}

export const filterOptions: { key: FilterCategory; label: string; icon: string }[] = [
  { key: "all", label: "Tất cả", icon: "🌐" },
  { key: "ai-automation", label: "AI & Automation", icon: "🤖" },
  { key: "ecommerce-retail", label: "E-commerce & Retail", icon: "🛒" },
  { key: "corporate-business", label: "Corporate & Business", icon: "🏢" },
  { key: "education", label: "Education", icon: "🎓" },
  { key: "realestate-resort", label: "Real Estate & Resort", icon: "🏨" },
  { key: "fnb-agriculture", label: "F&B & Agriculture", icon: "🍽️" },
];

// Color themes per filter category
const themes: Record<FilterCategory, { gradient: string; accent: string }> = {
  all: { gradient: "from-slate-500/20 to-slate-600/20", accent: "blue" },
  "ai-automation": { gradient: "from-violet-600/25 to-fuchsia-500/20", accent: "violet" },
  "ecommerce-retail": { gradient: "from-amber-500/20 to-orange-500/20", accent: "amber" },
  "corporate-business": { gradient: "from-blue-500/20 to-cyan-500/20", accent: "blue" },
  education: { gradient: "from-emerald-500/20 to-teal-500/20", accent: "emerald" },
  "realestate-resort": { gradient: "from-rose-500/20 to-pink-500/20", accent: "rose" },
  "fnb-agriculture": { gradient: "from-lime-500/20 to-green-500/20", accent: "lime" },
  other: { gradient: "from-indigo-500/20 to-sky-500/20", accent: "indigo" },
};

function mapFilterCategory(category: string): FilterCategory {
  const cat = category.toLowerCase();

  // AI & Automation
  if (cat.includes("ai") || cat.includes("technology") || cat.includes("automation")) return "ai-automation";

  // E-commerce & Retail
  if (
    cat.includes("e-commerce") ||
    cat.includes("ecommerce") ||
    cat.includes("retail") ||
    cat.includes("fmcg") ||
    cat.includes("fashion") ||
    cat.includes("beauty") ||
    cat.includes("lifestyle") ||
    cat.includes("blog & beauty") ||
    cat.includes("supplies") ||
    cat.includes("pet service") ||
    cat.includes("furniture")
  )
    return "ecommerce-retail";

  // Corporate & Business
  if (
    cat.includes("corporate") ||
    cat.includes("business") ||
    cat.includes("investment") ||
    cat.includes("logistics") ||
    cat.includes("industrial") ||
    cat.includes("mining") ||
    cat.includes("construction") ||
    cat.includes("legal") ||
    cat.includes("hr &") ||
    cat.includes("transport") ||
    cat.includes("environmental") ||
    cat.includes("health") ||
    cat.includes("interior")
  )
    return "corporate-business";

  // Education
  if (cat.includes("education") || cat.includes("landing page")) return "education";

  // Real Estate & Resort
  if (cat.includes("real estate") || cat.includes("hospitality")) return "realestate-resort";

  // F&B & Agriculture
  if (cat.includes("f&b") || cat.includes("agriculture")) return "fnb-agriculture";

  return "other";
}

const rawProjects = [
  { year: 2026, category: "AI Innovation", project_name: "Personal AI Agent: Đần", domain: "ai.hpdev.name.vn", description: "Hệ thống AI đa mô hình (Claude 3.5, GPT-4o, Gemini 1.5) hỗ trợ quy trình làm việc và nghiên cứu học thuật. Tích hợp Discord & Telegram, quản lý qua GitHub CI/CD.", tags: ["AI Agent", "Claude", "GPT-4o", "Gemini"] },

  // 2025
  { year: 2025, category: "F&B", project_name: "Givral Bakery", domain: "givralbakery.com.vn", description: "Website thương hiệu bánh cao cấp Givral, tập trung branding và trải nghiệm khách hàng.", tags: ["PHP", "WordPress", "Premium Branding"] },
  { year: 2025, category: "Logistics & Supply Chain", project_name: "Vietnam Post Logistics", domain: "vietnampostlogistics.com", description: "Nền tảng web cho dịch vụ logistics và chuỗi cung ứng của Vietnam Post.", tags: ["PHP", "WordPress", "Logistics"] },
  { year: 2025, category: "Beauty", project_name: "Minh Lashes", domain: "minhlashes.com.au", description: "Website dịch vụ làm đẹp (nối mi) hướng tới thị trường quốc tế tại Úc.", tags: ["PHP", "International", "Beauty"] },
  { year: 2025, category: "Industrial & Manufacturing", project_name: "Toàn Tâm Steel", domain: "toantamsteel.vn", description: "Website doanh nghiệp ngành thép và sản xuất công nghiệp.", tags: ["PHP", "WordPress", "Industrial"] },
  { year: 2025, category: "E-commerce", project_name: "Nhật Minh Sports", domain: "nhatminhsports.vn", description: "Sàn thương mại điện tử bán lẻ dụng cụ và trang phục thể thao.", tags: ["PHP", "WooCommerce", "E-commerce"] },
  { year: 2025, category: "E-commerce", project_name: "SportGo", domain: "sportgo.vn", description: "Website bán lẻ trang phục thể thao trực tuyến.", tags: ["PHP", "WooCommerce", "Sports"] },
  { year: 2025, category: "Agriculture & Export", project_name: "The Avo Tree", domain: "theavotree.co.nz", description: "Website nông nghiệp và xuất khẩu bơ tại thị trường New Zealand.", tags: ["PHP", "International", "Agriculture"] },
  { year: 2025, category: "Hospitality", project_name: "OCH", domain: "och.vn", description: "Website quản lý khách sạn và dịch vụ lưu trú.", tags: ["PHP", "WordPress", "Hotel"] },
  { year: 2025, category: "Retail & FMCG", project_name: "Thế Giới Sữa Est 2018", domain: "thegioisuaest2018.vn", description: "Website bán lẻ sữa và hàng tiêu dùng nhanh (FMCG).", tags: ["PHP", "WordPress", "FMCG"] },
  { year: 2025, category: "F&B", project_name: "Nam Sài Gòn Food", domain: "namsaigonfood.vn", description: "Website phân phối thực phẩm và đồ ăn khu vực Nam Sài Gòn.", tags: ["PHP", "WordPress", "F&B"] },
  { year: 2025, category: "Investment & Trading", project_name: "Bảo Tín JSC", domain: "baotinjsc.com", description: "Website doanh nghiệp đầu tư và thương mại Bảo Tín.", tags: ["PHP", "WordPress", "Investment"] },
  { year: 2025, category: "Corporate & Local Services", project_name: "HD Long An", domain: "hdlongan.vn", description: "Website doanh nghiệp / dịch vụ địa phương tại Long An.", tags: ["PHP", "WordPress", "Corporate"] },
  { year: 2025, category: "Blog & Beauty", project_name: "Blog Làm Đẹp", domain: "bloglamdep.io.vn", description: "Blog cá nhân chia sẻ mẹo và kiến thức làm đẹp.", tags: ["PHP", "WordPress", "Blog"] },
  { year: 2025, category: "Real Estate", project_name: "Cao Nguyên Land", domain: "caonguyenland.com.vn", description: "Website bất động sản Cao Nguyên Land.", tags: ["PHP", "WordPress", "Real Estate"] },
  { year: 2025, category: "Industrial Equipment", project_name: "Chiller", domain: "chiller.com.vn", description: "Website cung cấp thiết bị làm lạnh công nghiệp.", tags: ["PHP", "WordPress", "Industrial"] },
  { year: 2025, category: "Mining & Resources", project_name: "Khoáng Sản Ninh Thuận", domain: "khoangsanninhthuan.com", description: "Website doanh nghiệp khai thác và kinh doanh khoáng sản tại Ninh Thuận.", tags: ["PHP", "WordPress", "Mining"] },
  { year: 2025, category: "Lifestyle & Retail", project_name: "AAA Corner", domain: "aaa-corner.com", description: "Website bán lẻ phong cách sống và sản phẩm lifestyle.", tags: ["PHP", "WordPress", "Lifestyle"] },

  // 2024
  { year: 2024, category: "E-commerce", project_name: "FB Shop", domain: "fbshop.vn", description: "Nền tảng bán lẻ dụng cụ và trang phục thể thao trực tuyến.", tags: ["PHP", "WooCommerce", "Sports"] },
  { year: 2024, category: "E-commerce", project_name: "Sy Bazzar Vietnam", domain: "sybazzarvietnam.com", description: "Sàn thương mại điện tử đa danh mục sản phẩm.", tags: ["PHP", "WooCommerce", "Marketplace"] },
  { year: 2024, category: "E-commerce", project_name: "Nem Ki Ma", domain: "nemkima.com", description: "Website bán lẻ thực phẩm – đặc sản nem chả Việt Nam.", tags: ["PHP", "WordPress", "Food Retail"] },
  { year: 2024, category: "E-commerce", project_name: "IND Store", domain: "indstore.vn", description: "Cửa hàng thời trang streetwear trực tuyến.", tags: ["PHP", "WooCommerce", "Streetwear"] },
  { year: 2024, category: "E-commerce", project_name: "Đẹp Như Ý", domain: "depnhuy.com", description: "Cửa hàng mỹ phẩm và sản phẩm làm đẹp trực tuyến.", tags: ["PHP", "WooCommerce", "Cosmetics"] },
  { year: 2024, category: "E-commerce", project_name: "Doris Food", domain: "dorisfood.vn", description: "Website phân phối và bán lẻ thực phẩm.", tags: ["PHP", "WooCommerce", "Food"] },
  { year: 2024, category: "Business Services", project_name: "BizWave", domain: "bizwave.com", description: "Nền tảng cung cấp giải pháp và dịch vụ số.", tags: ["PHP", "WordPress", "Digital Solutions"] },
  { year: 2024, category: "Business Services", project_name: "TTK Global Ventures", domain: "ttkglobalventures.com", description: "Website tư vấn đầu tư và kinh doanh quốc tế.", tags: ["PHP", "WordPress", "Consulting"] },
  { year: 2024, category: "Education", project_name: "Make Steam", domain: "makesteam.com.vn", description: "Website dịch vụ đào tạo và giáo dục STEM.", tags: ["PHP", "WordPress", "STEM"] },
  { year: 2024, category: "Business Services", project_name: "KFLV", domain: "kflv.vn", description: "Website dịch vụ doanh nghiệp.", tags: ["PHP", "WordPress", "Corporate"] },
  { year: 2024, category: "Real Estate & Hospitality", project_name: "The Ri Biz Suites", domain: "theribizsuites.com", description: "Website căn hộ dịch vụ và khách sạn.", tags: ["PHP", "WordPress", "Serviced Apartments"] },
  { year: 2024, category: "Real Estate & Hospitality", project_name: "Silk Sense Resort", domain: "silksenseresort.com", description: "Website resort và spa cao cấp.", tags: ["PHP", "WordPress", "Luxury Resort"] },
  { year: 2024, category: "Interior & Decoration", project_name: "TH Decor", domain: "thdecor.vn", description: "Website thiết kế và trang trí nội thất.", tags: ["PHP", "WordPress", "Interior Design"] },
  { year: 2024, category: "Agriculture & Organic Food", project_name: "BMI Farms", domain: "bmifarms.com", description: "Website nông trại hữu cơ và cung cấp thực phẩm sạch.", tags: ["PHP", "WordPress", "Organic"] },
  { year: 2024, category: "Agriculture & Organic Food", project_name: "Morning Fruit", domain: "morningfruit.com.vn", description: "Website phân phối trái cây tươi.", tags: ["PHP", "WordPress", "Fresh Produce"] },
  { year: 2024, category: "Education", project_name: "UniSchool", domain: "unischool.edu.vn", description: "Website trường quốc tế UniSchool.", tags: ["PHP", "WordPress", "International School"] },
  { year: 2024, category: "Education", project_name: "FPT BTEC College", domain: "btec.fpt.edu.vn", description: "Website Cao đẳng FPT BTEC – giáo dục quốc tế.", tags: ["PHP", "WordPress", "Higher Education"] },
  { year: 2024, category: "Education", project_name: "Rubik Văn Chương", domain: "rubikvanchuong.edu.vn", description: "Website giáo dục mầm non Rubik Văn Chương.", tags: ["PHP", "WordPress", "Preschool"] },
  { year: 2024, category: "Education", project_name: "MC IELTS", domain: "mcielts.com", description: "Website trung tâm đào tạo tiếng Anh và luyện thi IELTS.", tags: ["PHP", "WordPress", "IELTS"] },
  { year: 2024, category: "Education", project_name: "Du Học NewSun", domain: "duhocnewsun.com", description: "Website tư vấn du học.", tags: ["PHP", "WordPress", "Study Abroad"] },
  { year: 2024, category: "Technology & AI Research", project_name: "VinAI", domain: "vinai.io", description: "Website nghiên cứu trí tuệ nhân tạo VinAI – Vingroup.", tags: ["PHP", "AI Research", "Vingroup"] },
  { year: 2024, category: "Technology", project_name: "N-Tek", domain: "n-tek.vn", description: "Website giải pháp công nghệ thông tin.", tags: ["PHP", "WordPress", "IT Solutions"] },
  { year: 2024, category: "Technology", project_name: "ScanTech VN", domain: "scantechvn.com", description: "Website công nghệ quét 3D.", tags: ["PHP", "WordPress", "3D Scanning"] },
  { year: 2024, category: "Technology & AI Research", project_name: "The Grid AI", domain: "thegrid.ai", description: "Nền tảng giải pháp AI.", tags: ["PHP", "AI Platform", "SaaS"] },
  { year: 2024, category: "Fashion & Lifestyle", project_name: "Rechic Brand", domain: "rechicbrand.com", description: "Website thương hiệu thời trang bán lẻ.", tags: ["PHP", "WooCommerce", "Fashion"] },
  { year: 2024, category: "Fashion & Lifestyle", project_name: "Vinagiày", domain: "vinagiay.vn", description: "Website thương hiệu giày dép truyền thống Việt Nam.", tags: ["PHP", "WordPress", "Heritage Brand"] },
  { year: 2024, category: "Fashion & Lifestyle", project_name: "L'Soul", domain: "lsoul.com", description: "Website thương hiệu thời trang thiết kế.", tags: ["PHP", "WordPress", "Designer Fashion"] },
  { year: 2024, category: "Fashion & Lifestyle", project_name: "JBagy", domain: "jbagy.me", description: "Website thương hiệu thời trang nam.", tags: ["PHP", "WordPress", "Menswear"] },
  { year: 2024, category: "Fashion & Lifestyle", project_name: "Great Hair", domain: "greathair.com.vn", description: "Website dịch vụ làm đẹp tóc.", tags: ["PHP", "WordPress", "Hair Salon"] },
  { year: 2024, category: "Fashion & Lifestyle", project_name: "Konomi", domain: "konomi.vn", description: "Website thương hiệu phong cách sống.", tags: ["PHP", "WordPress", "Lifestyle"] },
  { year: 2024, category: "Corporate & FMCG", project_name: "Acecook Vietnam", domain: "acecookvietnam.vn", description: "Website tập đoàn hàng tiêu dùng nhanh Acecook Việt Nam.", tags: ["PHP", "WordPress", "FMCG Giant"] },
  { year: 2024, category: "Corporate & Logistics", project_name: "ITL Logistics", domain: "itllogistics.vn", description: "Website tập đoàn logistics toàn cầu ITL.", tags: ["PHP", "WordPress", "Global Logistics"] },
  { year: 2024, category: "Corporate", project_name: "Nam Sao Group", domain: "namsaogroup.vn", description: "Website tập đoàn đa ngành Nam Sao.", tags: ["PHP", "WordPress", "Multi-industry"] },
  { year: 2024, category: "Health & Medical", project_name: "Nha Khoa Parkway", domain: "nhakhoaparkway.com", description: "Website chuỗi phòng khám nha khoa Parkway.", tags: ["PHP", "WordPress", "Healthcare"] },
  { year: 2024, category: "Health & Medical", project_name: "NextGen NIPT", domain: "nextgennipt.vn", description: "Website dịch vụ xét nghiệm gen và sàng lọc trước sinh.", tags: ["PHP", "WordPress", "Genetic Testing"] },
  { year: 2024, category: "Blog & Content", project_name: "Cafune", domain: "cafune.vn", description: "Nền tảng nội dung và phong cách sống.", tags: ["PHP", "WordPress", "Content Platform"] },
  { year: 2024, category: "Lifestyle", project_name: "Khu Vườn Molly", domain: "khuvuonmolly.com", description: "Website concept vườn và phong cách sống xanh.", tags: ["PHP", "WordPress", "Garden"] },
  { year: 2024, category: "Lifestyle", project_name: "Mẫu Phước Đường", domain: "mauphuocduong.com", description: "Website cá nhân / thương hiệu.", tags: ["PHP", "WordPress", "Personal"] },
  { year: 2024, category: "Landing Page", project_name: "The 350F", domain: "the350f.monamedia.net", description: "Landing page / trang demo.", tags: ["PHP", "WordPress", "Landing Page"] },
  { year: 2024, category: "Entertainment", project_name: "Wolfoo World", domain: "wolfooworld.com", description: "Nền tảng nội dung liên quan đến thú cưng / động vật.", tags: ["PHP", "WordPress", "Entertainment"] },
  { year: 2024, category: "F&B", project_name: "Blanchy's", domain: "blanchys.com", description: "Website thương hiệu nhà hàng / F&B.", tags: ["PHP", "WordPress", "Restaurant"] },

  // 2023
  { year: 2023, category: "Construction & Engineering", project_name: "Xây Dựng Nhật Tín", domain: "xaydungnhattin.com", description: "Website công ty xây dựng dân dụng.", tags: ["PHP", "WordPress", "Construction"] },
  { year: 2023, category: "Construction & Engineering", project_name: "Sắt Mỹ Thuật Minh Phúc", domain: "satmythuatminhphuc.com", description: "Website dịch vụ gia công sắt mỹ thuật.", tags: ["PHP", "WordPress", "Ironwork"] },
  { year: 2023, category: "Construction & Engineering", project_name: "Long Phát CNS", domain: "longphatcns.com", description: "Website công ty cơ khí và xây dựng.", tags: ["PHP", "WordPress", "Mechanical"] },
  { year: 2023, category: "Construction & Engineering", project_name: "Chiếu Sáng VN", domain: "chieusangvn.com.vn", description: "Website giải pháp chiếu sáng và thiết bị điện.", tags: ["PHP", "WordPress", "Lighting"] },
  { year: 2023, category: "Transport & Local Services", project_name: "Taxi Giá Rẻ Biên Hòa", domain: "taxigiarebienhoa.xyz", description: "Website dịch vụ vận chuyển taxi giá rẻ tại Biên Hòa.", tags: ["PHP", "WordPress", "Transport"] },
  { year: 2023, category: "Environmental Services", project_name: "Hút Hầm Cầu 24H", domain: "huthamcau24h.com.vn", description: "Website dịch vụ vệ sinh môi trường, hút hầm cầu.", tags: ["PHP", "WordPress", "Environmental"] },
  { year: 2023, category: "Supplies & Distribution", project_name: "Văn Phẩm Phạm 24H", domain: "vanphampham24h.com.vn", description: "Website cung cấp văn phòng phẩm.", tags: ["PHP", "WordPress", "Office Supplies"] },
  { year: 2023, category: "Supplies & Distribution", project_name: "VPP Nguyên Hiền", domain: "vppnguyenhien.vn", description: "Website cung cấp văn phòng phẩm Nguyên Hiền.", tags: ["PHP", "WordPress", "Stationery"] },
  { year: 2023, category: "Supplies & Distribution", project_name: "Bao Bì Thuận Thành", domain: "baobithuanthanh.com.vn", description: "Website sản xuất và phân phối bao bì.", tags: ["PHP", "WordPress", "Packaging"] },
  { year: 2023, category: "Supplies & Distribution", project_name: "Giấy Bao Bì", domain: "giaybaobi.com", description: "Website sản xuất giấy và bao bì.", tags: ["PHP", "WordPress", "Paper"] },
  { year: 2023, category: "Supplies & Distribution", project_name: "Tổng Kho Sơn AD", domain: "tongkhosonad.com", description: "Website phân phối sơn.", tags: ["PHP", "WordPress", "Paint"] },
  { year: 2023, category: "Supplies & Distribution", project_name: "Sơn Nam Quân", domain: "sonnamquan.com", description: "Website kinh doanh sơn và vật liệu phủ.", tags: ["PHP", "WordPress", "Coatings"] },
  { year: 2023, category: "Education", project_name: "VP Teach", domain: "vpteach.com.vn", description: "Website dịch vụ giáo dục và đào tạo.", tags: ["PHP", "WordPress", "Training"] },
  { year: 2023, category: "Legal Services", project_name: "Luật Mẫn Hải", domain: "luatmanhai.com.vn", description: "Website công ty luật và dịch vụ pháp lý.", tags: ["PHP", "WordPress", "Legal"] },
  { year: 2023, category: "HR & Labor Export", project_name: "Cơ Cơ Nguồn Nhân Lực Đức", domain: "coconguonnhanlucduc.com.vn", description: "Website dịch vụ xuất khẩu lao động sang Đức.", tags: ["PHP", "WordPress", "HR"] },
  { year: 2023, category: "Technology", project_name: "Hoàng Gia Computer", domain: "hoanggiacomputer.com", description: "Website bán lẻ máy tính và linh kiện phần cứng.", tags: ["PHP", "WordPress", "PC Hardware"] },
  { year: 2023, category: "Technology", project_name: "CIT Group", domain: "citgroup.vn", description: "Website giải pháp phần mềm.", tags: ["PHP", "WordPress", "Software"] },
  { year: 2023, category: "Furniture", project_name: "Finili", domain: "finili.com.vn", description: "Website bán lẻ nội thất.", tags: ["PHP", "WooCommerce", "Furniture"] },
  { year: 2023, category: "Pet Services", project_name: "Cá Koi Biên Hòa", domain: "cakoibienhoa.com.vn", description: "Website dịch vụ cá Koi tại Biên Hòa.", tags: ["PHP", "WordPress", "Pet"] },
  { year: 2023, category: "F&B", project_name: "No.1 Foods", domain: "no1foods.com", description: "Website phân phối thực phẩm.", tags: ["PHP", "WordPress", "Food Distribution"] },
];

export const projects: Project[] = rawProjects.map((p) => {
  const fc = mapFilterCategory(p.category);
  const theme = themes[fc];
  return {
    ...p,
    filterCategory: fc,
    gradient: theme.gradient,
    accent: theme.accent,
  };
});

export const projectStats = {
  total: projects.length,
  years: [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a),
  categories: [...new Set(projects.map((p) => p.filterCategory))],
};
