import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    isDark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-brown-900 dark:text-white transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="flex-grow">
        <About />
        <Experience />
        <Education />
        <Projects />
        <SkillsSection />
        <Contact />
      </main>
    </div>
  );
}

export default App;