import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('flashfusion-cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () =>CX clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('flashfusion-cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-300">
              <h3 className="font-semibold text-white mb-1">We value your privacy</h3>
              <p>
                We use cookies to enhance your experience, analyze site traffic, and deliver personalized content. 
                By clicking "Accept", you agree to our use of cookies.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button 
                variant="outline" 
                className="border-white/10 text-gray-300 hover:text-white"
                onClick={() => setIsVisible(false)}
              >
                Decline
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={acceptCookies}
              >
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
