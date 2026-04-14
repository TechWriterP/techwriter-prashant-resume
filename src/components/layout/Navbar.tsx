"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { cn } from "../ui/Button";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-slate-200/50 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          PA<span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-px bg-slate-300"></div>
          <a
            href="/Prashant_Annigeri_Resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Download size={16} /> CV
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-slate-900 p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 py-2 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Prashant_Annigeri_Resume.pdf"
            target="_blank"
            className="text-base font-medium text-blue-600 py-2 flex items-center gap-2"
          >
            <Download size={18} /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}
