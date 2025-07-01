import React from 'react';
import { ExternalLink, Github, Calendar, Tag, ArrowRight, Play, Users, Star, GitBranch } from 'lucide-react';
import { projectsConfig } from '../data/projectsConfig';

const Projects: React.FC = () => {
  const handleLinkClick = (url: string, type: 'demo' | 'code' | 'video') => {
    if (url === '#' || !url) {
      const message = type === 'demo' 
        ? 'Live demo will be available soon. Please check back later!'
        : type === 'code'
        ? 'Repository link will be available soon. Please check back later!'
        : 'Video demo will be available soon. Please check back later!';
      
      alert(message);
      return;
    }
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            modern frameworks, and solving real-world problems through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsConfig.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                  } transition-colors duration-300`}>
                    {project.status}
                  </span>
                </div>
                {project.videoUrl && (
                  <div className="absolute top-4 left-4">
                    <button
                      onClick={() => handleLinkClick(project.videoUrl!, 'video')}
                      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200"
                      title="Watch Video Demo"
                    >
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{project.title}</h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-300">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center transition-colors duration-300">
                    <Tag className="w-4 h-4 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Key Features</h4>
                  <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1 transition-colors duration-300">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => handleLinkClick(project.demoUrl || '#', 'demo')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                  <button
                    onClick={() => handleLinkClick(project.codeUrl || '#', 'code')}
                    className="flex-1 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">Project Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">25+</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 transition-colors duration-300">15+</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Technologies Used</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 transition-colors duration-300">100%</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2 transition-colors duration-300">50k+</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Lines of Code</div>
            </div>
          </div>
        </div>

        {/* Development Approach */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl p-8 text-white transition-colors duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">My Development Approach</h3>
            <p className="text-blue-100 dark:text-blue-200 text-lg leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
              I believe in creating solutions that are not just functional, but also scalable, maintainable, and user-friendly. 
              Every project is an opportunity to learn, innovate, and deliver exceptional value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">User-Centric Design</h4>
              <p className="text-blue-100 dark:text-blue-200 text-sm transition-colors duration-300">
                Every feature is designed with the end user in mind, ensuring intuitive and engaging experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Clean Code Practices</h4>
              <p className="text-blue-100 dark:text-blue-200 text-sm transition-colors duration-300">
                Following industry best practices for maintainable, scalable, and well-documented code.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Continuous Learning</h4>
              <p className="text-blue-100 dark:text-blue-200 text-sm transition-colors duration-300">
                Staying updated with the latest technologies and incorporating modern solutions into every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;