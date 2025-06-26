import React from 'react';
import { Download, Mail, Linkedin, Github, MapPin, Phone, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadResume = async () => {
    // List of possible resume file paths to try
    const resumePaths = [
      '/Yalla_Naga_Praveen_Resume.pdf',
      '/Praveen _Resume.docx',
      '/public/Yalla_Naga_Praveen_Resume.pdf',
      '/public/Praveen _Resume.docx'
    ];

    let downloadSuccessful = false;

    for (const path of resumePaths) {
      try {
        const response = await fetch(path);
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'Yalla_Naga_Praveen_Resume' + (path.endsWith('.docx') ? '.docx' : '.pdf');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          downloadSuccessful = true;
          break;
        }
      } catch (error) {
        console.log(`Failed to download from ${path}:`, error);
        continue;
      }
    }

    if (!downloadSuccessful) {
      // If all downloads fail, show an alert and provide alternative
      alert('Resume download is temporarily unavailable. Please contact me directly at nagapraveenyalla@gmail.com for my resume.');
      
      // As a fallback, open email client
      const subject = encodeURIComponent('Request for Resume - YALLA.NAGAPRAVEEN');
      const body = encodeURIComponent('Hi Praveen,\n\nI would like to request your resume. Please send it to me.\n\nThank you!');
      window.location.href = `mailto:nagapraveenyalla@gmail.com?subject=${subject}&body=${body}`;
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
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image and Info */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <div className="relative inline-block mb-6">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center mx-auto lg:mx-0 shadow-xl border-4 border-white dark:border-gray-700 transition-colors duration-300">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">YN</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-700 transition-colors duration-300"></div>
            </div>
            
            <div className="flex flex-col items-center lg:items-start space-y-2 mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Globe className="w-4 h-4 mr-2" />
                <span className="font-medium text-blue-600 dark:text-blue-400">yallanagapraveen.info</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 8328377820</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-colors duration-300">
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                YALLA.NAGAPRAVEEN
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium transition-colors duration-300">
              Software Developer & Technology Enthusiast
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl transition-colors duration-300">
              Passionate about creating innovative solutions and building scalable applications. 
              With expertise in modern technologies and a focus on clean, efficient code, 
              I bring ideas to life through thoughtful development and user-centered design.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-blue-600 transition-colors duration-300">
                <h3 className="font-semibold text-gray-900 dark:text-white">Experience</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">3+ Years Development</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-green-600 transition-colors duration-300">
                <h3 className="font-semibold text-gray-900 dark:text-white">Projects</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">15+ Completed</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-purple-600 transition-colors duration-300">
                <h3 className="font-semibold text-gray-900 dark:text-white">Certified</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">ExcelR Data Science</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <button
                onClick={handleContactClick}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </button>
              <button
                onClick={handleVisitWebsite}
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105"
              >
                <Globe className="w-5 h-5" />
                Visit Website
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/yalla-nagapraveen-chowdhury-18a7b5351"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/praveeenyalla"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:nagapraveenyalla@gmail.com"
                className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;