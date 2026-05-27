import type { Metadata } from "next";
import { Inter, Outfit, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trần Thiên Bảo | PHP & Fullstack Developer",
  description: "Trần Thiên Bảo (Jayden) - PHP & Fullstack Developer Portfolio. Kiến tạo giải pháp Web hiệu quả và tối ưu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#fdf9f3] text-[#2b2520]">{children}</body>
    </html>
  );
}
