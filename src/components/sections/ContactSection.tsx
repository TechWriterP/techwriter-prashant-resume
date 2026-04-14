import { MapPin, Phone, Mail, Download } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <SectionHeading title="Get In Touch" className="flex flex-col items-center" />
        
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Currently open to Senior Technical Writer and Documentation Architect roles. 
          Let&apos;s discuss how I can help streamline your technical content and docs-as-code strategy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href="mailto:your.email@example.com" className="flex flex-col items-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-900">Email</span>
            <span className="text-slate-500 text-sm mt-1">Contact me directly</span>
          </a>

          <a href="tel:+910000000000" className="flex flex-col items-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-900">Phone</span>
            <span className="text-slate-500 text-sm mt-1">+91 (placeholder)</span>
          </a>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-900">Location</span>
            <span className="text-slate-500 text-sm mt-1">Mumbai, India</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="/Prashant_Annigeri_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              <Download size={18} /> Download Full Resume
            </Button>
          </a>
          <a href="#linkedin" className="text-slate-600 hover:text-blue-600 transition-colors px-3 py-1 font-semibold text-sm">
            LinkedIn
          </a>
          <a href="#github" className="text-slate-600 hover:text-slate-900 transition-colors px-3 py-1 font-semibold text-sm">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
