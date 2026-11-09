import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Brain, BarChart3 } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Deep Learning"]
    },
    {
      title: "Data Science",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Data Analysis", "EDA", "SQL", "Pandas", "Power BI", "Tableau"]
    },
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "FastAPI"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Google Cloud", "Docker", "Git/GitHub", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism p-10 rounded-[2.5rem] border border-white/10 group"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mr-6 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-2xl text-slate-300 font-bold hover:text-white transition-all text-sm">
                    {skill}
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

export default Skills;
