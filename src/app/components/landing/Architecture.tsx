import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import ragDiagram from 'figma:asset/6693192cd2014038c7e3b7c794c6659bfe4c230e.png';

export function Architecture() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            FlashFusion Figma RAG Architecture
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A powerful ingestion pipeline connecting your design data to intelligent APIs.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-slate-950 border border-white/10 p-4 md:p-8 shadow-2xl"
        >
          <ImageWithFallback 
            src={ragDiagram} 
            alt="FlashFusion Architecture Diagram" 
            className="w-full h-auto rounded-xl"
          />
          
          <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
