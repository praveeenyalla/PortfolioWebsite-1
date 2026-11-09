import React, { useState, useEffect } from 'react';
import { Terminal, X, Menu, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glassmorphism' : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Terminal className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div>
              <span className="text-2xl font-black text-white tracking-tighter block leading-none">
                PRAVEEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">YALLA</span>
              </span>
              <span className="text-[10px] font-bold text-cyan-500 tracking-[0.3em] uppercase opacity-80">AI Architect</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-all text-sm font-medium hover:bg-white/5 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
              </motion.button>
            ))}
            <div className="pl-4 ml-4 border-l border-white/10">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-300 hover:text-white glassmorphism rounded-lg border border-white/10"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 glassmorphism overflow-hidden bg-[#000510]/95"
          >
            <div className="px-4 py-8 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-4 w-full p-4 rounded-2xl bg-white/5 text-slate-300 hover:text-white hover:bg-cyan-500/10 transition-all group"
                >
                  <span className="text-lg font-bold">{item.label}</span>
                  <div className="flex-1 h-px bg-white/5 group-hover:bg-cyan-500/20"></div>
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-cyan-500" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;