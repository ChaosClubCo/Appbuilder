import React from 'react';
import { motion } from 'motion/react';

const companies = [
  "Acme Corp",
  "Global Tech",
  "Nebula Systems",
  "Cyberdyne",
  "Massive Dynamic",
  "Stark Ind",
  "Wayne Ent",
  "Umbrella Corp"
];

export function TrustedBy() {
  return (
    <section className="py-12 bg-slate-950 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
          Trusted by industry leaders
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pr-16">
          {companies.map((company, index) => (
            <span 
              key={index} 
              className="text-xl md:text-2xl font-bold text-gray-700 hover:text-gray-400 transition-colors cursor-default select-none"
            >
              {company}
            </span>
          ))}
          {companies.map((company, index) => (
            <span 
              key={`dup-${index}`} 
              className="text-xl md:text-2xl font-bold text-gray-700 hover:text-gray-400 transition-colors cursor-default select-none"
            >
              {company}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 pr-16">
          {companies.map((company, index) => (
            <span 
              key={`mq2-${index}`} 
              className="text-xl md:text-2xl font-bold text-gray-700 hover:text-gray-400 transition-colors cursor-default select-none"
            >
              {company}
            </span>
          ))}
          {companies.map((company, index) => (
            <span 
              key={`mq2-dup-${index}`} 
              className="text-xl md:text-2xl font-bold text-gray-700 hover:text-gray-400 transition-colors cursor-default select-none"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
      
      {/* Add custom keyframe animation style if not present in tailwind config */}
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
