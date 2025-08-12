import React from 'react';
import { useState, useEffect } from 'react';
import { Brain, BarChart3, TrendingUp, Database, Cpu, Zap, BookOpen, Target, Users, Lightbulb } from 'lucide-react';

const Information: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const informationSection = document.getElementById('information');
      
      if (informationSection) {
        const rect = informationSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          // Show when scrolling up, hide when scrolling down
          if (currentScrollY < lastScrollY) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY) {
            setIsVisible(false);
          }
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const dataFields = [
    {
      title: "Data Science",
      icon: <Brain className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
      keyPoints: [
        "Statistical analysis and hypothesis testing",
        "Predictive modeling and forecasting",
        "Data mining and pattern recognition",
        "Machine learning algorithm implementation",
        "Data visualization and storytelling"
      ],
      applications: [
        "Business Intelligence & Analytics",
        "Customer Behavior Analysis",
        "Risk Assessment & Management",
        "Fraud Detection Systems",
        "Recommendation Engines"
      ],
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Data Analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The process of inspecting, cleansing, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making.",
      keyPoints: [
        "Exploratory Data Analysis (EDA)",
        "Data cleaning and preprocessing",
        "Statistical analysis and reporting",
        "Dashboard creation and visualization",
        "Business metrics and KPI tracking"
      ],
      applications: [
        "Sales Performance Analysis",
        "Market Research & Insights",
        "Financial Reporting & Analysis",
        "Operational Efficiency Studies",
        "A/B Testing & Experimentation"
      ],
      color: "from-green-600 to-green-800"
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every scenario.",
      keyPoints: [
        "Supervised learning algorithms",
        "Unsupervised learning techniques",
        "Deep learning and neural networks",
        "Model training and validation",
        "Feature engineering and selection"
      ],
      applications: [
        "Image & Speech Recognition",
        "Natural Language Processing",
        "Autonomous Systems",
        "Predictive Maintenance",
        "Personalization Algorithms"
      ],
      color: "from-purple-600 to-purple-800"
    }
  ];

  const industryStats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "2.5 Quintillion",
      label: "Bytes of data created daily",
      description: "The world generates massive amounts of data every day"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "11.5 Million",
      label: "Data science jobs by 2026",
      description: "Projected job growth in data-related fields"
    },
    {
      icon: <Database className="w-6 h-6" />,
      value: "90%",
      label: "Of world's data created in last 2 years",
      description: "Exponential growth in data generation"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: "$126K",
      label: "Average data scientist salary",
      description: "Median annual salary for data scientists"
    }
  ];

  const learningPath = [
    {
      phase: "Foundation",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["Statistics & Mathematics", "Python/R Programming", "SQL & Databases", "Excel & Spreadsheets"],
      color: "bg-blue-500"
    },
    {
      phase: "Intermediate",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Data Visualization", "Machine Learning Basics", "Data Cleaning", "Statistical Analysis"],
      color: "bg-green-500"
    },
    {
      phase: "Advanced",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Deep Learning", "Big Data Technologies", "MLOps", "Advanced Analytics"],
      color: "bg-purple-500"
    },
    {
      phase: "Specialization",
      icon: <Target className="w-6 h-6" />,
      skills: ["Domain Expertise", "Leadership", "Business Strategy", "Research & Innovation"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section 
      id="information" 
      className={`py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Data Science Information Hub
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Explore the fascinating world of data science, data analysis, and machine learning. 
            Understand the key concepts, applications, and career opportunities in these rapidly growing fields.
          </p>
        </div>

        {/* Main Data Fields */}
        <div className="space-y-16 mb-20">
          {dataFields.map((field, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${field.color} text-white`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      {field.icon}
                    </div>
                    <h3 className="text-3xl font-bold">{field.title}</h3>
                  </div>
                  
                  <p className="text-lg leading-relaxed mb-8 text-white/90">
                    {field.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        Key Concepts
                      </h4>
                      <ul className="space-y-2">
                        {field.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-white/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-white/90">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        Applications
                      </h4>
                      <ul className="space-y-2">
                        {field.applications.map((app, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-white/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-white/90">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <div className="relative">
                    <img
                      src={field.image}
                      alt={field.title}
                      className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Statistics */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-colors duration-300">
            Industry Insights & Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryStats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4 transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-colors duration-300">
            Data Science Learning Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPath.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < learningPath.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-6 h-0.5 bg-gray-300 dark:bg-gray-600 z-0"></div>
                )}
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative z-10 hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 ${phase.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                    {phase.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                    {phase.phase}
                  </h4>
                  <ul className="space-y-2">
                    {phase.skills.map((skill, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 text-white text-center transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-4">Ready to Dive into Data Science?</h3>
          <p className="text-lg text-blue-100 dark:text-blue-200 mb-6 max-w-3xl mx-auto transition-colors duration-300">
            As a fresh graduate with hands-on experience in data science, data analysis, and machine learning, 
            I'm excited to apply these concepts to solve real-world problems and drive business insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              View My Projects
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;