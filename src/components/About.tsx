import React from 'react';
import { Award, BookOpen, Target, Briefcase, Globe, Phone, Download, Eye } from 'lucide-react';

const About: React.FC = () => {
  const handleViewResume = () => {
    try {
      window.open('/Praveen_Resume.pdf', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Resume viewing failed:', error);
      alert('Resume viewing encountered an issue. Please try downloading instead or contact me directly.');
    }
  };

  const handleDownloadResume = () => {
    try {
      const link = document.createElement('a');
      link.href = '/Praveen_Resume.pdf';
      link.download = 'Praveen_Resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Resume download failed:', error);
      alert('Resume download encountered an issue. Please contact me directly at nagapraveenyalla@gmail.com');
    }
  };

  const achievements = [
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Career Objective",
      description: "Seeking AI Engineer and Machine Learning Engineer positions to develop cutting-edge AI solutions."
    },
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "AI Innovation",
      description: "Created AvaMind AI assistant and multiple intelligent automation solutions."
    },
    {
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Research & Development",
      description: "Passionate about AI research, innovation, and emerging technology exploration."
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Cloud & Scalability",
      description: "Expert in Google Cloud Platform and building scalable AI-powered applications."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">About Me</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            AI Engineer and Software Developer with expertise in Artificial Intelligence, Machine Learning, Cloud Computing, 
            and Custom Application Development. Passionate about creating intelligent solutions and innovative technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">My Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 text-sm sm:text-base">
              <p>
                I am Nagapraveen Yalla, an AI Engineer and Software Developer with expertise in Artificial Intelligence, 
                Cloud Computing, and Custom Application Development. I specialize in designing and building intelligent 
                solutions such as AI-powered assistants, automation workflows, and scalable cloud-based applications. 
                I am passionate about research, innovation, and leveraging cutting-edge technologies to solve real-world challenges.
              </p>
              <p>
                My expertise spans across multiple domains including AI development, machine learning engineering, 
                data science, and cloud computing. I have successfully created custom AI solutions like "AvaMind" AI 
                assistant with advanced features including voice interaction, sketch generation, and real-time responses 
                designed to provide human-like conversational experiences.
              </p>
              <p>
                I have developed sophisticated AI workflows using n8n to automate research, integrate APIs, and connect 
                multiple platforms including Telegram, Google AI Studio, and various cloud services. My experience includes 
                building and deploying scalable cloud-based applications on Google Cloud Platform, ensuring high availability 
                and reliability for enterprise-level solutions.
              </p>
              <p>
                I am recognized for my problem-solving abilities, innovative thinking, and client-focused solutions that 
                add measurable value to organizations. You can explore my complete portfolio and latest AI projects at{' '}
                <a 
                  href="https://yallanagapraveen.info" 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  yallanagapraveen.info
                </a>
                , where I regularly showcase my AI innovations, machine learning projects, and share insights about emerging technologies.
              </p>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-600 transition-colors duration-300">
              <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 transition-colors duration-300 text-sm sm:text-base">Current Status</h4>
              <p className="text-green-700 dark:text-green-400 transition-colors duration-300 text-sm sm:text-base">
                Available for AI Engineer, Machine Learning Engineer, Data Scientist, and AI Researcher positions where I can apply my 
                expertise in artificial intelligence, custom application development, and innovative problem-solving to drive 
                technological advancement and business growth. Ready for immediate opportunities.
              </p>
              <div className="mt-3 sm:mt-4 flex items-center text-green-600 dark:text-green-400 transition-colors duration-300 text-sm sm:text-base">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                <span>Contact: +91 8328377820</span>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleViewResume}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <Eye className="w-4 h-4" />
                  View Resume
                </button>
                <button
                  onClick={handleDownloadResume}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 transition-colors duration-300">
                  {achievement.icon}
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl p-6 sm:p-8 text-white transition-colors duration-300">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-blue-100 dark:text-blue-200 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mb-4 transition-colors duration-300">
              An innovative AI Engineer and Software Developer with proven expertise in Artificial Intelligence, Machine Learning, 
              and Cloud Computing. Specialized in creating intelligent solutions, custom AI assistants, and scalable applications. 
              Passionate about research, automation, and leveraging cutting-edge technologies to solve complex real-world challenges.
            </p>
            <p className="text-blue-200 dark:text-blue-300 text-xs sm:text-sm mb-4 sm:mb-6 transition-colors duration-300">
              Explore my AI innovations and connect with me at{' '}
              <span className="text-white font-medium">yallanagapraveen.info</span> | 
              LinkedIn: <a href="https://www.linkedin.com/in/yalla-nagapraveen-chowdhury-18a7b5351" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline">Yalla Nagapraveen Chowdhury</a> | 
              GitHub: <span className="text-white font-medium">@praveeenyalla</span> | 
              Email: <span className="text-white font-medium">nagapraveenyalla@gmail.com</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                AI Engineering
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Machine Learning
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                AI Research
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Cloud Computing
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Custom AI Solutions
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Automation Workflows
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Innovation & Research
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;