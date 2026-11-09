import React from 'react';

import { Code2, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism rounded-[3rem] p-12 sm:p-20 border border-white/10 relative overflow-hidden text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4">
              NAGA PRAVEEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">YALLA</span>
            </h3>
            <p className="text-slate-400 max-w-xl mb-12">
              Merging advanced AI with elite engineering to craft the next generation
              of digital experiences. Let's redefine the impossible.
            </p>

            <div className="flex gap-4 mb-12">
              <button onClick={scrollToTop} className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <ArrowUp className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="pt-12 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} PRAVEEN YALLA. PROPELLED BY INNOVATION.
              </p>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <span>MADE WITH</span>
                <Heart className="w-4 h-4 text-cyan-500 fill-current" />
                <span>BY PRAVEEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;