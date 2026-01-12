import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Server, Zap, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    value: 50,
    suffix: 'k+',
    label: 'Active Users',
  },
  {
    icon: <Server className="w-6 h-6 text-orange-400" />,
    value: 99.9,
    suffix: '%',
    label: 'Uptime SLA',
    decimals: 1,
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    value: 120,
    suffix: 'M+',
    label: 'Requests/Day',
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    value: 34,
    suffix: '',
    label: 'Countries',
  },
];

const Counter = ({ value, duration = 2, decimals = 0 }: { value: number, duration?: number, decimals?: number }) => {
  const [count,ZX] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        ZX(value * easeOut);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
    </span>
  );
};

export function Statistics() {
  return (
    <section className="py-20 bg-slate-900 border-y border-white/5 relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center mb-4 shadow-lg shadow-black/20">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                <Counter value={stat.value} decimals={stat.decimals} />
                <span className="text-gray-400 text-3xl md:text-4xl ml-1">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
