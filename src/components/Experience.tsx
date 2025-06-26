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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my professional journey, highlighting key roles, 
            achievements, and the technologies I've worked with.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
            Work Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200 z-0"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                        <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col lg:items-end text-gray-600 mt-2 lg:mt-0">
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
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
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
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
            Education
          </h3>
          
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-lg text-blue-600 font-medium">{edu.institution}</p>
                </div>
                <div className="flex flex-col lg:items-end text-gray-600 mt-2 lg:mt-0">
                  <div className="flex items-center mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Grade: {edu.grade}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;