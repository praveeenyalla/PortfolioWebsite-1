import React from 'react';
import { Calendar, MapPin, Briefcase, ChevronRight, BookOpen, Target, Award, Download, Eye } from 'lucide-react';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      title: "Machine Learning Engineer Intern (Client-Based)",
      company: "Sun-It Solutions",
      location: "Hyderabad, India",
      period: "November 2025 - March 2026",
      type: "Internship",
      description: "Designed, developed, and deployed end-to-end machine learning solutions for predictive analytics and decision-making.",
      achievements: [
        "Designed, developed, and deployed end-to-end machine learning solutions for predictive analytics and decision-making.",
        "Performed large-scale data preprocessing, feature engineering, and data cleaning to enhance model performance and reliability.",
        "Conducted Exploratory Data Analysis (EDA) to uncover patterns, trends, and actionable insights from complex datasets.",
        "Built and optimized machine learning models, achieving up to 72% improvement in prediction accuracy.",
        "Utilized Python libraries such as Pandas, NumPy, Scikit-learn, and TensorFlow/PyTorch for model development.",
        "Ensured API security, data integrity, and efficient request handling in production environments."
      ],
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "EDA", "Feature Engineering", "API Security"]
    },
    {
      title: "Data Science & Machine Learning Engineer Intern (Client-Based)",
      company: "Social Prachar",
      location: "Hyderabad, India",
      period: "June 2025 - November 2025",
      type: "Internship",
      description: "Designed and deployed predictive ML systems and built scalable REST APIs using FastAPI for ML integration.",
      achievements: [
        "Designed and deployed predictive ML systems.",
        "Performed data preprocessing on large datasets, improving model efficiency.",
        "Conducted EDA to extract insights from datasets.",
        "Built REST APIs using FastAPI for ML integration.",
        "Developed and deployed ML models improving prediction accuracy by 72%.",
        "Built scalable FastAPI-based ML APIs.",
        "Developed NLP chatbot handling real-time queries."
      ],
      technologies: ["Python", "Machine Learning", "FastAPI", "REST APIs", "NLP", "Chatbots", "EDA", "Data Preprocessing", "Model Evaluation"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "NRI Institute of Technology, Visadala",
      location: "Guntur, Andhra Pradesh, India",
      period: "June 2021 – April 2025",
      grade: "8.09 CGPA (74%)",
      description: "Specialized in Computer Science Engineering with a strong focus on core programming, algorithms, database management, and hands-on projects."
    },
    {
      degree: "Sri Chaitanya Junior College",
      institution: "Board of Intermediate, Vijayawada",
      location: "Vijayawada, Andhra Pradesh, India",
      period: "June 2019 – April 2021",
      grade: "8.5/10 CGPA (85%)",
      description: "Completed higher secondary education with major focus on Mathematics, Physics, and Chemistry."
    },
    {
      degree: "Sri Chaitanya School",
      institution: "Sattenapalle",
      location: "Sattenapalle, Andhra Pradesh, India",
      period: "June 2018 – April 2019",
      grade: "9/10 CGPA (90%)",
      description: "Completed secondary education with high academic standing."
    }
  ];

  const careerObjective = {
    title: "Career Objective",
    description: "Seeking Data Science, Machine Learning Engineer, or Backend Developer positions where I can apply my expertise in Python, predictive modeling, and building scalable APIs using FastAPI/Flask to solve complex client problems and drive innovation.",
    skills: [
      "Data Science & Analytics",
      "Machine Learning Engineering",
      "Backend Development (FastAPI/Flask)",
      "Natural Language Processing (NLP)",
      "Deep Learning (TensorFlow/PyTorch)",
      "API Design & Integration",
      "Cloud Computing (GCP/AWS)",
      "Exploratory Data Analysis (EDA)"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Professional Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Results-driven Data Science & Machine Learning Engineer with hands-on intern experience 
            in client-based environments, seeking roles where I can deploy predictive systems and scalable APIs.
          </p>
        </div>

        {/* Career Objective */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl p-8 text-white transition-colors duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">{careerObjective.title}</h3>
            </div>
            <p className="text-blue-100 dark:text-blue-200 text-lg leading-relaxed mb-6 transition-colors duration-300">
              {careerObjective.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {careerObjective.skills.map((skill, index) => (
                <div key={index} className="bg-white/10 px-4 py-2 rounded-lg text-center">
                  <span className="text-white font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center transition-colors duration-300">
            <Briefcase className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Experience & Learning Journey
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200 dark:bg-blue-800 z-0 transition-colors duration-300"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 relative transition-colors duration-300 ${
                      exp.type === 'Job Seeking' 
                        ? 'bg-green-600 dark:bg-green-500' 
                        : exp.type === 'Learning & Projects'
                        ? 'bg-blue-600 dark:bg-blue-500'
                        : 'bg-purple-600 dark:bg-purple-500'
                    }`}>
                      {exp.type === 'Job Seeking' ? (
                        <Target className="w-6 h-6 text-white" />
                      ) : exp.type === 'Learning & Projects' ? (
                        <Award className="w-6 h-6 text-white" />
                      ) : (
                        <BookOpen className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{exp.title}</h4>
                        <p className={`text-lg font-medium transition-colors duration-300 ${
                          exp.type === 'Job Seeking' 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-blue-600 dark:text-blue-400'
                        }`}>{exp.company}</p>
                      </div>
                      <div className="flex flex-col lg:items-end text-gray-600 dark:text-gray-400 mt-2 lg:mt-0 transition-colors duration-300">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {exp.type === 'Job Seeking' ? 'Key Qualifications:' : 'Key Achievements:'}
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 transition-colors duration-300">
                            <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Technologies & Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                              exp.type === 'Job Seeking'
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div className="mb-16 bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 border-l-4 border-green-500 transition-colors duration-300">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <h3 className="text-2xl font-semibold text-green-900 dark:text-green-300 transition-colors duration-300">Currently Available</h3>
          </div>
          <p className="text-green-800 dark:text-green-400 text-lg leading-relaxed mb-4 transition-colors duration-300">
            I am actively seeking Data Science, Machine Learning Engineer, and Backend Developer positions where I can apply my 
            expertise in predictive modeling, FastAPI/Flask development, NLP, and data preprocessing. Ready to contribute 
            impactful solutions in a client-based environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-green-900/30 p-4 rounded-lg transition-colors duration-300">
              <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">Availability</h4>
              <p className="text-green-700 dark:text-green-400 text-sm">Immediate</p>
            </div>
            <div className="bg-white dark:bg-green-900/30 p-4 rounded-lg transition-colors duration-300">
              <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">Work Preference</h4>
              <p className="text-green-700 dark:text-green-400 text-sm">Remote/Hybrid/On-site</p>
            </div>
            <div className="bg-white dark:bg-green-900/30 p-4 rounded-lg transition-colors duration-300">
              <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">Location</h4>
              <p className="text-green-700 dark:text-green-400 text-sm">Hyderabad, India</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleViewResume}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              <Eye className="w-5 h-5" />
              View My Resume
            </button>
            <button
              onClick={handleDownloadResume}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center transition-colors duration-300">
            <BookOpen className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Education
          </h3>
          
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{edu.degree}</h4>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">{edu.institution}</p>
                </div>
                <div className="flex flex-col lg:items-end text-gray-600 dark:text-gray-400 mt-2 lg:mt-0 transition-colors duration-300">
                  <div className="flex items-center mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Grade: {edu.grade}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;