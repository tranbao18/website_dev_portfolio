import type { Metadata } from "next";
import { Dancing_Script, Lexend } from "next/font/google";
import "./globals.css";

// Lexend is close to the reference's geometric sans and, unlike Outfit/Geist, ships a Vietnamese subset
const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin", "vietnamese"],
});

const script = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin", "vietnamese"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Trần Thiên Bảo | Full-stack Developer",
  description: "Trần Thiên Bảo (Jayden) - Full-stack Developer Portfolio. Kiến tạo giải pháp Web hiệu quả và tối ưu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${lexend.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink">{children}</body>
    </html>
  );
}
