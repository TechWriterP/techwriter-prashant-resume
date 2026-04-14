import { Download, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            Principal Technical Writer & Documentation Architect
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Clear documentation for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">
              complex systems.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-light">
            I am <strong className="font-semibold text-slate-900">Prashant Annigeri</strong>, a documentation leader bridging the gap between engineering and users. With over 14 years of experience, I architect and build enterprise product guides, rich API documentation, and docs-as-code ecosystems.
          </p>
          
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <a href="#experience">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                View Experience <ArrowRight size={18} />
              </Button>
            </a>
            <a href="/Prashant_Annigeri_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <Download size={18} /> Download CV
              </Button>
            </a>
          </div>

          {/* Quick highlights */}
          <div className="mt-16 pt-8 border-t border-slate-200/60 w-full flex flex-wrap gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">14+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">Years Exp.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">DITA</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">Structured Content</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">API</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">Dev Docs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
