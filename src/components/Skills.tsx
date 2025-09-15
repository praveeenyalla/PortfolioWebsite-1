import React from 'react';
import { Code, Database, Cloud, Smartphone, Wrench, Lightbulb, Award, Eye, Brain, BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-500",
      skills: [
        { name: "Python for AI/ML", level: 85 },
        { name: "TensorFlow & PyTorch", level: 80 },
        { name: "Natural Language Processing", level: 75 },
        { name: "Computer Vision", level: 80 },
        { name: "OpenAI API Integration", level: 85 },
        { name: "Deep Learning", level: 75 },
        { name: "Scikit-learn", level: 85 },
        { name: "Model Deployment", level: 70 }
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-indigo-500",
      skills: [
        { name: "Data Analysis & EDA", level: 90 },
        { name: "Statistical Analysis", level: 85 },
        { name: "Python (Pandas, NumPy)", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Excel & Advanced Analytics", level: 90 },
        { name: "SQL & Database Queries", level: 85 },
        { name: "Power BI & Tableau", level: 80 },
        { name: "Business Intelligence", level: 80 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-500",
      skills: [
        { name: "React & Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Responsive Design", level: 85 },
        { name: "Framer Motion", level: 75 },
        { name: "Material-UI", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      color: "bg-green-500",
      skills: [
        { name: "Node.js & Express.js", level: 85 },
        { name: "Python (Flask, FastAPI)", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "JWT Authentication", level: 85 },
        { name: "Socket.io", level: 70 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-orange-500",
      skills: [
        { name: "AWS Services", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Netlify Deployment", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "CI/CD Pipelines", level: 70 },
        { name: "AWS S3", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      color: "bg-red-500",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Jupyter Notebooks", level: 85 },
        { name: "Postman API Testing", level: 80 },
        { name: "Figma/Design Tools", level: 70 },
        { name: "Stripe Integration", level: 75 },
        { name: "OpenCV", level: 75 },
        { name: "NLTK & spaCy", level: 80 },
        { name: "Chart.js & Plotly", level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      name: "Data Science Certification",
      issuer: "ExcelR",
      year: "2024",
      description: "Comprehensive data science program covering machine learning, statistics, and data analysis with hands-on projects",
      viewUrl: "/EXCELR-75413-Yalla Naga Praveen.pdf"
    },
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Cloud development and deployment expertise with AWS services and best practices",
      viewUrl: "/aws.pdf"
    },
    {
      name: "Deloitte Advanced Participation Certificate",
      issuer: "Deloitte",
      year: "2023",
      description: "Advanced participation in Deloitte's professional development program, demonstrating expertise in consulting methodologies, business analysis, and strategic thinking",
      viewUrl: "/DELOITTE.pdf"
    },
    {
      name: "FORAGE Tata Data Visualization Certificate",
      issuer: "FORAGE - Tata Group",
      year: "2023",
      description: "Completed Tata Group's virtual experience program focusing on data visualization, business intelligence, and strategic data analysis using advanced analytics tools",
      viewUrl: "/forage_certificate.pdf"
    }
  ];

  // Project-based skill analysis data
  const projectSkillsAnalysis = [
    {
      category: "AI Projects",
      count: 4,
      percentage: 40,
      topSkills: ["Python", "TensorFlow", "OpenAI API", "NLP", "Computer Vision"],
      color: "bg-purple-500"
    },
    {
      category: "Web Applications",
      count: 4,
      percentage: 40,
      topSkills: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      color: "bg-blue-500"
    },
    {
      category: "Data Science",
      count: 2,
      percentage: 20,
      topSkills: ["Python", "Pandas", "Data Visualization", "Analytics", "SQL"],
      color: "bg-green-500"
    }
  ];

  const skillsMetrics = [
    {
      icon: <Code className="w-6 h-6" />,
      value: "25+",
      label: "Technologies Mastered",
      description: "Across AI, Web Dev, and Data Science"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      value: "10+",
      label: "AI/ML Projects",
      description: "Including NLP and Computer Vision"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "90%",
      label: "Project Success Rate",
      description: "Completed projects meeting requirements"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "4",
      label: "Professional Certifications",
      description: "Industry-recognized credentials"
    }
  ];

  const handleViewCertification = (url: string, certName: string) => {
    if (!url || url === '#') {
      const userConfirmed = confirm(
        `${certName} is not available for viewing. Would you like to request it via email?`
      );
      
      if (userConfirmed) {
        const subject = encodeURIComponent(`Certificate Request - ${certName}`);
        const body = encodeURIComponent(
          `Hi Praveen,\n\n` +
          `I visited your portfolio website and would like to request your ${certName}.\n\n` +
          `Please send me the certificate at your earliest convenience.\n\n` +
          `Thank you!\n\n` +
          `Best regards`
        );
        
        window.open(`mailto:nagapraveenyalla@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }
      return;
    }

    try {
      // Open certificate in new tab for viewing
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Certificate viewing failed:', error);
      
      const userConfirmed = confirm(
        `${certName} viewing encountered an issue. Would you like to request it via email instead?`
      );
      
      if (userConfirmed) {
        const subject = encodeURIComponent(`Certificate Request - ${certName}`);
        const body = encodeURIComponent(
          `Hi Praveen,\n\n` +
          `I visited your portfolio website and would like to request your ${certName}.\n\n` +
          `Please send me the certificate at your earliest convenience.\n\n` +
          `Thank you!\n\n` +
          `Best regards`
        );
        
        window.open(`mailto:nagapraveenyalla@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            A comprehensive overview of my technical skills gained through hands-on project experience in 
            AI/ML, web development, and data science. Each skill reflects real-world application and continuous learning.
          </p>
        </div>

        {/* Skills Metrics Dashboard */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-16 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center transition-colors duration-300">
            <Activity className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Skills Analytics Dashboard
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
            {skillsMetrics.map((metric, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4 transition-colors duration-300">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{metric.value}</div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">{metric.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">{metric.description}</div>
              </div>
            ))}
          </div>

          {/* Project Skills Analysis */}
          <div className="bg-white dark:bg-gray-700 rounded-xl p-6 transition-colors duration-300">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
              <PieChart className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
              Project-Based Skills Distribution
            </h4>
            <div className="space-y-4">
              {projectSkillsAnalysis.map((analysis, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <div className={`w-4 h-4 ${analysis.color} rounded-full mr-3`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
                          {analysis.category} ({analysis.count} projects)
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                          {analysis.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2 transition-colors duration-300">
                        <div
                          className={`h-2 rounded-full ${analysis.color} transition-all duration-1000`}
                          style={{ width: `${analysis.percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {analysis.topSkills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded transition-colors duration-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">Technical Proficiency Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 transition-colors duration-300">AI/ML</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">4+ Projects</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">NLP, Computer Vision, Predictive Analytics</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">Web Dev</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">6+ Applications</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">React, TypeScript, Full-Stack</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 transition-colors duration-300">Data Science</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Analytics Expert</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">Python, SQL, Visualization</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2 transition-colors duration-300">Cloud</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">AWS Certified</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">Deployment, Scaling</div>
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
                <button
                  onClick={() => handleViewCertification(cert.viewUrl || '', cert.name)}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  {cert.viewUrl && cert.viewUrl !== '#' ? 'View Certificate' : 'Request Certificate'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;