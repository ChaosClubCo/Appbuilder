import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-2">We use cookies</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                To improve your experience, we use cookies to remember log-in details and provide secure log-in, 
                collect statistics to optimize site functionality, and deliver content tailored to your interests.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button 
                variant="outline" 
                onClick={handleDecline}
                className="border-white/10 text-white hover:bg-white/10"
              >
                Decline
              </Button>
              <Button 
                onClick={handleAccept}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Accept All
              </Button>
            </div>
            <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white md:hidden"
            >
                <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
