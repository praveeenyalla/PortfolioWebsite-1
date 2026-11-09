import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {


  const experiences = [
    {
      title: "Data Scientist",
      company: "Seeking Opportunities",
      location: "Remote/Hyderabad, India",
      period: "2024 - Present",
      type: "Job Seeking",
      description: "AI Engineer and Software Developer with expertise in Artificial Intelligence, Machine Learning, and Cloud Computing.",
      achievements: [
        "Created 'AvaMind' AI - custom AI assistant with voice interaction",
        "Developed AI workflows using n8n for automation",
        "Built and deployed scalable applications on Google Cloud Platform"
      ],
      technologies: ["Python", "AI/ML", "Google Cloud", "n8n", "TensorFlow"]
    },
    {
      title: "Learning & Development",
      company: "Self-Directed",
      location: "Hyderabad, India",
      period: "2023 - 2024",
      type: "Learning",
      description: "Intensive focus on data science, machine learning, and practical project implementation.",
      achievements: [
        "Developed full-stack web applications",
        "Created ML models for real-world problems",
        "Built data analysis pipelines"
      ],
      technologies: ["React", "Node.js", "Python", "MongoDB", "Machine Learning"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glassmorphism p-10 rounded-[2.5rem] border border-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="flex flex-col lg:flex-row justify-between mb-8 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-cyan-400 font-bold">{exp.company}</p>
                </div>
                <div className="flex flex-col lg:items-end text-slate-400 text-sm">
                  <div className="flex items-center mb-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                    <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                    <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 mb-8 text-lg">{exp.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-center text-slate-400 group/item">
                    <ChevronRight className="w-4 h-4 text-cyan-500 mr-2 group-hover/item:translate-x-1 transition-transform" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="px-4 py-1.5 bg-white/5 text-slate-300 rounded-xl text-xs font-bold border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;