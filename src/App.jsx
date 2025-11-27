import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <GlobalStyles />
      <div className="bg-zinc-950 min-h-screen text-zinc-200 selection:bg-indigo-500/30 font-sans">
        <Navbar />
        <main>
          <Hero />
          <BentoGrid />
          <Projects />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}