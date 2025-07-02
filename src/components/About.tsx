import React from 'react';
import { Award, BookOpen, Target, Briefcase, Globe, Phone } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Career Objective",
      description: "Seeking entry-level Data Analyst position to apply analytical skills and grow professionally."
    },
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Certified Professional",
      description: "ExcelR Data Science certification and multiple technology certifications."
    },
    {
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Continuous Learning",
      description: "Always staying updated with the latest technology trends and best practices."
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Online Presence",
      description: "Maintaining a professional portfolio at yallanagapraveen.info showcasing my work."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">About Me</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Fresh graduate with a strong foundation in data analysis and modern technologies, 
            ready to begin my career and contribute to data-driven decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">My Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 text-sm sm:text-base">
              <p>
                I'm YALLA.NAGAPRAVEEN, a fresh graduate with a passion for data analysis and 
                technology. My journey began with curiosity about how data can drive business 
                decisions and has evolved into a focused career path in data analytics.
              </p>
              <p>
                As a recent graduate with a strong foundation in computer science and data analysis, 
                I specialize in Python, SQL, data visualization, and statistical modeling. 
                I believe in turning raw data into actionable insights that drive business growth.
              </p>
              <p>
                Recently, I completed my Data Science certification from ExcelR, where I gained 
                hands-on experience with machine learning, statistical analysis, and data visualization 
                tools. This comprehensive training has equipped me with both theoretical knowledge 
                and practical skills needed in today's data-driven world.
              </p>
              <p>
                You can explore my complete portfolio and latest projects at{' '}
                <a 
                  href="https://yallanagapraveen.info" 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  yallanagapraveen.info
                </a>
                , where I regularly showcase my analytical projects and share insights about data science.
              </p>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-600 transition-colors duration-300">
              <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 transition-colors duration-300 text-sm sm:text-base">Current Status</h4>
              <p className="text-green-700 dark:text-green-400 transition-colors duration-300 text-sm sm:text-base">
                Actively seeking entry-level Data Analyst opportunities where I can apply my 
                analytical skills, contribute to data-driven insights, and grow professionally 
                in a collaborative environment. Available for immediate joining.
              </p>
              <div className="mt-3 sm:mt-4 flex items-center text-green-600 dark:text-green-400 transition-colors duration-300 text-sm sm:text-base">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                <span>Contact: +91 8328377820</span>
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
              A motivated fresh graduate with strong analytical skills and hands-on experience in data science, 
              statistical analysis, and visualization. Eager to begin my career as a Data Analyst and contribute 
              to data-driven decision making while continuously learning and growing in the field.
            </p>
            <p className="text-blue-200 dark:text-blue-300 text-xs sm:text-sm mb-4 sm:mb-6 transition-colors duration-300">
              Learn more about my work and connect with me at{' '}
              <span className="text-white font-medium">yallanagapraveen.info</span> | 
              LinkedIn: <a href="https://www.linkedin.com/in/yalla-nagapraveen-chowdhury-18a7b5351" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline">Yalla Nagapraveen Chowdhury</a> | 
              GitHub: <span className="text-white font-medium">@praveeenyalla</span> | 
              Email: <span className="text-white font-medium">nagapraveenyalla@gmail.com</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Data Analysis
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Statistical Modeling
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Data Visualization
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Problem Solving
              </span>
              <span className="bg-blue-500 dark:bg-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                Quick Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;