import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Information from './components/Information';
import DataScienceNews from './components/DataScienceNews';
import StarBackground from './components/StarBackground';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen cosmic-bg text-slate-200 selection:bg-purple-500/30 overflow-x-hidden">
        <CustomCursor />
        <StarBackground />
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
    </ThemeProvider>
  );
}

export default App;