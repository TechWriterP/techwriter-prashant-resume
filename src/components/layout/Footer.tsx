export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-100 tracking-tight">Prashant Annigeri</h3>
            <p className="text-sm mt-1.5 text-slate-500">Principal Technical Writer & Information Developer</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/Prashant_Annigeri_Resume.pdf" target="_blank" className="hover:text-white transition-colors border-l border-slate-700 pl-8">Download CV</a>
          </nav>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {currentYear} Prashant Annigeri. All rights reserved.</p>
          <a
            href="#home"
            className="text-slate-500 hover:text-white transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
