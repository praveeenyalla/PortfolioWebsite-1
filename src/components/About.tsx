import React from 'react';
import { Award, BookOpen, Target, Briefcase, Globe, Phone } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Experience",
      description: "3+ years of hands-on development experience across various technologies and industries."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Professional",
      description: "ExcelR Data Science certification and multiple technology certifications."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always staying updated with the latest technology trends and best practices."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Online Presence",
      description: "Maintaining a professional portfolio at yallanagapraveen.info showcasing my work."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate software developer with a strong foundation in modern web technologies 
            and a commitment to creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm YALLA.NAGAPRAVEEN, a dedicated software developer with a passion for creating 
                innovative digital solutions. My journey in technology began with curiosity and 
                has evolved into a career focused on building scalable, user-friendly applications.
              </p>
              <p>
                With expertise spanning front-end and back-end development, I specialize in 
                modern web technologies including React, Node.js, Python, and cloud platforms. 
                I believe in writing clean, maintainable code and following best practices 
                that ensure long-term success.
              </p>
              <p>
                Recently, I completed my Data Science certification from ExcelR, expanding my 
                expertise into machine learning, data analysis, and statistical modeling. This 
                combination of web development and data science skills allows me to build 
                intelligent, data-driven applications.
              </p>
              <p>
                You can explore my complete portfolio and latest projects at{' '}
                <a 
                  href="https://yallanagapraveen.info" 
                  className="text-blue-600 hover:text-blue-800 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  yallanagapraveen.info
                </a>
                , where I regularly update my work and share insights about technology.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-semibold text-gray-900 mb-2">Current Focus</h4>
              <p className="text-gray-700">
                Currently exploring advanced React patterns, data science applications, 
                and cloud-native development while seeking opportunities to contribute to 
                impactful projects. Available for new opportunities and collaborations.
              </p>
              <div className="mt-4 flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>Contact: +91 8328377820</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-blue-100 text-lg leading-relaxed max-w-4xl mx-auto mb-4">
              A results-driven software developer with proven experience in full-stack development, 
              data science, system architecture, and team collaboration. Committed to delivering 
              high-quality solutions that drive business growth and enhance user experiences.
            </p>
            <p className="text-blue-200 text-sm mb-6">
              Learn more about my work and connect with me at{' '}
              <span className="text-white font-medium">yallanagapraveen.info</span> | 
              LinkedIn: <a href="https://www.linkedin.com/in/yalla-nagapraveen-chowdhury-18a7b5351" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline">Yalla Nagapraveen Chowdhury</a> | 
              GitHub: <span className="text-white font-medium">@praveeenyalla</span> | 
              Email: <span className="text-white font-medium">nagapraveenyalla@gmail.com</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-500 px-4 py-2 rounded-full text-sm font-medium">
                Full-Stack Development
              </span>
              <span className="bg-blue-500 px-4 py-2 rounded-full text-sm font-medium">
                Data Science
              </span>
              <span className="bg-blue-500 px-4 py-2 rounded-full text-sm font-medium">
                Problem Solving
              </span>
              <span className="bg-blue-500 px-4 py-2 rounded-full text-sm font-medium">
                Team Leadership
              </span>
              <span className="bg-blue-500 px-4 py-2 rounded-full text-sm font-medium">
                Agile Methodology
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;