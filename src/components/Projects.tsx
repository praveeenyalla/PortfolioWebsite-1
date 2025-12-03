import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, ArrowRight, Play, Users, Star, GitBranch, Filter, Eye, TrendingUp } from 'lucide-react';
import { projectsConfig, getFeaturedProjects, getRecentProjects, getProjectsByCategory } from '../data/projectsConfig';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'recent' | 'ai' | 'web' | 'data'>('all');

  const getFilteredProjects = () => {
    switch (activeFilter) {
      case 'featured':
        return getFeaturedProjects();
      case 'recent':
        return getRecentProjects();
      case 'ai':
        return getProjectsByCategory('ai');
      case 'web':
        return getProjectsByCategory('web');
      case 'data':
        return getProjectsByCategory('data');
      default:
        return projectsConfig;
    }
  };

  const filteredProjects = getFilteredProjects();

  const handleLinkClick = (url: string, type: 'demo' | 'code' | 'video', projectTitle: string) => {
    if (url === '#' || !url) {
      const message = type === 'demo' 
        ? `Live demo for "${projectTitle}" will be available soon. Please check back later!`
        : type === 'code'
        ? `Repository for "${projectTitle}" will be available soon. Please check back later!`
        : `Video demo for "${projectTitle}" will be available soon. Please check back later!`;
      
      alert(message);
      return;
    }
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filterOptions = [
    { id: 'all', label: 'All Projects', icon: <Filter className="w-4 h-4" /> },
    { id: 'featured', label: 'Featured Projects', icon: <Star className="w-4 h-4" /> },
    { id: 'recent', label: 'Recent Work', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'ai', label: 'AI Projects', icon: <GitBranch className="w-4 h-4" /> },
    { id: 'web', label: 'Web Apps', icon: <ExternalLink className="w-4 h-4" /> },
    { id: 'data', label: 'Data Science', icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">My Projects Portfolio</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            A comprehensive showcase of my work in web development, AI/ML, data science, and modern applications. 
            From featured projects to recent innovations, explore my technical journey and achievements.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="w-full">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Project Categories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {filterOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveFilter(option.id as any)}
                    className={`flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeFilter === option.id
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {option.icon}
                    <span className="ml-2 text-sm">{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 neon-border"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                  } transition-colors duration-300`}>
                    {project.status}
                  </span>
                  {project.isFeatured && (
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                  {project.isRecent && (
                    <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                </div>
                {project.videoUrl && (
                  <div className="absolute top-4 left-4">
                    <button
                      onClick={() => handleLinkClick(project.videoUrl!, 'video', project.title)}
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
                    onClick={() => handleLinkClick(project.demoUrl || '#', 'demo', project.title)}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 ${
                      project.demoUrl && project.demoUrl !== '#'
                        ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white'
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!project.demoUrl || project.demoUrl === '#'}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {project.demoUrl && project.demoUrl !== '#' ? 'Live Demo' : 'Coming Soon'}
                  </button>
                  <button
                    onClick={() => handleLinkClick(project.codeUrl || '#', 'code', project.title)}
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
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300 mb-16 neon-border">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">Project Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">{projectsConfig.length}+</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 transition-colors duration-300">{getFeaturedProjects().length}</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Featured Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 transition-colors duration-300">{getProjectsByCategory('ai').length}</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">AI Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2 transition-colors duration-300">100%</div>
              <div className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Development Approach */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl p-8 text-white transition-colors duration-300 neon-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 animate-neon-glow">My Development Philosophy</h3>
            <p className="text-blue-100 dark:text-blue-200 text-lg leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
              Every project is crafted with attention to detail, modern best practices, and user-centric design. 
              I believe in creating solutions that are not just functional, but also scalable, maintainable, and impactful.
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
              <h4 className="text-xl font-semibold mb-2">Modern Technologies</h4>
              <p className="text-blue-100 dark:text-blue-200 text-sm transition-colors duration-300">
                Leveraging cutting-edge technologies and frameworks to build robust, scalable applications.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Continuous Innovation</h4>
              <p className="text-blue-100 dark:text-blue-200 text-sm transition-colors duration-300">
                Always exploring new technologies and incorporating innovative solutions into every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;