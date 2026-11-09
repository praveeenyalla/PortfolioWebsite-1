import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Star } from 'lucide-react';

const DataScienceNews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trends' | 'jobs' | 'skills'>('trends');

  const marketTrends = [
    {
      title: "AI Integration Surge",
      category: "Market Trend",
      description: "Companies are increasingly integrating AI/ML into core processes.",
      stats: "+67% Growth",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Remote Expansion",
      category: "Work Culture",
      description: "Global opportunities for data professionals are expanding rapidly.",
      stats: "45% Remote",
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <section id="data-science-news" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Job Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Intelligence</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {['trends', 'jobs', 'skills'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${activeTab === tab ? 'bg-white text-slate-900 shadow-xl' : 'bg-white/5 text-slate-500 hover:bg-white/10'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="glassmorphism p-10 rounded-[3.5rem] border border-white/10 min-h-[400px]">
          {activeTab === 'trends' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketTrends.map((trend, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 p-8 rounded-3xl border border-white/5 group"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      {trend.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{trend.title}</h3>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{trend.category}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6">{trend.description}</p>
                  <p className="text-emerald-400 font-bold">{trend.stats}</p>
                </motion.div>
              ))}
            </div>
          )}
          {activeTab !== 'trends' && (
            <div className="flex items-center justify-center h-full text-slate-500 font-bold uppercase tracking-widest">
              Content for {activeTab} coming soon...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DataScienceNews;