import React from 'react';
import { Code2, Heart, ArrowUp, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#information', label: 'Information' },
    { href: '#data-science-news', label: 'Job Market' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">NAGA PRAVEEN YALLA</h3>
                <p className="text-blue-400 text-sm flex items-center">
                  <Globe className="w-3 h-3 mr-1" />
                  yallanagapraveen.info
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Passionate about creating innovative digital solutions and building 
              scalable applications with modern technologies.
            </p>
            <p className="text-gray-400 text-sm">
              Visit <span className="text-blue-400 font-medium">yallanagapraveen.info</span> for the latest updates and projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <span className="text-white font-medium">Website:</span><br />
                <a href="https://yallanagapraveen.info" className="text-blue-400 hover:text-blue-300 transition-colors">
                  yallanagapraveen.info
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Email:</span><br />
                <a href="mailto:nagapraveenyalla@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  nagapraveenyalla@gmail.com
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Phone:</span><br />
                <a href="tel:+918328377820" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +91 8328377820
                </a>
              </p>
              <p>
                <span className="text-white font-medium">LinkedIn:</span><br />
                <a href="https://www.linkedin.com/in/yalla-nagapraveen-chowdhury-18a7b5351" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Yalla Nagapraveen Chowdhury
                </a>
              </p>
              <p>
                <span className="text-white font-medium">GitHub:</span><br />
                <a href="https://github.com/praveeenyalla" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  @praveeenyalla
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Location:</span><br />
                Hyderabad, India
              </p>
              <p className="text-sm">
                <span className="text-green-400">●</span> Available for new opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} NAGA PRAVEEN YALLA. All rights reserved.</span>
              <span>|</span>
              <span className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                yallanagapraveen.info
              </span>
              <span>|</span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> and code
              </span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;