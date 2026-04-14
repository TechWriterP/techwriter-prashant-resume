import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prashant Annigeri | Principal Technical Writer | Documentation Architect",
  description: "Portfolio of Prashant Annigeri, a Principal Technical Writer and Documentation Architect with 14+ years of experience creating product, API, and developer documentation.",
  keywords: ["Principal Technical Writer", "Documentation Architect", "Information Developer", "API Technical Writer", "DITA Technical Writer"],
  authors: [{ name: "Prashant Annigeri" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased min-h-screen break-words bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
