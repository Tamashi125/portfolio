import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations.navbar;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home[language], href: '#hero' },
    { name: t.about[language], href: '#bento' },
    { name: t.projects[language], href: '#projects' },
    { name: t.contact[language], href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none`}>
        <div className={`
          pointer-events-auto flex items-center justify-between gap-8 px-6 py-3 rounded-full 
          ${isScrolled ? 'bg-zinc-900/90 backdrop-blur-md border border-zinc-800 shadow-2xl translate-y-0' : 'bg-transparent border border-transparent translate-y-2'}
          transition-all duration-500 ease-out
        `}>
          
          <a href="#" className="font-bold text-white text-xl tracking-tighter">MURU<span className="text-violet-500">.</span></a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
             <button 
                onClick={toggleLanguage}
                className="hidden md:flex items-center justify-center w-10 h-10 bg-zinc-800 hover:bg-white hover:text-black rounded-full text-white transition-all duration-300 relative group cursor-pointer"
                aria-label="Change Language"
             >
                <Languages size={18} />
                <span className="absolute -top-1.5 -right-1.5 h-4 min-w-[18px] flex items-center justify-center rounded bg-violet-500 px-1 text-[8px] font-bold text-white border-2 border-zinc-950 group-hover:border-white transition-colors">
                  {language === 'en' ? 'ENG' : 'TH'}
                </span>
             </button>

             <button 
                className="md:hidden text-zinc-300 pointer-events-auto"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
                {mobileMenuOpen ? <X /> : <Menu />}
             </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-zinc-950 pt-28 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-bold text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
