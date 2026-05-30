import React, { useState } from 'react';
import { Brain, BarChart3, TrendingUp, Database, Cpu, Zap, BookOpen, Target, Users, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

const Information: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const domainPreferences = [
    {
      title: "Data Science",
      subtitle: "Inspecting, cleaning, and transforming data to extract strategic insights.",
      icon: <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      image: "/data_science_pref.png",
      color: "border-blue-500 hover:border-blue-600",
      accentBg: "bg-blue-50 dark:bg-blue-900/20",
      accentText: "text-blue-600 dark:text-blue-400",
      btnColor: "bg-blue-600 hover:bg-blue-700 text-white",
      whyPreferred: "I preferred Data Science because it represents the foundation of quantitative decision-making. Inspecting raw, messy datasets and transforming them into structured insights that reveal consumer behavior patterns or market trends is both challenging and incredibly rewarding. It bridges the gap between software engineering and computational math.",
      details: "My academic background in Computer Science combined with hands-on practice (such as my ExcelR Data Science certification and 60+ GitHub projects) solidified my capability in Pandas, NumPy, Matplotlib, and SQL. I prefer this domain because it rewards curiosity, statistics-driven hypotheses, and analytical storytelling, transforming numbers into actionable strategies."
    },
    {
      title: "AI Engineering",
      subtitle: "Building intelligent software, agentic workflows, and cognitive assistants.",
      icon: <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      image: "/ai_engineering_pref.png",
      color: "border-purple-500 hover:border-purple-600",
      accentBg: "bg-purple-50 dark:bg-purple-900/20",
      accentText: "text-purple-600 dark:text-purple-400",
      btnColor: "bg-purple-600 hover:bg-purple-700 text-white",
      whyPreferred: "I preferred AI Engineering because it shifts the focus from static model training to active application integration and building cognitive assistants. Designing AvaMind AI taught me how to construct intelligent agentic workflows, automate complex computational tasks, and connect large language models (LLMs) with scalable backend services.",
      details: "AI Engineering allows me to develop robust APIs using FastAPI and Flask and deploy them on cloud infrastructure like Google Cloud Platform (GCP) and AWS. I chose this field because it is the cutting-edge frontier of modern software, enabling the creation of systems that can reason, assist, and solve real-world problems in real-time."
    },
    {
      title: "Machine Learning Engineering",
      subtitle: "Designing, evaluating, and deploying high-performance model pipelines.",
      icon: <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      image: "/ml_engineering_pref.png",
      color: "border-orange-500 hover:border-orange-600",
      accentBg: "bg-orange-50 dark:bg-orange-900/20",
      accentText: "text-orange-600 dark:text-orange-400",
      btnColor: "bg-orange-600 hover:bg-orange-700 text-white",
      whyPreferred: "I preferred Machine Learning Engineering because it focuses on the engineering rigor behind AI. Throughout my internship at Sun-It Solutions, I designed and optimized end-to-end ML training pipelines, performed predictive analysis, and implemented model evaluation techniques. I prefer this domain because it deals with model efficiency, scalability, and performance in production environments.",
      details: "ML Engineering combines mathematics with software engineering principles. Working with frameworks like TensorFlow, Keras, and Scikit-learn, and using tools like Docker for containerized deployment, allows me to build robust, reproducible systems. It is the perfect discipline for turning theoretical algorithms into high-performance, live production systems."
    }
  ];

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
    <section id="information" className="py-20 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-md transition-colors duration-300">
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

        {/* Domain Preferences Section */}
        <div className="mb-24 animate-card-fade-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 animate-neon-glow">
              Why I Preferred These Domains
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
              A personal look at why I chose to build my skills and career around Data Science, AI Engineering, and Machine Learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {domainPreferences.map((pref, index) => {
              const isExpanded = !!expandedCards[index];
              return (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 ${pref.color} transition-all duration-500 flex flex-col`}
                >
                  {/* Image Header with Hover Zoom */}
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={pref.image}
                      alt={pref.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title & Icon */}
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2.5 rounded-lg ${pref.accentBg}`}>
                          {pref.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                          {pref.title}
                        </h4>
                      </div>

                      {/* Subtitle */}
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">
                        {pref.subtitle}
                      </p>

                      {/* Main Paragraph */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 transition-colors duration-300">
                        {pref.whyPreferred}
                      </p>

                      {/* Expandable Section */}
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                          isExpanded ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4 mt-2 transition-colors duration-300">
                          {pref.details}
                        </p>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleCard(index)}
                      className={`w-full py-2.5 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${pref.btnColor}`}
                    >
                      <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
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