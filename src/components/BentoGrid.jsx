import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   Code2, Globe, Terminal, Cpu, Palette, Sparkles,
   Layers, Mail, Smartphone, ArrowUpRight, Github,
   Zap, FileText, FolderGit2, Cylinder
} from 'lucide-react';
import HistoryModal from './HistoryModal';
import Clock from './Clock';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const BentoGrid = () => {
   const [isHistoryOpen, setIsHistoryOpen] = useState(false);
   const { language } = useLanguage();
   const t = translations.bentoGrid;

   const techStack = [
      { icon: <Code2 />, label: "React" },
      { icon: <Terminal />, label: "JavaScript" },
      { icon: <Cpu />, label: "TypeScript" },
      { icon: <Palette />, label: "Tailwind" },
      { icon: <Globe />, label: "Bootstrap" },
      { icon: <Sparkles />, label: "Framer Motion" },
      { icon: <Cylinder />, label: "MySQL" },
   ];

   return (
      <section id="bento" className="py-24 px-4 bg-zinc-950">
         <div className="max-w-6xl mx-auto">
            <div className="mb-12">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
               <p className="text-zinc-400 max-w-lg">Coding, gaming, and creating cool stuff.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[160px]">

               {/* Card 1: Personal Profile */}
               <motion.div
                  whileHover={{ y: -4 }}
                  className="md:col-span-2 md:row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group"
               >
                  {/* ... existing code ... */}
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                     <Layers size={140} />
                  </div>

                  <div className="z-10 h-full flex flex-col justify-between">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 shrink-0">
                           <img src="/pf_muru.png" alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold text-white">Wuttipong Leeprakhon</h3>
                           <p className="text-zinc-400 text-sm">Developer</p>
                           <div className="flex items-center gap-2 mt-1">
                              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                              <span className="text-xs text-green-500 font-medium">Available for work</span>
                           </div>
                        </div>
                     </div>

                     <div className="space-y-3">
                        <div className="flex items-center gap-3 text-zinc-300 group/item hover:text-white transition-colors">
                           <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-indigo-400">
                              <Mail size={16} />
                           </div>
                           <p className="text-sm">Wuttipong.c3@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-3 text-zinc-300 group/item hover:text-white transition-colors">
                           <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-indigo-400">
                              <Smartphone size={16} />
                           </div>
                           <p className="text-sm">085-813-8908</p>
                        </div>
                     </div>

                     <div className="mt-6 flex items-center gap-3">
                        <a href="#contact" className="flex-1 bg-white text-zinc-950 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                           {t.contact[language]} <ArrowUpRight size={16} />
                        </a>

                        <a href="#" className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors">
                           <Github size={18} />
                        </a>

                        {/* Discord Button in Profile Card */}
                        <a href="https://discord.gg/kXpdwufu3F" target="_blank" className="w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#5865F2] hover:bg-[#5865F2] transition-all group/discord shrink-0">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="group-hover/discord:text-white transition-colors"
                           >
                              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </motion.div>

               {/* Card 2: Experience Gradient (1x2) */}
               <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => setIsHistoryOpen(true)}
                  className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg shadow-violet-900/20 cursor-pointer group/exp relative overflow-hidden"
               >
                  {/* 1. Visual Hint: Arrow Icon (Top Right) */}
                  <div className="absolute top-4 right-4 text-white/40 group-hover/exp:text-white transition-colors duration-300">
                     <ArrowUpRight size={20} />
                  </div>

                  {/* Main Icon */}
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mb-4 backdrop-blur-sm group-hover/exp:scale-110 group-hover/exp:bg-white/20 transition-all duration-300 shadow-inner shadow-white/10">
                     <Zap size={32} fill="currentColor" />
                  </div>

                  {/* Content */}
                  <div className="text-6xl font-bold text-white mb-2">1+</div>
                  <div className="text-indigo-100 font-medium mb-10">Years of<br />Experience</div>

                  {/* 2. Visual Hint: Bottom Label (Always visible but subtle) */}
                  <div className="absolute bottom-6 flex items-center gap-2 text-xs font-bold text-white/60 bg-black/20 px-4 py-2 rounded-full backdrop-blur-md group-hover/exp:bg-white/20 group-hover/exp:text-white transition-all duration-300">
                     <FileText size={14} />
                     <span>View History</span>
                  </div>
               </motion.div>

               {/* Card 3: Total Projects (1x1) */}
               <motion.div
                  whileHover={{ y: -4 }}
                  className="md:col-span-1 md:row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col relative overflow-hidden group"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Header Row (Icon + Active Badge) */}
                  <div className="flex justify-between items-start relative z-10 w-full mb-2">
                     <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-900/20 border border-emerald-500/20">
                        <FolderGit2 size={20} />
                     </div>
                     <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active
                     </div>
                  </div>

                  {/* Main Content (Centered, Adjusted Size) */}
                  <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-0 pb-1">
                     <div className="text-6xl font-bold text-white leading-none mb-1 group-hover:text-emerald-400 transition-colors">0</div>
                     <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold group-hover:text-zinc-300 transition-colors text-center">
                        {t.totalprojects[language]}
                     </p>
                  </div>
               </motion.div>

               {/* Card 4: Location */}
               <motion.div
                  whileHover={{ y: -4 }}
                  className="md:col-span-1 md:row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center"
               >
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                     <span className="text-zinc-400 text-xs uppercase tracking-wider">Address</span>
                  </div>
                  <div className="text-xl font-bold text-white">{t.address[language]}</div>
                  <div className="text-zinc-500 text-xs mt-1 flex items-center gap-2">
                     GMT+7 <span className="w-1 h-1 rounded-full bg-zinc-600" /> <Clock />
                  </div>
               </motion.div>

               {/* Card 5: Tech Stack - Restored */}
               <motion.div
                  className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 overflow-hidden"
               >
                  <div className="text-zinc-400 text-sm font-medium whitespace-nowrap z-10 bg-zinc-900 py-2 pr-4">Preferred Stack</div>

                  <div className="flex-1 w-full overflow-hidden relative">
                     <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
                     <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />

                     <motion.div
                        className="flex gap-12 w-max"
                        animate={{ x: "-50%" }}
                        transition={{
                           duration: 20,
                           ease: "linear",
                           repeat: Infinity
                        }}
                     >
                        {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
                           <div key={i} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-default">
                              {tech.icon}
                              <span className="text-sm font-bold">{tech.label}</span>
                           </div>
                        ))}
                     </motion.div>
                  </div>
               </motion.div>

            </div>

            {/* Render History Modal */}
            <AnimatePresence>
               {isHistoryOpen && (
                  <HistoryModal isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} />
               )}
            </AnimatePresence>

         </div>
      </section>
   );
};

export default BentoGrid;
