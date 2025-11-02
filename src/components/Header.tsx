import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIslandMode, setIsIslandMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsIslandMode(currentScrollY > 150);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#information', label: 'Information' },
    { href: '#data-science-news', label: 'Job Market' },
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Full Header - Expands at top */}
      <header className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
        isIslandMode ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${
        isScrolled
          ? 'bg-white/30 dark:bg-gray-900/30 shadow-2xl border-b border-white/30 dark:border-gray-700/40'
          : 'bg-white/20 dark:bg-gray-900/20 border-b border-white/20 dark:border-gray-700/20'
      } backdrop-blur-2xl backdrop-saturate-200`} style={{
        WebkitBackdropFilter: 'blur(40px) saturate(200%)',
        backdropFilter: 'blur(40px) saturate(200%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight drop-shadow-sm">NAGA PRAVEEN YALLA</h1>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium drop-shadow-sm">yallanagapraveen.info</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-semibold hover:scale-105 transform text-sm drop-shadow-sm"
                >
                  {item.label}
                </button>
              ))}
              <ThemeToggle />
            </nav>

            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ?
                  <X className="w-6 h-6 text-gray-900 dark:text-white" /> :
                  <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
                }
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden pb-4 border-t border-white/20 dark:border-gray-700/30 mt-4 pt-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-semibold py-2 text-base drop-shadow-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Dynamic Island - Collapses when scrolling */}
      {isIslandMode && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in duration-300">
          <div
            onClick={() => {
              setIsIslandMode(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 rounded-full shadow-2xl border border-blue-500/50 backdrop-blur-xl cursor-pointer hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-bold tracking-wide">Menu</span>
            </div>
            <ChevronDown className="w-4 h-4 text-white/70 group-hover:rotate-180 transition-transform" />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;