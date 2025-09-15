import React, { useState } from 'react';
import { TrendingUp, Briefcase, DollarSign, MapPin, Calendar, ExternalLink, Users, BarChart3, Brain, Target, Clock, Star, Building, Globe } from 'lucide-react';

const DataScienceNews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trends' | 'jobs' | 'salaries' | 'skills'>('trends');

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const marketTrends = [
    {
      title: "AI and Machine Learning Integration Surge",
      category: "Market Trend",
      impact: "High",
      description: "Companies are increasingly integrating AI and ML into their core business processes, creating unprecedented demand for data scientists and ML engineers.",
      stats: "67% increase in AI-related job postings",
      timeframe: "Last 6 months",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Remote Data Science Opportunities Expand",
      category: "Work Culture",
      impact: "Medium",
      description: "The shift to remote work has opened global opportunities for data professionals, with companies hiring talent regardless of location.",
      stats: "45% of data science roles now remote-friendly",
      timeframe: "2024 trend",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Generative AI Skills in High Demand",
      category: "Technology",
      impact: "High",
      description: "Expertise in generative AI, LLMs, and prompt engineering has become a key differentiator for data science professionals.",
      stats: "300% increase in GenAI skill requirements",
      timeframe: "Past year",
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "Data Ethics and Governance Focus",
      category: "Compliance",
      impact: "Medium",
      description: "Organizations are prioritizing ethical AI and data governance, creating new roles for data ethics specialists.",
      stats: "25% growth in ethics-focused positions",
      timeframe: "2024",
      icon: <Target className="w-5 h-5" />
    }
  ];

  const jobOpportunities = [
    {
      title: "Entry-Level Data Scientist",
      company: "Tech Startups & Mid-size Companies",
      location: "Remote/Hybrid",
      salary: "₹6-12 LPA",
      requirements: ["Python/R", "SQL", "Statistics", "Machine Learning Basics"],
      growth: "+35%",
      description: "Perfect for fresh graduates with strong analytical skills and project experience."
    },
    {
      title: "Data Analyst",
      company: "Various Industries",
      location: "Multiple Cities",
      salary: "₹4-8 LPA",
      requirements: ["Excel", "SQL", "Power BI/Tableau", "Statistical Analysis"],
      growth: "+28%",
      description: "High demand across healthcare, finance, e-commerce, and consulting sectors."
    },
    {
      title: "Machine Learning Engineer",
      company: "Product Companies",
      location: "Bangalore/Hyderabad/Remote",
      salary: "₹8-18 LPA",
      requirements: ["Python", "TensorFlow/PyTorch", "MLOps", "Cloud Platforms"],
      growth: "+42%",
      description: "Focus on deploying and scaling ML models in production environments."
    },
    {
      title: "Business Intelligence Analyst",
      company: "Enterprises & Consulting",
      location: "Major Cities",
      salary: "₹5-10 LPA",
      requirements: ["SQL", "Power BI", "Excel", "Business Acumen"],
      growth: "+22%",
      description: "Bridge between technical analysis and business decision-making."
    }
  ];

  const salaryInsights = [
    {
      role: "Data Scientist",
      experience: "0-2 years",
      salary: "₹6-12 LPA",
      growth: "+15%",
      hotSkills: ["Python", "Machine Learning", "Statistics", "SQL"]
    },
    {
      role: "Data Analyst",
      experience: "0-2 years",
      salary: "₹4-8 LPA",
      growth: "+12%",
      hotSkills: ["Excel", "SQL", "Power BI", "Statistics"]
    },
    {
      role: "ML Engineer",
      experience: "0-2 years",
      salary: "₹8-15 LPA",
      growth: "+20%",
      hotSkills: ["Python", "TensorFlow", "AWS/Azure", "Docker"]
    },
    {
      role: "BI Analyst",
      experience: "0-2 years",
      salary: "₹5-9 LPA",
      growth: "+10%",
      hotSkills: ["Tableau", "SQL", "Excel", "Business Analysis"]
    }
  ];

  const inDemandSkills = [
    {
      skill: "Python Programming",
      demand: 95,
      growth: "+18%",
      category: "Programming",
      description: "Essential for data manipulation, analysis, and machine learning"
    },
    {
      skill: "SQL & Database Management",
      demand: 90,
      growth: "+12%",
      category: "Data Management",
      description: "Critical for data extraction, transformation, and analysis"
    },
    {
      skill: "Machine Learning",
      demand: 85,
      growth: "+25%",
      category: "AI/ML",
      description: "Core competency for predictive modeling and AI applications"
    },
    {
      skill: "Data Visualization",
      demand: 80,
      growth: "+15%",
      category: "Visualization",
      description: "Power BI, Tableau, and Python libraries for insights communication"
    },
    {
      skill: "Statistical Analysis",
      demand: 75,
      growth: "+10%",
      category: "Analytics",
      description: "Foundation for hypothesis testing and data interpretation"
    },
    {
      skill: "Cloud Platforms (AWS/Azure)",
      demand: 70,
      growth: "+30%",
      category: "Cloud",
      description: "Essential for scalable data processing and ML deployment"
    }
  ];

  const industrySpotlight = [
    {
      industry: "Healthcare & Pharmaceuticals",
      growth: "+40%",
      focus: "Drug discovery, patient analytics, medical imaging",
      opportunities: "High demand for ML in diagnostics and treatment optimization"
    },
    {
      industry: "Financial Services",
      growth: "+35%",
      focus: "Risk assessment, fraud detection, algorithmic trading",
      opportunities: "Regulatory compliance and real-time analytics driving growth"
    },
    {
      industry: "E-commerce & Retail",
      growth: "+30%",
      focus: "Recommendation systems, supply chain optimization",
      opportunities: "Personalization and inventory management key areas"
    },
    {
      industry: "Technology & Software",
      growth: "+45%",
      focus: "Product analytics, user behavior, AI integration",
      opportunities: "Highest paying sector with cutting-edge projects"
    }
  ];

  const renderTrendsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {marketTrends.map((trend, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                  {trend.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{trend.title}</h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{trend.category}</span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                trend.impact === 'High' 
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
              }`}>
                {trend.impact} Impact
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{trend.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-green-600 dark:text-green-400">{trend.stats}</span>
              <span className="text-gray-500 dark:text-gray-400">{trend.timeframe}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">Industry Spotlight</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industrySpotlight.map((industry, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{industry.industry}</h4>
                <span className="text-green-300 font-bold">{industry.growth}</span>
              </div>
              <p className="text-blue-100 text-sm mb-2">{industry.focus}</p>
              <p className="text-blue-200 text-xs">{industry.opportunities}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderJobsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {jobOpportunities.map((job, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{job.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
              </div>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-sm font-medium">
                {job.growth} growth
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <DollarSign className="w-4 h-4 mr-2" />
                <span className="font-semibold text-green-600 dark:text-green-400">{job.salary}</span>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Requirements:</h4>
              <div className="flex flex-wrap gap-2">
                {job.requirements.map((req, i) => (
                  <span key={i} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm">
                    {req}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSalariesTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {salaryInsights.map((salary, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{salary.role}</h3>
                <p className="text-gray-600 dark:text-gray-400">{salary.experience}</p>
              </div>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-sm font-medium">
                {salary.growth}
              </span>
            </div>
            
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
              {salary.salary}
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Hot Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {salary.hotSkills.map((skill, i) => (
                  <span key={i} className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-700 dark:to-blue-700 rounded-xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">💡 Salary Optimization Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">For Fresh Graduates:</h4>
            <ul className="text-green-100 text-sm space-y-1">
              <li>• Build a strong portfolio with 3-5 projects</li>
              <li>• Get certified in relevant technologies</li>
              <li>• Contribute to open-source projects</li>
              <li>• Network with industry professionals</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Skill Premium:</h4>
            <ul className="text-green-100 text-sm space-y-1">
              <li>• Cloud skills: +20-30% salary boost</li>
              <li>• ML Engineering: +25-35% premium</li>
              <li>• Domain expertise: +15-25% increase</li>
              <li>• Leadership skills: +30-40% growth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkillsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {inDemandSkills.map((skill, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.skill}</h3>
                <span className="text-sm text-blue-600 dark:text-blue-400">{skill.category}</span>
              </div>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-sm font-medium">
                {skill.growth}
              </span>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Market Demand</span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.demand}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.demand}%` }}
                ></div>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 rounded-xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">🚀 Skill Development Roadmap</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Foundation (0-6 months)</h4>
            <ul className="text-purple-100 text-sm space-y-1">
              <li>• Python/R Programming</li>
              <li>• SQL & Databases</li>
              <li>• Statistics & Mathematics</li>
              <li>• Excel & Data Manipulation</li>
            </ul>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Intermediate (6-12 months)</h4>
            <ul className="text-purple-100 text-sm space-y-1">
              <li>• Machine Learning</li>
              <li>• Data Visualization</li>
              <li>• Power BI/Tableau</li>
              <li>• Statistical Analysis</li>
            </ul>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Advanced (12+ months)</h4>
            <ul className="text-purple-100 text-sm space-y-1">
              <li>• Deep Learning</li>
              <li>• Cloud Platforms</li>
              <li>• MLOps & Deployment</li>
              <li>• Domain Specialization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="data-science-news" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Data Science Job Market Daily
            </h2>
          </div>
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
            <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
              {currentDate}
            </p>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Stay updated with the latest trends, opportunities, and insights in Data Science, 
            Data Analysis, and Machine Learning job market.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 transition-colors duration-300">
          {[
            { id: 'trends', label: 'Market Trends', icon: <TrendingUp className="w-4 h-4" /> },
            { id: 'jobs', label: 'Job Opportunities', icon: <Briefcase className="w-4 h-4" /> },
            { id: 'salaries', label: 'Salary Insights', icon: <DollarSign className="w-4 h-4" /> },
            { id: 'skills', label: 'In-Demand Skills', icon: <BarChart3 className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {tab.icon}
              <span className="ml-2 hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'trends' && renderTrendsTab()}
          {activeTab === 'jobs' && renderJobsTab()}
          {activeTab === 'salaries' && renderSalariesTab()}
          {activeTab === 'skills' && renderSkillsTab()}
        </div>

        {/* Quick Stats Footer */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-6">
            Today's Quick Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15,000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Job Postings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">₹8.5L</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Entry Salary</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">67%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Remote Opportunities</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">35%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">YoY Job Growth</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-xl p-8 text-white transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Data Science Career?</h3>
            <p className="text-lg text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
              As an AI Engineer and Software Developer with expertise in custom AI solutions and machine learning, 
              I'm actively seeking opportunities to contribute innovative AI technologies to forward-thinking organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Let's Connect
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataScienceNews;