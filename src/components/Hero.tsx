import React from 'react';
import { Download, Mail, Linkedin, Github, MapPin, Phone, Globe, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    try {
      // Create a direct download link for the resume
      const link = document.createElement('a');
      link.href = '/Praveen_Resume.pdf';
      link.download = 'Praveen_Resume.pdf';
      link.style.display = 'none';
      
      // Add to DOM temporarily
      document.body.appendChild(link);
      
      // Trigger download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      
      // Show success message
      setTimeout(() => {
        console.log('Resume download initiated');
      }, 100);
      
    } catch (error) {
      console.error('Resume download failed:', error);
      
      // Fallback: Show user-friendly message with email option
      const userConfirmed = confirm(
        'Resume download encountered an issue. Would you like to request it via email instead?'
      );
      
      if (userConfirmed) {
        const subject = encodeURIComponent('Resume Request - NAGA PRAVEEN YALLA');
        const body = encodeURIComponent(
          'Hi Praveen,\n\n' +
          'I visited your portfolio website and would like to request your resume.\n\n' +
          'Please send me your latest resume at your earliest convenience.\n\n' +
          'Thank you!\n\n' +
          'Best regards'
        );
        
        window.open(`mailto:nagapraveenyalla@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }
    }
  };

  const handleViewResume = () => {
    try {
      // Open resume in new tab for viewing
      window.open('/Praveen_Resume.pdf', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Resume viewing failed:', error);
      
      const userConfirmed = confirm(
        'Resume viewing encountered an issue. Would you like to request it via email instead?'
      );
      
      if (userConfirmed) {
        const subject = encodeURIComponent('Resume Request - NAGA PRAVEEN YALLA');
        const body = encodeURIComponent(
          'Hi Praveen,\n\n' +
          'I visited your portfolio website and would like to request your resume.\n\n' +
          'Please send me your latest resume at your earliest convenience.\n\n' +
          'Thank you!\n\n' +
          'Best regards'
        );
        
        window.open(`mailto:nagapraveenyalla@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }
    }
  };
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVisitWebsite = () => {
    window.open('https://yallanagapraveen.info', '_blank');
  };

  return (
    <section id="home" className="pt-20 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Image and Info */}
          <div className="w-full lg:w-1/3 text-center lg:text-left order-1 lg:order-1">
            <div className="relative inline-block mb-6">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center mx-auto lg:mx-0 shadow-xl border-4 border-white dark:border-gray-700 transition-colors duration-300">
                <div className="w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">NPY</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-green-500 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 border-white dark:border-gray-700 transition-colors duration-300"></div>
            </div>
            
            <div className="flex flex-col items-center lg:items-start space-y-2 mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="font-medium text-blue-600 dark:text-blue-400 break-all">yallanagapraveen.info</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+91 8328377820</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>Seeking opportunities</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left order-2 lg:order-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-colors duration-300">
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 block sm:inline">
                NAGA PRAVEEN YALLA
              </span>
            </h1>
            
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 dark:text-gray-300 mb-4 lg:mb-6 font-medium transition-colors duration-300">
              AI Engineer & Software Developer | Data Scientist | AI Researcher
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-300">
              AI Engineer and Software Developer with expertise in Artificial Intelligence, Machine Learning, and Cloud Computing. 
              Specializing in designing intelligent solutions, AI-powered assistants, automation workflows, and scalable applications. 
              Passionate about research, innovation, and leveraging cutting-edge technologies to solve real-world challenges.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 lg:mb-8">
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md border-l-4 border-green-600 transition-colors duration-300">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">AI Engineer</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Custom AI Solutions</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md border-l-4 border-blue-600 transition-colors duration-300">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">AI Projects</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">AvaMind AI & More</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md border-l-4 border-purple-600 transition-colors duration-300">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Cloud Expert</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Google Cloud & AWS</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 lg:mb-8">
              <button
                onClick={handleViewResume}
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                View Resume
              </button>
              <button
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Resume
              </button>
              <button
                onClick={handleContactClick}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white px-6 sm:px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Hire Me
              </button>
              <button
                onClick={handleVisitWebsite}
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-white px-6 sm:px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                Visit Website
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/yalla-nagapraveen-chowdhury-18a7b5351"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://github.com/praveeenyalla"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:nagapraveenyalla@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;