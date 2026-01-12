import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { value: "10k+", label: "Active Users" },
  { value: "500k", label: "Components Generated" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Expert Support" }
];

export function Stats() {
  return (
    <section className="py-12 bg-slate-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-blue-400 font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
