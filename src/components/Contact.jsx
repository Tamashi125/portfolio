import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const Contact = () => {
  const [showCopyPopup, setShowCopyPopup] = useState(false);
  const { language } = useLanguage();
  const t = translations.contact;

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('Wuttipong.c3@gmail.com');
    setShowCopyPopup(true);
    setTimeout(() => setShowCopyPopup(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950 border-t border-zinc-900 relative">
       <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Let's create something <br/> <span className="text-zinc-600">extraordinary.</span></h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
             <button 
                onClick={handleCopyEmail}
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2 cursor-pointer"
             >
                <Mail size={20} /> Wuttipong.c3@gmail.com
             </button>
             <a href="https://discord.gg/kXpdwufu3F" target="_blank" className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 font-bold rounded-full hover:bg-[#5865F2] hover:border-[#5865F2] transition-all flex items-center gap-2 group">
                {/* Discord Icon SVG */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="group-hover:text-white transition-colors"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
                  </svg>
                Discord
             </a>
          </div>
          
          <div className="text-zinc-600 text-sm">
              © 2025 Muru Portfolio. Built with React, Tailwind & Framer Motion.
          </div>
       </div>

       {/* Copy Notification Popup */}
       <AnimatePresence>
         {showCopyPopup && (
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: 50 }}
             className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 border border-zinc-700 z-50"
           >
             <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-black">
               <Check size={14} strokeWidth={3} />
             </div>
             <span className="font-medium">{t.copied[language]}</span>
           </motion.div>
         )}
       </AnimatePresence>
    </section>
  );
};

export default Contact;
