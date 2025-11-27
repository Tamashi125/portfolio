import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, GraduationCap, ChevronUp, ChevronDown, Briefcase as BriefcaseIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const HistoryModal = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState('education'); 
  const { language } = useLanguage();
  const t = translations.historyModal;

  if (!isOpen) return null;

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/95 backdrop-blur-md sticky top-0 z-10">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="text-violet-500" size={24} />
            {t.header[language]}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="space-y-6">
            
            {/* Intro */}
            <div className="bg-zinc-800/30 p-4 rounded-2xl border border-zinc-800">
               <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-violet-500/20 text-violet-400 rounded-full flex items-center justify-center font-bold">WL</div>
                  <div>
                     <div className="text-white font-bold">Wuttipong Leeprakhon</div>
                     <div className="text-zinc-500 text-xs">{t.intro.role[language]}</div>
                  </div>
               </div>
               <p className="text-zinc-400 text-sm leading-relaxed">
                  {t.intro.description[language]}
               </p>
            </div>

            {/* Accordion 1: Education */}
            <div className="border border-zinc-800 rounded-2xl overflow-hidden">
              <button 
                onClick={() => toggleSection('education')}
                className="w-full flex items-center justify-between p-4 bg-zinc-800/50 hover:bg-zinc-800 transition-colors text-left"
              >
                <span className="font-bold text-white flex items-center gap-2">
                   <GraduationCap className="text-blue-400" size={20} /> {t.sections.education[language]}
                </span>
                {expandedSection === 'education' ? <ChevronUp size={20} className="text-zinc-500"/> : <ChevronDown size={20} className="text-zinc-500"/>}
              </button>
              
              <AnimatePresence>
                {expandedSection === 'education' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 bg-zinc-900/50 border-t border-zinc-800/50">
                        <div className="space-y-4 mt-4 border-l-2 border-zinc-800 ml-2 pl-4 relative">
                            {t.educationData.map((item) => (
                              <div className="relative" key={item.id}>
                                <div className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ${item.color} ring-4 ring-zinc-900`} />
                                <h5 className="text-white font-bold text-sm">{item.title[language]}</h5>
                                <p className="text-zinc-400 text-xs">{item.institution[language]}</p>
                                <p className="text-zinc-500 text-xs mt-1">{item.description[language]}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion 2: Work Experience */}
            <div className="border border-zinc-800 rounded-2xl overflow-hidden">
              <button 
                onClick={() => toggleSection('work')}
                className="w-full flex items-center justify-between p-4 bg-zinc-800/50 hover:bg-zinc-800 transition-colors text-left"
              >
                <span className="font-bold text-white flex items-center gap-2">
                   <BriefcaseIcon className="text-emerald-400" size={20} /> {t.sections.work[language]}
                </span>
                {expandedSection === 'work' ? <ChevronUp size={20} className="text-zinc-500"/> : <ChevronDown size={20} className="text-zinc-500"/>}
              </button>
              
              <AnimatePresence>
                {expandedSection === 'work' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 bg-zinc-900/50 border-t border-zinc-800/50">
                      <div className="space-y-6 mt-4 border-l-2 border-zinc-800 ml-2 pl-4 relative">
                        {t.workData.map((item) => (
                          <div className="relative" key={item.id}>
                            <div className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ${item.color} ring-4 ring-zinc-900`} />
                            <h5 className="text-white font-bold text-sm">{item.title[language]}</h5>
                            <p className="text-zinc-500 text-xs mb-2">{item.period[language]}</p>
                            <ul className={`list-disc list-outside text-zinc-400 text-xs space-y-1 pl-3 ${item.id === 1 ? 'marker:text-emerald-500' : ''}`}>
                              {item.details.map((detail, index) => (
                                <li key={index}>{detail[language]}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

        <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
          <button onClick={onClose} className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-medium transition-colors">
            {t.close[language]}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HistoryModal;
