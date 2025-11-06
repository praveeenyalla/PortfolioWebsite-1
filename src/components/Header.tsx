import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
        showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
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

    </>
  );
};

export default Header;