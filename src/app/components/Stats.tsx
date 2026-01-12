import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Active Developers', value: '10,000+', suffix: '' },
  { label: 'Lines of Code Generated', value: '50', suffix: 'M+' },
  { label: 'Uptime SLA', value: '99.99', suffix: '%' },
  { label: 'Global Edge Locations', value: '35', suffix: '+' },
];

export function Stats() {
  return (
    <section className="py-20 bg-slate-950 border-y border-white/5 relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                {stat.value}
                            </span>
                            <span className="text-blue-500 ml-1">{stat.suffix}</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
