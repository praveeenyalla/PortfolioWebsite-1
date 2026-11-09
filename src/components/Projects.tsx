import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Calendar, Eye, Filter, Star, TrendingUp, GitBranch, ExternalLink, Users } from 'lucide-react';
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
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my work in AI/ML, web development, and data science.
            Exploring the boundaries of technology through innovation.
          </motion.p>
        </div>

        {/* Filter Section */}
        <div className="mb-16">
          <div className="glassmorphism p-4 sm:p-6 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <div className="flex flex-wrap justify-center gap-3">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id as any)}
                  className={`flex items-center px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${activeFilter === option.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                >
                  <span className="mr-2">{option.icon}</span>
                  <span className="text-sm tracking-wide">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group shadow-2xl relative"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000510] via-transparent to-transparent opacity-60"></div>

                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  <span className={`px-4 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-widest ${project.status === 'Completed'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    } backdrop-blur-md`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">{project.title}</h3>
                  <div className="flex items-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                  </div>
                </div>

                <p className="text-slate-400 mb-8 leading-relaxed text-lg line-clamp-3">{project.description}</p>

                <div className="mb-8 p-6 bg-white/5 rounded-3xl border border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1.5 bg-cyan-500/10 text-cyan-300 rounded-xl text-xs font-bold border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleLinkClick(project.demoUrl || '#', 'demo', project.title)}
                    className="flex-1 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-slate-100"
                  >
                    <Eye className="w-5 h-5" />
                    Demo
                  </button>
                  <button
                    onClick={() => handleLinkClick(project.codeUrl || '#', 'code', project.title)}
                    className="flex-1 bg-slate-900 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-slate-800"
                  >
                    <Github className="w-5 h-5" />
                    Source
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ecosystem Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-[3rem] p-12 border border-white/10 relative overflow-hidden group mb-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { val: `${projectsConfig.length}+`, lab: 'Total Creations', col: 'text-cyan-400' },
              { val: getFeaturedProjects().length, lab: 'Elite Picks', col: 'text-blue-400' },
              { val: getProjectsByCategory('ai').length, lab: 'AI Innovations', col: 'text-indigo-400' },
              { val: '100%', lab: 'Success Rate', col: 'text-emerald-400' }
            ].map((stat, i) => (
              <div key={i} className="relative group/stat">
                <div className={`text-5xl font-black ${stat.col} mb-2`}>{stat.val}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.lab}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;