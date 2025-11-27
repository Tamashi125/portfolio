import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronUp, ChevronDown } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const works = [
    // {
    //   title: "Crypto Exchange",
    //   category: "FinTech",
    //   desc: "Real-time crypto trading platform",
    //   tags: ["React", "WebSocket"],
    //   color: "bg-blue-500"
    // },
    // {
    //   title: "SaaS Dashboard",
    //   category: "Analytics",
    //   desc: "Back-office data management system",
    //   tags: ["Next.js", "Tremor"],
    //   color: "bg-violet-500"
    // },
    // {
    //   title: "AI Art Studio",
    //   category: "Creative",
    //   desc: "AI-powered image generation tool",
    //   tags: ["Vue", "Python"],
    //   color: "bg-orange-500"
    // },
    // {
    //   title: "E-Commerce App",
    //   category: "Mobile",
    //   desc: "Online shopping application",
    //   tags: ["React Native", "Firebase"],
    //   color: "bg-emerald-500"
    // },
    // {
    //   title: "Task Manager",
    //   category: "Productivity",
    //   desc: "Team and task management web app",
    //   tags: ["Svelte", "Go"],
    //   color: "bg-rose-500"
    // },
    // {
    //   title: "Portfolio V1",
    //   category: "Design",
    //   desc: "First version of personal portfolio",
    //   tags: ["HTML", "SCSS"],
    //   color: "bg-indigo-500"
    // }
  ];

  const visibleWorks = showAll ? works : works.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 bg-zinc-950">
       <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
             <div>
               <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
               <p className="text-zinc-400 text-sm">A showcase of my recent work and coding experiments.</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
             <AnimatePresence>
               {visibleWorks.map((project, index) => (
                  <motion.div 
                     key={project.title}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ duration: 0.3 }}
                     whileHover={{ y: -5 }}
                     className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all cursor-pointer shadow-lg shadow-black/20"
                  >
                     <div className="h-40 bg-zinc-950 relative overflow-hidden">
                        <div className={`absolute inset-0 ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className={`w-20 h-20 rounded-full ${project.color} opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                        </div>
                        <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm p-2 rounded-lg text-white/50 group-hover:text-white transition-colors">
                          <ArrowUpRight size={16} />
                        </div>
                     </div>
                     
                     <div className="p-5">
                        <div className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-wider font-bold">{project.category}</div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">{project.title}</h3>
                        <p className="text-zinc-400 text-sm mb-4 line-clamp-2 leading-relaxed">{project.desc}</p>
                        
                        <div className="flex gap-2">
                           {project.tags.map(tag => (
                              <span key={tag} className="text-[10px] px-2.5 py-1 bg-zinc-800 rounded-md text-zinc-400 border border-zinc-700/50">
                                  {tag}
                              </span>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               ))}
             </AnimatePresence>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors flex items-center gap-2 group text-sm font-medium"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" /></>
              ) : (
                <>Show More <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" /></>
              )}
            </button>
          </div>
       </div>
    </section>
  );
};

export default Projects;
