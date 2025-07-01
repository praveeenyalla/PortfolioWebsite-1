import React from 'react';
import { Calendar, MapPin, Briefcase, ChevronRight, BookOpen, Target, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Seeking Opportunities",
      location: "Remote/Hyderabad, India",
      period: "2024 - Present",
      type: "Job Seeking",
      description: "Fresh graduate with strong foundation in data analysis, visualization, and statistical modeling. Completed comprehensive Data Science certification and built multiple projects demonstrating analytical skills.",
      achievements: [
        "Completed ExcelR Data Science certification with hands-on projects",
        "Built 6+ data analysis and web development projects",
        "Proficient in Python, SQL, data visualization tools",
        "Strong foundation in statistical analysis and machine learning",
        "Experienced in creating interactive dashboards and reports"
      ],
      technologies: ["Python", "SQL", "Excel", "Power BI", "Tableau", "Machine Learning", "Statistics"]
    },
    {
      title: "Project-Based Learning & Development",
      company: "Self-Directed Learning",
      location: "Hyderabad, India",
      period: "2023 - 2024",
      type: "Learning & Projects",
      description: "Intensive self-directed learning focused on data science, web development, and practical project implementation. Built comprehensive portfolio demonstrating technical skills.",
      achievements: [
        "Developed full-stack web applications with modern frameworks",
        "Created data visualization dashboards and analytics tools",
        "Implemented machine learning models for real-world problems",
        "Built responsive web applications serving thousands of users",
        "Gained expertise in both frontend and backend technologies"
      ],
      technologies: ["React", "Node.js", "Python", "MongoDB", "Data Analysis", "Web Development"]
    },
    {
      title: "Academic Projects & Internships",
      company: "NRI Institute of Technology",
      location: "India",
      period: "2020 - 2023",
      type: "Academic",
      description: "Completed various academic projects and training programs focusing on software development, data analysis, and emerging technologies during university studies.",
      achievements: [
        "Completed multiple academic projects in data structures and algorithms",
        "Participated in coding competitions and hackathons",
        "Gained foundational knowledge in database management systems",
        "Developed problem-solving skills through practical assignments",
        "Built strong foundation in programming and analytical thinking"
      ],
      technologies: ["Java", "C++", "Python", "MySQL", "Data Structures", "Algorithms"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "NRI Institute of Technology",
      location: "India",
      period: "2020 - 2024",
      grade: "8.5 CGPA",
      description: "Specialized in software engineering, data structures, algorithms, and database management systems. Strong foundation in computer science fundamentals with focus on practical application and problem-solving."
    }
  ];

  const careerObjective = {
    title: "Career Objective",
    description: "Seeking an entry-level Data Analyst position where I can apply my analytical skills, technical knowledge, and passion for data-driven insights to contribute to organizational success. Eager to work with experienced professionals and grow in the field of data analytics.",
    skills: [
      "Data Analysis & Visualization",
      "Statistical Modeling",
      "Python & SQL Programming",
      "Dashboard Creation",
      "Problem Solving",
      "Quick Learning Ability"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Professional Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Fresh graduate with strong analytical skills and hands-on project experience, 
            actively seeking opportunities to begin my career as a Data Analyst.
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
            I am actively seeking entry-level Data Analyst positions where I can apply my analytical skills, 
            technical knowledge, and passion for data-driven insights. Ready to contribute to your team and 
            grow professionally in a collaborative environment.
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