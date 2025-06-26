import React from 'react';
import { Calendar, MapPin, Briefcase, ChevronRight, BookOpen } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led a team of 5 developers on critical projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Architected microservices handling 100k+ daily requests"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"]
    },
    {
      title: "Software Developer",
      company: "Digital Innovations Ltd.",
      location: "Hyderabad, India",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Developed and maintained web applications, collaborated with cross-functional teams, and contributed to system architecture decisions.",
      achievements: [
        "Built responsive web applications serving 10k+ users",
        "Integrated third-party APIs and payment gateways",
        "Reduced bug reports by 35% through comprehensive testing",
        "Collaborated with UI/UX team on user experience improvements"
      ],
      technologies: ["JavaScript", "React", "Python", "PostgreSQL", "Redis", "Git"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Solutions",
      location: "Bangalore, India",
      period: "2020 - 2021",
      type: "Full-time",
      description: "Started career focusing on front-end development, learned modern frameworks, and contributed to various client projects.",
      achievements: [
        "Developed mobile-responsive websites for 15+ clients",
        "Learned and implemented modern JavaScript frameworks",
        "Participated in code reviews and agile development processes",
        "Created reusable component libraries"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "PHP"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      location: "India",
      period: "2016 - 2020",
      grade: "8.5 CGPA",
      description: "Specialized in software engineering, data structures, algorithms, and database management systems."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            A comprehensive overview of my professional journey, highlighting key roles, 
            achievements, and the technologies I've worked with.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center transition-colors duration-300">
            <Briefcase className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Work Experience
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
                    <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10 relative transition-colors duration-300">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{exp.title}</h4>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">{exp.company}</p>
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
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Key Achievements:</h5>
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
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium transition-colors duration-300"
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