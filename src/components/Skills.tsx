import React from 'react';
import { Code, Cloud, Wrench, Award, Eye, Brain, BarChart3, Activity, Sparkles, Zap, Target } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-blue-700",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      skills: ["Python", "SQL", "JavaScript"]
    },
    {
      title: "Frameworks",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-pink-500 to-rose-700",
      borderColor: "border-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      skills: ["FastAPI", "Flask", "REST APIs"]
    },
    {
      title: "ML & AI",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-purple-700",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      skills: [
        "Supervised Learning",
        "Model Evaluation",
        "Feature Engineering",
        "Natural Language Processing (NLP)",
        "Deep Learning",
        "TensorFlow",
        "Keras"
      ]
    },
    {
      title: "Data Analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-700",
      borderColor: "border-cyan-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      skills: ["Pandas", "NumPy", "Matplotlib"]
    },
    {
      title: "Tools & Core Concepts",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-red-500 to-red-700",
      borderColor: "border-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      skills: ["Git", "GitHub", "DSA", "OOPs", "DBMS"]
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-orange-700",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      skills: ["Docker", "CI/CD", "AWS", "Google Cloud", "Google Cloud Platform"]
    }
  ];

  const certifications = [
    {
      name: "Data Science Certified Professional",
      issuer: "ExcelR",
      year: "2024",
      description: "Comprehensive training in statistical modeling, machine learning algorithms, and data science methodologies.",
      viewUrl: "/EXCELR-75413-Yalla Naga Praveen.pdf"
    },
    {
      name: "Claude Code in Action",
      issuer: "Anthropic",
      year: "2026",
      description: "Credential demonstrating proficiency in using Claude Code for agentic software development, command-line AI tools, and code automation.",
      viewUrl: "/praveen_anthropic_certificate.pdf"
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      year: "2025",
      description: "Deloitte virtual data analytics job simulation covering analysis and visualization.",
      viewUrl: "/DELOITTE.pdf"
    },
    {
      name: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      year: "2025",
      description: "GenAI Powered Data Analytics virtual job simulation.",
      viewUrl: "/forage_certificate.pdf"
    },
    {
      name: "Solutions Architecture Job Simulation",
      issuer: "Forage",
      year: "2025",
      description: "Solutions Architecture virtual job simulation.",
      viewUrl: "/aws.pdf"
    }
  ];

  const skillsMetrics = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      value: "60+",
      label: "Projects Delivered",
      description: "AI, Web Apps & Data Science",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: "25+",
      label: "Core Technologies",
      description: "Production-ready expertise",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: "5",
      label: "Professional Certifications",
      description: "Anthropic, AWS, Data Science & More",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      value: "Full-Stack",
      label: "Developer Profile",
      description: "Frontend to AI/ML",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/30"
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

        window.open(`mailto:praveen.yalla2@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }
      return;
    }

    try {
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

        window.open(`mailto:praveen.yalla2@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            A comprehensive toolkit of modern technologies and frameworks, proven through production-ready projects and real-world applications.
          </p>
        </div>

        {/* Skills Metrics Dashboard */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-16 shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center transition-colors duration-300">
            <Activity className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Professional Overview
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsMetrics.map((metric, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600 neon-border">
                <div className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center ${metric.color} mx-auto mb-4 transition-colors duration-300`}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center transition-colors duration-300">{metric.value}</div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 text-center transition-colors duration-300">{metric.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center transition-colors duration-300">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid with Tags */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 neon-border"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white mr-4 shadow-md`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`${category.bgColor} ${category.borderColor} border-2 px-4 py-2 rounded-full text-sm font-semibold text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform duration-200 cursor-default shadow-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 neon-border"
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
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2 w-full justify-center"
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
