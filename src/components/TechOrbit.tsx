import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layers, Cpu, Cloud, Database } from 'lucide-react';

const TechOrbit: React.FC = () => {
    const techs = [
        { name: 'Python', color: 'from-blue-400 to-cyan-500', icon: <Terminal className="w-6 h-6" /> },
        { name: 'React', color: 'from-cyan-400 to-blue-500', icon: <Layers className="w-6 h-6" /> },
        { name: 'ML', color: 'from-blue-500 to-indigo-500', icon: <Cpu className="w-6 h-6" /> },
        { name: 'Cloud', color: 'from-cyan-500 to-blue-600', icon: <Cloud className="w-6 h-6" /> },
        { name: 'Database', color: 'from-blue-600 to-cyan-600', icon: <Database className="w-6 h-6" /> },
    ];

    return (
        <div className="relative w-full aspect-square flex items-center justify-center p-12">
            {/* Central Profile Hub */}
            <div className="relative z-10 w-48 h-48 lg:w-64 lg:h-64 rounded-full p-2 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 animate-pulse-glow">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 glassmorphism relative group">
                    <img
                        src="/praveen_profile.jpg"
                        alt="Naga Praveen Yalla"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
                </div>
                {/* Orbit Rings */}
                <div className="absolute -inset-12 border border-cyan-500/10 rounded-full animate-spin-slower"></div>
                <div className="absolute -inset-24 border border-blue-500/5 rounded-full animate-reverse-spin"></div>
            </div>

            {/* Rotating Icons */}
            <div className="absolute inset-0">
                {techs.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="absolute top-1/2 left-1/2"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * (20 / techs.length),
                        }}
                    >
                        <motion.div
                            className={`-translate-x-1/2 -translate-y-[180px] lg:-translate-y-[240px] w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 cursor-pointer group hover:scale-110 transition-transform`}
                            style={{ rotate: -(index * (360 / techs.length)) }}
                            whileHover={{ scale: 1.2, rotate: 0 }}
                        >
                            {tech.icon}
                            <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-white shadow-xl rounded-lg text-slate-900 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {tech.name}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechOrbit;
