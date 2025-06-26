import React from 'react';
import { Code, Database, Cloud, Smartphone, Wrench, Lightbulb, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-500",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      color: "bg-green-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Microservices", level: 70 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-purple-500",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 75 }
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: <Award className="w-6 h-6" />,
      color: "bg-indigo-500",
      skills: [
        { name: "Python for Data Science", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Data Analysis", level: 85 },
        { name: "Statistical Analysis", level: 75 },
        { name: "Data Visualization", level: 80 },
        { name: "Pandas & NumPy", level: 85 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-orange-500",
      skills: [
        { name: "React Native", level: 75 },
        { name: "Flutter", level: 65 },
        { name: "Progressive Web Apps", level: 80 },
        { name: "Mobile UI/UX", level: 75 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6" />,
      color: "bg-red-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "CI/CD", level: 75 },
        { name: "Webpack", level: 70 },
        { name: "Jest/Testing", level: 80 },
        { name: "Agile/Scrum", level: 85 }
      ]
    }
  ];

  const certifications = [
    {
      name: "Data Science Certification",
      issuer: "ExcelR",
      year: "2024",
      description: "Comprehensive data science program covering machine learning, statistics, and data analysis",
      downloadUrl: "/EXCELR-75413-Yalla Naga Praveen.pdf"
    },
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Cloud development and deployment expertise"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      description: "Advanced React development and best practices"
    },
    {
      name: "JavaScript ES6+ Certification",
      issuer: "FreeCodeCamp",
      year: "2022",
      description: "Modern JavaScript development techniques"
    }
  ];

  const handleDownloadCertification = (url: string) => {
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop() || 'certification.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            A comprehensive overview of my technical skills, tools, and expertise 
            gained through years of hands-on development experience and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 transition-colors duration-300">
                      <div
                        className={`h-2 rounded-full ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiency Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 mb-16 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">Technical Proficiency</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">3+</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 transition-colors duration-300">20+</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 transition-colors duration-300">25+</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2 transition-colors duration-300">100%</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{cert.name}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">{cert.issuer}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">{cert.year}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 transition-colors duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300">{cert.description}</p>
                {cert.downloadUrl && (
                  <button
                    onClick={() => handleDownloadCertification(cert.downloadUrl!)}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Download Certificate
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;