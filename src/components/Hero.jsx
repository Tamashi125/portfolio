import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const Hero = () => {
   const { language } = useLanguage();
   const t = translations.hero;

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 relative overflow-hidden bg-zinc-950 pt-10">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

       <div className="max-w-6xl mx-auto w-full z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm text-zinc-400 text-xs font-medium mb-8 mt-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                {t.openfornew[language]}
             </div>

             <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
                Muru. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Wuttipong.</span> <br/>
                Developer.
             </h1>

             <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                Hi, I'm Wuttipong. A Frontend Developer passionate about building interactive UIs and seamless web experiences.
             </p>

             <div className="flex flex-wrap gap-4">
                <a 
                   href="#bento"
                   className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2"
                >
                   Explore My Profile <ArrowUpRight size={18} />
                </a>
             </div>
          </motion.div>
       </div>
    </section>
  );
};

export default Hero;
