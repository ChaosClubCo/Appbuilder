import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Cpu, Shield, RefreshCw, PenTool, Code } from 'lucide-react';
import { FeatureDetails } from './FeatureDetails';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-orange-400" />,
    title: "Fast Performance",
    description: "Lorem ipsum dolor sit amet, sater dessce mem."
  },
  {
    icon: <Cpu className="h-6 w-6 text-blue-400" />,
    title: "Advanced A.I.",
    description: "Lorem ipsum dolor sit amet, sater dessce mem."
  },
  {
    icon: <PenTool className="h-6 w-6 text-pink-400" />,
    title: "Bolt-Enhancer",
    description: "Lorem ipsum dolor sit amet, sater dessce mem."
  },
  {
    icon: <Shield className="h-6 w-6 text-green-400" />,
    title: "Data Security",
    description: "Lorem ipsum dolor sit amet, sater dessce mem."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-purple-400" />,
    title: "Dynamic Updates",
    description: "Lorem ipsum dolor sit amet, sater dessce mem."
  },
  {
    icon: <Code className="h-6 w-6 text-cyan-400" />,
    title: "Powerful API",
    description: "Lorem ipsum dolor sit amet, sater dessce mem."
  }
];

export function Features() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover the Power of <span className="text-blue-500">FlashFusion</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Innovative tech solutions designed to scale with your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setIsDetailsOpen(true)}
              className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-white/10 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <FeatureDetails isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} />
    </section>
  );
}
