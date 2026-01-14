import React, { useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium relative z-[60]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <p className="flex-1 text-center md:text-left truncate">
            <span className="font-bold mr-2">New:</span> 
            FlashFusion 2.0 is now live! 
            <a href="#" className="underline ml-2 hover:text-blue-100 transition-colors">Read the changelog &rarr;</a>
          </p>
          <button 
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Dismiss announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
