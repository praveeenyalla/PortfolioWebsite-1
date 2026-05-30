import React from 'react';
import { Award, BookOpen, Target, Globe, Phone, Download, Eye } from 'lucide-react';

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
      alert('Resume download encountered an issue. Please contact me directly at praveen.yalla2@gmail.com');
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
    <section id="about" className="py-16 sm:py-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">About Me</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Data Science & Machine Learning Engineer with hands-on experience in building and deploying data-driven applications. 
            Skilled in Python, machine learning, and backend development using FastAPI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">My Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 text-sm sm:text-base">
              <p>
                I am Yalla Nagapraveen, a results-driven Data Science & Machine Learning Engineer with hands-on experience in building and deploying data-driven applications in client-based environments. I hold a Bachelor of Technology in Computer Science Engineering from NRI Institute of Technology, Visadala.
              </p>
              <p>
                My professional experience includes working as a Machine Learning Engineer Intern at Sun-It Solutions, where I designed and deployed end-to-end machine learning solutions for predictive analytics, performed large-scale data preprocessing and feature engineering, and utilized libraries like Pandas, NumPy, Scikit-learn, and TensorFlow/PyTorch.
              </p>
              <p>
                Prior to that, as a Data Science & Machine Learning Engineer Intern at Social Prachar, I designed predictive ML systems, built REST APIs using FastAPI, and developed NLP chatbots handling real-time queries.
              </p>
              <p>
                I have a strong foundation in programming languages like Python, SQL, and JavaScript, and frameworks like FastAPI and Flask. I am passionate about data analysis, machine learning, and leveraging these technologies to solve real-world problems.
                I am Yalla Nagapraveen, a dedicated Data Science and Machine Learning Engineer. I graduated with a B.Tech in Computer Science Engineering from NRI Institute of Technology, where I developed a strong academic foundation in software engineering and data algorithms.
              </p>
              <p>
                During my tenure at Sun-It Solutions, I focused on designing end-to-end machine learning workflows, handling massive datasets, and optimizing model performance using industry-standard libraries like TensorFlow and Scikit-learn.
              </p>
              <p>
                At Social Prachar, I enhanced my skills in full-stack integration by building scalable REST APIs via FastAPI and deploying AI-driven NLP solutions that address real-world business challenges.
              </p>
              <p>
                With a deep proficiency in Python, SQL, and cloud-native architecture, I aim to create impactful, data-centric products that solve complex computational problems.
              </p>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-600 transition-colors duration-300">
              <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 transition-colors duration-300 text-sm sm:text-base">Current Status</h4>
              <p className="text-green-700 dark:text-green-400 transition-colors duration-300 text-sm sm:text-base">
                Available for Data Science, Machine Learning Engineer, and Backend Developer positions where I can apply my 
                expertise in predictive systems, machine learning pipelines, and FastAPI development to drive business growth.
              </p>
              <div className="mt-3 sm:mt-4 flex items-center text-green-600 dark:text-green-400 transition-colors duration-300 text-sm sm:text-base">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                <span>Contact: +91-8328377820</span>
              </div>
              <div className="mt-2 flex items-center text-green-600 dark:text-green-400 transition-colors duration-300 text-sm sm:text-base">
                <span>Email: praveen.yalla2@gmail.com</span>
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
                className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 neon-border"
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl p-6 sm:p-8 text-white transition-colors duration-300 neon-border">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 animate-neon-glow">Professional Summary</h3>
            <p className="text-blue-100 dark:text-blue-200 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mb-4 transition-colors duration-300">
              Results-driven Data Science & Machine Learning Engineer with hands-on experience in building and deploying
              data-driven applications in a full-time, client-based environment. Skilled in Python, machine learning, and backend
              development using FastAPI. Strong problem-solving abilities and passion for AI.
            </p>
            <p className="text-blue-200 dark:text-blue-300 text-xs sm:text-sm mb-4 sm:mb-6 transition-colors duration-300">
              LinkedIn: <a href="https://linkedin.com/in/praveenyalla73" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline">YALLA NAGAPRAVEEN</a> | 
              GitHub: <a href="https://github.com/praveeenyalla" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline">@praveeenyalla</a> | 
              Email: <span className="text-white font-medium">praveen.yalla2@gmail.com</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Data Science
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Machine Learning
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                FastAPI Development
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Data Analysis
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Exploratory Data Analysis
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Feature Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;