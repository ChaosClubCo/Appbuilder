import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { ArrowUpRight, Shield, DollarSign, ChevronRight } from 'lucide-react';
import heroBackground from 'figma:asset/ac1592707009a6008e5d35d6cef2bbf48e598dca.png';
import robotMascot from 'figma:asset/aa3a04cafd8652eb28d940d90f801eba2f075c49.png';
import { ImageWithFallback } from '../figma/ImageWithFallback';

import { VideoModal } from './VideoModal';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroBackground}
          alt="Abstract Glassmorphism Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-tight drop-shadow-lg"
        >
          Transform Ideas
          <br />
          Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-none">Reality</span>{' '}
          With <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-none">AI</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
        >
          The most advanced AI development platform that turns your concepts into production-ready applications, content, and revenue streams in minutes, not months.
        </motion.p>
        
        {/* Feature Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/50 bg-orange-500/10 text-orange-300 text-sm font-medium">
            <div className="flex items-center justify-center w-4 h-4 shrink-0">
              <ArrowUpRight className="w-full h-full" />
            </div>
            <span>10x Faster Development</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-300 text-sm font-medium">
            <div className="flex items-center justify-center w-4 h-4 shrink-0">
              <Shield className="w-full h-full" />
            </div>
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/50 bg-pink-500/10 text-pink-300 text-sm font-medium">
            <div className="flex items-center justify-center w-4 h-4 shrink-0">
              <DollarSign className="w-full h-full" />
            </div>
            <span>Built-in Monetization</span>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white border-0 h-14 px-8 text-lg rounded-xl font-semibold transition-transform hover:scale-105"
          >
            Get 50% Off - Start Building
          </Button>
          <VideoModal>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto bg-slate-900/50 border-blue-500/50 text-white hover:bg-slate-800 h-14 px-8 text-lg rounded-xl group"
            >
              Try Interactive Demo 
              <ChevronRight className="ml-2 h-5 w-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </Button>
          </VideoModal>
        </motion.div>

        {/* Robot Mascot */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <ImageWithFallback 
            src={robotMascot} 
            alt="FlashFusion Robot Mascot" 
            className="w-full max-w-sm md:max-w-md h-auto drop-shadow-[0_0_50px_rgba(34,211,238,0.3)] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}
