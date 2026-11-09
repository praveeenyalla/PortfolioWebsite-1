import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Target, Briefcase, Globe, Eye } from 'lucide-react';

const About: React.FC = () => {
  const handleViewResume = () => {
    try {
      window.open('/Praveen_Resume.pdf', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Resume viewing failed:', error);
    }
  };

  const achievements = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Objective",
      description: "Seeking AI Engineer and Machine Learning Engineer positions to develop cutting-edge AI solutions."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "AI Innovation",
      description: "Created AvaMind AI assistant and multiple intelligent automation solutions."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Research & Development",
      description: "Passionate about AI research, innovation, and emerging technology exploration."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cloud & Scalability",
      description: "Expert in Google Cloud Platform and building scalable AI-powered applications."
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            AI Engineer and Software Developer with expertise in Artificial Intelligence, Machine Learning, Cloud Computing,
            and Custom Application Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glassmorphism p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase className="text-cyan-400" />
                My Journey
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                I am <span className="text-cyan-400 font-bold">Nagapraveen Yalla</span>, an AI Engineer specializing in designing and building intelligent
                solutions such as AI-powered assistants and scalable cloud-based applications.
                My expertise spans across AI development, machine learning engineering, and cloud computing.
              </p>
              <div className="mt-8">
                <button
                  onClick={handleViewResume}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <Eye className="w-5 h-5" />
                  View Resume
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;