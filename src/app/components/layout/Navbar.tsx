import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoFull from 'figma:asset/cd521db578a3d14a15c7c3cc00d93db239fd603d.png';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Search } from './Search';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#" 
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
              aria-label="FlashFusion homepage"
            >
              <ImageWithFallback 
                src={logoFull} 
                alt="FlashFusion Logo" 
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                How it Works
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                About
              </a>
              <Search />
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white border-0"
                aria-label="Get started with FlashFusion"
              >
                Start Free Trial
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-b border-white/10"
          id="mobile-menu"
          role="menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <div className="pt-4 pb-4">
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white border-0"
                aria-label="Get started with FlashFusion"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
