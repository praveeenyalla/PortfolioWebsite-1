import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Information from './components/Information';
import DataScienceNews from './components/DataScienceNews';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Synaptic Neural Network Background */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50 dark:opacity-40">
          <NeuralNetworkBackground />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Information />
            <DataScienceNews />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;