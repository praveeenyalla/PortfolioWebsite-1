import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent! (Simulation)');
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "praveen.yalla2@gmail.com" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", value: "LinkedIn Profile" },
    { icon: <Github className="w-6 h-6" />, label: "GitHub", value: "@praveeenyalla" }
  ];

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="glassmorphism p-8 rounded-3xl border border-white/5 flex items-center gap-6 group">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{info.label}</p>
                  <p className="text-xl font-bold text-white">{info.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glassmorphism p-10 rounded-[2.5rem] border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your Name"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your Email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Your Message"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;