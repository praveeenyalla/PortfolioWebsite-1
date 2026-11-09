import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Eye, MapPin, Phone, Globe } from 'lucide-react';
import TechOrbit from './TechOrbit';

const Hero: React.FC = () => {
  const handleViewResume = () => {

    try {
      window.open('/Praveen_Resume.pdf', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Resume viewing failed:', error);
    }
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Main Content */}
          <motion.div
            className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 glassmorphism rounded-full border border-cyan-500/30">
              <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">Welcome to my universe</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight"
            >
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-neon-glow">
                NAGA PRAVEEN YALLA
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-bold"
            >
              AI Engineer & Software Developer | Data Scientist | AI Researcher
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              AI Engineer and Software Developer with expertise in <span className="text-white font-bold">Artificial Intelligence, Machine Learning</span>, and <span className="text-white font-bold">Cloud Computing</span>.
              Specializing in designing intelligent solutions, AI-powered assistants, automation workflows, and scalable applications.
              Passionate about research, innovation, and leveraging cutting-edge technologies to solve real-world challenges.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={handleViewResume}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <Eye className="w-5 h-5" />
                View Resume
              </button>
              <button
                onClick={handleContactClick}
                className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 border border-white/10 backdrop-blur-md"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                Contact Me
              </button>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">yallanagapraveen.info</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+91 8328377820</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">Available for work</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Technology Orbit */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2">
            <TechOrbit />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
