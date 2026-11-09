import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap } from 'lucide-react';

const Information: React.FC = () => {
  const dataFields = [
    {
      title: "Data Science",
      icon: <Brain className="w-8 h-8" />,
      description: "The interdisciplinary field that uses scientific methods and algorithms to extract knowledge from data.",
      keyPoints: ["Statistical analysis", "Predictive modeling", "Data mining"],
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="w-8 h-8" />,
      description: "A subset of AI that enables computers to learn and make decisions from data.",
      keyPoints: ["Deep learning", "Model training", "Autonomous systems"],
      color: "from-purple-600 to-purple-800"
    }
  ];

  return (
    <section id="information" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Hub</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {dataFields.map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glassmorphism p-10 rounded-[3rem] border border-white/10 group overflow-hidden relative"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center text-cyan-400 mr-6 group-hover:scale-110 transition-transform">
                      {field.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white">{field.title}</h3>
                  </div>
                  <p className="text-slate-300 text-lg mb-8">{field.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {field.keyPoints.map((point, i) => (
                      <div key={i} className="flex items-center text-slate-400">
                        <Zap className="w-4 h-4 text-cyan-500 mr-2" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;