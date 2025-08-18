import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm' 
        : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <Code2 className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight truncate">NAGA PRAVEEN YALLA</h1>
              <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium truncate">yallanagapraveen.info</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium hover:scale-105 transform text-sm xl:text-base"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? 
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" /> : 
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2 text-base"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;